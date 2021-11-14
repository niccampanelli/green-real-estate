import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

export default function RedirectTo(){
    const history = useHistory();

    const location = useLocation();

    useState(() => {
        console.log(location.state.path);
        console.log(location.state.object);

        history.push({pathname: location.state.path}, {object: location.state.object});
    }, []);

    return null;
} 