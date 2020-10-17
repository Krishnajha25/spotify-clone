import React from 'react'
import './Login.css'

function Login() {
    return (
        <div>
            <div className="login">
            {/* Spotify Logo */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png" />
                <a>Login with Spotify</a>
            </div>
        </div>
    )
}

export default Login