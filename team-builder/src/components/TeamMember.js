//display a team member
//has a button to edit member, once edit is pressed, form populates info with member to be edited
//on save, updates the state of that member

import React from 'react';

const TeamMember = ({name, age, team}) => {
  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{team} </p>
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
  margin:'10px 10px',
  padding:'10px 10px',
  border:'1px solid black'
}
export default TeamMember;