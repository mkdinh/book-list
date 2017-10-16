// import dependencies
import React, {Component} from 'react';
import '../css/Saved.css';
import {Container} from '../component/Grid';
import {ArticleList} from '../component/Article';
import API from '../utils/API';

// create saved article component
class Saved extends Component {

    state = {
        articles: []
    }

    componentDidMount(){
        this.getSavedArticles()
    }

    getSavedArticles = () => {
        API.findAll()
            .then((articles) => this.setState({articles: articles.data}))
            .catch(err => console.log(err))
    }

    deleteArticle = (id) => {
        API.deleteOne(id)
            .then(() => document.getElementById(id).remove())
            .catch(err => console.log(err))
    }   
    
    render(){
        return(
            <Container>
            {console.log(this.state.articles.length )}
            {this.state.articles.length > 0 ? 
                <ArticleList 
                    page={ "Saved" }
                    results={ this.state.articles } 
                    deleteArticle= { this.deleteArticle }
                /> 
                    : 
                "No Saved Article Found"}
        </Container>
        )
    };
}

// export component
export default Saved;