import React, {FC, memo, useCallback, useEffect, useState} from 'react';

import {get} from 'lodash';
import {useTranslation} from 'react-i18next';

import AppInput from '../AppInput';
import AppText from '../AppText';
import AppIcon from '../AppIcon';
import AppView from '../AppView';
import AppButton from '../AppButton';

import {AppSelectboxProps, SelectOptionItemType} from './type';
import {useThemeColors} from '@/hooks';
import AppBottomSheet from '../AppBottomSheet';
import {projectColors, spacing} from '@/assets';
import {styles} from './styles';
import {AppList} from '../AppList';

const AppSelectbox: FC<AppSelectboxProps> = props => {
  const {t} = useTranslation();

  const initialValue = {value: '', label: ''} as SelectOptionItemType;

  const {options = [], editable = true, valueProp = 'value', displayProp = 'label', label, value, name, headerTitle, containerStyle, clearable = true, onChange} = props;
  const [open, setOpen] = useState<boolean>(false);
  const [current, setCurrent] = useState(initialValue);
  const colors = useThemeColors();

  useEffect(() => {
    if (options?.length > 0 && value) {
      const _value = options?.find?.(item => value === get(item, valueProp));
      const _current = {
        [displayProp as never]: _value?.[displayProp as never],
        [valueProp as never]: _value?.[valueProp as never],
      } as never;
      setCurrent(_current);
    }
  }, [displayProp, value, name, options, valueProp]);

  const handleOnPress = useCallback((item: SelectOptionItemType) => {
    setOpen?.(false);
    setCurrent(item);
    setTimeout(() => {
      onChange?.(item.value as string);
    }, 150);
  }, []);

  const renderItem = useCallback(
    ({item}: {item: SelectOptionItemType}) => (
      <AppView
        onPress={() => {
          handleOnPress(item);
        }}
        row
        align="center"
        style={styles.item}>
        {item?.isIcon && (
          <AppView style={spacing.pr2}>
            <AppIcon name={item.iconName} size={22} color={item.iconColor ? item.iconColor : colors.primary} />
            {item.icon}
          </AppView>
        )}
        <AppView flex row justify="space-between">
          <AppText style={styles.itemText}>{get(item, displayProp)}</AppText>
          {get(current, valueProp) === item.value ? <AppIcon type="feather" name="check" color={projectColors.primary} size={22} /> : <AppView />}
        </AppView>
      </AppView>
    ),
    [current, displayProp, valueProp, handleOnPress],
  );

  return (
    <>
      <AppInput
        error={props.error}
        errorMessage={props.errorMessage}
        required={props.required}
        requiredMessage={props.requiredMessage}
        onPress={() => {
          if (!editable) return;
          setOpen(true);
        }}
        editable={false}
        label={label}
        value={get(current, displayProp)}
        onClear={() => {
          setCurrent(initialValue);
          onChange?.('');
        }}
        clearable={clearable}
      />

      <AppBottomSheet isVisible={open} onClose={() => setOpen(false)}>
        <AppView flex style={containerStyle}>
          {headerTitle && headerTitle?.length > 0 && (
            <AppView row justify="center" align="center" style={[spacing.py2]}>
              <AppText style={styles.headerTitle}>{headerTitle}</AppText>
            </AppView>
          )}
          <AppView flex>
            <AppList<SelectOptionItemType> data={options} renderItem={renderItem} removeClippedSubviews={false} />
          </AppView>

          {current && !!current?.value && clearable && (
            <AppView style={[spacing.px2, spacing.py2]}>
              <AppButton
                type="regular"
                text={t('clear').toString()}
                onPress={() => {
                  setCurrent(initialValue);
                  onChange?.('');
                  setOpen(false);
                }}
              />
            </AppView>
          )}
        </AppView>
      </AppBottomSheet>
    </>
  );
};

export default memo(AppSelectbox);
