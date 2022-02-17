import React,{Component} from "react";

const profiles=[
  {UID:0,
    MID:1},
  {UID:1,
    MID:0}
]
const movies=[
  {name:'twighlight'},
  {name:'persuit of happiness'}
]
const users=[
  {name:'Ahmed'},
  {name:'Aly'}
]


class App extends Component{
  render(){


    return<>
      <h2>Favorite Movies</h2>
    <ul>
           {/* <li>
    {users[profiles[0].UID].name} like {movies[profiles[1].MID].name}
    </li>
    <li>
    {users[profiles[1].UID].name} like {movies[profiles[0].MID].name}
      </li>*/}\
{profiles.map(p=>
     <li> 

{users[p.UID].name} likes : {movies[p.MID].name}.
  </li>

  )} 
    </ul>
</>
    
  }

}

export default  App 