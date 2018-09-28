import React from "react";
import "./Panel.css";
import { Alert } from 'react-bootstrap';

const goodluck = require('../../img/goodluck.jpg');

const RulesPanel = () => (
	<header>
		<div className="rules">
      <Alert bsStyle="warning" bsClass="rules-alert">
        <h1>Click on any super hero to earn a point,<br/> but DON’T click on the same image more than once.</h1>
        <img className="glimage" src={goodluck} alt="Good Luck!" />
      </Alert>
    </div>
	</header>
);

export default RulesPanel;