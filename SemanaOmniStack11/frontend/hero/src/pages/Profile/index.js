import React from 'react';
import{Link} from 'react-router-dom';
import './styles.css'
export default function Profile(){
    return(
        <div className='profile-container'>
            <header >
                <span>Bem-vindo APAD</span>
                <Link className='bottom' to='incidents/new'>Cadastar novo caso</Link>
                <button type='button'></button>
            </header>
        </div>
    )
}