import React from 'react'

export default function Temp() {
    return (
        <div>
            <form action="/sendForm" method="POST">
                <div>
                    <label htmlFor="say">What greeting do you want to say?</label>
                    <input id="say" type='text' name="username" />
                </div>
                <div>
                    <label htmlFor="to">Who do you want to say it to?</label>
                    <input id="to" type='password' name="password"/>
                </div>
                <div>
                    <button type='submit'>Send my greetings</button>
                </div>
            </form>
        </div>
    )
}
