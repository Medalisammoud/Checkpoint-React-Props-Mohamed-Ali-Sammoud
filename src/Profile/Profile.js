import React from "react";
import PropTypes from "prop-types";
import './styleProfile.css'

const Profile =(props)=>{
    
    const styleObject={width:'400px',marginTop:'30px',borderRadius:'8px'};
    return(
        <div className='Profile'>
        <img style={styleObject} src={props.children} alt="PhotoProfile" />
        <div className='bioprofesion'>
        <h1>{props.name}</h1>
        <p>{props.bio}</p>
        <p>{props.profesion}</p>
        <button onClick={()=>props.handleName(props.name)}>Click Me</button>
        </div>
        </div>
    );
};

Profile.defaultProps={
    name:'Mohamed Ali Sammoud'
};

Profile.prototype={
    name:PropTypes.string,
    bio:PropTypes.string,
    profesion:PropTypes.string,
    handleName:PropTypes.func
};
export default Profile;