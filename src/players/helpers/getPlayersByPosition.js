import { players } from "../data/players"


export const getPlayersByPosition = (posicion) => {
    const validPositions = ['arqueros', 'defensores', 'volantes', 'delanteros'];
    if (!validPositions.includes(posicion)) {
        throw new Error(`${posicion} no existe`)
    }

    return players.filter(player => player.posicion === posicion)

}