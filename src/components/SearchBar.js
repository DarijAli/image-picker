import React from 'react';


class SearchBar extends React.Component{
    
    state = { term: '' };

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }
    
    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <h1>Image Search</h1>
                    <input type="text" placeholder="Enter the name of pic you want to search"
                     value={this.state.term} onChange={(e) => this.setState({
                        term : e.target.value
                    })}/>
                    <button style={buttonStyle} onSubmit={this.onFormSubmit}>Search</button>
                    </div>
                </form>
            </div>
        );
    }
}

const buttonStyle = {
    backgroundColor: "#d9d9d9",
    border: "1px solid black",
    borderRadius: "50px",
    marginTop: "1rem",
    cursor: "pointer",
    padding: "10px 10px",
    outline:"none",
   
  
}

export default SearchBar;