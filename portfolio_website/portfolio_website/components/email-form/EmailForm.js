import React from 'react'
import './EmailForm.module.css'
import CustomBtn from "../CustomBtn/CustomBtn";

export default function EmailForm() {
    return (
        <div id="email-form" className=".container">
            <div className="container d-flex flex-column">
                <div className="d-flex flex-column row">
                    <h1 className="title">
                        Contact
                    </h1>
                    <p className="description align-self-center">
                        This are some, but not limited to, of the services I can provide for my clients.
                        Topped by fast and bug free delivery.
                    </p>
                </div>

                <div className="row d-flex flex-column">
                    <div className="row justify-content-center input-container">
                        <input
                            className="col-sm-4"
                            placeholder="Full name"
                        />
                        <input
                            className="col-sm-4"
                            placeholder="Email"
                        />
                    </div>

                    <div className="row justify-content-center">
                        <textarea
                            className="col-sm-9"
                            placeholder="Your message here..."
                        />
                    </div>

                </div>

                <div className="d-flex flex-column row my-btn">
                    <div className="align-self-center">
                        <CustomBtn content="Email me!"/>
                    </div>
                </div>
            </div>
        </div>
    )
}