import React from 'react';
import { Button, Dropdown, ButtonGroup as BSButtonGroup } from 'react-bootstrap';
import { FaEllipsisV } from 'react-icons/fa';

function AssignmentButton() {
    return (
        <div className="d-flex justify-content-between align-items-center w-100">

            <input type="text" className="form-control mt-2" style={{ width: '200px' }} id="textInput" placeholder="Search for Assignment" />
            <div className="d-flex gap-2">
                <Button variant="secondary" size="sm">+ Group</Button>
                <Button variant="danger" size="sm">+ Assignment</Button>
                <Button variant="secondary" size="sm">
                    <FaEllipsisV size={25} />
                </Button>
            </div>
        </div>
    );
}

export default AssignmentButton;

