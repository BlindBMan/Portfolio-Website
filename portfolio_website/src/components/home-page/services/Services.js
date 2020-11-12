import React from 'react'
import './Services.css'
import ServiceComponent from './ServiceComponent'
import CustomBtn from "../../CustomBtn/CustomBtn";

export default function Services() {
    return (
        <div id="services" className=".container d-flex justify-content-center">
            <div className="d-flex flex-column">
                <div className="d-flex flex-column row">
                    <h1 className="title">
                        My services
                    </h1>
                    <p className="description align-self-center">
                        This are some, but not limited to, of the services I can provide for my clients.
                        Topped by fast and bug free delivery.
                    </p>
                </div>

                <div className=" row service-components">
                    <ServiceComponent
                        title="Web Development"
                        content=""
                    />

                    <ServiceComponent
                        title="Web Development"
                        content=""
                    />

                    <ServiceComponent
                        title="Web Development"
                        content=""
                    />
                </div>

                <div className="d-flex flex-column row my-btn">
                    <div className="align-self-center">
                        <CustomBtn content="Hire me!"/>
                    </div>

                </div>
            </div>
        </div>
    )
}
