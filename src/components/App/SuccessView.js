import React, {useState} from 'react';
import "./SuccessView.scss";

const SuccessView = (props) => {
    const groupName = props.match.params.group;

    
    return (
        <div id="imgWrapper">
            <div id="textWrapper">
            <h2>Welcome aboard <i class="fas fa-exclamation"/> <i class="fas fa-exclamation"/></h2>
            <h3>  You are in our community Ołłłłł Yesss <i class="fas fa-exclamation"/> <i class="fas fa-exclamation"/></h3>
            <h3>{`You create fresh new`}<span id="yourGroup"> {groupName}</span></h3>
            
                </div>
            <div id="imgDiv"></div>
            
            

            
        </div>
    );
};

export default SuccessView;