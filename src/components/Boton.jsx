import React from 'react'

function Boton({ children, clases, onclick, disabled }) {

    
    if (disabled === "disabled") {
        clases = clases + " disabled";
    }
   
    
    return (
        <button 
            className={"boton " + clases}
            onClick = {onclick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Boton
