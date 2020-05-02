//hoc -higher order components -> a component that renders another component
//Reuse Code
//Render hijacking
//Prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

 const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
 );

 const WithAdminWarrning = (WrappedComponent) =>{
    return (props) => (
         <div>
             {props.isAdmin && <p>This is private info</p> } 
             <WrappedComponent {...props}/>
        </div>
    );
 };

 const requireAuthentication = (WrappedComponent) =>{
    return (props) => (
         <div>
            { props.isRequire ? (<p>Youn need Authentication</p>)  : (<WrappedComponent {...props}/>) }  
        </div>
    );
 }; 

 //const AdminInfo = WithAdminWarrning(Info);
 //ReactDOM.render(<AdminInfo isAdmin={true} info="There are the diatels....."/> , document.getElementById('app'));
 
 const RequireInfo  = requireAuthentication(Info);
 ReactDOM.render(<RequireInfo isRequire={false} info="There are the diatels....."/> , document.getElementById('app'));
 