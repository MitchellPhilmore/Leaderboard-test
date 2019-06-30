import React,{Component} from 'react'
import './index.css'
import axios from 'axios'
import UserRank from '../UserRank'

class LeadershipBoard extends Component{

  constructor(props){
      super(props)

      this.state = {
          ranking:[],
          
      }    
  }
  componentWillMount(){
    axios.get('https://randomuser.me/api/?results=25')
    .then(response=>response).then((response)=>
    this.setState({ranking:response.data.results}))

  }
    render(){
        return(
          this.state.ranking.length > 0 ?
         
          <>
            <UserRank username={this.state.ranking[5].login.username} useravatar={this.state.ranking[5].picture.large}/>
            {/* <h1><span class="blue">Leader Board</span></h1> */}

<table class="container">
	<thead>
		<tr>
      <th><h1>Rank</h1></th>
      <th><h1>Username</h1></th>
      <th><h1>Wins</h1></th>
			<th><h1>Loses</h1></th>
			<th><h1>Streak</h1></th>
			<th><h1>Total bets</h1></th>
		</tr>
	</thead>
	<tbody>
      {this.state.ranking.map((user,i)=>{
        return(
        <tr>
          {i + 1  === 1 ? <td id="first">{i + 1} <sup>ST</sup></td>: i + 1 === 2 ? <td id="second">{i + 1} <sup>ND</sup></td>:i + 1 === 3 ? <td id="third">{i + 1} <sup>RD</sup></td>:<td>{i + 1}</td>}
          {/* <td>{i + 1 === 1 ? i <sup>st</sup>:false}</td> */}
          <td> <img class="avatar" src={user.picture.thumbnail}/>{user.login.username}</td>
          <td>{Math.floor(Math.random() * 40 + 1)}</td>
          <td>{Math.floor(Math.random() * 20)}</td>
          <td>{Math.floor(Math.random() * 10 + 1)}W</td>
          <td>41</td>
	    	</tr>

        )
      })}
        
  
	</tbody>
</table>
</>
:false
        )
    }

}

export default LeadershipBoard