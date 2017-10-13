// import React JSX
import React, {Component} from 'react';
import FontAwesome from "react-fontawesome";
import './ArticleItem.css';
import {Row,Col} from '../Grid';
import {ArticleBtn, SaveBtn} from '../Button';
import {Link} from "react-router-dom";

// create ArticleItem component
class ArticleItem extends Component{

    deleteArticle = (ev) => {
        ev.preventDefault();
        this.props.deleteArticle(this.props.id)
    };
    
    savedNotification = (ev) => {
        ev.preventDefault();
    }

    render(){
        return(
            <div className="card" id={this.props.id}>
                <div className="card-header">
                    <span className="headline">{this.props.headline}</span>
                  
                    {this.props.page === "Saved"? <a href="#/" onClick={this.deleteArticle}><FontAwesome className="remove" name="times"/></a> 
                    : 
                    <Link to="/saved" className="redirect-saved"><FontAwesome name="arrow-circle-o-right"/></Link>}

                </div>
                
                <div className="card-block">
                <Row>
                    <Col size={2}>
                        <img style= {{width: '75%'}} src={`https://static01.nyt.com/${this.props.thumbnail}`} alt='thumbnail'/>
                    </Col>
                    <Col size={10}>
                        <p className="article-info"> {this.props.byline} </p>
                        <p className="article-info"> {this.props.date}</p>
                        <p className="article-info"> {this.props.snippet}</p>
                    </Col>
                </Row>
                <Row>
                    <div style={{margin: '0.5rem auto'}}>
                        
                        <ArticleBtn url={this.props.url}>Read</ArticleBtn>
            
                        {this.props.page === "Saved" ?
                            ""
                        :
                            <SaveBtn 
                                type='success' 
                                id={this.props.id}
                                handleSave={this.props.handleSave}>
                                Save
                            </SaveBtn>
                        }
                    </div>
                </Row>
                </div>
            </div>
        );
    };
};

export { ArticleItem };