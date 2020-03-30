import React,{useState} from 'react'
import {Link,useHistory}from 'react-router-dom';
import api from '../../sevices/api'
import './styles.css'
import '../../global.css'

export default function Register(){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[WhatsApp,setWhatsApp]=useState('');
    const[City,setCity]=useState('');
    const[UF,setUF]=useState('');

        const history=useHistory()
    async function handleRegister(e){
        e.prevetDefault();

        const data={
            name,email,WhatsApp,City,UF
        }
        try {
            const response= await api.post('ongs',data);
            alert(`Seu id de acesso ${response.data.id}`);
            history.push('/')
        } catch (error) {
            alert('Erro tente nonamente')
        }
    }


    return(
       <div className='register-container'>
        <div className='content'>
            <section>
            <h1>Cadastro</h1>
            <p>Faça deu Cadastro</p>
            <Link to='/' className='back-link'>
                Nao tenho cadastro
            </Link>
            </section>

            <form onSubmit={handleRegister}>  
                <input placeholder='Nome da ONG'
                value={name}
                onChange={e=>{setName(e.target.value)}}/>
                <input type='email' placeholder='E-mail' value={email}
                onChange={e=>{setEmail(e.target.value)}}/>
                <input placeholder='WhatsApp'/>

                <div className='input-group'>
                <input placeholder='Cidade' value={City}
                onChange={e=>{setCity(e.target.value)}}/>
                <input placeholder='UF' style={{width:80}} value={UF}
                onChange={e=>{setUF(e.target.value)}}/>
                </div>
                <button type='submit' className='bottom' >Cadastrar</button>
            </form>
        </div>
       </div>
    )
}