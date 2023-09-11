import { FC, ReactNode } from "react";
import { Modal as MantineModal, ModalProps as MantineModalProps } from "@mantine/core";

import useStyles from "./styles";

interface ModalProps extends MantineModalProps {
  /** header - content to render as the modal header */
  header?: ReactNode;
}

const Modal:FC<ModalProps> = ({ opened, onClose, children, header, ...rest}) => {
  const { classes: { inner, body, headerWrapper, bodyWrapper, content, overlay } } = useStyles();

  return (
    <MantineModal
      {...rest}
      opened={opened}
      onClose={onClose}
      classNames={{ inner, body, content, overlay }}
    >
      {header && (
        <div className={headerWrapper}>
          {header}
        </div>
      )}

      <div className={bodyWrapper}>
        {children}
      </div>
    </MantineModal>
  )
};

export default Modal;
