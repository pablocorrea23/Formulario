// components/ModalConfirmacion.jsx
import React from 'react';

export const ModalConfirmacion = ({ datos, onClose, onConfirm }) => {
  return (
    <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirmar datos</h5>
            <button type="button" className="btn-close" aria-label="Cerrar" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <ul className="list-unstyled">
              {Object.entries(datos).map(([key, value]) => (
                <li key={key}><strong>{key}:</strong> {value || 'No ingresó nada'}</li>
              ))}
            </ul>
          </div>
          <div className="modal-footer">
            <button onClick={onConfirm} className="btn btn-success">Confirmar</button>
            <button onClick={onClose} className="btn btn-danger">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmacion;
