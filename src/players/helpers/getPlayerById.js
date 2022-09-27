import { players } from "../data/players";


export const getPlayerById = (id) => {
    return players.find(player => player.id === id)
}