import {useState} from 'react';
import './App.css';

function App() {

  let date = new Date();
  let timeNew = date.toLocaleTimeString();
  console.log(date.getSeconds());
  const [time, setTime] = useState(timeNew);

  const UpdateTime = () => {
    let date = new Date();
    let newTime = date.toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(function(){
    UpdateTime()
  }, 1000);

  return (
    <div className="App">
      <p className='shower_time'>{time}</p>
    </div>
  );
}

export default App;
