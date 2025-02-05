import {isFulfilled, isPending, isRejected, isRejectedWithValue, Middleware} from '@reduxjs/toolkit';

import * as settingsRedux from '../store/settings/slice';

export const rtkQueryLoaderHandler: Middleware =
  ({dispatch, getState}) =>
  next =>
  action => {
    if (getState().settings.appLoader && isPending(action)) {
      dispatch(settingsRedux.changeLoadingState(true));
    }

    if (getState().settings.appLoader && (isFulfilled(action) || isRejected(action) || isRejectedWithValue(action))) {
      dispatch(settingsRedux.changeLoadingState(false));
    }

    return next(action);
  };
