// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// gestione dati pizze per listato
import { useState, useEffect } from 'react';
import axios from "axios";

// importiamo il contesto creato (global)
import GlobalContext from "./context/GlobalContest";

 
// Layout
import DefaultLayout from "./layouts/DefaultLayout";

// Pages
import HomePage from "./pages/HomePage";

function App() {
  // stato delle card
  const [card, setCard] = useState([]);
  const [cardSerie, setCardSerie] = useState([]);
  const [query, setQuery] = useState("");
  // funzione di gestione chiamata all'API
  function fetchCard(nuovoApi) {

    const nuovoApiAggiornatoConPlus = nuovoApi.split(" ").join("+");
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e1a68fa9dadbd05d6c9c8847a2ea277e&query=${nuovoApiAggiornatoConPlus}`)
          .then((res) =>{
            setCard(res.data.results)
          }
          
          )
  }
  // funzione di gestione chiamata all'API delle serie
  function fetchCardSerie(nuovoApi) {

    const nuovoApiAggiornatoConPlus = nuovoApi.split(" ").join("+");
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=${nuovoApiAggiornatoConPlus}`)
          .then((res) =>{
            setCardSerie(res.data.results)
          }
          
          )
  }

  // Solo al primo rendering
  useEffect(() => {fetchCard(query)}, [query]);
  useEffect(() => {fetchCardSerie(query)}, [query]);

  return (
    <GlobalContext.Provider value={{card, cardSerie}}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout setQuery={setQuery} />} >
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </GlobalContext.Provider>
  )
}

export default App
