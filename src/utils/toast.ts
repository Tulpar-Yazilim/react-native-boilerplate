import {toast} from '@backpackapp-io/react-native-toast';
import {ToastParams} from './infrastructure';
import {t} from 'i18next';

export const showToast = (params: ToastParams) => {
  switch (params.type) {
    case 'success':
      toast.success(t(params.message), {...params});
      break;
    case 'error':
      toast.error(t(params.message), {...params});
      break;
    default:
      toast(t(params.message), {...params});
      break;
  }
};
