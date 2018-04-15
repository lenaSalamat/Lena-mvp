import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
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

  search (term) {
    $.ajax({
      type: "POST",
     url:"/Memo",
     data: {data:term},
     dataType: "JSON",
      success: function(data) { console.log("hey") }
    })
 }

  render () {
  console.log(this.state.memo)
    return ( 
    <div>
      <h4>memory of me</h4>
     <input value={this.state.memo} onChange={this.onChange}/>       
      <button onClick={this.search}> Add memos </button>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));