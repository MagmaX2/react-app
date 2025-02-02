import React from 'react'
import './home.css'

function Box(props){
    return(
        // <div className='box'>
        // <header className='header'>
        //     <h3>logo</h3>
        //     <nav className='nav'>
        //         <ul className='nav-list'>
        //             <li>menu</li>
        //             <li>gallery</li>
        //             <li>about us</li>
        //         </ul>
        //     </nav>
        // </header>

        <div className='box'>
            <main className='main'>
                <div className='text-box'>
                <h3>{props.serial} </h3>
                <p>{props.name} </p>
                <p>{props.phone} </p>
                <p>{props.email} </p>
                <p>{props.address} </p>
                </div>
            </main>

        <footer className='footer'>
            <small>
                @Johnmary All rights reserved
            </small>
        </footer>
    </div>
    )
}






export default Box