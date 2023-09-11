import { Children, FC, ReactNode } from 'react';
import { Grid, Box, Title, Flex } from "@mantine/core";
import { splitArrayAtMidpoint } from "../../../utils/array";
import { useIsMobile } from "../../../hooks";

interface SettingsBoxProps {
  /** title - defines settings group tittle */
  title: string;
  /** children - settings items to render */
  children: ReactNode[];
}

const SettingsBox:FC<SettingsBoxProps> = ({ title, children }) => {
  const isMobile = useIsMobile();

  const [leftPart, rightPart] = splitArrayAtMidpoint(Children.toArray(children));

  return (
    <Box>
      <Title sx={{ marginBottom: 16 }} order={3}>{title}</Title>
      <Grid gutter={16}>
        <Grid.Col span={isMobile ? 12 : 6} >
          <Flex
            direction="column"
            gap="sm"
          >
            {leftPart}
          </Flex>
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 6}>
          <Flex
            direction="column"
            gap="sm"
          >
            {rightPart}
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  )
};

export default SettingsBox;
