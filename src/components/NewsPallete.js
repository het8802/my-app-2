import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class NewsPallete extends Component {
    constructor() {
        super();
        this.state = {
            totalResults: 1,
            articles: [],
            pageSize: 20,
            page: 1,
            loading: false
        }
    }

    fetchData = async()=> {
        this.setState({page: this.state.page + 1})
        let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=bf57ae6b4f084bc99af1ed9363a7bd12'
        + '&pageSize=' + this.state.pageSize
        + '&page=' + this.state.page
        + '&category=' + this.props.category;
        
        
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults });
    }
    
    async componentDidMount() {
        this.props.setProgress(30);
        this.setState({page: this.state.page + 1 , progress: 30})
        let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=bf57ae6b4f084bc99af1ed9363a7bd12'
        + '&pageSize=' + this.state.pageSize
        + '&page=' + this.state.page
        + '&category=' + this.props.category;
        this.props.setProgress(50);
        
        document.title = this.props.category + " - News Keeda";
        
        let data = await fetch(url);
        this.props.setProgress(70);
        let parsedData = await data.json();
        this.props.setProgress(100);
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults });
    }


    render() {

        // let pageNumberElements = [];

        // for (const i = 1; i <= this.totalPages; i++) {
        //     pageNumberElements.push(
        //         <button type="button" class="close" aria-label="Close">
        //             <span aria-hidden="true">1</span>
        //         </button>
        //     )
        // }

        return (
            <>
                <div className='container my-3' >
                    <h1 style={{ margin: '40px 0px' }}>Top Headlines</h1>
                    {/* <div className='text-center'>{this.state.loading && <Loading />}</div> */}

                    <InfiniteScroll
                        dataLength={this.state.articles.length} //This is important field to render the next data
                        next={this.fetchData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        >
                                    {this.state.articles.map((element) => {
                                        return <NewsItem title={element.title} url={element.url} imageurl={element.urlToImage} description={element.description} key={element.url} />
                                    })}
                    </InfiniteScroll>

                    {this.state.articles.length !== this.state.totalResults && <div className='text-center'>{this.state.loading && <Loading />}</div>}
                    <div className='container'>
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                    </div>

                    {/* <div className="container d-flex justify-content-around">
                        <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={() => this.handlePageClick(-1)}>&larr; Prev</button>
                        {pageNumberElements}

                        <button type="button" disabled={this.state.page >= this.totalPages} className="btn btn-dark" onClick={() => this.handlePageClick(1)}>Next &rarr;</button>
                    </div> */}
                </div>


            </>
        )
    }
}
