
import React, { useRef, useEffect, useState } from 'react';
import MyD3Component from "./MyD3Component.jsx";
import ProgressBar from "./progress.jsx";
import PieChart from "./PieChart.jsx";
import Header from "./Header.jsx"
import UserInput from "./UserInput.jsx"
import './App.css';



/* App */

let colors = {
	'color0': '#ccfe8b',
	'color1': '#f0bf00',
	'color2': '#f6e50e',
	'color3': '#fff688',
	'color4': '#5f63ec',
	'color5': '#71a8ff',
	'color6': '#0f7ab4',
	'color7': '#d4e4ff',
	'color8': '#58fdd1',
}

let revenueData = [{ name: "Medical Center", value: 45, color: colors.color1 }, { name: "Student Fees", value: 4, color: colors.color2 }, { name: "State of California", value: 8, color: colors.color3 }, { name: "Tuition", value: 11, color: colors.color4 }, { name: "Research Grants and Contracts", value: 13, color: colors.color5 }, { name: "Pell Grants", value: 1, color: colors.color6 }, { name: "Non-educational Services", value: 11, color: colors.color7 }, { name: "Gifts, Endowments, Interest, Etc.", value: 7, color: colors.color0 }]

let expenditureData = [{ name: "Medical Center", value: 43, color: colors.color1 }, { name: "Teaching and Teaching Support", value: 23, color: colors.color2 }, { name: "Research", value: 11, color: colors.color3 }, { name: "Student Services and Financial Aid", value: 8, color: colors.color4 }, { name: "Operations and Maintenance (Buildings, etc)", value: 2, color: colors.color8 }, { name: "Administration", value: 3, color: colors.color5 }, { name: "Non-Educational Services", value: 2, color: colors.color6 }, { name: "Public Service", value: 2, color: colors.color7 }, { name: "Depreciation, Interest, etc.", value: 6, color: colors.color0 }]

let userExpData = [{ name: "Medical Center", value: 0, color: colors.color1 }, { name: "Teaching and Teaching Support", value: 0, color: colors.color2 }, { name: "Research", value: 0, color: colors.color3 }, { name: "Student Services and Financial Aid", value: 0, color: colors.color4 }, { name: "Operations and Maintenance (Buildings, etc)", value: 0, color: colors.color8 }, { name: "Administration", value: 0, color: colors.color5 }, { name: "Non-Educational Services", value: 0, color: colors.color6 }, { name: "Public Service", value: 0, color: colors.color7 }, { name: "Depreciation, Interest, etc.", value: 0, color: colors.color0 }]

let userRevData = [{ name: "Medical Center", value: 0, color: colors.color1 }, { name: "Student Fees", value: 0, color: colors.color2 }, { name: "State of California", value: 0, color: colors.color3 }, { name: "Tuition", value: 0, color: colors.color4 }, { name: "Research Grants and Contracts", value: 0, color: colors.color5 }, { name: "Pell Grants", value: 0, color: colors.color6 }, { name: "Non-educational Services", value: 0, color: colors.color7 }, { name: "Gifts, Endowments, Interest, Etc.", value: 0, color: colors.color0 }]

let allData = [userExpData, userRevData, expenditureData, revenueData]

let progress = [{ name: 'REVENUES', value: 1 }, { name: 'EXPENSES', value: 1 }, { name: 'COMPARE', value: 1 }]

const progressBarDiv = {
	display: "flex",
	"flexDirection": "row",
	"justifyContent": "space-around",
	"width": "90%",
}

function App() {
	//const [pieRevenueData, setPieRevenueData] = useState(userRevData);
	const [pieData, setPieData] = useState(allData);
	const [progressBar, setProgressBar] = useState(progress);
	const [stage, setStage] = useState(0);

	let updateData = (childData) => {
		console.log(childData)
		setStage(stage + 1)
		if (stage < 2) {
			setPieData(childData)
			let temp = progressBar
			for (let i in temp) {
				temp[i].value += 1
			}
			setProgressBar([...temp])
			console.log(progressBar)
		}
	}

	let previousState = (childData) => {
		setPieData(childData)
		setStage(stage - 1)
		let temp = progressBar
		for (let i in temp) {
			temp[i].value -= 1
		}
		setProgressBar([...temp])
	}

	let restart = () => {
		//setStage(0)
		//setPieData([...allData])
		//setProgressBar([...progress])
		location.reload();
		return false;
	}

	return (
		<div id="container">
			<Header name="header" />
			<div style={progressBarDiv}>
				<h3>EXPENSES</h3>
				<h3>REVENUE</h3>
				<h3>COMPARE</h3>
			</div>
			<ProgressBar name="pbar" data={(progressBar)} />
			<UserInput data={pieData} stage={stage} callBackFn1={updateData} callBackFn2={previousState} callBackFn3={restart} />
		</div>
	)
}


export default App;