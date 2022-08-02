import React, { useState } from "react";
import Page from "../prototypes/Page";
import { registerHandler } from "../../templates/authProcess";

const SignUp = () => {
    const [data, setData] = useState({ username: "", password: "" });
    const eventChanger = (event) => setData({...data, [event.target.name]: event.target.value});
    const eventClicker = () => registerHandler(data);
    return (
        <Page main={
            <main>
                <div className="form-reg-div">
                    <form className="form-reg">
                        <label htmlFor="userName">Enter your name</label>
                        <input name="username" id="userName" type="text" onChange={eventChanger}></input>

                        <hr width="100%" size="4" color="#474747" />

                        <label htmlFor="userPass">Enter password</label>
                        <input  name="password" id="userPass" type="password" onChange={eventChanger}></input>

                        <hr width="100%" size="4" color="#474747" />

                        <label htmlFor="confPass">Confirm password</label>
                        <input id="confPass" type="password"></input>

                        <hr />

                        <input type="submit" value="SIGN UP" onClick={eventClicker} />
                    </form>
                </div>
            </main>
        } />
    );   
}

export default SignUp;
