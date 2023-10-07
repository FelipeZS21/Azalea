import React, { useState } from 'react';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import './Session.css'

function Session() {

    const context = useContext(ShoppingCartContext)

    return (
    <div className="login-form">
        <h1>Registrate gratis!</h1>
        <form onSubmit={context.handleSubmitUserData}>
            <div className="form-group">
                <label htmlFor="name">Nombre: </label>
                <input
                type="text"
                id="name"
                name="name"
                value={context.userData.name}
                onChange={context.handleInputChangeUserData}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                type="email"
                id="email"
                name="email"
                value={context.userData.email}
                onChange={context.handleInputChangeUserData}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">celular:</label>
                <input
                type="number"
                id="phone"
                name="phone"
                value={context.userData.phone}
                onChange={context.handleInputChangeUserData}
                required
            />
            </div>
            <button type="submit">Registrate</button>
        </form>
    </div>
    );
}

export default Session
