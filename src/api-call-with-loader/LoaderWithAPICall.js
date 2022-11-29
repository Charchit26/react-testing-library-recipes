import React, {useEffect, useState} from "react";
import callAnApi from "./api";

export default function LoaderWithAPICall() {

    const [data, setData] = useState();
    const [loading, setLoader] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoader(true);
            const response = await callAnApi()
            setData(response.data)
            setLoader(false);
        }

        fetchData().then(() => {});
    }, []);

    return (
        <>
            {loading ? "Loading..." : `Data obtained from API call: ${data}`}
        </>)
}