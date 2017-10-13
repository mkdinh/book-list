// import dependencies
import React,{Component} from 'react';
import '../css/Result.css';
import {Container} from '../component/Grid';
import {ArticleList} from '../component/Article';
import { connect } from 'react-redux';
import API from '../utils/API';
import {Link} from "react-router-dom";

function mapStatetoProps(state){
    return {
        results: state.search.articles
    }
}

// create result component
//--------------------------------------------------------

class Result extends Component {
    state = {
        message: ""
    }

    handleSave = (id) => {
        let article = this.props.results.filter(article => article._id === id);
        article = article[0];
        
        let articleInfo = {
            headline: article.headline.main,
            byline: article.byline.original,
            date: article.pub_date,
            snippet: article.snippet,
            url: article.web_url,
            thumbnail: article.multimedia[2].url
        }
    
        API.saveArticle(articleInfo)
            .then((article) => {
                this.setState({message: "Successfully adds new article!"})
                setTimeout(() => this.setState({message: ""}), 2000)
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                {
                    this.state.message.length > 0 ?
                        <div className="message">{this.state.message}</div>
                    :
                        ""
                }
                <Container>

                    {this.props.results.length > 0 ? 
                        <ArticleList
                            page={"Result"} 
                            results={this.props.results} 
                            handleReturn={this.props.handleReturn}
                            handleSave={this.handleSave}
                        /> 
                            : 
                        "No Result Found"}
                </Container>
            </div>
        )
    }
}

export default connect(mapStatetoProps)(Result);