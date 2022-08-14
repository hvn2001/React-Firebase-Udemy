import WelcomeBanner from "./WelcomeBanner";
import Course from "./Course";
import React from "react";

export default function Profile({user}) {
    return (
        <>
            <WelcomeBanner user={user}/>
            <Course user={user}/>
        </>
    )
}