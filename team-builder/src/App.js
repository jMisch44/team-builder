import React, { useState } from 'react';
import './App.css';
import TeamMemberForm from './components/Form';
import TeamMember from './components/TeamMember';
import initialTeamMemberList from './components/TeamMemberList';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}


function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMemberList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    };
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role){
      return;
    }
    setTeamMembers(teamMembers.concat(newTeamMember));
    setFormValues({name: "", email: "", role: ""});
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
          <TeamMember key={idx} details={member} />
        )
      })
    }

    </div>
  );
}

export default App;
