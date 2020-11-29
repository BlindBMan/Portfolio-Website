import React from 'react'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import EmailForm from "../components/email-form/EmailForm";

export default function Contact() {
    return (
        <div style={{height: "100%"}}>
            <Header />
            <EmailForm />
            <Footer />
        </div>
    )
}