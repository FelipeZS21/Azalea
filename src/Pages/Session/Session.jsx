import React, { useState } from 'react';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import './Session.css'

function Session() {

    const context = useContext(ShoppingCartContext)

    return (
    <div className="register-users-form">
        <h1>Registrate gratis!</h1>
        <form onSubmit={context.handleSubmitUserData}>
            <div className="register-users-form-group">
                <label htmlFor="name">
                    <img src="/Imgs/user-logo.svg" alt="" />
                </label>
                <input
                type="text"
                id="name"
                name="name"
                value={context.userData.name}
                onChange={context.handleInputChangeUserData}
                required
                placeholder='Nombre'
                ></input>
            </div>
            <div className="register-users-form-group">
                <label htmlFor="email">
                    <img src="/Imgs/email.svg" alt="" />
                </label>
                <input
                type="email"
                id="email"
                name="email"
                value={context.userData.email}
                onChange={context.handleInputChangeUserData}
                required
                placeholder='Email'
                />
            </div>
            <div className="register-users-form-group">
                <label htmlFor="phone">
                    <img src="/Imgs/phone.svg" alt="" />
                </label>
                <input
                type="number"
                id="phone"
                name="phone"
                value={context.userData.phone}
                onChange={context.handleInputChangeUserData}
                required
                placeholder='Telefono'
            />
            </div>
            <button type="submit">Registrate</button>
        </form>
    </div>
    );
}

export default Session
