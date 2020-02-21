import React, { Fragment, useState, useEffect } from 'react';

function App() {

  // STATE
  const [resultados, guardarResultados] = useState([]);
  const [consulta, guardarConsultaRealizada] = useState(false);
  
  useEffect(() => {
    
    if(consulta) return;
    
    const consultarAPI = async () => {
      let search = 'canon';
      let page = 1;
      let perPage = 100;
      // let key = 'f9XhO7jggni_s-mvQhsbghVgVleYbqALvb0p4YCEwPw';
      // let url = `https://api.unsplash.com/search/photos?client_id=${key}&per_page=${perPage}&page=${page}&query=${search}`;

      const imagenesPorPagina = 30;
      const key = '15267306-f7d4977593e90dfd66b28ce54';
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${perPage}&page=${page}`;
      
      const consulta = await fetch(url);
      const resultados = await consulta.json();
      
      guardarResultados(resultados.hits)
    };
    guardarConsultaRealizada(true)
  
    consultarAPI()
  }, [consulta]);  

  return (
    <Fragment>
      <h1>Music Lyrics APP</h1>
      <div className="container mansory-layout" id="mansory-layout" columns="4">
         {/* {resultados.map(item => (
            <div className="mansory-layout__item" key={item.id}>
              <img src={item.urls.small} alt={item.color} />
            </div>
          ))} */}
         {resultados.map(item => (
            <div className="mansory-layout__item" key={item.id}>
              <img src={item.previewURL} alt={item.tags} />
            </div>
          ))}
      </div>
    </Fragment>
  );
}

export default App;
