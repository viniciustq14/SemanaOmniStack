import React from 'react'
import {Link}from 'react-router-dom';
import './styles.css'

export default function Register(){
    return(
       <div className='register-container'>
        <div className='content'>
            <section>
            <h1>Cadastro</h1>
            <P>Faça deu Cadastro</P>
            <Link to='/' className='back-link'>
                Nao tenho cadastro
            </Link>
            </section>

            <form>  
                <input placeholder='Nome da ONG'/>
                <input type='email' placeholder='E-mail'/>
                <input placeholder='WhatsApp'/>

                <div className='input-group'>
                <input placeholder='Cidade'/>
                <input placeholder='UF' style={{width:80}}/>
                </div>
                <button type='submit' className='bottom' >Cadastrar</button>
            </form>
        </div>
       </div>
    )
}