import { useState } from 'react';

function Admin() {
    const [resultatsApi, setResultatsApi] = useState([]);

    const handleClick = () => {
        fetch('http://xonatis.academy/react/api/dwwm5/contributions', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(response => setResultatsApi(response));
    }

    let contributions = [];
    for (const resultat of resultatsApi) {
        contributions.push(
            <div className="my-2">
                <h2># {resultat.id}</h2>
                <div>{resultat.email}</div>
                <div>{resultat.montant} &euro;</div>
            </div>
        );
    }

    return (
        <div className="text-center">
            <h1>Contributions</h1>
            <div className="my-5">
                <button className="btn btn-primary" onClick={handleClick}>Actualiser</button>
            </div>
            <div>
                {contributions}
            </div>
        </div>
    );
}

export default Admin;