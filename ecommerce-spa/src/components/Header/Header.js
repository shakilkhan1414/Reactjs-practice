import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div className='container-fluid bg-dark'>
            <div className='row align-items-center'>
                <div className='col-4 p-3'>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='col-4 text-light p-3 d-flex justify-content-center'>
                    <ul className='nav navbar-nav menu'>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="#">Shop 2</a></li>
                        <li><a href="#">Shop 3</a></li>
                    </ul>
                </div>
                <div className='col-4 p-3 d-flex justify-content-end'>
                    <form className='form-inline' action="">
                        <div className='input-group'>
                        <input className='form-control' type="text" name="search" id="#" />
                        <input className='btn btn-primary' type="submit" value="Search" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Header;
