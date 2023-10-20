import React from 'react';
import ButtonGroup from '../ButtonGroup';
import ModuleList from '../Modules/ModuleList';
import SidebarContent from './SidebarContent';
function Home() {
    return (
        <div className="row">
            <ButtonGroup />
            <hr />
            <div className="col-9">
                <ModuleList />
            </div>
            <div className="col-3">
                <SidebarContent />
            </div>
        </div>
    );
}

export default Home;
