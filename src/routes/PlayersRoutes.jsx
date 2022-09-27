import { Routes, Route } from 'react-router-dom';
import { Arqueros, Defensores, Volantes, Delanteros, Home } from '../components/export';
import { Search } from '../components/Search';
import { PlayersDetails } from '../players/components/PlayersDetails';
import { NavBar } from '../ui/NavBar';

export const PlayersRoutes = () => {
    return (
        <>
            <NavBar />

            <Routes>

                <Route path='home' element={<Home />}></Route>
                <Route path='arqueros' element={<Arqueros />}></Route>
                <Route path='defensores' element={<Defensores />}></Route>
                <Route path='volantes' element={<Volantes />}></Route>
                <Route path='delanteros' element={<Delanteros />}></Route>
                <Route path='search' element={<Search />}></Route>
                <Route path='details/:id' element={<PlayersDetails />}></Route>
                <Route path='*' element={<Home />}></Route>


            </Routes>
        </>
    )
}
