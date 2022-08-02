import React, { useState } from "react";
import Page from "../prototypes/Page";

const Home = () => {
    return (
        <Page main={
            <main className="main-part-home">
                <div className="div-with-circle">
                    <div className="circle">
                        <div className="circle-text">
                            <div className="half-circle-1"><a href="auth/sign-in" className="sign-in-btn" id="sign-in-btn">Sign In</a></div>
                        </div>
                        <hr  align="center" width="90%" size="4" color="#474747" />
                        <div className="circle-text">
                            <div className="half-circle-2"><a href="auth/sign-up" className="sign-up-btn" id="sign-up-btn">Sign Up</a></div>
                        </div>
                    </div>
                </div>
            </main>
        } />
    );
}

export default Home;