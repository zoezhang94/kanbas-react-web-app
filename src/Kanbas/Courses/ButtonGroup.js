import React from 'react';
import { Button, Dropdown, ButtonGroup as BSButtonGroup } from 'react-bootstrap';
import { FaEllipsisV } from 'react-icons/fa'; 

function ButtonGroup() {
    return (
        <div className="d-flex justify-content-start gap-2">
            <Button variant="secondary" size="sm">Collapse All</Button>
            <Button variant="secondary" size="sm">View Progress</Button>
            
            <Dropdown as={BSButtonGroup}>
                <Button variant="secondary">Publish All</Button>
                <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
                <Dropdown.Menu>
                    <Dropdown.Item>Publish All</Dropdown.Item>
                    <Dropdown.Item>Publish all items and modules</Dropdown.Item>
                    <Dropdown.Item>UnPublish</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <Button variant="danger" size="sm">+ Module</Button>
            
            <Button variant="secondary" size="sm">
                <FaEllipsisV size={25} />
            </Button>
        </div>
    );
}

export default ButtonGroup;