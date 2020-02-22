import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const ColRow = styled.div`
  div:nth-of-type(1){
    padding-right: .5rem;
  }
  div:nth-of-type(2){
    padding-left: .5rem;
  }

  @media (max-width: 589px){
    div{
      padding-right: 0!important;
      padding-left: 0!important;
      padding-bottom: 1rem;
    }
  }
`;
const Button = styled.button`
  background-color: var(--sunflower)!important;
  border-color: var(--sunflower)!important;
  color: var(--White)!important;
  
  &:hover{
    background-color: var(--sunflower-light-1)!important;
    border-color: var(--sunflower-light-1)!important;
  }
  &:active{
    background-color: var(--sunflower-dark-1)!important;
    border-color: var(--sunflower-dark-1)!important;
  }
`;


const Formulario = ({ guardarError, guardarBusquedaLetra }) => {

  // STATE
  const [busqueda, guardarBusqueda] = useState({
    artista: '',
    cancion: ''
  });

  // Destructuring
  const {artista, cancion} = busqueda;

  // Actualizar el State
  const actualizarState = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }

  // Realizar el SUBMIT
  const buscarInformacion = (e) => {
    e.preventDefault();
    
    if (artista.trim() === '' || cancion.trim() === '') {
      guardarError(true)
      return
    }
    guardarError(false)

    // Mandar valores a componente APP
    guardarBusquedaLetra(busqueda)
  }

  return (
    <form
      onSubmit={buscarInformacion}
    >
      <ColRow className="col-row">
        <div className="col-6 txt-a-l">
          <label>Artist</label>
          <input
            type="text"
            name="artista" 
            className="input-100"
            placeholder="Write the a artist name"
            onChange={actualizarState}
          />
        </div>
        <div className="col-6 txt-a-l">
          <label>Music</label>
          <input
            type="text"
            name="cancion"
            className="input-100"
            placeholder="Write the name of  a music"
            onChange={actualizarState}
          />
        </div>
        <div className="jc-end">
          <Button 
            type="submit"
            className="btn btn-interactive btn-warning mt-3"
          >Request</Button>
        </div>
      </ColRow>
    </form>
  );
};


Formulario.propTypes = {
  guardarError: PropTypes.func.isRequired,
  guardarBusquedaLetra: PropTypes.func.isRequired,
}


export default Formulario