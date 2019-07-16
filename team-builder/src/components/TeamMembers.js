import React from 'react';
import TeamList from '../TeamList';
import TeamMember from'./TeamMember';
// import AddForm from './AddForm'

const TeamMembers = (props) => {

  
  return (


    <div>
      <h1 style={titleStyle} >Current Team Members</h1>
      
        <div style={listStyle}>
          {TeamList.map ((Member, i) => {
            return (
              <TeamMember
                key={i}
                name={Member.name}
                age={`Age: ${Member.age}`}
                team={`Team Assigned: ${Member.team}`}
              />
            );
          })}
          
        </div>
    </div>
  )
}


const listStyle={
  display:'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap:'1rem',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#6699cc',
  border:'3px solid black',
  borderRadius:'5px',
  margin:'0px 20px',
  
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


export default TeamMembers




