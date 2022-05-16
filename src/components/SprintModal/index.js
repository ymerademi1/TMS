
import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "antd/dist/antd.css";
import { DatePicker } from "antd";
import moment from 'moment';

const SprintModal = ({
    showModal,
    toggleModal,
    addSprint,
    deleteSprint,
    updateSprint,
    cancelEdit,
    updatingSprint
}) => {
    const { RangePicker } = DatePicker;
    const [sprintData, setSprintData] = useState({
        title: '',
        dateArray: []
    })

    const handleChange = (e, name) => {
        setSprintData({ ...sprintData, [name]: e.target.value })
    }

    const onDateChange = (x, dateArr) => {
        setSprintData({ ...sprintData, dateArray: dateArr })
    }

    useEffect(() => {
        if (updatingSprint?.id) {
            setSprintData(updatingSprint)
        }
    }, [updatingSprint?.id])

    return (
        <Modal isOpen={showModal} toggle={toggleModal}>
            <ModalHeader>{`${updatingSprint?.id ? 'Update or Delete' : 'Create'} Sprint`}</ModalHeader>
            <ModalBody>
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '25px' }}>
                    <label for="sprintTitle">Title:</label>
                    <input type="text" id="sprintTitle" name="sprintTitle" onChange={(e) => handleChange(e, 'title')} value={sprintData.title} style={{ border: '1px solid rgba(0, 0, 0, 0.2)' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label for="sprintDescription">Date from-to:</label>
                    <RangePicker
                        onChange={onDateChange}
                        format="DD MMMM YYYY"
                        defaultValue={updatingSprint?.id && [moment(updatingSprint.dateArray[0]), moment(updatingSprint.dateArray[1])]}
                    />
                </div>
            </ModalBody>
            <ModalFooter>
                {updatingSprint?.id ?
                    <>
                        <Button color="secondary" onClick={cancelEdit}>Cancel</Button>{' '}
                        <Button color="danger" onClick={() => deleteSprint(sprintData)}>Delete Sprint</Button>{' '}
                        <Button style={{background: '#12caf0', borderColor: '#12caf0'}} onClick={() => updateSprint(sprintData)}>Update Sprint</Button>
                    </>
                    :
                    <>
                        <Button color="secondary" onClick={toggleModal}>Cancel</Button>{' '}
                        <Button style={{background: '#12caf0', borderColor: '#12caf0'}} onClick={() => addSprint(sprintData)}>Create Sprint</Button>
                    </>}
            </ModalFooter>
        </Modal>
    );
}

export default SprintModal;