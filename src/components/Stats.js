import React, { useState, useEffect } from 'react'

function Stats() {
    const [stats, setStats] = useState({
        'data': "hey",
    })
    const fetchFunction = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '437437ac34msh03310d3d16da64ap1e04f0jsnfbfdc5bbae8e',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };
        fetch('https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl', options)
            .then(response => response.json())
            .then(response => response.data)
            .then(response => {
                setStats(  response );
            })

    }
    useEffect(() => {
        fetchFunction()
    }, [])
    return (
        <div>
            <div className="container mb-5">
                <h1>Market Statistics</h1>
                <div className="grid mt-3">
                    <div className="row">
                        <div className="col-sm-6"><h6 className='text-muted'>Total Coins</h6><h2>{stats.totalCoins}</h2></div>
                        <div className="col-sm-6"><h6 className='text-muted'>Total Markets</h6><h2>{stats.totalMarkets}</h2></div>
                        <div className="col-sm-6"><h6 className='text-muted'>Total Exchanges</h6><h2>{stats.totalExchanges}</h2></div>
                        <div className="col-sm-6"><h6 className='text-muted'>Total Market Cap</h6><h2>{stats.totalMarketCap}</h2></div>
                        <div className="col-sm-6"><h6 className='text-muted'>Total 24h Volume</h6><h2>{stats.total24hVolume}</h2></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats