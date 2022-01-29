import { React, Fragment, useState, useEffect } from 'react';
import Form from './components/Forms/Forms';
import Cancion from './components/Canción/Cancion';
import axios from 'axios';
import Información from './components/Información/Información';

function App() {
  const [ busquedaletra, guardarBusquedaLetra ] = useState({});
  const [ letra, guardarLetra] = useState('');
  const [info, guardarInfo] = useState({});

  useEffect(() => {
    if(Object.keys(busquedaletra).length === 0 ) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ]);

      guardarLetra(letra.data.lyrics);
      guardarInfo(informacion.data.artists[0]);

      // guardarLetra(resultado.data.lyrics);
    }
    consultarApiLetra();
  }, [busquedaletra, info]);

  return (
      <Fragment>
          <Form 
            guardarBusquedaLetra={guardarBusquedaLetra}
          />

          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <Información
                  info={info}
                />
              </div>
              <div className="col-md-6">
                  <Cancion 
                    letra={letra}
                  />
              </div>
            </div>
          </div>
      </Fragment>
  );
}

export default App;
