import { useState, useEffect } from "react";
import { Routes, Route,  } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import HomepageSearch from "./Pages/HomepageSearch"
import StreamPage from "./Pages/Streampage";
import DetailsPage from "./Pages/DetailsPage"
import PersonPage from "./Pages/PersonPage"
import PopularPage from "./Pages/Popularpage"
import { Stream } from "@mui/icons-material";


function App() {

  const [homepageSearch, setHomepageSearch] = useState(['_'])

  return (
    <Routes>
      <Route path="/" element={<Homepage setHomepageSearch={setHomepageSearch} homepageSearch={homepageSearch} />} />
      <Route path="/search" element={<HomepageSearch setHomepageSearch={setHomepageSearch} homepageSearch={homepageSearch} />} />
      <Route path="/popular" element={<PopularPage setHomepageSearch={setHomepageSearch} homepageSearch={homepageSearch} />} />
      <Route path="/:category/:id" element={<DetailsPage />} />
      <Route path="/person/:id" element={<PersonPage />} />
      <Route path="/streaming/:navItems/:navItems" element={<StreamPage />} />
      <Route path="/genres/:genreName" element={<StreamPage />} />
    </Routes>
  );
}

export default App;
