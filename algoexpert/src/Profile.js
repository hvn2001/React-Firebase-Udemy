import WelcomeBanner from "./WelcomeBanner";
import Course from "./Course";
import React, {useContext} from "react";
import {UserContext} from "./UserContext";

export default function Profile() {
    const user = useContext(UserContext)
    return (
        <>
            <WelcomeBanner user={user}/>
            <Course user={user}/>
        </>
    )
}