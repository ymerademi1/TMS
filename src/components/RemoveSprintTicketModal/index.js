
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const RemoveSprintTicketModal = ({
    showRemoveSprintTicketModal,
    toggleRemoveSprintTicketModal,
    cancelRemoveSprintTicketModal,
    removeSprintTicket,
    removingTicket,
    sprintTitle
}) => {
    return (
        <Modal isOpen={showRemoveSprintTicketModal} toggle={toggleRemoveSprintTicketModal}>
            <ModalHeader>Remove ticket from {sprintTitle}</ModalHeader>
            <ModalBody>
                <div>
                    <span>Are you sure you want to delete ticket named <b>{removingTicket.title}</b> from <b>{sprintTitle}</b>?</span>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={cancelRemoveSprintTicketModal}>Cancel</Button>{' '}
                <Button style={{background: '#12caf0', borderColor: '#12caf0'}} onClick={() => removeSprintTicket(removingTicket.id)}>Yes, remove it</Button>
            </ModalFooter>
        </Modal>
    );
}

export default RemoveSprintTicketModal;