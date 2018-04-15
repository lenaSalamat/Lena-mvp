import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
       memo: '',
       memos:[]
    }
        this.onChange=this.onChange.bind(this)
     this.search=this.search.bind(this)

  }
    onChange (e) {
    this.setState({
      memo: e.target.value
    });
  }

  search () {
    $.ajax({
      type: "POST",
     url:"/memos",
     data:{memo:this.state.memo},
      success: function(data) { console.log("hey") }
    })
 }

  render () {
    return ( 
    <div>
      <h4>MY MEMORY MY HISTORY</h4>
     <input value={this.state.memo} onChange={this.onChange}/>       
      <button onClick={this.search}> Add memos </button>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));