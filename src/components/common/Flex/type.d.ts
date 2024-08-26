export type FlexProps = {
  flex: number;
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  gap: number;
  justify: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';
};
