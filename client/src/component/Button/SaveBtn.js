// IMPORT DEPENDENCIES
// --------------------------------------------------
import React, {Component} from 'react';

const style ={
    margin: "1rem",
    fontSize: "2rem",
    padding: "0.5rem 2rem",
    color: "white"
}

class SaveBtn extends Component{
    
    saveArticle = (ev) => {
        ev.preventDefault();
        this.props.handleSave(this.props.id);
    }

    render(){
        return(
            <a
            onClick={this.saveArticle}
            style={style}
            href="#/"
            className={`btn btn-${this.props.type || 'primary'}`}
            >
                {this.props.children}
            </a>
        )
    }
};

export { SaveBtn };
