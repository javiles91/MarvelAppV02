import { Route, Routes } from "react-router-dom";
import React from "react";

import HomePage from "./pages/homePage/homePage";
import CharactersPage from "./pages/charactersPage/CharactersPage";
import CharacterPage from "./pages/characterPage/CharacterPage";
import ComicsPage from "./pages/comicsPage/ComicsPage";
import StoriesPage from "./pages/storiesPage/StoriesPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="characters" element={<CharactersPage />} />
        <Route path="character" element={<CharacterPage />} />
        <Route path="comics" element={<ComicsPage />} />
        <Route path="stories" element={<StoriesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
