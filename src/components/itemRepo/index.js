/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ItemContainer } from "./style";

export default function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <div className="links">
        <a href={repo.html_url} target="blank" className="visualizar">
          Ver Reposítorio
        </a>
        <a href="#" className="remove" onClick={handleRemove}>
          Remover
        </a>
      </div>
      <hr />
    </ItemContainer>
  );
}
