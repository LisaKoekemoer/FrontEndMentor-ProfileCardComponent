import './App.css';
import ProfileComponent from './components/ProfileComponent';
import topPattern from './images/bg-pattern-top.svg'
import bottomPattern from './images/bg-pattern-bottom.svg'



function App() {
  return (
    <div className='App'>
      <img className='topPattern' src={topPattern} alt=""/>
      <ProfileComponent />
      <img className='bottomPattern' src={bottomPattern} alt=""/>
    </div>
  );
}

export default App;
