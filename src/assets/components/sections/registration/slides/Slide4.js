import React from 'react';
import Checkmark from '../../../../img/checkmark.png';
import {Link} from 'react-router-dom';

class Slide4 extends React.Component{
    email = React.createRef();
    password = React.createRef();

    render(){
        const name = this.props.name;
        const plan = this.props.plan;
        return (
            <div className='slide1 slide4'>
                <p className="headline">Congratulations {name}!<br />
                    You've registered for the {plan} plan, <br />
                    but don't worry, we wont charge you until your trials up.
                </p>

                <Link to="/" className="seePlans continue">BROWSE MOVIES</Link>

            </div>
        )
    }
}

export default Slide4;