import React from 'react'
import { Link } from 'react-router-dom';

// let categories = ['general', 'sports', 'entertainment'];
export const categories = ['business','entertainment','general','health','science','sports','technology'];


export default function Navbar() {
    // console.log(categories);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <strong><a className="navbar-brand" href="/">News Keeda</a></strong>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {categories.map(element => {
                                return <Link className="nav-link active" key={element} aria-current="page" to={"/"+element}>{element}</Link>
                            })
                        }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

