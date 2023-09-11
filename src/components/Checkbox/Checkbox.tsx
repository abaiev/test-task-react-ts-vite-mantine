import { FC } from "react";
import { Checkbox as MantineCheckbox, CheckboxProps } from "@mantine/core";

import useStyles from "./styles";

const Checkbox:FC<CheckboxProps> = (props) => {
  const { classes: { input }} = useStyles();

  return (
    <MantineCheckbox
      {...props}
      classNames={{ input }}
    />
  )
};

export default Checkbox;
