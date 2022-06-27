import React, { Fragment, useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom';
function Coin(props) {
    
    
    const [stats, setStats] = useState({
        "uuid": "Qwsogvtv82FCd",
        "symbol": "BTC",
        "name": "Bitcoin",
        "description": "<p>Bitcoin is the first digital currency that allows users to send and receive money, without the interference of a central bank or government. Instead, a network of thousands of peers is controlling the transactions; a decentralized system.</p>\n\n<h3>Why does bitcoin have value?</h3>\n\n<p>Bitcoin&rsquo;s useful qualities (decentralized, borderless, secure) aren&rsquo;t the only reason the coin is worth so much. Due to its scarcity (and it&rsquo;s hard to produce), Bitcoin is often nicknamed &lsquo;Digital Gold&rsquo;, in reference to &lsquo;classic&rsquo; physical gold. Like gold, Bitcoin also has a finite supply of coins available; there will only ever be 21 million bitcoin. And now you know why the creation of new bitcoins is also called mining.</p>\n\n<h3>No inflation in bitcoin</h3>\n\n<p>Bitcoin was invented in response to a few concerns the inventor(s) had, such as inflation. Its supply is limited, so one cannot just devalue the currency by printing more, as governments often do with fiat currencies (USD, EUR, etc.).</p>\n\n<p>As people look for alternative places to keep their money rather than losing value in a negative interest rate account, Bitcoin becomes more appealing. Big global companies, such as Tesla and MicroStrategy already purchased serious amounts of Bitcoin. And it&#39;s only a matter of time that other companies will follow. This also ensures that the value remains or continues to increase.</p>\n\n<h3>Who built Bitcoin</h3>\n\n<p>In 2008, Bitcoin was invented by an anonymous person or group named Satoshi Nakamoto. In 2009, Bitcoin was released as open-source software. Nakamoto&rsquo;s real identity is still unknown, although there are many theories about who it might be. Decentralization is one of Bitcoin&rsquo;s most important principles, and that&rsquo;s why this anonymity is perfectly in line.</p>\n\n<h3>The technology of Bitcoin</h3>\n\n<p>The Bitcoin blockchain is a database, the so-called &lsquo;ledger&rsquo;, that consists of bitcoin transaction records. For new transactions to be added to the ledger, the nodes must agree that the transaction is real and valid. The blockchain is public and contains records of all the transactions taking place.</p>\n\n<h3>How to buy bitcoin?</h3>\n\n<p>Continue reading <a href=\"https://coinranking.com/blog/how-to-buy-your-first-bitcoin/\" rel=\"nofollow noopener\" target=\"_blank\">this blog article</a> on how to buy your first bitcoin.</p>\n",
        "color": "#f7931A",
        "iconUrl": "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
        "websiteUrl": "https://bitcoin.org",
        "links": [
            {
                "name": "bitcoin.org",
                "type": "website",
                "url": "https://bitcoin.org"
            },
            {
                "name": "Bitcoin Whitepaper",
                "url": "https://bitcoin.org/bitcoin.pdf",
                "type": "website"
            },
            {
                "name": "bitcoinmagazine.com",
                "url": "https://bitcoinmagazine.com/",
                "type": "website"
            },
            {
                "name": "bitcointalk.org",
                "url": "https://bitcointalk.org/",
                "type": "bitcointalk"
            },
            {
                "name": "blockchain.com",
                "url": "https://www.blockchain.com/explorer",
                "type": "explorer"
            },
            {
                "name": "bitcoin/bitcoin",
                "url": "https://github.com/bitcoin/bitcoin",
                "type": "github"
            },
            {
                "name": "r/bitcoin",
                "url": "https://www.reddit.com/r/bitcoin/",
                "type": "reddit"
            },
            {
                "name": "Bitcoin_Magazine",
                "url": "https://t.me/Bitcoin_Magazine",
                "type": "telegram"
            },
            {
                "name": "bitcoin",
                "url": "https://t.me/bitcoin",
                "type": "telegram"
            }
        ],
        "supply": {
            "confirmed": true,
            "total": "19078487",
            "circulating": "19078487"
        },
        "numberOfMarkets": 15406,
        "numberOfExchanges": 215,
        "24hVolume": "17546609473",
        "marketCap": "399156518571",
        "price": "20921.81201637478",
        "btcPrice": "1",
        "priceAt": 1656337500,
        "change": "-2.04",
        "rank": 1,
        "sparkline": [
            "21424.213436900383",
            "21334.353089237393",
            "21348.77234705243",
            "21298.73866893158",
            "21222.226162472653",
            "21252.60731530829",
            "21296.647284691444",
            "21377.53874150177",
            "21241.4627285493",
            "21132.918407702367",
            "21066.412050207087",
            "21054.0545202672",
            "21092.70430120525",
            "21149.1948606154",
            "21181.733059395094",
            "21245.765283468678",
            "21204.137606876488",
            "21255.487612573343",
            "21348.388866394103",
            "21416.557434652714",
            "21443.898860158864",
            "21444.420500141612",
            "21411.301736706748",
            "21304.799591105293",
            "21228.15505186536"
        ],
        "allTimeHigh": {
            "price": "68763.41083248306",
            "timestamp": 1636502400
        },
        "coinrankingUrl": "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
        "tier": 1,
        "lowVolume": false,
        "listedAt": 1330214400
    }
    )
    const {id}=useParams();
    useEffect(() => {
      fetchData(id)
    }, [])
    
    const fetchData=(id)=>{
        const options = {

            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '437437ac34msh03310d3d16da64ap1e04f0jsnfbfdc5bbae8e',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };
        fetch(`https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`, options)
            .then(response => response.json())
            .then(response => {
                setStats(response.data.coin)
            })
    }
    
    return (
        <div className="container">
            <h1 className="d-flex justify-content-between">
                <div><img src={stats.iconUrl} alt="" style={{ "width": "40px" }} /> {stats.symbol}</div>
                
            {/* <form className="d-flex" role="search" onClick={clickHandler}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={inputHandler}/>
        <button className="btn btn-outline-success" type="submit" value={idata}>Search</button>
      </form> */}
      </h1>
            <h3>{stats.name}</h3>
            
            <a href="" target="_blank"><h6 className="text-muted"><p>{stats.websiteUrl}</p></h6></a>
            <div className="row justify-content-between">
                <div className="col-sm-4"><h6 className='text-muted'>Price</h6><h2>{stats.price}</h2></div>
                <div className="col-sm-4"><h6 className='text-muted'>Total Markets</h6><h2>{stats.numberOfMarkets}</h2></div>
                <div className="col-sm-4"><h6 className='text-muted'>Total Exchanges</h6><h2>{stats.numberOfExchanges}</h2></div>
            </div>
            <div className="row">
                <div className="col-sm-4"><h6 className='text-muted'>Total Market Cap</h6><h2>{stats.marketCap}</h2></div>
                <div className="col-sm-4"><h6 className='text-muted'>Total 24h Volume</h6><h2>{stats["24hVolume"]}</h2></div>
                <div className="col-sm-4"><h6 className='text-muted'>24h Change     </h6><h2>{stats.change}</h2></div>
            </div>

            <div
                dangerouslySetInnerHTML={{
                    __html: stats.description
                }}></div>
        </div>
    )
}

export default Coin