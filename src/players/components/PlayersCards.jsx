
import React from 'react'
import { Link } from 'react-router-dom';



export const PlayersCards = ({
    id,
    posicion,
    nombre,
    equipo,
    edad,
    estatura,
    debut
}) => {
    const imageUrl = `./assets/${id}.jpg`;
    //EL ID DEL ARRAY DE JUGADORES TIENE Q SER EL MISMO ID Q EL NOMBRE DE LAS IMG

    return (
        <div className='img-container animate__animated animate__fadeIn'>

            <div className='img-display'>
                <img src={imageUrl} alt={nombre} width="250" height="350" />
            </div>
            <div className='img-display-text'>
                <h5>{nombre}</h5>
                <span>Equipo: {equipo}</span>
                <span>Debut en selección: {debut}</span>
                <span>Edad: {edad}</span>
                <Link to={`/details/${id}`} className="information">Más información</Link>
            </div>

        </div>
    )
}



