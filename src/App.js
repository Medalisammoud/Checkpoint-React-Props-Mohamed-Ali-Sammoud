import './App.css';
import Profile from './Profile/Profile';
import image from './Profile/photoprofile.jpg';

function App() {
  return (
    <div className="App">
    <Profile  name='Mohamed Ali Sammoud'
     bio='is a fashion consultant who loves runway shows, designer handbags and loads of coffee. Contact Mohamed Ali via FB.' 
     profesion="Titulaire d'un License de développement des systèmes d'information." 
     enPress="handleName">{image}</Profile> 
     
    </div>
  );
}

export default App;
