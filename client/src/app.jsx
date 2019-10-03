import React from 'react';
import Showcase from './showcase.jsx';
import AddCow from './addCow.jsx';
import Herd from './herd.jsx';
import axios from 'axios';

class CowList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      newCowName: '',
      newCowDesript: ''
     
    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/api/cows',
      responseType: 'application/json'
    })
    
    // .then(res => res.json(res.data))

    .then(res => {
      // console.log(res.data);
      this.setState({ cows: res.data })
      console.log(`CowList.state.cows=${JSON.stringify(this.state.cows)}`)
    })
    .catch(err => {
      console.log(`GET error=${err}`);
    })
  }

  postCows() {
    return axios({
      method: 'post',
      url: '/api/cows',
      data: {
        "cowname": "" /* populates from user input */,
        "descript": ""/* populates from user input */
      },
      dataType: 'application/json'
    })
    .then(res => {
      console.log(`POST response=${res}`)
    })
    .catch(err => {
      console.log(`POST error=${err}`)
    })
  }
  /*display cows in showcase
      */
  handleClick(e) {
    this.setState({
    })
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Cow List</h1>
        <Showcase />
        <AddCow  handleSubmit={this.handleSubmit} />
        <Herd cows={this.state.cows}/>
      </div>
    )
  }
}

export default CowList;