import React, {useState} from 'react';
import AddForm from './components/AddForm';
import TeamMembers from './components/TeamMembers'
import TeamList from './TeamList';


import './App.css';




function App(props) {

  // const [teamState, setTeamState] = useState({
  //   TeamList
  // });
  // console.log(TeamList);



  return (

    <div className="App">
      
      <AddForm />
      <TeamMembers />

    </div>
  );

}

export default App;
