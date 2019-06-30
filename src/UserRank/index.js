import React,{Component} from 'react';
import './index.css'
import avatar from './liam-avatar-round.png'

class UserRank extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="userRank">
                {/* <h1 class="userRank-header">LEADERBOARD</h1> */}
                <div className="rating animated zoomIn"><img class="user-avatar" src={this.props.useravatar}></img></div>
                <p class="rank">
                    <h2>{this.props.username}</h2>
                    <h2>Rank <span class="number"># 6</span> </h2>
                    
                    <h2>Record <span class="number">22-17</span></h2>
                    
                    
                    </p>
                 <div class="break" ></div>
                
                
                
            </div>
        )
    }
}

export default UserRank