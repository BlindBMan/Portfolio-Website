import React from 'react'
import '../styles/SpecificProject.module.css'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CustomBtn from "../components/CustomBtn/CustomBtn";

export default function SpecificProject() {
    return (
        <div id="specific-project-container">
            <Header />

            <div id="main-container" className="d-flex flex-column h-100">
                <div className="flex-column row"
                     style={{marginBottom: "6.57vh", width: "100%"}}
                >
                    <h1 className="title align-self-center">
                        Specific Project
                    </h1>
                </div>

                <div className="row d-flex" style={{width: "100%", marginBottom: "5vh"}}>
                    <div id={"imgs-container"} className={"col-sm-7"}>
                        <img src={"/assets/images/test_pic.jpg"} alt={"rr"} />
                        <img src={"/assets/images/test_pic.jpg"} alt={"rr"} />
                        <img src={"/assets/images/test_pic.jpg"} alt={"rr"} />
                        <img src={"/assets/images/test_pic.jpg"} alt={"rr"} />
                    </div>

                    <div className={"row d-flex flex-column col-sm-4"}
                         style={{width: "100%", paddingRight: "5vw", paddingLeft: "0"}}
                    >
                        <div className={"description align-self-center"}
                             style={{marginTop: "0",
                                     lineHeight: "2.5",
                                     letterSpacing: "2.2px"
                             }}
                        >
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        </div>
                        <div id={"tech-container"} className={"d-flex flex-column mt-auto align-self-center"}>
                            <div className={"row align-self-center"} style={{marginTop: "35px"}}>
                                <h6
                                    style={{
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        fontSize: "1.2rem"
                                    }}
                                >
                                    Technologies used
                                </h6>
                            </div>
                            <div
                                className={"row align-self-center"}
                                style={{
                                    marginBottom: "25px",
                                    marginTop: "auto",
                                    width: "100%"
                                }}
                            >
                                <ul style={{
                                    marginLeft: "40px"
                                }}>
                                    <li>tech1</li>
                                    <li>tech1</li>
                                    <li>tech1</li>
                                </ul>
                                <ul style={{
                                    marginLeft: "auto",
                                    marginRight: "60px"
                                }}>
                                    <li>tech2</li>
                                    <li>tech2</li>
                                    <li>tech2</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"row align-items-end flex-column col-sm-11"}
                     style={{
                         width: "100%",
                         marginBottom: "5vh",
                         paddingRight: "0"
                     }}
                >
                    <CustomBtn content={"Github"}/>
                </div>
            </div>

            <Footer />
        </div>
    )
}
