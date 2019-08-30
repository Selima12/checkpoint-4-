import React from 'react';


function Title(props){
    return(
        <div>
        <p style={props.style}>{props.names}</p>
        </div>
    );
}
export default Title;