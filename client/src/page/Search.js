// import dependencies
//--------------------------------------------------------
import React, {Component} from 'react';
import '../css/Search.css';
import {Title} from '../component/Text';
import {Container,Row} from '../component/Grid';
import Jumbotron from '../component/Jumbotron';
import Form from '../component/Form';
import { connect } from 'react-redux';
import { searchArticles } from '../utils/Redux/actions';
import API from '../utils/API';

// @connect(store => {
//     return{
//         error: store.search.error
//     }
// })

function mapStateToProps(state) {
    return { 
        articles: state.search.articles,
        error: state.search.error 
    };
}
  
// create search component
//--------------------------------------------------------
class Search extends Component{

    state = {
        topic: "food",
        start: "",
        end: ""
    }

    componentDidMount(){
        console.log(this.props.articles)
    }

    handleInput = (ev) => {
        ev.preventDefault();

        const {name,value} = ev.target;

        if(name === 'start' || name === 'end'){
            if(!isNaN(Number(value))){
                let valueLimit = value.substring(0,4)
                this.setState({[name]: valueLimit});
            }
        }else{
            this.setState({[name]: value});
        }

    };

    handleSubmit = (ev) => {

        let queryStr = API.query(this.state);
        console.log(queryStr)
        this.props.dispatch(searchArticles(queryStr))
    }

    handleReturn = (ev) => {
        ev.preventDefault();
        this.props.dispatch()
    }

    render(){
        return(
            <Container>
            <Jumbotron>
                <Row>
                    <Title text='REACT NYT SCRAPER' />
                </Row>

                <Row>
                    <Form 
                        topic={this.state.topic} 
                        start={this.state.start}
                        end= {this.state.end}
                        handleInput={this.handleInput}
                        handleSubmit={this.handleSubmit}
                        handleReturn={this.handleReturn}
                    />
                </Row>
            </Jumbotron>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(Search);