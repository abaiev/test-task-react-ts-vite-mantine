import { createStyles, getStylesRef, MantineTheme } from "@mantine/core";

const useStyles = createStyles((theme: MantineTheme) => ({
  track: {
    ref: getStylesRef('track'),

    width: '36px',
    backgroundColor: theme.colors.gray[0]
  },
  thumb: {
    ref: getStylesRef('thumb'),

    backgroundColor: theme.colors.gray[4]
  },
  input: {
    [`:checked+.${getStylesRef('track')}`]: {
      backgroundColor: theme.colors.gray[0],
      border: `1px solid ${theme.colors.gray[0]}`
    },

    [`:checked+.${getStylesRef('track')} .${getStylesRef('thumb')}`]: {
      backgroundColor: theme.colors.green[7],
    },
  },
  label: {
    color: theme.colors.gray[0],
    fontSize: '0.9rem',
  },
  body: {
    display: 'flex',
    alignItems: 'center'
  }
}));

export default useStyles;
