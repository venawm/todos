import React, { useState } from "react";
import "../styles/card/card.css";
import { useUser } from "../context/UserContext.js";
import Modal from "./Modal";

const Card = ({ item }) => {
  const { getUsername } = useUser();
  const userData = getUsername(item.userId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="main">
      <p>
        <strong className="user" onClick={handleModalToggle}>
          {userData.name}:
        </strong>{" "}
        {item.title}
      </p>
      {isModalOpen && (
        <Modal onClose={handleModalToggle}>
          <h2>{userData.name}</h2>
          <p>
            Email: <a href={`mailto:${userData.email}`}>{userData.email}</a>
          </p>
          <p>Phone: {userData.phone}</p>
          <p>
            Website:{" "}
            <a
              href={`http://${userData.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {userData.website}
            </a>
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Card;
