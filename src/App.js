import logo from './logo.svg'
import './App.css'
import ButtonComponents from './Components/ButtonComponents'
import ImageComponent from './Components/ImageComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponents nomeBottone="Acquista" />
        <ButtonComponents nomeBottone="Elimina" />
        <ImageComponent
          link="https://placekitten.com/150"
          alt="immagine-gatto"
        />
        <ImageComponent
          link="https://placekitten.com/170"
          alt="immagine-gatto"
        />
      </header>
    </div>
  )
}

export default App
