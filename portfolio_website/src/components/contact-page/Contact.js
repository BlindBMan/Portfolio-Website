import React from 'react'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import EmailForm from "./email-form/EmailForm";

export default function Contact() {
    return (
        <div style={{height: "100%"}}>
            <Header />
            <EmailForm />
            <Footer />
        </div>
    )
}