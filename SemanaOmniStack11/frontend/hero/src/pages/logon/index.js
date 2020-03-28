import React from 'react';
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

            <a href='/register'>
                Nao tenho cadastro
            </a>
        </form>

        </section>
      </div>
    );
}