
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>this is root file</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;