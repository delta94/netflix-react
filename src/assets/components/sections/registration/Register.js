import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'
import Slide4 from './slides/Slide4'
import Fade from 'react-reveal/Fade';
class Registration extends React.Component{
    state = {
        step: 1,
        plan: '',
        account: {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    };

    nextStep = () => {
        this.setState({
            step : this.state.step + 1
        })
    };

    accountInfo = info =>{
        this.setState({
            account: info
        })
    };

    plan = (c) => {
        this.setState({
            plan: c
        })
    };

   switchSlide = () => {
        switch (this.state.step) {
            case 1:
                return <Slide1
                    nextStep={this.nextStep}/>;
            case 2:
                return(
                    <Fade>
                        <Slide2
                            nextStep={this.nextStep}
                            plan={this.plan}/>
                    </Fade>
                );
            case 3:
                return(
                    <Fade>
                        <Slide3
                            nextStep={this.nextStep}
                            account={this.accountInfo}
                            state={this.state.account}
                        />
                    </Fade>
                );
            case 4:
                return(
                    <Fade>
                        <Slide4 name={this.state.account.firstName}
                                plan={this.state.plan}/>
                    </Fade>
                );
        }
    };

    render() {
        return(
            <div className="slideContainer">
                {this.switchSlide()}
            </div>
        )
    }
}
export default Registration;
