import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Modal } from 'semantic-ui-react';
import { useStore } from '../../stores/store';

export interface IModalContainerProps {
}

export default observer(function ModalContainer (props: IModalContainerProps) {
    const { modalStore } = useStore()
  return (
    <Modal open={modalStore.modal.open} onClose={modalStore.closeModal} size='mini'>
      <Modal.Content>
        {modalStore.modal.body}
      </Modal.Content>
    </Modal>
  );
})