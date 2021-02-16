import React from 'react'
import styles from './ServiceComponent.module.css'
import LaptopSVG from '../../public/assets/svgs/laptop.svg'


export default function ServiceComponent(props) {
    return (
        <div className={`${styles.serviceComponent} container col-xs-2 col-sm-3`}>
            <div className="d-flex flex-column"
                 style={{height: "auto"}}
            >
                <LaptopSVG className={`${styles.svgMobile} align-self-center`} />

                <p className={`${styles.title} align-self-center`}>
                    {props.title}
                </p>

                <p className={`${styles.serviceDescription} align-self-center`}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                </p>
            </div>

        </div>
    )
}
