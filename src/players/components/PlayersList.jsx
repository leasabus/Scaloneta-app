import React from 'react'
import { getPlayersByPosition } from '../helpers/getPlayersByPosition'
import { PlayersCards } from './PlayersCards'


export const PlayersList = ({ posicion }) => {

    const players = getPlayersByPosition(posicion)
    return (
        <>
            <div className='player-card '>
                {
                    players.map(player => (
                        <PlayersCards
                            key={player.id}
                            {...player}
                        />

                    ))
                }
            </div>

        </>
    )
}
