import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import GagnotteContext from '../common/GagnotteContext';

function AmountSelect() {
    const context = useContext(GagnotteContext);
    const history = useHistory();
    const handleClickConfirmationFactory = (montant) => () => {
        context.montant = montant;
        createContribution();
        history.push('/confirmation');
    }

    const handleClickOther = () => {
        history.push('/entrer-montant');
    }

    const createContribution = () => {
        fetch('http://xonatis.academy/react/api/dwwm5/contributions', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email: context.email,
                montant: context.montant
            })
        });
    }

    const buttons = [];
    for (const montant of [2, 5, 10, 20]) {
        buttons.push(<button className="btn btn-primary shadow-lg mx-1" onClick={handleClickConfirmationFactory(montant)}><i className="fas fa-check-circle"></i> {montant} &euro;</button>)
    }

    return (
        <div className="text-center">
        <div className="display-4 mb-5">
            <i className="fas fa-gifts"></i>
        </div>
        <h1>Combien souhaitez-vous offrir ?</h1>
        <div className="mt-5">
            {buttons}
        </div>
        <div className="mt-2">
            <button className="btn btn-primary shadow-lg" onClick={handleClickOther}>Choisir un autre montant ...</button>
        </div>
    </div>
    );
  }
  
  export default AmountSelect;
  