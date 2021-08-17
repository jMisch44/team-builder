import React from "react";

 function TeamMemberForm (props) {
     const { values, update, submit } = props;

     const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
     }  

     const onSubmit = evt => {
        evt.preventDefault();
        submit();
     }

    return(
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group-inputs'>
                <label>Name
                    <input 
                     type="text"
                     name="name"
                     value={values.name}
                     placeholder="Type in your name"
                     onChange={onChange}
                    />
                </label>
                <label>Email
                    <input 
                     type="text"
                     name="email"
                     value={values.email}
                     placeholder="type in your email"
                     onChange={onChange}
                    />
                </label>
                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value='Front-End'>Front-End Engineer</option>
                        <option value='Back-End'>Back-End Engineer</option>
                        <option value='DS'>Data Scientist</option>
                        <option value='UX'>UX Designer</option>
                    </select>
                </label>

                <div className='submit-button'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default TeamMemberForm;
