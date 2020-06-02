import React from 'react';
import './App.css';
import axios from 'axios'

let like_const = 1;

class App extends React.Component {

  constructor(props)
  {
    super(props)
    this.state =
    {
      data : [],
      likes : 0
    }
  }


   componentDidMount = async () =>
  {
    // let promise = await fetch("https://picsum.photos/v2/list");
    // let data = await promise.json();
    // console.log(data);
    // console.log("till here!")
    // this.setState({
    //   data : this.data
    // })
    // console.log(this.state.data);
    // fetch("https://picsum.photos/v2/list")
    // .then(promise => promise.json())
    // .then(data => this.setState({
    //   data : this.data
    // }))
    axios.get("https://picsum.photos/v2/list")
      .then(res => {
      console.log(res)
      console.log("Axios is working");
      this.setState({data : res.data})
    })
  }
  onLike = () =>
  {
    this.setState({
      likes : like_const
    })
    like_const++;
  }
  render()
  {
  return (
    <div className = "container" className = "main-div">
      <header className = "header-style">
        <h1 className = "header-font">Demo app</h1>
      </header>
     <div className = "sub-div">
        <input className = "bar" type ="text" placeholder = "Search......"/>
        <input className = "sub-btn" type = "submit" value = "Search"/>
      </div> 
     <ul>
          {this.state.data.map(elements => (
            <div className = "map-div">
            <img src = {elements.download_url} className = "img-style"/>
            <h3>{elements.author}</h3>
            <p>{elements.url}</p>
            <button onClick = {this.onLike}>❤ likes : {this.state.likes}</button>
            </div>
          ))}
        </ul>
    </div>
  );
}
}

export default App;
