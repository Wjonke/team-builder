import React, {useState} from 'react'
import TeamList from '../TeamList';



const AddForm = (props) => {
//////////////////State setup///////////////////////


  const [formState, setFormState] = useState({
    name: "",
    age: "",
    team: "",
  });

  // console.log(formState);

//////////////////State setup///////////////////////


///////////////////helper functions/////////////////
const changeHandler = event => {
    
  setFormState({
    ...formState,
    [event.target.name]: event.target.value 
  });
};

  const submitHandler = event => {
    event.preventDefault();
    let NewTeamMember ={
      name: formState.name,
      age: formState.age,
      team: formState.team,    
    }
// console.log(NewTeamMember);
    
    TeamList.push({
      name:NewTeamMember.name,
      age:NewTeamMember.age,
      team:NewTeamMember.team,
    })
console.log(TeamList);

    setFormState({
      name: "",
      age: "",
      team: "",
    })
  };



///////////////////helper functions/////////////////




  return (
    <div>
      <h1 style={titleStyle} >Add A Team Member!</h1>
      <form style={formStyle} onSubmit={submitHandler}>
        <label style={inputStyle}>
          Name
          <input
            name="name"
            type="text"
            placeholder="  Enter Name"
            value = {formState.name}
            onChange={changeHandler}
          />
        </label>

        <label style={inputStyle}>
          Age
          <input
            name="age"
            type="text"
            placeholder="  Enter Age"
            value = {formState.age}
            onChange={changeHandler}
          />
        </label>

        <label style={inputStyle}>
          Team Assigned
          <input
            name="team"
            type="text"
            placeholder="  Enter Team Assigned To"
            value={formState.team}
            onChange={changeHandler}
          />
        </label>

        <button>Confirm</button>
        
      </form>
    </div>
  )
}



const titleStyle={
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#cc9966',
  margin:'10px 10px',
  padding:'10px 10px',
  borderRadius:'5px',
  border:'3px solid black',

}

const formStyle={
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'flexEnd',
  backgroundColor:'#6699cc',
  margin:'10px 20px',
  padding:'10px 10px',
  border:'3px solid black',
  borderRadius:'5px',
}

const inputStyle={
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#6699cc',
  margin:'10px 10px',
  padding:'10px 10px',
  border:'1px solid black'
}


export default AddForm
