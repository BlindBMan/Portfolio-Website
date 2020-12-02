import React from "react";
import { useRouter } from "next/router";
import SpecificProject from "../../components/specificProjectTemplate/specificProject";

export default function Project() {
    const router = useRouter()
    let arr = router.asPath.split('/')
    const ttitle = arr[arr.length - 1]

    return (
        <SpecificProject
            title={ttitle}
        />
    )
}
