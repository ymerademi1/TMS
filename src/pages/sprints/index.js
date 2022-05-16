
import React, { useState } from 'react';
import { SprintsWrapper } from './styles';
import { Container, Button, Row, Col } from 'reactstrap';
import { useToasts } from "react-toast-notifications";
import SprintModal from '../../components/SprintModal';
import AllTicketsModal from '../../components/AllTicketsModal';
import RemoveSprintTicketModal from '../../components/RemoveSprintTicketModal';

const SprintTicket = ({ ticket, onSprintTicketClick }) => {
    return (
        <div className='sprint-ticket' onClick={() => onSprintTicketClick(ticket)}>
            <div className='ticket-title'>
                <span>{ticket.title}</span>
            </div>
            <div className='ticket-description'>
                <span>{ticket.description}</span>
            </div>
        </div>
    )
}

const Sprint = ({ updatingModal, data }) => {
    const { addToast } = useToasts();
    const [showAllTicketsModal, setShowAllTicketsModal] = useState(false)
    const [showRemoveSprintTicketModal, setShowRemoveSprintTicketModal] = useState(false)
    const [removingTicket, setRemovingTicket] = useState(null)

    const allExistingTickets = JSON.parse(localStorage.getItem("tickets"))
    let filteredTickets = [];
    if (data?.ticketIds?.length > 0) {
        filteredTickets = allExistingTickets.filter(f => !data.ticketIds.includes(f.id))
    }
    else {
        filteredTickets = allExistingTickets;
    }

    const toggleAllTicketsModal = () => {
        setShowAllTicketsModal(!showAllTicketsModal)
    }

    const cancelAllTicketsEdit = () => {
        toggleAllTicketsModal();
    }

    const toggleRemoveSprintTicketModal = () => {
        setShowRemoveSprintTicketModal(!showRemoveSprintTicketModal)
    }

    const cancelRemoveSprintTicketModal = () => {
        toggleRemoveSprintTicketModal();
    }

    const onSprintTicketClick = (ticket) => {
        toggleRemoveSprintTicketModal();
        setRemovingTicket(ticket);
    }

    const removeSprintTicket = (ticketId) => {
        const sprintId = data.id;
        let sprints = JSON.parse(localStorage.getItem("sprints"))
        let actualSprint = sprints.find(x => x.id == sprintId)
        actualSprint.ticketIds = actualSprint.ticketIds.filter(x => x != ticketId)
        const index = sprints.findIndex((obj => obj.id == actualSprint.id))
        sprints = [
            ...sprints.slice(0, index),
            actualSprint,
            ...sprints.slice(index + 1),
        ];
        localStorage.setItem('sprints', JSON.stringify([...sprints]));
        toggleRemoveSprintTicketModal();
        addToast(`Ticket Removed from ${actualSprint.title}!`, { appearance: 'success', autoDismiss: true })
    }

    const onTicketClick = (id) => {
        const sprintId = data.id;
        let sprints = JSON.parse(localStorage.getItem("sprints"))
        let actualSprint = sprints.find(x => x.id == sprintId)
        if (actualSprint.ticketIds == null) actualSprint.ticketIds = [];
        actualSprint.ticketIds = [id, ...actualSprint.ticketIds]
        const index = sprints.findIndex((obj => obj.id == actualSprint.id))
        sprints = [
            ...sprints.slice(0, index),
            actualSprint,
            ...sprints.slice(index + 1),
        ];
        localStorage.setItem('sprints', JSON.stringify([...sprints]));
        toggleAllTicketsModal();
        addToast('Ticket Added!', { appearance: 'success', autoDismiss: true })
    }

    return (
        <Col xs='12' md='6' lg='4' xl='3'>
            <div className='sprint'>
                <div className='title'>
                    {data.title &&
                        <div className='title-text'>
                            <span>{data.title}</span>
                        </div>
                    }
                    <div className='title-date-wrapper'>
                        {data?.dateArray?.length > 0 &&
                            <div className='title-date'>
                                <span>{data.dateArray[0]} - {data.dateArray[1]}</span>
                            </div>
                        }
                        <div className='title-edit'>
                            <span onClick={() => updatingModal(data)}>Edit</span>
                        </div>
                    </div>
                </div>
                <div className='description'>
                    <div className='add-ticket-wrapper'>
                        <div className='add-ticket-button' onClick={toggleAllTicketsModal}>
                            <span>+</span>
                        </div>
                    </div>
                    {data && data.ticketIds && data.ticketIds.length > 0 && data.ticketIds.map((x, index) => {
                        const ticket = allExistingTickets.find(t => t.id == x)
                        return (
                            <SprintTicket ticket={ticket} onSprintTicketClick={onSprintTicketClick} key={index} />
                        )
                    })}
                </div>
            </div>
            {showAllTicketsModal &&
                <AllTicketsModal
                    showAllTicketsModal={showAllTicketsModal}
                    toggleAllTicketsModal={toggleAllTicketsModal}
                    cancelAllTicketsEdit={cancelAllTicketsEdit}
                    onTicketClick={onTicketClick}
                    allTickets={filteredTickets}
                />
            }
            {showRemoveSprintTicketModal &&
                <RemoveSprintTicketModal
                    showRemoveSprintTicketModal={showRemoveSprintTicketModal}
                    toggleRemoveSprintTicketModal={toggleRemoveSprintTicketModal}
                    cancelRemoveSprintTicketModal={cancelRemoveSprintTicketModal}
                    removeSprintTicket={removeSprintTicket}
                    removingTicket={removingTicket}
                    sprintTitle={data.title}
                />
            }
        </Col>
    )
}

