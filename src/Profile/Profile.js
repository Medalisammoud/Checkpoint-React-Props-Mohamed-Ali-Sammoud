import React from "react";
import PropTypes from "prop-types";
import './styleProfile.css'

const Profile =(props)=>{
    const handleName=e=>{
        e.preventDefault();
        alert("Im Mohamed Ali Sammoud");
    }
    const styleObject={width:'400px',marginTop:'30px',borderRadius:'8px'};
    return(
        <div className='Profile'>
        <img style={styleObject} src={props.children} alt="PhotoProfile" />
        <div className='bioprofesion'>
        <h1 onClick={handleName}>{props.name}</h1>
        <p>{props.bio}</p>
        <p>{props.profesion}</p>
        </div>
        </div>
    );
};

Profile.defaultProps={
    name:'Mohamed Ali Sammoud'
};

Profile.prototype={
    anyProp:PropTypes.any,
    booleanProp:PropTypes.bool,
    numberProp:PropTypes.number,
    stringProp:PropTypes.string,
    functionProp:PropTypes.func
};
export default Profile;