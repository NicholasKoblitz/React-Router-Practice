import React from "react";
import {Link} from 'react-router-dom';

const SourPatchKids = () => {

    return (
        <div>
        <h3>WoW! Those are sour!</h3>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXSmVp8sujSrg8SJQAzg4djmpkY9BbRSztw&usqp=CAU"} alt="Sour Patch Kids"/>
        <Link to="/">Go Back</Link>
    </div>
    )
    
}

export default SourPatchKids;