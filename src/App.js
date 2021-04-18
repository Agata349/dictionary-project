import logo from "./logo.jpg";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      <img src={logo} className="App-logo img-fluid" alt="logo"/>
      </header>
      <main>
        <Dictionary defaultKeyword="book"/>
      </main>
      <footer>
        <small>
          Coded by Agata Piekarczyk - <a href="https://github.com/Agata349/dictionary-project" >open-sourced on GitHub</a>, hosted on <a href="https://app.netlify.com/sites/heuristic-booth-920e8b/overview" > Netlify</a>
          </small>
          </footer>
      </div>
    </div>
  );
}
