import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";

import HomePage from "./pages/homePage/homePage";
import CharactersPage from "./pages/charactersPage/CharactersPage";
import CharacterPage from "./pages/characterPage/CharacterPage";
import ComicsPage from "./pages/comicsPage/ComicsPage";
import StoriesPage from "./pages/storiesPage/StoriesPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";

import { fetchCharacters } from "./features/characters/charactersSlice";

import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

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
