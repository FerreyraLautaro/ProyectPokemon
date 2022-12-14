import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routes , Route , BrowserRouter } from "react-router-dom"
import PokemonsRender from './components/Pokemons/PokemonsRender';
import PokemonForm from './components/Pokemons/VideoForm';
import Example from './components/Pokemons/example';
import NavBar from './components/NavBar/NavBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
    <div className='flex justify-center'>

      <Routes>
        <Route path='/example' element={<Example/>}/>
        <Route path="/" element={<PokemonsRender/>} />
        <Route path="/new-pokemon" element={<PokemonForm/>} />
      </Routes>

    </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
