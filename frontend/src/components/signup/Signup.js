import React from 'react'

export default function Signup() {
    return (
        <div>
            <form action="">
                <input type="text" placeholder="Username" />
                <select>
                    <option value="Madrid">Madrid</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Miami">Miami</option>
                    <option value="Paris">Paris</option>
                    <option value="Berlin">Berlin</option>
                    <option value="Amsterdam">Amsterdam</option>
                    <option value="México">México</option>
                    <option value="Sao Paulo">Sao Paulo</option>
                </select>
                <select>
                    <option value="WebDev">WebDev</option>
                    <option value="UX/UI">UX/UI</option>
                    <option value="Miami">Miami</option>
                    <option value="Data Analytics">Data Analytics</option>
                </select>
                <input type="password" placeholder="Password" />
                <input type="submit" value="signup"/>
            </form>
        </div>
    )
}