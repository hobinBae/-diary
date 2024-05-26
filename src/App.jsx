import { useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Diary from "./pages/Diary";
import New from "./pages/New";
import { getEmotionImage } from "./util/get_emotion-image";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </>
  );
}

export default App;
