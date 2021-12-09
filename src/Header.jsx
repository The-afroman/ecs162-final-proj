import React from 'react';


const main = {
	"display": "flex",
	"flex-direction": "column",
	"justify-content": "center",
	"align-items": "center",
	"width": "70%",
}



function Header() {
	return (
		<div style={main}>
			<h1>Slice the Pie</h1>
			<p>Say you got to run the University. How much would you allocate to different sectors? Learn about your funding sources, with a guessing game.</p>
			<p>You make your choices by inputting percentages of each section of a pie chart. See how well your choices match the ones the real Provosot made.</p>
		</div>
	)
}

export default Header;