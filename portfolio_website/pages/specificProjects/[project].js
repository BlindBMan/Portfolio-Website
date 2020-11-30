import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import SpecificProject from "./specificProject";

export default function Project() {
    const router = useRouter()
    const { project } = router.query

    // const [data, setData] = useState({})
    // const getData = () => {
    //     fetch(`/assets/images/project1/data.json`,
    //         {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             }
    //         }).then(response => {
    //             console.log(response)
    //             return response.json()
    //     }).then(respJson => {
    //         console.log(respJson)
    //         setData(respJson)
    //     });
    // }
    //
    // // const getData = () => {
    // //     fetch("/assets/images/project1/data.json")
    // //         .then(response => response.json())
    // //         .then(data => console.log(data))
    // // }
    //
    // useEffect(() => {
    //     getData()
    // }, [])

    return (
        <SpecificProject
            title={project}
        />
    )
}
