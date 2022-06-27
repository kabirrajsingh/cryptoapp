import React, { Component } from 'react'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

function Header() {
    return (
        <div className='mb-4'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    
                    {/* <img src="/logo.png" alt="" width="30" height="24" className="d-inline-block align-text-top" /> */}
                    
                    <Link to="" className='text-decoration-none '> <a className="navbar-brand" href="#" >Cryptoverse</a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={() => window.location.href("/#market")}>Current Market</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/coin/topcoin">Top Coins</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" onClick={() => window.location.replace("/#news")}>News</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
        </div>
            </nav >
        </div >
    )
}

export default Header;