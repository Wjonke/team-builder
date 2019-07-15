//display a team member
//has a button to edit member, once edit is pressed, changes to a save button
//on save, updates the state of that member

import React from 'react';

const TeamMember = props => {
  return (
    <div style={cardStyle}>
      <h3>{props.name}</h3>
      <p>{props.age}</p>
      <p>{props.team} </p>
      <button>Edit Member</button>
    </div>
  );
};



const cardStyle={
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#cc9966',
  margin:'10px 0px',
  padding:'10px 0px'


  // border:'1px solid black'
}
export default TeamMember;