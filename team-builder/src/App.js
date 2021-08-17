import React, { useState } from 'react';
import './App.css';
import TeamMemberForm from './components/Form';
import TeamMember from './components/TeamMember';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}


function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [memberToEdit, setMemberToEdit] = useState();

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role){
      return;
    }
    setTeamMembers(...teamMembers, teamMembers.concat(newTeamMember));
    setFormValues({name: "", email: "", role: ""});
  }

  const editMember = (event) => {
    console.log(event);
  }

  return (
    <div className="App">
      <h1>Team Member Form</h1>
      <TeamMemberForm 
       values={formValues}
       update={updateForm}
       submit={submitForm}
      />

    {
      teamMembers.map( (member, idx) => {
        return (
            <TeamMember 
            key={idx} 
            details={member}
            edit={editMember} 
            />
        )
      })
    }

    </div>
  );
}

export default App;