export default function Sprints() {
    const { addToast } = useToasts();
    const [showModal, setShowModal] = useState(false)
    const [updatingSprint, setUpdatingSprint] = useState(null)

    const toggleModal = () => {
        setShowModal(!showModal)
    }
    const updatingModal = (data) => {
        setUpdatingSprint(data);
        toggleModal();
    }
    const deleteSprint = (data) => {
        let sprints = JSON.parse(localStorage.getItem("sprints"))
        sprints = sprints.filter(x => x.id != data.id)
        localStorage.setItem('sprints', JSON.stringify([...sprints]));
        setUpdatingSprint(null)
        toggleModal();
        addToast('Sprint Deleted!', { appearance: 'success', autoDismiss: true })
    }
    const updateSprint = (data) => {
        let sprints = JSON.parse(localStorage.getItem("sprints"))
        const index = sprints.findIndex((obj => obj.id == data.id))
        sprints = [
            ...sprints.slice(0, index),
            data,
            ...sprints.slice(index + 1),
        ];
        localStorage.setItem('sprints', JSON.stringify([...sprints]));
        setUpdatingSprint(null)
        toggleModal();
        addToast('Sprint Updated!', { appearance: 'success', autoDismiss: true })
    }
    const cancelEdit = () => {
        setUpdatingSprint(null)
        toggleModal();
    }
    const addSprint = (sprintData) => {
        if (localStorage.getItem("sprints") == null) {
            localStorage.setItem('sprints', JSON.stringify([]))
        }
        const sprints = JSON.parse(localStorage.getItem("sprints"))
        localStorage.setItem('sprints', JSON.stringify([...sprints, { ...sprintData, id: sprints?.length ? sprints?.length + 1 : 1 }]));
        toggleModal();
        addToast('Sprint Created!', { appearance: 'success', autoDismiss: true })
    }
    return (
        <SprintsWrapper>
            <Container>
                <div className='first-row'>
                    <div className='title-row'>
                        <span>Sprints</span>
                    </div>
                    <div className='button-row'>
                        <Button color="info" onClick={toggleModal}>Create new sprint</Button>
                    </div>
                </div>
                <Row className='sprints-row'>
                    {JSON.parse(localStorage.getItem("sprints"))?.length > 0 &&
                        JSON.parse(localStorage.getItem("sprints")).map((x, index) => (
                            <Sprint updatingModal={updatingModal} data={x} key={index} />
                        ))}
                </Row>
            </Container>
            {showModal &&
                <SprintModal
                    showModal={showModal}
                    toggleModal={toggleModal}
                    addSprint={addSprint}
                    deleteSprint={deleteSprint}
                    updateSprint={updateSprint}
                    cancelEdit={cancelEdit}
                    updatingSprint={updatingSprint}
                />
            }
        </SprintsWrapper>
    )
}
