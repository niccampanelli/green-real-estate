import React, { Fragment, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

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