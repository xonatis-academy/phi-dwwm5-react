import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import GagnotteContext from '../common/GagnotteContext';

function AmountEnter() {
    const context = useContext(GagnotteContext);
    const history = useHistory();
    const handleClick = () => {
        context.montant = montant;
        history.push('/confirmation');
    }

    const [montant, setMontant] = useState(30);
    const handleChangeMontant = (event) => {
        setMontant(event.target.value);
    };

    return (
        <div className="text-center">
            <div className="display-4 mb-5">
                <i className="fas fa-wallet"></i>
            </div>
            <h1 className="pb-2">Etes-vous généreux(se) ou radin(e) ?</h1>
            <div className="form-group mt-5">
                <label>Veuillez entrer le montant :</label>
                <input type="number" value={montant} onChange={handleChangeMontant} className="form-control text-center form-control-lg"></input>
            </div>
            <button className="btn btn-primary mt-5 shadow-lg" onClick={handleClick}>Confirmer <i className="fas fa-arrow-right"></i></button>
        </div>
    );
}

export default AmountEnter;
