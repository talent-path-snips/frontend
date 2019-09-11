import React from 'react';
import './App.css';
import '../css/style.css';
import Snip from './Snip';

const snippetData = [
  {
    id: 1,
    code: 'const america = 1776',
    title: 'freedom',
    description: 'I declared a const',
    favorites: 0,
    author: null,
    language: null,
  },
  {
    id: 3,
    code: 'const america = 1776',
    title: 'freedom',
    description: 'I declared a const',
    favorites: 0,
    author: null,
    language: null,
  },
  {
    id: 4,
    code: 'const america = 1776',
    title: 'freedom',
    description: 'I declared a const',
    favorites: 0,
    author: null,
    language: null,
  },
  {
    id: 5,
    code: 'const america = 1776',
    title: 'freedom',
    description: 'I declared a const',
    favorites: 0,
    author: null,
    language: null,
  },
  {
    id: 6,
    code: 'const america = 1776',
    title: 'freedom',
    description: 'I declared a const',
    favorites: 0,
    author: null,
    language: null,
  },
  {
    id: 7,
    code: 'const america = 1776',
    title: 'freedom',
    description: 'I declared a const',
    favorites: 0,
    author: null,
    language: null,
  },
  {
    id: 8,
    code: 'const america = 1776',
    title: 'freedom',
    description: 'I declared a const',
    favorites: 0,
    author: null,
    language: null,
  },
  {
    id: 9,
    code: 'const america = 1776',
    title: 'freedom',
    description: 'I declared a const',
    favorites: 0,
    author: null,
    language: null,
  },
  {
    id: 10,
    code: 'const america = 1776',
    title: 'freedom',
    description: 'I declared a const',
    favorites: 0,
    author: null,
    language: null,
  },
  {
    id: 12,
    code: 'const myVar = 4;',
    title: 'const.js',
    description: 'This is how you declare a const variable in JS',
    favorites: 0,
    author: 'Ayana',
    language: 'JavaScript',
  },
  {
    id: 13,
    code: 'const myVar = 4;',
    title: 'const.js',
    description: 'This is how you declare a const variable in JS',
    favorites: 0,
    author: 'Ayana',
    language: 'JavaScript',
  },
  {
    id: 14,
    code: 'const myVar = 4;',
    title: 'const.js',
    description: 'This is how you declare a const variable in JS',
    favorites: 0,
    author: 'Ayana',
    language: 'JavaScript',
  },
  {
    id: 11,
    code: 'const myVar = 4;',
    title: 'const.js',
    description: 'This is how you declare a const variable in JS',
    favorites: 0,
    author: 'Dandy',
    language: 'JavaScript',
  },
];

function App() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="snippets.html">Snippets</a>
            </li>
            <li>
              <a href="account.html"> Account</a>
            </li>
          </ul>
        </nav>
      </header>
      <form id="search">
        <label htmlFor="search-text">
          <span className="icon">🔎</span>
        </label>
        <input type="text" name="search-text" id="search-text" />
        <button type="submit">Search</button>
      </form>
      <section id="snippets">
        {snippetData.map(snippet => (
          <Snip snippet={snippet} />
        ))}
      </section>
    </React.Fragment>
  );
}

export default App;
