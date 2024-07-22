import {isRejectedWithValue, Middleware} from '@reduxjs/toolkit';

import {authRedux} from '@/store';

export const rtkQueryErrorHandler: Middleware =
  ({dispatch}) =>
  next =>
  action => {
    if (isRejectedWithValue(action)) {
      /* showToast({
        type: ToastType.error,
        title: i18next.t('error'),
        message: action.payload?.data?.message,
      }); */
      if (action.payload?.status === 401) {
        dispatch(authRedux.logout());
        /* if (
          rootNavigationRef?.getCurrentRoute()?.name !== Routes.LOGIN_SCREEN
        ) {
          rootNavigationRef.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: Routes.LOGIN_SCREEN,
                },
              ],
            }),
          );
        } */
      }
    }
    return next(action);
  };
