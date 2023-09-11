import { FC } from "react";
import { Switch as MantineSwitch, SwitchProps } from "@mantine/core";

import useStyles from "./styles";

const Switch:FC<SwitchProps> = (props) => {
  const { classes: { label, track, input, thumb, body }} = useStyles();

  return (
    <MantineSwitch
      {...props }
      classNames={{ label, track, input, thumb, body }}
    />
  )
};

export default Switch;
