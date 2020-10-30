import React, { useState } from "./node_modules/react";
import Modal from "../Modal";

const Projects = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);;

  const [photos] = useState([
    {
      name: 'Bone Apple Tea',
      description:
        'An online recipe database that allows users to login and share their own receipes and comment on others.',
      category: 'projects',
      repoLink: 'https://github.com/KRAY306090/project-two',
    }
  ]);

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;