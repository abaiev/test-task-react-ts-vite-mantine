import { createStyles, MantineTheme } from "@mantine/core";

const useStyles = createStyles((theme: MantineTheme) => ({
  inner: {
    top: '50%',
    left: '50%',
    bottom: 'unset',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  },
  body: {
    padding: 0,
    overflow: "hidden"
  },
  headerWrapper: {
    padding: '12px 16px',
    backgroundColor: theme.colors.green[8],
  },
  bodyWrapper: {
    padding: '24px 32px',
    border: `0.5px solid ${theme.colors.green[8]}`,
    borderBottomLeftRadius: '0.25rem',
    borderBottomRightRadius: '0.25rem'
  },
  content: {
    width: '100%',
    maxWidth: '960px',
    flex: '0 0 auto',
  },
  overlay: {
    backgroundColor: '#fff'
  }
}));

export default useStyles;
