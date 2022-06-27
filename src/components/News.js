import React, { useState, useEffect } from 'react'

function News() {
    const [stats, setStats] = useState(
        [{
            "image": {
                "thumbnail":
                    { "contentUrl": "https://www.bing.com/th?id=OVFT.G4NA00-VlBBKXTDsC3gecS&pid=News" }
            }, "name": "sample",
            "description": "demod escription"
        }]
    )
    const fetchFunction = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Key': '437437ac34msh03310d3d16da64ap1e04f0jsnfbfdc5bbae8e',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
        };
        fetch('https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency&count=9&freshness=Day&textFormat=Raw&safeSearch=Off', options)
            .then(response => response.json())
            .then(response => {
                setStats(response.value);
            })
        // .then(response => console.log(response))
    }
    useEffect(() => {
        fetchFunction()
    }, [])
    return (
        <div className="container">
            <h2>CURRENT NEWS</h2>
            <div className="row mt-4 justify-content-between">
                <div className="card-group">
                    {stats.map((element) => (
                        <div className="col-sm-4" key={element.name}>
                            <div className="card mb-4" style={{ "width": "18rem" }} >
                                <img src={element.image ? element.image.thumbnail.contentUrl : "https://www.bing.com/th?id=OVFT.G4NA00-VlBBKXTDsC3gecS&pid=News"} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <a href={element.url} className="list-group-item list-group-item-action" target="_blank"><h6 className="card-subtitle mb-2 text-muted">{element.name}</h6></a>
                                    <p className="card-text">{element.description.slice(0, 80)}...</p>
                                </div>
                                <div className="card-footer text-muted">
                                    Published on {new Date(element.datePublished).toGMTString()}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default News;