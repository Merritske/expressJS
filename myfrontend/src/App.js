import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
function App() {
  const clickHandler = (e)=>{
    e.preventDefault()
    fetch("/posts")
    .then(res=>res.json())
    .then((data)=>{
      console.log(data)
    })
  }
  return (
    <div className="App">
      <header className="App-header"> 
      <Navbar />
      <button onClick={clickHandler} style={{"backgroundColor": "red", "height": "50px", 'width': 200, "borderRadius": 15, "fontSize": 30, "cursor": "pointer"  }} > get backend </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
        onClick={clickHandler}
          className="App-link"
          href="#"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     
    </div>
  );
}

export default App;
