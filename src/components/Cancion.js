import React, { Fragment } from 'react';



const Cancion = ({letra}) => {

  if (!letra) return null;

  return (
    <Fragment>
      <h3 className="titulo-cancion">Lyrics</h3>
      <p className="letra">{letra}</p>
    </Fragment>
  );
};

export default Cancion