import React from "react";
import Child from "./Child";
export default function Parent() {
    return (
        <>
            Hello, I am the parent.<br/>
            I will get my child to render some data Here<br/>
            <Child data={"some data parent passed to child - 123 child testing"}/>
        </>
    )
}