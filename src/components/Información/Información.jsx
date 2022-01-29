import React from 'react';

const Información = ({ info }) => {
    if(Object.keys(info).length === 0 ) return null;
    
    return (
        <div className='card border-light'>
            <div className='card-header bg-primary text-light font-weight-bold'>
                Información Artista
            </div>
            <div className='card-body'>
                <img src={info.strArtistThumb} alt='Logo Artista' />
            </div>
        </div>
    );
}
 
export default Información;