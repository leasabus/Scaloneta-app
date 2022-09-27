import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { UseForm } from '../customhooks/useForm';
import { getPlayesByName } from '../players/helpers/getPlayersByName';
import { PlayersDetails } from '../players/components/PlayersDetails';
import { PlayersCards } from '../players/components/PlayersCards';


export const Search = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const players = getPlayesByName(q);

    const { onInputChange, searchInput } = UseForm({
        searchInput: q,
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        if (searchInput === '') return;
        //establecemos un query parameter para el buscador
        navigate(`?q=${searchInput}`);
        console.log({ searchInput })
    }
    return (
        <>
            <h1>Busca un jugador:</h1>
            <div className='search-container'>
                <div className='search-input'>
                    <form onSubmit={onSearchSubmit}>
                        <input type="text"
                            placeholder="Ingresa el nombre/apellido"
                            name="searchInput"
                            value={searchInput}
                            onChange={onInputChange} />

                        <button type="submit" className='btn btn-primary'>Buscar</button>
                    </form>
                </div>


                <div className='search-card'>
                    {
                        players.map(player => (
                            <PlayersCards key={player.id} {...player} />
                        ))
                    }
                </div>


            </div>
        </>
    )
}
