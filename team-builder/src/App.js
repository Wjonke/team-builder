import React, {useState} from 'react';
import AddForm from './components/AddForm';
import TeamMembers from './components/TeamMembers'

import './App.css';





function App(props) {


  const [teamMembers, setTeamMembers] = useState([ 

    {
      name :'Lucy Smith',
      age : '34',
      team : ' Services Dept'
    },
    {
      name :'Wes Jonke',
      age : '36',
      team : 'Operations Dept'
    },
    {
      name :'Sam Adams',
      age : '27',
      team : ' Services Dept'
    }
  
  ] )

  return (

    <div className="App">
      
      <AddForm setTeamMembers={setTeamMembers} teamMembers={teamMembers} />
      <TeamMembers teamMembers={teamMembers} />

    </div>
  );

}

export default App;
