import React ,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';
import api from 'axios';

function App() {
  const [devs,SetDevs]=useState([]);

  
  useEffect(()=>{
    async function loadDevs(){
      const response =await api.get('/devs');

      SetDevs(response.data);
    }
  },[]);

  async function handleAddDev(data){
    
    const response =await api.post('/devs',data);

    
    SetDevs([...devs,response.data]);

}

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar </strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev=>{
            <DevItem key={dev._id} dev={dev}/>
          })}
          
        </ul>
      </main>
    </div>
  );
}

export default App;
