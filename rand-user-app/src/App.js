import React, { Component }  from 'react';
import './App.css';
import PostList from './components/PostList.js'

class App extends Component {

  render() {
    return(
      <div className="App">
        <PostList></PostList>
      </div>
    )
  }
}


export default App;
