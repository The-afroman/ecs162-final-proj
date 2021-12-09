//d3.circle, d3.line
//progress bar
import React, { useRef, useEffect } from 'react';

function ProgressBar(props) {
	const d3Container = useRef(null);
	console.log("called ")
	useEffect(
		() => {
			if (props.data && d3Container.current) {
				const svg = d3.select(d3Container.current);
				let state = props.data[0].value

				console.log("state:", state)

				const progressBG = svg
					.append('rect')
					.attr('width', '88%')
					.attr('height', '10%')
					.attr('x', '4%')
					.attr('y', '5%')
					.attr("fill", "#7F8187")

				const progressBar = svg
					.append('rect')
					.attr('height', '10%')
					.attr('x', '4%')
					.attr('y', '5%')

				progressBar
					.attr("fill", "#71a8ff")
					.attr('width', function() {
						console.log(state)
						return `${(state - 1) * 44}%`
					})

				svg
					.append('g')
					.selectAll('circle')
					.data(props.data)
					.enter()
					.append('circle')
					.attr('cx', (d, i) => `${(i * 44 + 5)}%`)
					.attr('cy', '10%')
					.attr('r', 10)
					.attr("fill", (d, i) => {
						switch (i) {
							case 0:
								if (d.value >= 1) {
									return "#71a8ff"
								} else {
									return "#7F8187"
								}
							case 1:
								if (d.value >= 2) {
									return "#71a8ff"
								} else {
									return "#7F8187"
								}
							case 2:
								if (d.value >= 3) {
									return "#71a8ff"
								} else {
									return "#7F8187"
								}
							default:
								return "#7F8187"
						}
					})
					.append('rect')
					.attr('height', '10%')
					.attr('x', '4%')
					.attr('y', '5%')
					.attr("fill", "#71a8ff")
					.attr('width', (d, i) => {
						switch (i) {
							case 0:
								if (d.value >= 1) {
									return "0%"
								}
							case 1:
								if (d.value >= 2) {
									return "44%"
								}
							case 2:
								if (d.value >= 3) {
									return "88%"
								}
						}
					})

				svg.exit()
					.remove();
			}
		}, [props.data, d3Container.current]);

	return (
		<svg
			className="ProgressBar"
			width={'70%'}
			height={100}
			ref={d3Container}
		/>
	);
}

export default ProgressBar;