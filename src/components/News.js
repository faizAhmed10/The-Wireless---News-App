import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(false)
  
  const updateNews = async() => {    
    setLoading(true)
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=a874c5485b0f47a190078ce689dec57a&page=${
      page
    }`;    
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setPage(page+1)
    document.title = `${capitalizeFirstLetter(
      props.category
    )} - The WireLess`;
    setLoading(false)
  }
  useEffect(() => {
    updateNews()
  },[])

  const fetchData = async() => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=a874c5485b0f47a190078ce689dec57a&page=${
      page
    }`;    
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

    return (
      <>
        <h1 style={{ textAlign: "center", marginTop: "80px" }}>
          The WireLess - {props.heading} Headlines
        </h1>
          {loading && <Loading/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchData}
            hasMore={totalResults !== articles.length}
            loader={<Loading/>}
            endMessage = {<p className="text-center"><b>You have reached the end</b></p>}
          >
        <div className="container" style={{marginTop: "10px"}}>
            <div className="row" style={{ justifyContent: "center" }}>
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imgsrc={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
        </div>
          </InfiniteScroll>
      </>
    );

}

News.defaultProps = {
  country: "in",
  category: "general",
  heading: "Top Headlines",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  heading: PropTypes.string,
};

export default News;
