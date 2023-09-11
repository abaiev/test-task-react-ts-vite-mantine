import { FC } from 'react';
import { Box, ClassNames, MantineColor } from '@mantine/core';

interface SeparatorProps {
  /** color - defines separator color */
  color: MantineColor;
  /** orientation - defines separator orientation */
  orientation?: 'horizontal' | 'vertical';
  /** length - defines separator length. If orientation is vertical - sets the height, otherwise - sets the width */
  length?: string;
  /** classNames - specifies classNames for styling purpose */
  classNames?: ClassNames<'root'>;
}

const Separator:FC<SeparatorProps> = ({ color: colorProp, orientation = 'horizontal', length = '100%', classNames = {} }) => {
  /** colorProp provided in MantineColor format, as an example: grey.5 */
  const [color, colorKey] = colorProp.split('.');

  return (
    <Box
      className={classNames.root}
      sx={(theme) => ({
        width: orientation === 'vertical' ? '1px' : length,
        height: orientation === 'vertical' ? length : '1px',
        backgroundColor: theme.colors[color][Number(colorKey)],
      })}
    />
  )
};

export default Separator;
