import React from 'react'
import styles from './ServiceComponent.module.css'
import LaptopSVG from '../../public/assets/svgs/laptop.svg'


export default function ServiceComponent(props) {
    return (
        <div className={`${styles.serviceComponent} container col-sm-3`}>
            <div className="d-flex flex-column"
                 style={{height: "auto"}}
            >
                <LaptopSVG className="align-self-center" />

                <p className="align-self-center"
                   style={{fontSize: "1.7vw", paddingTop: "2.63vh", color: "white"}}
                >
                    {props.title}
                </p>

                <p className={`${styles.serviceDescription} align-self-center`}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                </p>
            </div>

        </div>
    )
}