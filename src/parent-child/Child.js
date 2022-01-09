import React from "react"
export default function Child({ data }) {
    return (
        <>
            <br />
            Hi!, I am the child of my parent<br />
            My job is to just display/render something passed by my parent.<br />
            Here you go - {data}
        </>
    )
}