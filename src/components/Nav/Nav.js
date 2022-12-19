import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <div className='nav-container'>
            <img
                className="nav-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix"
            ></img>
            <img
                className="nav-avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU"
                alt="Pasquadev"
            ></img>
        </div>
    )
}

export default Nav;