import React from 'react'
import './home.css'

function Box(){
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
                <h3>First box</h3>
                <p>name:Johnmary</p>
                <p>phone:07053944685</p>
                <p>email:chukwudoziembadugha@gmail.com</p>
                <p>address:Eni-njoku hostel UNN</p>
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