import React, {useState} from 'react'

const AddForm = () => {
//////////////////State setup///////////////////////


  const [formState, setFormState] = useState({
    name: "",
    age: "",
    team: "",
  });

  console.log(formState);

//////////////////State setup///////////////////////




///////////////////helper functions/////////////////


  const submitHandler = event => {
    event.preventDefault();
//add function to push formState into the Team list array being looped through to display all team members
    // setFormState('')
  };


  const changeHandler = event => {
    
    setFormState({
      ...formState,
      [event.target.name]: event.target.value 
    });
  };


///////////////////helper functions/////////////////




  return (
    <div>
      <h1>Add A Team Member!</h1>
      <form onSubmit={submitHandler}>
        <label>
          Name
          <input
            name="name"
            type="text"
            placeholder="Name"
            value = {formState.name}
            onChange={changeHandler}
          />
        </label>

        <label>
          Age
          <input
            name="age"
            type="text"
            placeholder="Age"
            value = {formState.age}
            onChange={changeHandler}
          />
        </label>

        <label>
          Team Assigned
          <input
            name="team"
            type="text"
            placeholder="Team Assigned To"
            value={formState.team}
            onChange={changeHandler}
          />
        </label>

        <button>Submit</button>
        
      </form>
    </div>
  )
}

export default AddForm
