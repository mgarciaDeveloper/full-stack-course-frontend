import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import './login.css'
export default function Login() {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [success, setsucess] = useState({
        status: false,
        mensagem: ''
    })

    const navigate = useNavigate()

    function submitValues() {
        console.log({
            username,
            password,
        })
        Axios({
            method: 'POST',
            params: {
                username,
                password,
            },
            withCredentials: true,
            url: 'http://localhost:3000/login'
        }).then((res) => {
            if (res) {

                if (res.data.status) {
                    navigate('/sucesso')
                }
                else {
                    setsucess(res.data)
                }


            }
        })
    }


    return <div className="login-container">

        <form style={{ width: '80%' }} >

            <p style={{ color: 'white' }}>WELCOME!</p>
            <br />
            <input value={username} onChange={(e) => {
                setusername(e.target.value)
            }} style={{ width: '100%' }} type="text" placeholder="usurname" />
            <input
                value={password}
                onChange={(e) => [
                    setpassword(e.target.value)
                ]}

                style={{ width: '100%' }} type="password" placeholder='password' />
            <br />
            <button className="login-button" onClick={(event) => {
                event.preventDefault();
                submitValues();
            }}>

                Enviar
            </button>

            <br />
            <p style={{ color: 'white' }}> {success.mensagem} </p>
            <br />

        </form>

    </div>
}