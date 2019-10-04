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
      newCowDesript: '',
      showcaseCowId: '',
      showcaseCowDescript: ''
    }
    this.setShowcaseCow = this.setShowcaseCow.bind(this);
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

  setShowcaseCow(e, id, descript) {
    console.log(e, id, descript);
    this.setState({showcaseCowId: id})
    this.setState({showcaseCowDescript: descript})
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Cow List</h1>
        <Showcase cowId={this.state.showcaseCowId} cowDescript={this.state.showcaseCowDescript}/>
        <AddCow  handleSubmit={this.handleSubmit} />
        <Herd setShowcaseCow={this.setShowcaseCow} cows={this.state.cows} />
      </div>
    )
  }
}


export default CowList;