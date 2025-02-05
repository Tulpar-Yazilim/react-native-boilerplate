import {StyleSheet} from 'react-native';

import {tabbarHeight} from '../../helpers/styles-helper';

import {projectColors} from './colors';

export const generalStyles = Object.freeze(
  StyleSheet.create({
    flex: {
      flex: 1,
    },
    flexGrow: {
      flexGrow: 1,
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    alignCenter: {
      alignItems: 'center',
    },
    justifyBetween: {
      justifyContent: 'space-between',
    },
    row: {
      flexDirection: 'row',
    },
    displayNone: {
      display: 'none',
    },
    overflow: {overflow: 'hidden'},
    noMargin: {margin: 0},
    noPadding: {padding: 0},
    noSpacing: {padding: 0, margin: 0},
    fullWidthHeight: {
      width: '100%',
      height: '100%',
    },
    fullMinHeight: {
      minHeight: '100%',
    },
    relative: {position: 'relative'},
    absolute: {position: 'absolute'},
    absoluteFill: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 9991,
    },
    tab: {
      alignItems: 'center',
      backgroundColor: projectColors.white,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      width: '100%',
      height: tabbarHeight,
    },
  }),
);

export const tabIconColor = projectColors.black;
export const tabIconSelectedColor = projectColors.red;
