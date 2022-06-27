import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';


const Coins = (props) => {
    const [stats, setStats] = useState(
        []
    )
    const fetchFunction = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '437437ac34msh03310d3d16da64ap1e04f0jsnfbfdc5bbae8e',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };
        fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=0', options)
            .then(response => response.json())
            .then(response => setStats(response.data.coins))


    }
    useEffect(() => {
        fetchFunction()
    }, [])

    return (
        <div className="container mb-5">
            <h2>TOP COINS</h2>
            <div className="row mt-3">
                {stats.map((element) => (
                    <div className="col-sm-4 mb-3" id="#market">
                        <div className="card" style={{ "maxWidth": "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title d-flex justify-content-between align-items-center"><div>{element.rank}. 
                                <Link to={`/coin/${element.uuid}`} className='text-decoration-none ' target="_blank" onClick={
                                    ()=>{
                                    props.handler(element.uuid)
                                    }}> {element.symbol}</Link>
                                </div>
                                    <img src={element.iconUrl} className="img-thumbnail " style={{ "width": "40px" }} alt="..." />
                                </h5>
                                <h6 className="card-subtitle mb-2 text-muted">{element.name}</h6>
                                <p className="card-text">Price: {element.price}</p>
                                <p className="card-text">Market Cap:{element.marketCap}</p>
                                <p className="card-text">Daily Change:{element.change}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Coins