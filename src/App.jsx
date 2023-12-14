// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ImageGenerationForm from './components/Image';
import Sentiment from './components/Sentiment'
import Emotions from './components/Emotions'
import { Routes, Route } from "react-router-dom";

import './App.css'
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="sentiment" element={<Sentiment />} />
        <Route path="image" element={<ImageGenerationForm />} />
        <Route path="emotion" element={<Emotions />} />
      </Route>
    </Routes>
  </>
  );
};

export default App;
