import {Platform, StyleSheet} from 'react-native';

const spacingItems = Object.freeze(
  Platform.select({
    android: [8, 16, 24, 32, 40, 48, 56, 64],
    ios: [8, 16, 24, 32, 40, 48, 56, 64],
  }),
) as Readonly<number[]>;

export const spacing = Object.freeze(
  StyleSheet.create({
    p1: {
      padding: spacingItems[0],
    },
    p2: {
      padding: spacingItems[1],
    },
    p3: {
      padding: spacingItems[2],
    },
    p4: {
      padding: spacingItems[3],
    },
    p5: {
      padding: spacingItems[4],
    },
    p6: {
      padding: spacingItems[5],
    },
    p7: {
      padding: spacingItems[6],
    },
    p8: {
      padding: spacingItems[7],
    },
    mr1: {
      marginRight: spacingItems[0],
    },
    mr2: {
      marginRight: spacingItems[1],
    },
    mr3: {
      marginRight: spacingItems[2],
    },
    mr4: {
      marginRight: spacingItems[3],
    },
    mr5: {
      marginRight: spacingItems[4],
    },
    mr6: {
      marginRight: spacingItems[5],
    },
    mr7: {
      marginRight: spacingItems[6],
    },
    mr8: {
      marginRight: spacingItems[7],
    },
    ml1: {
      marginLeft: spacingItems[0],
    },
    ml2: {
      marginLeft: spacingItems[1],
    },
    ml3: {
      marginLeft: spacingItems[2],
    },
    ml4: {
      marginLeft: spacingItems[3],
    },
    ml5: {
      marginLeft: spacingItems[4],
    },
    ml6: {
      marginLeft: spacingItems[5],
    },
    ml7: {
      marginLeft: spacingItems[6],
    },
    ml8: {
      marginLeft: spacingItems[7],
    },
    mb1: {
      marginBottom: spacingItems[0],
    },
    mb2: {
      marginBottom: spacingItems[1],
    },
    mb3: {
      marginBottom: spacingItems[2],
    },
    mb4: {
      marginBottom: spacingItems[3],
    },
    mb5: {
      marginBottom: spacingItems[4],
    },
    mb6: {
      marginBottom: spacingItems[5],
    },
    mb7: {
      marginBottom: spacingItems[6],
    },
    mb8: {
      marginBottom: spacingItems[7],
    },
    mt1: {
      marginTop: spacingItems[0],
    },
    mt2: {
      marginTop: spacingItems[1],
    },
    mt3: {
      marginTop: spacingItems[2],
    },
    mt4: {
      marginTop: spacingItems[3],
    },
    mt5: {
      marginTop: spacingItems[4],
    },
    mt6: {
      marginTop: spacingItems[5],
    },
    mt7: {
      marginTop: spacingItems[6],
    },
    mt8: {
      marginTop: spacingItems[7],
    },
    pr1: {
      paddingRight: spacingItems[0],
    },
    pr2: {
      paddingRight: spacingItems[1],
    },
    pr3: {
      paddingRight: spacingItems[2],
    },
    pr4: {
      paddingRight: spacingItems[3],
    },
    pr5: {
      paddingRight: spacingItems[4],
    },
    pr6: {
      paddingRight: spacingItems[5],
    },
    pr7: {
      paddingRight: spacingItems[6],
    },
    pr8: {
      paddingRight: spacingItems[7],
    },
    pl1: {
      paddingLeft: spacingItems[0],
    },
    pl2: {
      paddingLeft: spacingItems[1],
    },
    pl3: {
      paddingLeft: spacingItems[2],
    },
    pl4: {
      paddingLeft: spacingItems[3],
    },
    pl5: {
      paddingLeft: spacingItems[4],
    },
    pl6: {
      paddingLeft: spacingItems[5],
    },
    pl7: {
      paddingLeft: spacingItems[6],
    },
    pl8: {
      paddingLeft: spacingItems[7],
    },
    pb1: {
      paddingBottom: spacingItems[0],
    },
    pb2: {
      paddingBottom: spacingItems[1],
    },
    pb3: {
      paddingBottom: spacingItems[2],
    },
    pb4: {
      paddingBottom: spacingItems[3],
    },
    pb5: {
      paddingBottom: spacingItems[4],
    },
    pb6: {
      paddingBottom: spacingItems[5],
    },
    pb7: {
      paddingBottom: spacingItems[6],
    },
    pb8: {
      paddingBottom: spacingItems[7],
    },
    pt1: {
      paddingTop: spacingItems[0],
    },
    pt2: {
      paddingTop: spacingItems[1],
    },
    pt3: {
      paddingTop: spacingItems[2],
    },
    pt4: {
      paddingTop: spacingItems[3],
    },
    pt5: {
      paddingTop: spacingItems[4],
    },
    pt6: {
      paddingTop: spacingItems[5],
    },
    pt7: {
      paddingTop: spacingItems[6],
    },
    pt8: {
      paddingTop: spacingItems[7],
    },
    px1: {
      paddingHorizontal: spacingItems[0],
    },
    px2: {
      paddingHorizontal: spacingItems[1],
    },
    px3: {
      paddingHorizontal: spacingItems[2],
    },
    px4: {
      paddingHorizontal: spacingItems[3],
    },
    px5: {
      paddingHorizontal: spacingItems[4],
    },
    px6: {
      paddingHorizontal: spacingItems[5],
    },
    px7: {
      paddingHorizontal: spacingItems[6],
    },
    px8: {
      paddingHorizontal: spacingItems[7],
    },
    py1: {
      paddingVertical: spacingItems[0],
    },
    py2: {
      paddingVertical: spacingItems[1],
    },
    py3: {
      paddingVertical: spacingItems[2],
    },
    py4: {
      paddingVertical: spacingItems[3],
    },
    py5: {
      paddingVertical: spacingItems[4],
    },
    py6: {
      paddingVertical: spacingItems[5],
    },
    py7: {
      paddingVertical: spacingItems[6],
    },
    py8: {
      paddingVertical: spacingItems[7],
    },
    mx1: {
      marginHorizontal: spacingItems[0],
    },
    mx2: {
      marginHorizontal: spacingItems[1],
    },
    mx3: {
      marginHorizontal: spacingItems[2],
    },
    mx4: {
      marginHorizontal: spacingItems[3],
    },
    mx5: {
      marginHorizontal: spacingItems[4],
    },
    mx6: {
      marginHorizontal: spacingItems[5],
    },
    mx7: {
      marginHorizontal: spacingItems[6],
    },
    mx8: {
      marginHorizontal: spacingItems[7],
    },
    my1: {
      marginVertical: spacingItems[0],
    },
    my2: {
      marginVertical: spacingItems[1],
    },
    my3: {
      marginVertical: spacingItems[2],
    },
    my4: {
      marginVertical: spacingItems[3],
    },
    my5: {
      marginVertical: spacingItems[4],
    },
    my6: {
      marginVertical: spacingItems[5],
    },
    my7: {
      marginVertical: spacingItems[6],
    },
    my8: {
      marginVertical: spacingItems[7],
    },
    gap1: {
      gap: spacingItems[0],
    },
    gap2: {
      gap: spacingItems[1],
    },
    gap3: {
      gap: spacingItems[2],
    },
    gap4: {
      gap: spacingItems[3],
    },
    gap5: {
      gap: spacingItems[4],
    },
    gap6: {
      gap: spacingItems[5],
    },
    gap7: {
      gap: spacingItems[6],
    },
    gap8: {
      gap: spacingItems[7],
    },
  }),
);
