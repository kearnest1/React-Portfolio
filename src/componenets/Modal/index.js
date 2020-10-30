import React from './node_modules/react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, deployedLink  } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
        <p>
          {description}
        </p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
