import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function RedirectTo(){
    const history = useHistory();

    const location = useLocation();

    useEffect(() => {
        history.push({pathname: location.state.path}, {object: location.state.object});
    }, []);

    return null;
} 