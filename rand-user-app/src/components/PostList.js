import React, { Component } from 'react';
//eslint-disable-next-line
import axios from 'axios';

 class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
          posts: [],
        }
      }

      componentWillMount() {
        localStorage.getItem('post') && this.setState({
          post: JSON.parse(localStorage.getItem('post')),
          isLoading: false
        })
      }
      
      
      componentDidMount(){
        axios.get("https://randomuser.me/api/")
        .then(response => {
          console.log(response)
          this.setState({post: response.data})
        })
        .catch(error => {
          console.log(error)
        })
      }

      componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('post', JSON.stringify(nextState.post));
      }
      

    render() {
      const { posts } = this.state
      return (
        <div>
          List of posts
          {
            posts.length ?
            posts.map(post => <div key={post.id}>{post.title}</div>) : null
          }
        </div>
      )
        }
      }

export default PostList;
