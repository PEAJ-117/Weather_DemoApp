import React, { useState } from "react";

const Form = () => {
    const [city, setCity] = useState("")
    // Creando la funcion  del boton BUSCAR
    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});
        if (city==="" || !city) return;
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto">
                    <input type="text" className="form-control" placeholder="Busca tu ciudad" onChange={(e) => setCity(e.target.value)} />
                    <button className="btn btn-primary input-group-text" type="submit">Buscar</button>
                </div>
            </form>
        </div>
    );
}

export default Form;