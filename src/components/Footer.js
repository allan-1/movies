import React from 'react';
import {FaGithubSquare, FaLinkedin, FaTwitterSquare} from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-links">
                <a href="https://twitter.com/a0x001"><FaTwitterSquare className="foot" /></a>
                <a href="https://www.linkedin.com/in/allan-maina-ab78011aa/"><FaLinkedin className="foot" /></a>
                <a href="https://github.com/Allan-1"><FaGithubSquare className="foot" /></a>
            </div>
            <h1> Copyright © {new Date().getFullYear()} <a href='https://allanmaina.vercel.app/'>Allan</a></h1>
        </div>
    )
}

export default Footer
