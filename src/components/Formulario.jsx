/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import getData from '../services/ubicacion';
import Modal from './ModalVentana';

function validate(input) {
    let errors = {};
    let mail = /^[a-z\.\_\-0-9]{1,20}@[a-z]{1,16}\.[a-z\.]{1,12}$/i;

    if (!input.nombre) {
        errors.name = 'Se requiere un nombre obligatorio';
    }

    if (!mail.test(input.email)) {
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
        <section>
            <h1 className="m-4">Formulario de contacto</h1>

            <form className="form-select flex m-2 flex-col" onSubmit={handleSubmit}>
                <select name="pais" value={country} onChange={handleCountryChange} className="w-full p-2 m-2 border rounded">
                    <option value="--País--">--País--</option>
                    {countries.map((c) => (
                        <option key={c.name} value={c.name}>{c.name}</option>
                    ))}
                </select>

                <select name="provincia" value={province} onChange={handleProvinceChange} className="w-full p-2 m-2 border rounded" disabled={country === '--País--'}>
                    <option value="--Provincia--">--Provincia--</option>
                    {provincias.map((p) => (
                        <option key={p.name} value={p.name}>{p.name}</option>
                    ))}
                </select>

                <select name="ciudad" value={city} onChange={handleCityChange} className="w-full p-2 m-2 border rounded" disabled={province === '--Provincia--'}>
                    <option value="--Ciudad--">--Ciudad--</option>
                    {ciudades.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>

                <div className="col-auto m-2">
                    <input
                        className="form-control form-control-lg"
                        type="text"
                        name="nombre"
                        id="name"
                        placeholder="Ingrese su nombre completo"
                        value={input.nombre}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="text-danger-emphasis text-sm">{errors.name}</p>}

                    <input
                        className="form-control form-control-lg mt-2"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Ingrese su E-mail"
                        value={input.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="text-danger-emphasis text-sm">{errors.email}</p>}

                    <textarea
                        className="form-control form-control-lg mt-2"
                        name="direccion"
                        id="address"
                        placeholder="Dirección (opcional)"
                        value={input.direccion}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary m-3">Guardar</button>
                <button onClick={resetForm} className="btn btn-danger m-3">Cancelar</button>

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
            </form>
        </section>
    );
}
