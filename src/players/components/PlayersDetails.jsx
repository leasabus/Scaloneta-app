import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getPlayerById } from "../helpers/getPlayerById";


export const PlayersDetails = () => {

    const { id } = useParams();

    const player = getPlayerById(id);

    const navigate = useNavigate();
    const onReturn = () => {
        navigate(-1)
    }
    /*redireccion para cuando no existe el url de heroe*/
    const playerUrl = `./assets/${id}.jpg`;
    if (!player) {
        return <Navigate to="/delanteros"></Navigate>
    }


    return (
        <>
            <section >
                <h1 className="details-tittle">{player.nombre}</h1>
                <div className="details">
                    <div className="detail-container">
                        <div className="image-detail animate__animated animate__fadeInLeft ">
                            <img src={playerUrl} alt={player.nombre} width="300" />



                        </div>
                    </div>

                    <div className="descriptions-details  ">

                        <h4>{player.equipo}</h4>
                        <span><b>Edad:</b> {player.edad}</span>
                        <span><b>Debut en selecciones:</b> {player.debut}</span>
                        <span><b>Goles Totales:</b> {player.goles}</span>
                        <span><b>Títulos/trofeos totales:</b> {player.títulos}</span>
                        <span><b>Mundiales disuputados:</b> {player.mundiales}</span>
                        <button onClick={onReturn} className="btn btn-primary ">Volver</button>
                    </div>


                </div>

            </section>

        </>
    )
}
