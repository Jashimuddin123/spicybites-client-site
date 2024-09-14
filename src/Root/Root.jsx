import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <h1>this is root file</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;