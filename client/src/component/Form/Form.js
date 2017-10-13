// IMPORT DEPENDENCIES
// --------------------------------------------------
import React, {Component} from 'react'; 
import './Form.css';
import {SearchBtn} from '../Button';
import {Row} from '../Grid';

class Form extends Component{

    render(){
        return(
            <form className='search-box' onSubmit= {this.props.handleSubmit}>
                <Row>
                    <input 
                        className='search-input' 
                        onChange={this.props.handleInput} 
                        value={this.props.topic} name='topic' 
                        placeholder='Topic'
                    />
                    <input 
                        className='search-input' 
                        onChange={this.props.handleInput} 
                        value={this.props.start} name='start' 
                        placeholder='Start Year'
                    />
                    <input 
                        className='search-input' 
                        onChange={this.props.handleInput} 
                        value={this.props.end} name='end' 
                        placeholder='End Year'
                    />
                </Row>
                <Row>
                    <SearchBtn type='primary' handleSubmit={this.props.handleSubmit}>Search</SearchBtn>
                </Row>
            </form>
        )

    }
}

export default Form;