
import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TicketModal = ({
    showModal,
    toggleModal,
    addTicket,
    deleteTicket,
    updateTicket,
    cancelEdit,
    updatingTicket
}) => {
    const [ticketData, setTicketData] = useState({
        title: '',
        description: '',
    })

    const handleChange = (e, name) => {
        setTicketData({ ...ticketData, [name]: e.target.value })
    }

    useEffect(() => {
        if (updatingTicket?.id) {
            setTicketData(updatingTicket)
        }
    }, [updatingTicket?.id])

    return (
        <Modal isOpen={showModal} toggle={toggleModal}>
            <ModalHeader>{`${updatingTicket?.id ? 'Update or Delete' : 'Create'} Ticket`}</ModalHeader>
            <ModalBody>
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '25px' }}>
                    <label for="ticketTitle">Title:</label>
                    <input type="text" id="ticketTitle" name="ticketTitle" onChange={(e) => handleChange(e, 'title')} value={ticketData.title} style={{border: '1px solid rgba(0, 0, 0, 0.2)'}}/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label for="ticketDescription">Description:</label>
                    <textarea id="ticketDescription" name="w3review" rows="4" cols="50" onChange={(e) => handleChange(e, 'description')} value={ticketData.description} style={{border: '1px solid rgba(0, 0, 0, 0.2)'}}/>
                </div>
            </ModalBody>
            <ModalFooter>
                {updatingTicket?.id ?
                    <>
                        <Button color="secondary" onClick={cancelEdit}>Cancel</Button>{' '}
                        <Button color="danger" onClick={() => deleteTicket(ticketData)}>Delete Ticket</Button>{' '}
                        <Button style={{background: '#12caf0', borderColor: '#12caf0'}} onClick={() => updateTicket(ticketData)}>Update Ticket</Button>
                    </>
                    :
                    <>
                        <Button color="secondary" onClick={toggleModal}>Cancel</Button>{' '}
                        <Button style={{background: '#12caf0', borderColor: '#12caf0'}} onClick={() => addTicket(ticketData)}>Create Ticket</Button>
                    </>}
            </ModalFooter>
        </Modal>
    );
}

export default TicketModal;