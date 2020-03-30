import React,{useEffect,useState} from 'react';
import{Link} from 'react-router-dom';
import api from '../../sevices/api'
import './styles.css'
export default function Profile(){
    const ongId=localStorage.getItem('ongId')
    const ongName=localStorage.getItem('ongName')
    const [incidents,setIncidenst]=useState([])
    useEffect(( )=>{
        api.get('/profile',{
            headers:{
                Autorization:ongId
            }
        }).then(res=>{
            setIncidenst(res.data)
        })
    },[])
    return(
        <div className='profile-container'>
            <header >
                <span>Bem-vindo {ongName}</span>
                <Link className='bottom' to='newIncidents'>Cadastar novo caso</Link>
                <button type='button'>Icone</button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident=>(
                      <li key={incident.id}>
                      <strong>Caso:</strong>
                      <p>{incident.title}</p>
                      <strong>Descrição:</strong>
                      <p>{incident.description}</p>
                      <strong>Valor:</strong>
                      <p>{Intl.NumberFormat('pt-br',{ style :'currency',currency:'BRL'}).format(incident.value)}</p>
                      <button type='button'>x</button>
                  </li>
                ))}
              

            </ul>
        </div>
    )
}