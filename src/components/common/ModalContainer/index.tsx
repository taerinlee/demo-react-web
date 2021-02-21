import React from 'react';
import {
  IconButton
} from '@material-ui/core';
import { Modal } from 'antd';
import 'antd/dist/antd.css';

export interface IModalProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  width: number;
  children: React.ReactElement;
}

function ModalContainer(props: IModalProps): React.ReactElement {
  const {
    isModalVisible,
    setIsModalVisible,
    width,
    children
  } = props;
  const closeImg = `${process.env.PUBLIC_URL}/icons/close.svg`;
  const handleCancel = ():void => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      visible={isModalVisible}
      footer={null}
      width={width}
      closeIcon={<IconButton onClick={handleCancel}><img src={closeImg} alt="Close" /></IconButton>}
    >
      {children}
    </Modal>
  );
}

export default ModalContainer;
