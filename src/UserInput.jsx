import React, { useRef, useEffect, useState } from 'react';
import PieChart from "./PieChart.jsx";
import ReactTooltip from "react-tooltip";

const inputCSS = {
	display: "flex",
	"flexDirection": "row",
	"justifyContent": "space-between",
	"width": "95%",
}

const totalPer = {
	display: "flex",
	"flexDirection": "row",
	"justifyContent": "center",
	"width": "70%",
}

const textbox = {
	"background-color": "#2e2e2e",
	"color": "white",
	"textAlign": "center",
}

const textboxRO = {
	"background-color": "#2e2e2e",
	"color": "white",
	"textAlign": "center",
	"userSelect": "none"
}

const main = {
	"display": "flex",
	"flexDirection": "column",
	"justifyContent": "center",
	"alignItems": "center",
	"width": "90%",
}

const div = {
	"display": "flex",
	"flexDirection": "row",
	"justifyContent": "space-around",
	"width": "60%",
}

const label = {
	"width": "55%",
}

const img = {
	"maxWidth": "20px",
	"maxHeight": "20px",
}

const button = {
	"padding": "10px 15px",
	"borderRadius": "30px",
	"width": "140px"
}

function UserInput(props) {
	let data = props.data
	let items
	let refArr

	const [input1, setInput1] = useState(0)
	const [input2, setInput2] = useState(0)
	const [input3, setInput3] = useState(0)
	const [input4, setInput4] = useState(0)
	const [input5, setInput5] = useState(0)
	const [input6, setInput6] = useState(0)
	const [input7, setInput7] = useState(0)
	const [input8, setInput8] = useState(0)
	const [input9, setInput9] = useState(0)
	const [total, setTotal] = useState(0)

	if (props.stage == 0) {
		items = data[0]
	} else {
		items = data[1]
	}

	const [pieData, setPieData] = useState(items);

	function updateData(event) {
		let index = items.map(function(e) { return e.name; }).indexOf(event.target.name);
		switch (index) {
			case 0:
				setInput1(event.target.value)
				break;
			case 1:
				setInput2(event.target.value)
				break;
			case 2:
				setInput3(event.target.value)
				break;
			case 3:
				setInput4(event.target.value)
				break;
			case 4:
				setInput5(event.target.value)
				break;
			case 5:
				setInput6(event.target.value)
				break;
			case 6:
				setInput7(event.target.value)
				break;
			case 7:
				setInput8(event.target.value)
				break;
			case 8:
				setInput9(event.target.value)
				break;
		}
		let sum = 0
		items[index].value = event.target.value;
		for (let i in items) {
			sum += parseInt(items[i].value)
		}
		if (sum > 100) {
			switch (index) {
				case 0:
					setInput1(0)
					items[0].value = 0
					break;
				case 1:
					setInput2(0)
					items[1].value = 0
					break;
				case 2:
					setInput3(0)
					items[2].value = 0
					break;
				case 3:
					setInput4(0)
					items[3].value = 0
					break;
				case 4:
					setInput5(0)
					items[4].value = 0
					break;
				case 5:
					setInput6(0)
					items[5].value = 0
					break;
				case 6:
					setInput7(0)
					items[6].value = 0
					break;
				case 7:
					setInput8(0)
					items[7].value = 0
					break;
				case 8:
					setInput9(0)
					items[8].value = 0
					break;
			}
		}
		sum = 0
		for (let i in items) {
			if (!isNaN(parseInt(items[i].value))) {
				sum += parseInt(items[i].value)
			} else {
				sum += 0
			}
		}
		setTotal(sum)
		setPieData([...items])
	}

	function nextBtn(event) {
		if (props.stage == 0) {
			data[0] = items
			document.getElementById("input-data").reset()
		} else if (props.stage == 1) {
			data[1] = items
			document.getElementById("input-data").reset()
		}
		if (event.target.name == "previous") {
			props.callBackFn2(data)
			setInput1(props.data[0][0].value)
			setInput2(props.data[0][1].value)
			setInput3(props.data[0][2].value)
			setInput4(props.data[0][3].value)
			setInput5(props.data[0][4].value)
			setInput6(props.data[0][5].value)
			setInput7(props.data[0][6].value)
			setInput8(props.data[0][7].value)
			setInput8(props.data[0][8].value)
			let sum = 0
			for (let i in props.data[0]) {
				sum += parseInt(props.data[0][i].value)
			}
			console.log("sum:", sum)
			setTotal(sum)
		} else if (event.target.name == "restart") {
			props.callBackFn3()
		} else {
			props.callBackFn1(data)
			setInput1(props.data[1][0].value)
			setInput2(props.data[1][1].value)
			setInput3(props.data[1][2].value)
			setInput4(props.data[1][3].value)
			setInput5(props.data[1][4].value)
			setInput6(props.data[1][5].value)
			setInput7(props.data[1][6].value)
			setInput8(props.data[1][7].value)
			let sum = 0
			for (let i in props.data[1]) {
				sum += parseInt(props.data[1][i].value)
			}
			console.log("sum:", sum)
			setTotal(sum)
		}
	}

	useEffect(() => {
		console.log("current stage is", props.stage)
		ReactTooltip.rebuild();
		if (props.stage > 1) {
			setPieData([...props.data[props.stage - 2]])
		} else {
			setPieData([...items])
		}
	}, [props])
	/*
	Revenue:
	
	Medical Center: A large, not-for-profit regional medical center, including multiple hospitals, labs and clinics. Income comes from patients, medical insurance companies, and government programs like medicare. 
	
	Student Fees: Fees are dedicated to specific services, such as athletic facilities, bus service (UNITRANS), student organizations, the CoHo and Student Community Center, etc. 
	
	State of California: General funds given by the taxpayers of California, appropriated annualy by the state legislature. General funds are not dedicated to specific services. 
	
	Tuition: Students pay tuition to attend the University. Non-California residents pay about twice as much as residents.  Tuition is also general funds.
	
	Research Grants and Contracts: Government and industry funds given to faculty and graduate students to perform research projects. These include up to 50% overhead in addition to the cost of the research. 
	
	Pell Grants: Federal grants for tuition and living expenses for low-income students. Percentage of students with Pell grants is a good way to measure who a University serves; at UCD, it's 34%; at Cal Tech it's 14%; at Sac State it's 71%.
	
	Non-educationsal Services: Services other than education that people pay for, like dorms, dining, parking, etc.  At UC Davis, this also includes almost $500M of revenue generated by medical school faculty, or 8%, making this category look really big.
	
	Gifts, Endowments, Interest, etc: Endowments are past gifts that were invested to provide income; interest is earned on other savings. The Museum is the direct result of a $10M gift from Jan Shrem and Maria Manetti Shrem.
	
	Expenditures:
	
	Medical Center: The cost of providing care at the Medical Center is roughly what we get paid to provide it.
	
	Teaching and Teaching Support: Professors, advisors, deans, the library, the computer labs, etc, including Medical School faculty salaries.
	
	Research: The costs of doing the research, mostly researcher salaries. 
	
	Student Services and Financial Aid:  Student Health, things covered by fees, Admissions, and also financial aid from the general funds, which is about $100M or 1.5%. 
	
	Operations and Maintenance: Upkeep of the grounds and building, and utilities, which are less than 1%.  
	
	Administration: Provost and Chancellor's offices, raising money, accounting, personnel, legal, making budgets. 
	
	Services: The costs of providing dorms, dining,parking, etc.  
	
	Public Service: Mostly the cooperative extension, which provides agricultural services to farmers, ranchers, winemakers, etc.  Part of our mission as a land grant university. 
	
	Depreciation, Interest, etc.: Depreciation is the loss of value of buildings and equipment as they wear out. Mostly unavoidable financial losses. 
		*/
	if (props.stage == 0) {
		// display expendetures input
		return (
			<div style={main}>
				<ReactTooltip id="MedicalCenterE" place="right" effect="solid">
					The cost of providing care at the Medical Center is roughly what we get paid to provide it.
			</ReactTooltip>
				<ReactTooltip id="TeachingAndTeachingSupport" place="right" effect="solid">
					Professors, advisors, deans, the library, the computer labs, etc, including Medical School faculty salaries.
			</ReactTooltip>
				<ReactTooltip id="StudentServices" place="right" effect="solid">
					Student Health, things covered by fees, Admissions, and also financial aid from the general funds, which is about $100M or 1.5%.
			</ReactTooltip>
				<ReactTooltip id="Research" place="right" effect="solid">
					The costs of doing the research, mostly researcher salaries.
			</ReactTooltip>
				<ReactTooltip id="OperationsAndMaintenance" place="right" effect="solid">
					Upkeep of the grounds and building, and utilities, which are less than 1%.
			</ReactTooltip>
				<ReactTooltip id="Administration" place="right" effect="solid">
					Provost and Chancellor's offices, raising money, accounting, personnel, legal, making budgets
			</ReactTooltip>
				<ReactTooltip id="Services" place="right" effect="solid">
					The costs of providing dorms, dining,parking, etc.
			</ReactTooltip>
				<ReactTooltip id="Public Service" place="right" effect="solid">
					Mostly the cooperative extension, which provides agricultural services to farmers, ranchers, winemakers, etc.  Part of our mission as a land grant university.
			</ReactTooltip>
				<ReactTooltip id="DepreciationEtc" place="right" effect="solid">
					Depreciation is the loss of value of buildings and equipment as they wear out. Mostly unavoidable financial losses.
			</ReactTooltip>
				<PieChart name="pie" data={pieData} />
				<form id="input-data" style={main}>
					<div style={inputCSS}>
						<div style={div}>
							<img style={img} src="/src/img/color1.png" />
							<span style={label} id="label">{items[0].name}</span>
							<span data-tip data-for="MedicalCenterE" style={img}>ⓘ</span>
						</div>
						<span><input style={textbox} type="number" max="100" accuracy="2" min="0" placeholder="0" name={items[0].name} onChange={updateData} value={input1}></input>%</span>
					</div>
					<div style={inputCSS}>
						<div style={div}>
							<img style={img} src="/src/img/color2.png" />
							<span style={label} id="label">{items[1].name}</span>
							<span data-tip data-for="TeachingAndTeachingSupport" style={img}>ⓘ</span>
						</div>
						<span><input style={textbox} type="number" max="100" accuracy="2" min="0" placeholder="0" name={items[1].name} onChange={updateData} value={input2}></input>%</span>
					</div>
					<div style={inputCSS}>
						<div style={div}>
							<img style={img} src="/src/img/color3.png" />
							<span style={label} id="label">{items[2].name}</span>
							<span data-tip data-for="Research" style={img}>ⓘ</span>
						</div>
						<span><input style={textbox} type="number" max="100" accuracy="2" min="0" placeholder="0" name={items[2].name} onChange={updateData} value={input3}></input>%</span>
					</div>
					<div style={inputCSS}>
						<div style={div}>
							<img style={img} src="/src/img/color4.png" />
							<span style={label} id="label">{items[3].name}</span>
							<span data-tip data-for="StudentServices" style={img}>ⓘ</span>
						</div>
						<span><input style={textbox} type="number" max="100" accuracy="2" min="0" placeholder="0" name={items[3].name} onChange={updateData} value={input4}></input>%</span>
					</div>
					<div style={inputCSS}>
						<div style={div}>
							<img style={img} src="/src/img/color8.png" />
							<span style={label} id="label">{items[4].name}</span>
							<span data-tip data-for="OperationsAndMaintenance" style={img} >ⓘ</span>
						</div>
						<span><input style={textbox} type="number" max="100" accuracy="2" min="0" placeholder="0" name={items[4].name} onChange={updateData} value={input5}></input>%</span>
					</div>
					<div style={inputCSS}>
						<div style={div}>
							<img style={img} src="/src/img/color5.png" />
							<span style={label} id="label">{items[5].name}</span>
							<span data-tip data-for="Administration" style={img}>ⓘ</span>
						</div>
						<span><input style={textbox} type="number" max="100" accuracy="2" min="0" placeholder="0" name={items[5].name} onChange={updateData} value={input6}></input>%</span>
					</div>
					<div style={inputCSS}>
						<div style={div}>
							<img style={img} src="/src/img/color6.png" />
							<span style={label} id="label">{items[6].name}</span>
							<span data-tip data-for="Services" style={img}>ⓘ</span>
						</div>
						<span><input style={textbox} type="number" max="100" accuracy="2" min="0" placeholder="0" name={items[6].name} onChange={updateData} value={input7}></input>%</span>
					</div>
					<div style={inputCSS}>
						<div style={div}>
							<img style={img} src="/src/img/color7.png" />
							<span style={label} id="label">{items[7].name}</span>
							<span data-tip data-for="Public Service" style={img}>ⓘ</span>
						</div>
						<span><input style={textbox} type="number" max="100" accuracy="2" min="0" placeholder="0" name={items[7].name} onChange={updateData} value={input8}></input>%</span>
					</div>
					<div style={inputCSS}>
						<div style={div}>
							<img style={img} src="/src/img/color0.png" />
							<span style={label} id="label">{items[8].name}</span>
							<span data-tip data-for="DepreciationEtc" style={img}>ⓘ</span>
						</div>
						<span><input style={textbox} type="number" max="100" accuracy="2" min="0" placeholder="0" name={items[8].name} onChange={updateData} value={input9}></input>%</span>
					</div>
					<div style={totalPer}>
						<span style={label} id="label">{"Total%"}</span>
						<span><input readOnly style={textboxRO} type="number" max="100" accuracy="2" min="0" placeholder="0" onChange={updateData} value={total} />%</span>
					</div>
				</form>
				<div>
					<button onClick={nextBtn} style={button} type="button">Next</button>
				</div>
			</div>

		)
	} else if (props.stage == 1) {
		// display revenue input
		/*
		Medical Center: A large, not-for-profit regional medical center, including multiple hospitals, labs and clinics. Income comes from patients, medical insurance companies, and government programs like medicare. 

		Student Fees: Fees are dedicated to specific services, such as athletic facilities, bus service (UNITRANS), student organizations, the CoHo and Student Community Center, etc. 

		State of California: General funds given by the taxpayers of California, appropriated annualy by the state legislature. General funds are not dedicated to specific services. 

		Tuition: Students pay tuition to attend the University. Non-California residents pay about twice as much as residents.  Tuition is also general funds.

		Research Grants and Contracts: Government and industry funds given to faculty and graduate students to perform research projects. These include up to 50% overhead in addition to the cost of the research. 

		Pell Grants: Federal grants for tuition and living expenses for low-income students. Percentage of students with Pell grants is a good way to measure who a University serves; at UCD, it's 34%; at Cal Tech it's 14%; at Sac State it's 71%.

		Non-educationsal Services: Services other than education that people pay for, like dorms, dining, parking, etc.  At UC Davis, this also includes almost $500M of revenue generated by medical school faculty, or 8%, making this category look really big.

		Gifts, Endowments, Interest, etc: Endowments are past gifts that were invested to provide income; interest is earned on other savings. The Museum is the direct result of a $10M gift from Jan Shrem and Maria Manetti Shrem.
		*/
		return (
			<div style={main}>
				<ReactTooltip id="MedicalCenterR" place="right" effect="solid">
					A large, not-for-profit regional medical center, including multiple hospitals, labs and clinics. Income comes from patients, medical insurance companies, and government programs like medicare.
			</ReactTooltip>
				<ReactTooltip id="StudentFees" place="right" effect="solid">
					Fees are dedicated to specific services, such as athletic facilities, bus service (UNITRANS), student organizations, the CoHo and Student Community Center, etc.
			</ReactTooltip>
				<ReactTooltip id="California" place="right" effect="solid">
					General funds given by the taxpayers of California, appropriated annualy by the state legislature. General funds are not dedicated to specific services.
			</ReactTooltip>
				<ReactTooltip id="Tuition" place="right" effect="solid">
					Students pay tuition to attend the University. Non-California residents pay about twice as much as residents.  Tuition is also general funds.
			</ReactTooltip>
				<ReactTooltip id="GrantsAndContracts" place="right" effect="solid">
					Government and industry funds given to faculty and graduate students to perform research projects. These include up to 50% overhead in addition to the cost of the research.
			</ReactTooltip>
				<ReactTooltip id="PellGrants" place="right" effect="solid">
					Federal grants for tuition and living expenses for low-income students. Percentage of students with Pell grants is a good way to measure who a University serves; at UCD, it's 34%; at Cal Tech it's 14%; at Sac State it's 71%.
			</ReactTooltip>
				<ReactTooltip id="Services" place="right" effect="solid">
					Services other than education that people pay for, like dorms, dining, parking, etc.  At UC Davis, this also includes almost $500M of revenue generated by medical school faculty, or 8%, making this category look really big.
			</ReactTooltip>
				<ReactTooltip id="GiftsEndowments" place="right" effect="solid">
					Endowments are past gifts that were invested to provide income; interest is earned on other savings. The Museum is the direct result of a $10M gift from Jan Shrem and Maria Manetti Shrem.
			</ReactTooltip>
				<PieChart name="pie" data={pieData} />
				<form id="input-data" style={main}>
					<div style={inputCSS}>
						<div style={div}>
							<img style={img} src="/src/img/color1.png" />
							<span style={label} id="label">{items[0].name}</span>
							<span data-tip data-for="MedicalCenterR" style={img}>ⓘ</span>
						</div>
						<span><input style={textbox} type="number" max="100" accuracy="2" min="0" placeholder="0" name={items[0].name} onChange={updateData} value={input1}></input>%</span>
					</div>
					<div style={inputCSS}>
						<div style={div}>
							<img style={img} src="/src/img/color2.png" />
							<span style={label} id="label">{items[1].name}</span>
							<span data-tip data-for="StudentFees" style={img}>ⓘ</span>
						</div>
						<span><input style={textbox} type="number" max="100" accuracy="2" min="0" placeholder="0" name={items[1].name} onChange={updateData} value={input2}></input>%</span>
					</div>
					<div style={inputCSS}>
						<div style={div}>
							<img style={img} src="/src/img/color3.png" />
							<span style={label} id="label">{items[2].name}</span>
							<span data-tip data-for="California" style={img}>ⓘ</span>
						</div>
						<span><input style={textbox} type="number" max="100" accuracy="2" min="0" placeholder="0" name={items[2].name} onChange={updateData} value={input3}></input>%</span>
					</div>
					<div style={inputCSS}>
						<div style={div}>
							<img style={img} src="/src/img/color4.png" />
							<span style={label} id="label">{items[3].name}</span>
							<span data-tip data-for="Tuition" style={img}>ⓘ</span>
						</div>
						<span><input style={textbox} type="number" max="100" accuracy="2" min="0" placeholder="0" name={items[3].name} onChange={updateData} value={input4}></input>%</span>
					</div>
					<div style={inputCSS}>
						<div style={div}>
							<img style={img} src="/src/img/color5.png" />
							<span style={label} id="label">{items[4].name}</span>
							<span data-tip data-for="GrantsAndContracts" style={img}>ⓘ</span>
						</div>
						<span><input style={textbox} type="number" max="100" accuracy="2" min="0" placeholder="0" name={items[4].name} onChange={updateData} value={input5}></input>%</span>
					</div>
					<div style={inputCSS}>
						<div style={div}>
							<img style={img} src="/src/img/color6.png" />
							<span style={label} id="label">{items[5].name}</span>
							<span data-tip data-for="PellGrants" style={img}>ⓘ</span>
						</div>
						<span><input style={textbox} type="number" max="100" accuracy="2" min="0" placeholder="0" name={items[5].name} onChange={updateData} value={input6}></input>%</span>
					</div>
					<div style={inputCSS}>
						<div style={div}>
							<img style={img} src="/src/img/color7.png" />
							<span style={label} id="label">{items[6].name}</span>
							<span data-tip data-for="Services" style={img}>ⓘ</span>
						</div>
						<span><input style={textbox} type="number" max="100" accuracy="2" min="0" placeholder="0" name={items[6].name} onChange={updateData} value={input7}></input>%</span>
					</div>
					<div style={inputCSS}>
						<div style={div}>
							<img style={img} src="/src/img/color0.png" />
							<span style={label} id="label">{items[7].name}</span>
							<span data-tip data-for="GiftsEndowments" style={img}>ⓘ</span>
						</div>
						<span><input style={textbox} type="number" max="100" accuracy="2" min="0" placeholder="0" name={items[7].name} onChange={updateData} value={input8}></input>%</span>
					</div>
					<div style={totalPer}>
						<span style={label} id="label">{"Total%"}</span>
						<span><input readOnly style={textboxRO} type="number" max="100" accuracy="2" min="0" placeholder="0" onChange={updateData} value={total} />%</span>
					</div>
				</form>
				<div>
					<button onClick={nextBtn} name={"continue"} style={button} type="button">Continue</button>
				</div>
				<div>
					<button onClick={nextBtn} name={"previous"} style={button} type="button">Previous</button>
				</div>
			</div>
		)
	} else if (props.stage == 2) {
		return (
			<div style={main}>
				<h1>RESULTS</h1>
				<div style={main}>
					<h2>Your Expenses Guess</h2>
					<PieChart name="pie" data={pieData} />
					<h2>Actual Expenses</h2>
					<PieChart name="pie2" data={props.data[2]} />
				</div>
				<button onClick={nextBtn} name={"continue"} style={button} type="button">Continue</button>
			</div>
		)
	} else {
		return (
			<div style={main}>
				<h1>RESULTS</h1>
				<div style={main}>
					<h2>Your Revenue Guess</h2>
					<PieChart name="pie" data={pieData} />
					<h2>Actual Revenue</h2>
					<PieChart name="pie2" data={props.data[3]} />
				</div>
				<button onClick={nextBtn} name={"restart"} style={button} type="button">Restart</button>
			</div>
		)
	}
}

export default UserInput