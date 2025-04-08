/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import getData from '../services/ubicacion';
import Modal from './ModalVentana';
import oficina from '../assets/oficina.JPG';

function validate(input) {
    let errors = {};
    let mail = /^[a-z\.\_\-0-9]{1,20}@[a-z]{1,16}\.[a-z\.]{1,12}$/i;

    if (!input.nombre.trim()) {
        errors.name = 'Se requiere un nombre obligatorio';
    }

    if (!mail.test(input.email.trim())) {
        errors.email = 'Ingrese correo electrónico con formato válido';
    }

    return errors;
};

export function Formulario() {
    const [mostrarModal, setMostrarModal] = useState(false);
    const countries = getData();

    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        pais: "",
        provincia: "",
        ciudad: "",
        nombre: "",
        email: "",
        direccion: "",
    });

    const [country, setCountry] = useState('--País--');
    const [province, setProvince] = useState('--Provincia--');
    const [city, setCity] = useState('--Ciudad--');

    const handleChange = (e) => {
        const { name, value } = e.target;

        const updatedInput = {
            ...input,
            [name]: value
        };

        setInput(updatedInput);
        setErrors(validate(updatedInput));
    }

    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        setCountry(selectedCountry);
        setProvince('--Provincia--');
        setCity('--Ciudad--');
        setInput({
            ...input,
            pais: selectedCountry,
            provincia: "",
            ciudad: ""
        });
    };

    const handleProvinceChange = (e) => {
        const selectedProvince = e.target.value;
        setProvince(selectedProvince);
        setCity('--Ciudad--');
        setInput({
            ...input,
            provincia: selectedProvince,
            ciudad: ""
        });
    };

    const handleCityChange = (e) => {
        const selectedCity = e.target.value;
        setCity(selectedCity);
        setInput({
            ...input,
            ciudad: selectedCity
        });
    };

    const provincias = countries.find(c => c.name === country)?.provinces || [];
    const ciudades = provincias.find(p => p.name === province)?.cities || [];

    const handleSubmit = e => {
        e.preventDefault();
        const validationErrors = validate(input);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setMostrarModal(true);
        }
    };

    const resetForm = () => {
        setInput({
            pais: '',
            provincia: '',
            ciudad: '',
            nombre: '',
            email: '',
            direccion: '',
        });
        setCountry('--País--');
        setProvince('--Provincia--');
        setCity('--Ciudad--');
    };

    return (
        <section className="container mt-5">

            <div className="row align-items-center">
               
                <div className="col-md-6 order-md-1 order-1">
                    <h1 className="mb-4">Formulario de contacto</h1>
                    <form onSubmit={handleSubmit}>
                        <select name="pais" value={country} onChange={handleCountryChange} className="form-select mb-3">
                            <option value="--País--">--País--</option>
                            {countries.map((c) => (
                                <option key={c.name} value={c.name}>{c.name}</option>
                            ))}
                        </select>

                        <select name="provincia" value={province} onChange={handleProvinceChange} className="form-select mb-3" disabled={country === '--País--'}>
                            <option value="--Provincia--">--Provincia--</option>
                            {provincias.map((p) => (
                                <option key={p.name} value={p.name}>{p.name}</option>
                            ))}
                        </select>

                        <select name="ciudad" value={city} onChange={handleCityChange} className="form-select mb-3" disabled={province === '--Provincia--'}>
                            <option value="--Ciudad--">--Ciudad--</option>
                            {ciudades.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>

                        <input
                            className="form-control mb-3"
                            type="text"
                            name="nombre"
                            id="name"
                            placeholder="Ingrese su nombre completo"
                            value={input.nombre}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="text-danger small">{errors.name}</p>}

                        <input
                            className="form-control mb-3"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Ingrese su E-mail"
                            value={input.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-danger small">{errors.email}</p>}

                        <textarea
                            className="form-control mb-3"
                            name="direccion"
                            id="address"
                            placeholder="Dirección (opcional)"
                            value={input.direccion}
                            onChange={handleChange}
                        />

                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">Guardar</button>
                            <button type="button" onClick={resetForm} className="btn btn-danger">Cancelar</button>
                        </div>
                    </form>

                    {mostrarModal && (
                        <Modal
                            datos={input}
                            onClose={() => setMostrarModal(false)}
                            onConfirm={() => {
                                alert('Formulario enviado correctamente ✅');
                                resetForm();
                                setMostrarModal(false);
                            }}
                        />
                    )}
                </div>

                <div className="col-md-4 text-center order-md-2 order-2">
                    <img
                        src={oficina}
                        alt="oficina"
                        className="img-fluid rounded w-60"
                        style={{ maxWidth: '400px' }}
                    />
                </div>
            </div>
        </section>

    );
}
