import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  a {
    text-decoration: none;
    max-width: 110px;
    border: 1px solid #fafafa
  }

  
  .remove:hover {
    background-color: #fafafa40;
    cursor: pointer;
  }

  a.visualizar {
    color: blue;
    background-color: #fafafa;
    padding: 15px;
    border-radius: 30px;
    text-align: center;
  }

  .visualizar:hover {
    background-color: #fafafa40;
    cursor: pointer;
  }

  a.remove {
    color: #ff0000;
    background-color: #fafafa;
    padding: 15px;
    border-radius: 30px;
    text-align: center;
  }

  .remove:hover {
    background-color: #fafafa40;
    cursor: pointer;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;
