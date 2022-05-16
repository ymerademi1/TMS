import React, { useState } from 'react';
import { MainWrapper } from './styles';
import { Container, Button, Row, Col } from 'reactstrap';
import { useToasts } from "react-toast-notifications";
import TicketModal from '../../components/TicketModal';

const Ticket = ({ updatingModal, data }) => {
    return (
        <Col xs='12' md='6' lg='4' xl='3'>
            <div className='ticket' onClick={() => updatingModal(data)}>
                {data.title &&
                    <div className='title'>
                        <span>{data.title}</span>
                    </div>
                }
                {data.description &&
                    <div className='description'>
                        <span>{data.description}</span>
                    </div>
                }
            </div>
        </Col>
    )
}

export default function Main() {
    const { addToast } = useToasts();
    const [showModal, setShowModal] = useState(false)
    const [updatingTicket, setUpdatingTicket] = useState(null)

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const updatingModal = (data) => {
        setUpdatingTicket(data);
        toggleModal();
    }
    const deleteTicket = (data) => {
        let tickets = JSON.parse(localStorage.getItem("tickets"))
        tickets = tickets.filter(x => x.id != data.id)
        localStorage.setItem('tickets', JSON.stringify([...tickets]));
        setUpdatingTicket(null)
        toggleModal();
        addToast('Ticket Deleted!', { appearance: 'success', autoDismiss: true })
    }
    const updateTicket = (data) => {
        let tickets = JSON.parse(localStorage.getItem("tickets"))
        const index = tickets.findIndex((obj => obj.id == data.id))
        tickets = [
            ...tickets.slice(0, index),
            data,
            ...tickets.slice(index + 1),
        ];
        localStorage.setItem('tickets', JSON.stringify([...tickets]));
        setUpdatingTicket(null)
        toggleModal();
        addToast('Ticket Updated!', { appearance: 'success', autoDismiss: true })
    }
    const cancelEdit = () => {
        setUpdatingTicket(null)
        toggleModal();
    }
    const addTicket = (ticketData) => {
        if(localStorage.getItem("tickets") == null){
            localStorage.setItem('tickets', JSON.stringify([]))
        }
        const tickets = JSON.parse(localStorage.getItem("tickets"))
        localStorage.setItem('tickets', JSON.stringify([...tickets, { ...ticketData, id: tickets?.length ? tickets?.length + 1 : 1 }]));
        toggleModal();
        addToast('Ticket Created!', { appearance: 'success', autoDismiss: true })
    }
    return (
        <MainWrapper>
            <Container>
                <div className='first-row'>
                    <div className='title-row'>
                        <span>Tickets</span>
                    </div>
                    <div className='button-row'>
                        <Button color="info" onClick={toggleModal}>Create new ticket</Button>
                    </div>
                </div>
                <Row className='tickets-row'>
                    {JSON.parse(localStorage.getItem("tickets"))?.length > 0 &&
                        JSON.parse(localStorage.getItem("tickets")).map(x => (
                            <Ticket updatingModal={updatingModal} data={x} />
                        ))}
                </Row>
            </Container>
            {showModal &&
                <TicketModal
                    showModal={showModal}
                    toggleModal={toggleModal}
                    addTicket={addTicket}
                    deleteTicket={deleteTicket}
                    updateTicket={updateTicket}
                    cancelEdit={cancelEdit}
                    updatingTicket={updatingTicket}
                />
            }
        </MainWrapper>
    )
}
