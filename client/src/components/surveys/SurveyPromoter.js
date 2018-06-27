import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payment from '../Payment';

const SurveyPromoter = ({auth}) => {
    return <div className="card green lighten-4" style={{ marginTop: "40px" }}>
        <div className="card-content">
            <span className="card-title">Get started!</span>
            { renderBody(auth) }
        </div>
        <div className="card-action">
            { renderAction(auth) }
            <a className="black-text" style={{ marginLeft: "20px" }}>Current Credits: { auth? auth.credits : null }</a>
        </div>
    </div>
};

function renderBody(auth) {
    if (auth) {
        if (auth.credits > 0) {
            return <p>Great! You now have some credits. Make your first survey now! <br/>You can only make a survey with <strong><em>a single yes/no question</em></strong> for now... make it count!</p>;
        } else {
            return <p>Get yourself some credits and start sending surveys!<br /> You may use the fake credit card number <strong><em>4242 4242 4242 4242</em></strong> with any date in the future, CVC and fake email.</p>;
        }
    }
}

function renderAction(auth) {
    if (auth) {
        if (auth.credits > 0) {
            return <Link to="/surveys/new" className="btn red">Add New Survey!</Link>;
        } else {
            return <Payment />;
        }
    }
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(SurveyPromoter);