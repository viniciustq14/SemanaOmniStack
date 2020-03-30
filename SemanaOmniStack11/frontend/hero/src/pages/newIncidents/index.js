import React from 'react';
import{Link} from 'react-router-dom'
import './styles.css'

export default function Incidents(){
    return(
        <div className='incident-container'>
        <div className='content'>
            <section>
            <h1>Cadastro novo caso</h1>
            <p>Descreva teu Cadastro</p>
            <Link to='/profile' className='back-link'>
                Voltar para home
            </Link>
            </section>

            <form>  
                <input placeholder='Titulo do caso'/>
                <textarea  placeholder='Descriçao'/>
                <input placeholder='Valor em reais'/>

               
                <button type='submit' className='bottom' >Cadastrar</button>
            </form>
        </div>
       </div>
    )
}
