import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const Cancion = ({letra, busquedaletra}) => {

  if (!letra) return null;

  return (
    <Fragment>
      <h3 className="titulo">Lyrics: {busquedaletra.cancion.toUpperCase()}</h3>
      <p className="letra">{letra}</p>
    </Fragment>
  );
};


Cancion.propTypes = {
  letra: PropTypes.string.isRequired,
  busquedaletra: PropTypes.object.isRequired,
}


export default Cancion