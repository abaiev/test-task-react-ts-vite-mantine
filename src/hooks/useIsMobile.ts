import { getBreakpointValue, px, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useIsMobile = (): boolean => {
  const theme = useMantineTheme();

  return useMediaQuery(`(max-width: ${px(getBreakpointValue(theme.breakpoints.sm) - 1)}px)`);
}

export default useIsMobile;
