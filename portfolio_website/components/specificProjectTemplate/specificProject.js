import React, {useEffect, useState} from 'react'
import styles from '../../styles/SpecificProject.module.css'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import CustomBtn from "../CustomBtn/CustomBtn";
import Row from "react-bootstrap/cjs/Row";

export default function SpecificProject(props) {
    const [data, setData] = useState({})

    const getData = () => {
            fetch(`/assets/images/${props.title}/data.json`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(response => {
                return response.json()
            }).then(respJson => {
                setData(respJson)
            }).catch(err => console.log(err));
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Header />
            <div className={`${styles.mainContainer} d-flex flex-column h-100`}>
                <Row className="flex-column"
                     style={{marginBottom: "6.57vh", width: "100%"}}
                >
                    <h1 className={`${styles.title} align-self-center`}>
                        {data.title}
                    </h1>
                </Row>

                <Row className="d-flex" style={{width: "100%", marginBottom: "5vh"}}>
                    <div className={`${styles.imgsContainer} col-md-6`}>
                        <img className={`${styles.imgStyle} ${styles.imgStyleMobile}`} src={`/assets/images/${props.title}/1.jpg`} alt={""} />
                        <img className={`${styles.imgStyle} ${styles.imgStyleMobile}`} src={`/assets/images/${props.title}/2.jpg`} alt={""} />
                        <img className={`${styles.imgStyle} ${styles.imgStyleMobile}`} src={`/assets/images/${props.title}/3.jpg`} alt={""} />
                        <img className={`${styles.imgStyle} ${styles.imgStyleMobile}`} src={`/assets/images/${props.title}/4.jpg`} alt={""} />
                    </div>

                    <Row className={`${styles.descRow} d-flex flex-column col-md-4 col-sm-5`}
                    >
                        <div className={`${styles.description} align-self-center`}
                        >
                            {data.description}
                        </div>
                        <div className={`${styles.techContainer} d-flex flex-column mt-auto align-self-center`}>
                            <Row className={`${styles.titleRow} align-self-center`}>
                                <h6
                                    className={styles.listsTitle}
                                >
                                    Technologies used
                                </h6>
                            </Row>
                            {
                                data.tech && data.tech.length > 0 &&
                                    <Row
                                        className={`${styles.listRow} align-self-center`}
                                    >

                                        <ul
                                            className={`${styles.leftList}`}
                                            >
                                            <li>{data.tech[0]}</li>
                                            <li>{data.tech[1]}</li>
                                            <li>{data.tech[2]}</li>
                                        </ul>

                                        <ul
                                            className={`${styles.rightList}`}
                                            >
                                            <li>{data.tech[3]}</li>
                                            <li>{data.tech[4]}</li>
                                            <li>{data.tech[5]}</li>
                                        </ul>
                                    </Row>
                            }
                        </div>
                    </Row>
                </Row>

                <Row className={`${styles.githubBtn} align-items-end flex-column col-sm-11`}
                    >
                    <CustomBtn content={"Github"}/>
                </Row>
            </div>

            <Footer />
        </div>
    )
}
