import { useState } from "react";
import gitLogo from "../assets/github.png";
import Input from "../components/Input";
import ItemRepo from "../components/itemRepo";
import { Container } from "./styles";
import Button from "../components/button";
import { api } from "../services/api";

export default function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
      }
    }
  };

  const handleRemoveRepo = (id) => {
    const handleFilter = repos.filter((repo) => repo.id !== id)
    setRepos(handleFilter)
  } 

  return (
    <Container className="App">
      <img src={gitLogo} width={72} height={72} alt="Logo do GitHub" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo}/>
      ))}
    </Container>
  );
}
