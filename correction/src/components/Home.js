import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import GagnotteContext from '../common/GagnotteContext';

function Home() {
    const context = useContext(GagnotteContext);
    const history = useHistory();
    const handleClick = () => {
        context.email = email;
        history.push('/choisir-montant');
    }

    const [email, setEmail] = useState('');
    const updateEmail = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className="text-center">
            <div className="display-4 mb-5">
                <i className="fas fa-birthday-cake"></i>
            </div>
            <h1 className="border border-light pb-2">Anna</h1>
            <p className="my-5">
                Bienvenue dans la cagnotte d'anniversaire d'Anna ! Avec cette application, montrez lui à quel point vous l'aimez (ou la détestez)
            </p>
            <div className="form-group">
                <label>Veuillez saisir votre email :</label>
                <input type="email" value={email} onChange={updateEmail} className="form-control text-center form-control-lg"></input>
            </div>
            <button className="btn btn-primary mt-5 shadow-lg" onClick={handleClick}>Participer <i className="fas fa-glass-cheers"></i></button>
        </div>
    );
}

export default Home;
