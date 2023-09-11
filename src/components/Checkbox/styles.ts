import { createStyles, MantineTheme } from "@mantine/core";

const useStyles = createStyles((theme: MantineTheme) => ({
  input: {
    backgroundColor: theme.colors.gray[0],
    border: `1px solid ${theme.colors.gray[5]}`,

    [':focus-visible']: {
      outline: `1px solid ${theme.colors.green[9]}`,
    },

    [':checked']: {
      backgroundColor: theme.fn.rgba(theme.colors.green[4], 0.8),
      border: `1px solid ${theme.colors.green[8]}`,
    }
  }
}));

export default useStyles;
