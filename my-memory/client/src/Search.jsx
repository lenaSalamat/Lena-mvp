import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memo: ''
    }
    this.onChange=this.onChange.bind(this)
     this.search=this.search.bind(this)


  }

  onChange (e) {
    this.setState({
      memo: e.target.value
    });
  }

  search() {    
  console.log('Hello world ')
  }

  render() {
    return (
    <div>
      <h4>memory of me</h4>
     <input value={this.state.memo} onChange={this.onChange}/>       
      <button onClick={this.search}> Add memos </button>
    </div>
    ) 
  }
}

export default Search;
