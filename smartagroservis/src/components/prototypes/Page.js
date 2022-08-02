import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Page = ({ main }) => {
    return (
        <>
            <Header />
            {main}
            <Footer />
        </>
    );
}

export default Page;