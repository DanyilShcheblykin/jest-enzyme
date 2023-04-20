import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {

    const [openModal, setOpenModal] = useState<boolean>(false)
    const [modalClass, setModalClass] = useState<string>()
    
    return (
        <>
            <header data-test="headerComponent">
                <div className='headerContainer container'>
                    {/* <img data-test="logoIMG" src={Logo}></img> */}
                    <div className='menuBlock'>
                        <span className='text'>Menu</span>
                        <span onClick={() => setOpenModal(true)} className='burger'></span>
                    </div>
                </div>
            </header>
           
        </>
    );
};

export default Navbar;



