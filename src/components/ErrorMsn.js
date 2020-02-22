import React from 'react';



const ErrorMsn = ({importanceClass, msn, icon}) => {

  let importance = importanceClass
  let classes = `msn ${importance} vm-3 txt-a-c`;

  return (
    <div className={classes}>
      <p>
        <i className={icon}></i>&nbsp;&nbsp;
        {msn}
      </p>
    </div>
  );
};

export default ErrorMsn