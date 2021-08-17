import React from 'react';

export default function TeamMember(props) {
    const { details } = props;

    if (!details) {
        return <h3>Getting your team members list</h3>
    }

    return(
        <div className='Team-member-container'>
            <h1>{details.name}</h1>
            <p>{details.email}</p>
            <p>{details.role}</p>
        </div>
    )

}
