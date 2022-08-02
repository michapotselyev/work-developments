import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NoPage from "./components/pages/NoPage";
import SignIn from "./components/pages/Sign-In";
import SignUp from "./components/pages/Sign-up";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
                <Route path="/auth">
                    <Route path="/auth/sign-in" element={<SignIn />} />
                    <Route path="/auth/sign-up" element={<SignUp />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;