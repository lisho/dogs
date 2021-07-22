import React, { useEffect, useState } from 'react'
import getRazas from '../helpers/getRazas';

function Selector({actualizaPerro}) {

    const [razas, setRazas] = useState([]);

    useEffect(() => {
        actualizaRazas();
    }, [])

    const actualizaRazas = () => {
        getRazas().then((nuevasRazas) => setRazas(nuevasRazas));
    }

    return (
        <div>
            <select 
                name="selector" 
                id="selector"
                onChange={(e)=> actualizaPerro(e.target.value)}
            >
               { razas.map(raza => (
                   <option 
                        value={raza.id} 
                        key={raza.id}
                    >
                        {raza.name} 
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Selector
