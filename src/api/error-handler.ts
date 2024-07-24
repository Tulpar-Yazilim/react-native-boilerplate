import {isRejectedWithValue, Middleware} from '@reduxjs/toolkit';

import {authRedux} from '@/store';

type ActionType = {
  payload?: ActionPayloadType;
};

type ActionPayloadType = {
  status?: number;
};

export const rtkQueryErrorHandler: Middleware =
  ({dispatch}) =>
  next =>
  action => {
    const _action = action as ActionType;

    if (isRejectedWithValue(_action)) {
      /* showToast({
        type: ToastType.error,
        title: i18next.t('error'),
        message: action.payload?.data?.message,
      }); */
      if (_action.payload?.status === 401) {
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
