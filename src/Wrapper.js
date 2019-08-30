import React from 'react';
import logo from './logo.svg';
import Title from './Title.js';
import Photo from './Photo.js';

function Wrapper(props){

    return(
        
        <div>
            <Photo src={logo} />


            <Title style={{color:"red",}} names="My Name Here " />
            <Title style={{color:"red", fontSize:"20px"}} names="My Job Here " />


        </div>

    )
}
export default Wrapper