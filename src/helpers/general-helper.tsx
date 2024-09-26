import React, {memo} from 'react';
import {Linking, Platform, StyleProp, TextStyle} from 'react-native';

import ImageResizer from '@bam.tech/react-native-image-resizer';
import notifee, {Notification, TimestampTrigger, TriggerType} from '@notifee/react-native';
import {fetch} from '@react-native-community/netinfo';
import {Buffer} from 'buffer';
import md5Encrypt from 'md5';
import {launchImageLibrary} from 'react-native-image-picker';
import RenderHtml, {defaultSystemFonts, HTMLContentModel, HTMLElementModel, MixedStyleDeclaration} from 'react-native-render-html';

import {fontFamily} from '@/assets';

import {screenWidth} from './size-helper';
import {LocalNotificationType} from '../utils/infrastructure/enums';
import {Coordinates, ImagePickerResultType, ImageResizeResultType, ImageType, LocalNotificationParams} from '../utils/infrastructure/types';

const customHTMLElementModels = {
  font: HTMLElementModel.fromCustomModel({
    tagName: 'font',
    contentModel: HTMLContentModel.textual,
  }),
};

type RenderHtmlProps = {
  html: string;
  styles?: MixedStyleDeclaration | StyleProp<TextStyle>;
};

const RenderHtmlComponent = ({html, styles}: RenderHtmlProps) => {
  const systemFonts = [...defaultSystemFonts, fontFamily.regular];
  return (
    <RenderHtml
      systemFonts={systemFonts}
      baseStyle={{
        fontFamily: fontFamily.regular,
        ...(styles as object),
      }}
      contentWidth={screenWidth}
      source={{html}}
      customHTMLElementModels={customHTMLElementModels}
      enableExperimentalMarginCollapsing
    />
  );
};

const HtmlRender = memo(RenderHtmlComponent);

const base64 = (sourceText: string): string => {
  return Buffer.from(sourceText, 'utf-8').toString('base64');
};

const getIpAddress = async (): Promise<string> => {
  type NetworkInfo = {
    details: {
      ipAddress: string;
    };
  };
  try {
    const networkInfo = (await getNetInfo()) as NetworkInfo;
    return networkInfo?.details?.ipAddress;
  } catch (error) {
    console.error(error);
    return '';
  }
};

const getNetInfo = async () => await fetch();

const md5 = (sourceText: string): string => {
  return md5Encrypt(sourceText).toUpperCase();
};

const openMap = (coordinates: Coordinates) => {
  const destination = coordinates.latitude + ',' + coordinates.longitude;
  let destionationUrl = '';
  if (Platform.OS === 'ios') {
    destionationUrl = `maps://?q=${destination}`;
  } else {
    destionationUrl = `geo:0,0?q=${destination}${coordinates.title && '(' + coordinates.title + ')'}`;
  }
  Linking.openURL(destionationUrl);
};

const openUrl = async (url: string) => {
  try {
    url = !url?.startsWith('http') ? `https://${url}` : url;
    const canOpen = await Linking.canOpenURL(`${url}`);
    if (canOpen) {
      await Linking.openURL(`${url}`);
    }
  } catch (error) {
    console.error(error);
  }
};

const openPhone = async (phone: string) => {
  try {
    const canOpen = await Linking.canOpenURL(`tel:${phone}`);
    if (canOpen) {
      await Linking.openURL(`tel:${phone}`);
    }
  } catch (error) {
    console.error(error);
  }
};

const openEmail = async (email: string) => {
  try {
    const canOpen = await Linking.canOpenURL(`mailto:${email}`);
    if (canOpen) {
      await Linking.openURL(`mailto:${email}`);
    }
  } catch (error) {
    console.error(error);
  }
};

const resizeImageSingle = async (image: ImageType): Promise<ImageResizeResultType> => {
  try {
    const imageWidth: number = image.width / 5;
    const imagHeight: number = image.height / 5;

    const newImage = await ImageResizer.createResizedImage(
      image.path,
      imageWidth,
      imagHeight,
      'JPEG',
      60, //quality
      0, //rotation
      undefined, //outputPath if null will save on cache
      false,
    );

    const returnData: ImageResizeResultType = {
      name: image.filename,
      type: Platform.OS === 'ios' ? image.type : image.type + '/jpeg',
      uri: newImage.uri,
    };

    return Platform.OS === 'android' ? returnData : ({...image, ...newImage} as ImageResizeResultType);
  } catch (error) {
    return {
      name: '',
      type: '',
      uri: '',
    } as ImageResizeResultType;
  }
};

const resizeImageMultiple = async (response: Array<ImageType>): Promise<Array<ImageResizeResultType>> => {
  const resizedImages = [];
  for (const element of response) {
    const resizedImage = await resizeImageSingle(element);
    resizedImages.push(resizedImage);
  }
  return resizedImages;
};

const launchSingleImage = async (): Promise<ImagePickerResultType> => {
  return new Promise(resolve => {
    launchImageLibrary({mediaType: 'photo'}, async res => {
      if (!res.didCancel) {
        const selectedImage = res.assets?.[0];
        if (selectedImage) {
          const customImage: ImageType = {
            width: selectedImage.width ?? 0,
            height: selectedImage.height ?? 0,
            filename: selectedImage.fileName ?? '',
            path: selectedImage.uri ?? '',
            type: selectedImage.type ?? '',
          };
          const resizedImage = await resizeImageSingle(customImage);
          resolve({image: resizedImage, status: true});
        } else {
          resolve({image: null, status: false});
        }
      } else {
        resolve({image: null, status: false});
      }
    });
  });
};

const createLocalNotification = async (notification: LocalNotificationParams) => {
  // Request permissions (required for iOS)
  await notifee.requestPermission();

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'reactnativetypescript',
    name: 'React Native Typescript',
  });

  const notificationDto: Notification = {
    id: notification.id ?? new Date().getTime().toString(),
    title: notification.title,
    body: notification.message,
    android: {
      channelId,
      smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
    },
  };

  if (notification.type === LocalNotificationType.Schedule) {
    // Create a time-based trigger
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: notification.scheduleDate?.getTime() ?? 0,
    };

    // Display a notification
    const notificationId = await notifee.createTriggerNotification(notificationDto, trigger);

    return notificationId;
  } else {
    const notificationId = await notifee.displayNotification(notificationDto);
    return notificationId;
  }
};

const cancelLocalNotification = async (localNotificationId: string) => {
  await notifee.cancelNotification(localNotificationId);
};

const convertToCurrency = (amount: number | string, currency = '₺') => `${Number.parseFloat(amount.toString()).toFixed(2)} ${currency}`;

export {
  HtmlRender,
  base64,
  getIpAddress,
  getNetInfo,
  md5,
  openMap,
  openUrl,
  openPhone,
  openEmail,
  resizeImageSingle,
  resizeImageMultiple,
  launchSingleImage,
  createLocalNotification,
  cancelLocalNotification,
  convertToCurrency,
};
