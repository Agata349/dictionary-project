import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary</h1>
        </header>
      <main>
        <Dictionary defaultKeyword="book"/>
      </main>
      <footer>
        <small>
          Coded by Agata Piekarczyk - <a href="https://github.com/Agata349/dictionary-project" target="_blank" rel="noreferrer">open-sourced on GitHub</a>, hosted on <a href="https://app.netlify.com/sites/heuristic-booth-920e8b/overview" target="_blank" rel="noreferrer" > Netlify</a>
          </small>
          </footer>
      </div>
    </div>
  );
}
