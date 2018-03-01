// HOC - Higher Order Component - A component (HOC) that renders another component
// For Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WarppedComponent) => {
  return (props) => (
    <div>
      <p>This is private info. Please do not share</p>
      <WarppedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WarppedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WarppedComponent {...props} />
      ) : (
        <p>Please login</p>
      )}
    </div>
  )
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo info="There are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the detail"/>, document.getElementById('app'));