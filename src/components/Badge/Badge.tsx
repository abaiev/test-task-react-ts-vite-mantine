import { FC } from 'react';
import { Badge as MantineBadge, BadgeProps as MantineBadgeProps, MantineColor } from "@mantine/core";

type BadgeStatus = 'primary' | 'success' | 'warning';

const getColor = (status: BadgeStatus): MantineColor => {
  switch (status) {
    case "success": {
      return 'green';
    }
    case "warning": {
      return 'red';
    }
    default:
      return 'blue'
  }
};

interface BadgeProps extends MantineBadgeProps {
  /** status - defines badge background color and font color */
  status?: BadgeStatus;
};

const Badge:FC<BadgeProps> = ({ status = 'primary', children, ...rest }) => (
  <MantineBadge {...rest} color={getColor(status)}>{children}</MantineBadge>
);

export default Badge;
