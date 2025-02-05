import {useCallback} from 'react';
import {Platform} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';
import {AvoidSoftInput} from 'react-native-avoid-softinput';

export const useKeyboardAvoiding = (enabled = true) => {
  const onFocusEffect = useCallback(() => {
    AvoidSoftInput.setShouldMimicIOSBehavior(true);
    AvoidSoftInput.setEnabled(true);
    AvoidSoftInput.setAvoidOffset(0);
    AvoidSoftInput.setShowAnimationDelay(50);

    return () => {
      AvoidSoftInput.setAvoidOffset(0);
      AvoidSoftInput.setEnabled(false);
      AvoidSoftInput.setShouldMimicIOSBehavior(false);
    };
  }, []);

  useFocusEffect(() => {
    Platform.OS === 'ios' && enabled && onFocusEffect();
  });
};
