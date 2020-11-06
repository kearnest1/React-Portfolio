import React, { useState } from "react";
import Modal from "../Modal";

const Projects = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);;

  const [projects] = useState([
    {
      name: 'Bone Apple Tea',
      description:
        'An online recipe database that allows users to login and share their own receipes and comment on others.',
      category: 'Projects',
      repoLink: 'https://github.com/KRAY306090/project-two',
    }
  ]);

  
  const toggleModal = (image, i) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} />}
      <div className="flex-row">
        {/* {currentProjects.map((image, i) => (
          <img
            src={require()}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          /> */}
        {/* ))} */}
      </div>
    </div>
  );
};



export default Projects;