import { players } from "../data/players";


export const getPlayesByName = (name = '') => {
    name = name.toLowerCase().trim();

    if (name.length === 0) return [];

    return players.filter(player => player.nombre.toLowerCase().includes(name));

}