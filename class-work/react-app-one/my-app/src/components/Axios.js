import React from 'react';
import axios from 'axios';

class Axios extends React.Component {

  state = {
    posts: []
  }

  componentWillMount(){
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res)
        this.setState({
          posts:res.data.results
        })
      })
  }

  render() {
    const { posts } = this.state
    return posts.map((item) => (
      <p> {item.name} </p>
    ))
  }
}

export default Axios;
