import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homePage/homePage";
import CharactersPage from "./pages/charactersPage/CharactersPage";
import CharacterPage from "./pages/characterPage/CharacterPage";
import ComicsPage from "./pages/comicsPage/ComicsPage";
import ComicPage from "./pages/comicPage/ComicPage";
import StoryPage from "./pages/storyPage/StoryPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="characters/:pageNumber" element={<CharactersPage />} />
        <Route path="character/:characterId" element={<CharacterPage />} />
        <Route path="comics/:comicsPage" element={<ComicsPage />} />
        <Route path="comic/:comicId" element={<ComicPage />} />

        <Route path="story/:storyId" element={<StoryPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
