import './App.css';
import Form from './components/Form';
import logo from './images/logo.svg'

function App() {
  return (
    <div className="wrapper">
      <img src={logo} alt="logo" className="logo" />
      <Form />
    </div>
  );
}

export default App;
