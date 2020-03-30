import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom'
import './styles.css'
import '../../global.css'
import api from '../../sevices/api'
import { func } from 'prop-types';
export default function Logon(){
    const [id,setId]=useState('')
    const history =useHistory();
    async function handleLogin(e){
      e.preventDefault()

      try {
        const response =await api.post('section',{id})
        
        localStorage=setItem('ongId',id)
        localStorage=setItem('ongName',response.data.name)
        history.push('/rpofile')
      } catch (error) {
        alert('Falha no login')
      }
    }
    return(
      <div className='logon-container'>
        <section className='form'>

        <form onSubmit={handleLogin}>
            <h1>faça seu logon</h1>
            <input placeholder='Sua ID' value={id} onChange={e=>setId(e.target.value)}/>
            <button type='submit' className='bottom'>Entrar</button> 

            <Link to='/register' className='back-link'>
                Nao tenho cadastro
            </Link>
        </form>

        </section>
      </div>
    );
}