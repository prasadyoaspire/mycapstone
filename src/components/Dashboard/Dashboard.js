import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/UserContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ScrumDetails from '../Scrum Details/ScrumDetails';
import Login from '../Login/Login';

const Dashboard = () => {

    const { user, logout } = useAuth();
    const [teams, setTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('');


    useEffect(() => {
        axios.get("http://localhost:4000/scrums").then(resp => setTeams(resp.data));
    }, [])

    const handleButton = (team) => {
        console.log("hanldebutton" + team.id + " " + team.name);
        setSelectedTeam(team);   
    }

    return (
        <div>
            <h1>Scrum Teams</h1>
            {
                teams.map(team => <li key={team.id}>
                    {/* {team.name} <Link to={`/scrum/details/${team.id}`}><button>Get Details</button></Link> */}
                    {team.name} <button onClick={() => handleButton(team)}>Get Details</button>

                </li>)              
            }

            {
                 selectedTeam && <ScrumDetails team={selectedTeam}/> 
            }

        </div>
    );
};

export default Dashboard;
