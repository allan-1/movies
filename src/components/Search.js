import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Search() {
    const [inputs, setInputs] = useState('')
    return (
        <div>
            <div className="intro">
                <div className="texts">
                    <h1>Welcome</h1>
                    <h3>Which Movie are you looking for ? </h3>
                </div>
                <div className="search">
                    <div className='inputs'>
                        <input type="text"
                            placeholder='Search for a movie ....'
                            value={inputs}
                            onChange={(e) => setInputs(e.target.value)}
                        />
                        <Link to={`/search/${inputs}`}>
                            <button type='submit'>Search</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
