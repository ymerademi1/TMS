
import React from 'react';
import { AllTicketsModalWrapper } from './styles';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Ticket = ({ ticketData, onTicketClick }) => {
    return (
        <div className='sprint-ticket' onClick={() => onTicketClick(ticketData.id)}>
            <div className='ticket-title'>
                {ticketData?.title &&
                    <span>{ticketData.title}</span>
                }
            </div>
            <div className='ticket-description'>
                {ticketData?.description &&
                    <span>{ticketData.description}</span>
                }
            </div>
        </div>
    )
}

const AllTicketsModal = ({
    showAllTicketsModal,
    toggleAllTicketsModal,
    cancelAllTicketsEdit,
    onTicketClick,
    allTickets
}) => {
    return (
        <Modal isOpen={showAllTicketsModal} toggle={toggleAllTicketsModal} size='xl'>
            <ModalHeader>Add ticket to selected sprint</ModalHeader>
            <ModalBody>
                <AllTicketsModalWrapper>
                    {allTickets?.length > 0 &&
                        allTickets.map((x, index) => (
                            <Ticket ticketData={x} key={index} onTicketClick={onTicketClick} />
                        ))
                    }
                </AllTicketsModalWrapper>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={cancelAllTicketsEdit}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}

export default AllTicketsModal;