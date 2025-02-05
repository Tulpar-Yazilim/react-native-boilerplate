import React, {useLayoutEffect} from 'react';
import {View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {generalStyles, spacing} from '@/assets';
import {AppButton, AppDynamicForm, AppInput, AppInputDatePicker, AppText} from '@/components';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {HomeStackNavigationPropsType} from '@/navigations/stacks';
import {settingsRedux} from '@/store';

const HeaderRight = ({language}: {language: string}) => (
  <View>
    <AppText params={{language}}>language</AppText>
  </View>
);

export function HomeScreen() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<HomeStackNavigationPropsType>();
  const language = useAppSelector(state => state.settings.language);

  const onChangeLang = (_language: string) => {
    dispatch(settingsRedux.changeLanguage(_language));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight language={language} />,
    });
  }, [navigation, language]);

  return (
    <View style={[generalStyles.flex, spacing.p2]}>
      <AppText>hello</AppText>

      <View style={[spacing.pt2, spacing.pb2]}>
        <AppButton text="tr" onPress={() => onChangeLang('tr')} />
        <AppButton style={{marginTop: 8}} text="en" onPress={() => onChangeLang('en')} />

        <View style={[spacing.pt2]}>
          <AppInput label="Ad" />
        </View>
        <AppInputDatePicker style={[spacing.pt2]} />
      </View>

      <View style={[generalStyles.flex, spacing.pt2, spacing.pb2]}>
        <AppDynamicForm
          title="Deneme Formu"
          fields={[
            {
              name: 'name',
              title: 'name',
              dataType: 'string',
              type: 'text-box',
              value: '',
            },
            {
              name: 'surname',
              title: 'surname',
              dataType: 'string',
              type: 'text-box',
              value: '',
            },
            {
              name: 'date',
              title: 'date',
              dataType: 'date',
              type: 'date-picker',
              value: '',
              clearable: true,
            },
          ]}
        />
      </View>
    </View>
  );
}
