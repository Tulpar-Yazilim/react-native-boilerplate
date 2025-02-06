import {AppViewProps} from './type';

export const flexBoxStyle = ({flex, flexWrap, direction, gap, justify, align}: AppViewProps) => {
  const flexStyle = flex !== undefined ? (flex as number) : undefined;

  if (flexStyle !== undefined && typeof flexStyle !== 'number') console.warn('Flex is not number');
  if (gap !== undefined && typeof gap !== 'number') console.warn('Gap is not number');

  return {
    ...(flexStyle && {
      flex: flexStyle,
    }),
    ...(flexWrap && {
      flexWrap,
    }),
    ...(direction && {
      flexDirection: direction,
    }),
    ...(gap && {
      gap,
    }),
    ...(justify && {
      justifyContent: justify,
    }),
    ...(align && {
      alignContent: align,
    }),
  };
};
