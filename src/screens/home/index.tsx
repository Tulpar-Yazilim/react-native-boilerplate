import React, {useLayoutEffect} from 'react';
import {Button, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import {AppText} from '@/components/common';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {HomeStackNavigationPropsType} from '@/navigations/stacks';
import {settingsRedux} from '@/store';



const HeaderRight = ({language}: {language: string}) => (
  <View>
    <AppText langQuery={{language}}>language</AppText>
  </View>
);

export function HomeScreen() {
  const {t} = useTranslation();
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
    <View>
      <AppText>hello</AppText>

      <View>
        <Button title={t('tr')} onPress={() => onChangeLang('tr')} />
        <Button title={t('en')} onPress={() => onChangeLang('en')} />
      </View>
    </View>
  );
}
