import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-links">
                <a href="https://twitter.com/a0x001"><i className="fab fa-twitter-square"></i></a>
                <a href="https://www.linkedin.com/in/allan-maina-ab78011aa/"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/Allan-1"><i className="fab fa-github-square"></i></a>
            </div>
            <h1> © Copyright {new Date().getFullYear()} <a href='https://allanmaina.vercel.app/'>Allan</a></h1>
        </div>
    )
}

export default Footer
