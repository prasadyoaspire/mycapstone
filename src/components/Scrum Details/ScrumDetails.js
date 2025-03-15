import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/UserContext';
import Login from '../Login/Login';

const ScrumDetails = ({team}) => {
    console.log("sxrum details ")
    const [scrumDetails, setScrumDetails] = useState(null);
    const { user } = useAuth();

    // const { id } = useParams();

    useEffect(() => {
        axios.get(" http://localhost:4000/tasks?scrumId=" + team.id)
            .then(resp => setScrumDetails(resp.data[0]));
    }, [team.id])

    if (!user) {
        return <Login />
    }
    else 

    return (
        <div>
            {
                scrumDetails !== null && <>
                <h3>Scrum Details for {team.name}</h3>
                <p>{scrumDetails.id}</p>
                </>

            }
        </div>
    );
};

export default ScrumDetails;