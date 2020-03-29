import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css'
import '../../global.css'
export default function Logon(){
    return(
      <div className='logon-container'>
        <section className='form'>

        <form>
            <h1>faça seu logon</h1>
            <input placeholder='Sua ID'/>
            <button type='submit' className='bottom'>Entrar</button> 

            <Link to='/register' className='back-link'>
                Nao tenho cadastro
            </Link>
        </form>

        </section>
      </div>
    );
}