import React, { Fragment, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

import Formulario from './components/Formulario';
import ErrorMsn from './components/ErrorMsn';
import Cancion from './components/Cancion';
import Informacion from './components/Informacion';


const DivGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin: 2rem 0;

  @media (max-width: 767px){
    grid-template-columns: 1fr;

    .gridItem-2{
      grid-row: 1 / 2;
    }
  }
`;


function App() {

  // STATE
  const [error, guardarError] = useState(false);
  const [resultadosOK, guardarResultadosOK] = useState(true);
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState('');
  const [artista, guardarArtista] = useState({});

  useEffect(() => {
    if(Object.keys(busquedaletra).length === 0) return;

    const consultarAPI = async () => {
      const {artista, cancion} = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      const [letraApi, informacion] = await Promise.all([
        axios.get(url).catch( 
          (error) => { if(error.response.status === 404){
            guardarResultadosOK(false)
          } }
        ),
        axios.get(url2)
      ])
      if(letraApi && informacion){
        guardarResultadosOK(true)
        guardarLetra(letraApi.data.lyrics)
        guardarArtista(informacion.data.artists[0])
      }
    }
    consultarAPI()
  }, [busquedaletra]);

  return (
    <Fragment>
      <div className="cubetron bg-skyblue txt-w txt-a-c">
        <h1 className="title-5"><i className="a-pied-piper"></i> Music Lyrics APP</h1>
        <hr />

        <Formulario 
          guardarError={guardarError}
          guardarBusquedaLetra={guardarBusquedaLetra}
        />

        { error 
          ?
          <ErrorMsn 
            importanceClass='msn-s-cancel'
            msn='All fields are required'
            icon='a-info-warning'
          />
          :
          null
        }

      </div>

      <div className="container bg-1 vp-2 vm-3">

        { resultadosOK 
          ?
          null
          :
          <ErrorMsn 
            importanceClass='msn-l-blue'
            msn='No Search Results - check that the search terms are well written'
            icon='a-plaz-astronaut'
          />
        }

        <DivGrid>
          <div className="gridItem-1">
            <Informacion 
              artista={artista}
            />
          </div>
          <div className="gridItem-2">
            <Cancion 
              letra={letra}
              busquedaletra={busquedaletra}
            />
          </div>
        </DivGrid>

      </div>
      
    </Fragment>
  );
}

export default App;
