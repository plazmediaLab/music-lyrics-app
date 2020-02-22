import React from 'react';
import PropTypes from 'prop-types';


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


ErrorMsn.propTypes = {
  importanceClass: PropTypes.string.isRequired,
  msn: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}


export default ErrorMsn