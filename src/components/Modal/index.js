import React from 'react';
//ONCLOSE BECOMES A PARAMETER
const Modal = ({ onClose, currentPhoto }) => {
    const { name, description, category, index } = currentPhoto;
    //ONCLOSE ASSIGNED TO A CLICK EVENT 
    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name} </h3>
                <img
                    src={require(`../../assets/medium/${category}/${index}.jpg`)}
                    alt="current category"
                />
                <p>{description}</p>
                <button type="button" onClick={onClose}>
                    Close this modal
                </button>
            </div>
        </div>
    );
};

export default Modal;
