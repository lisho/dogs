import React from 'react'
import Boton from './Boton'
import Spinner from './Spinner';

function Card({perro, actualizaPerro, loading}) {

    const {image, breed } = perro;
    console.log(perro)
    if (loading) return <Spinner />
    return (      
        <div className="card" >
            <img src={image} alt="" />
            <h2>{breed ? breed.name : "Desconocido"}</h2>
            <p>{breed ? breed.temperament: "- - -"}</p>

            <div className="cardFooter">
                <hr />
                <Boton 
                    clases="azul"
                    onclick={()=> actualizaPerro(perro.breed.id)}
                    perro={perro}
                >
                    Ver más perros de esta raza...
                </Boton>
            </div>
           
        </div>
    )
}

export default Card
