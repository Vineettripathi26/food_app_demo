import React from "react"
import { useRouteError } from "react-router"



export const Error = () => {

const err = useRouteError();
// console.log(err)
    return (
        <div>
            <h1>{err.status}</h1>
            <h2>{err.statusText}</h2>
        </div>
    )
}
