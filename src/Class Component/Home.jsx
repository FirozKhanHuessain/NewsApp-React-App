import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            totalResults: 0
        }
    }

    getApiData = async () => {
        
       if(this.props.search){
        var response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&apiKey=c6bb471df00147c3a06c813af27edec6`)
       }
       else{
         response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&apiKey=c6bb471df00147c3a06c813af27edec6`)
       
       }
        // await response.json.parse()
        var result = await response.json()
        this.setState({
            articles: result.articles,
            totalResults: result.totalResults
        })
    }


    componentDidMount() {
        this.getApiData()
    }
    componentDidUpdate(oldprops) {
        if (this.props !== oldprops)
            this.getApiData()
    }
    render() {
        return (
            <>
                <div className="container-fluid mt-2">
                    <div className="row">
                    <h3 className="text-center background text-light p-2"> {this.props.q} News Section</h3>
                        {
                            this.state.articles.map((item, index) => {
                                return <Newsitem
                                    key={index}
                                    pic={item.urlToImage}
                                    title={item.title}
                                    source={item.source.name}
                                    description={item.description}
                                    date={item.publishedAt}
                                    url={item.url}

                                />

                            })
                        }

                    </div>


                </div>
            </>
        )
    }
}