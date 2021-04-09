import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import GagnotteContext from '../common/GagnotteContext';

function Confirmation() {
    const context = useContext(GagnotteContext);
    const history = useHistory();
    const handleClick = () => {
        history.push('/');
    }

    return (
        <div className="text-center">
            <div className="display-4 mb-5">
                <i className="fas fa-check-circle"></i>
            </div>
            <h1>Confirmation</h1>
            <p className="mt-5">
                Anna vous remercie pour votre contribution !
            </p>
            <div className="border border-light my-2 p-3">
                {context.email}
            </div>
            <div className="border border-light my-2 p-3">
                {context.montant} &euro;
            </div>
            <button className="btn btn-primary mt-2 shadow-lg" onClick={handleClick}><i class="fas fa-arrow-left"></i> Retour</button>
        </div>
    );
}

export default Confirmation;
