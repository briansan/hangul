import React from 'react';

export default class KoreanGenerator extends React.Component {
	state = {
		character: "",
		level: 1,
	}

	gen = () => {
		var rand = (num, omit) => {
			for (
				var val = omit[0]; 
				omit.includes(val); 
				val = Math.floor(Math.random() * num)
			); 
			return val
		}
		// 11184 hangul code pts
		if (this.state.level === 1) {
			var omitCon = [1, 4, 8, 10, 13]
			var omitVow = [1, 3, 5, 7, 9, 10, 11, 14, 15, 16, 19]

			var initial = rand(19, omitCon)
			var vowel = rand(21, omitVow)
			var ch = String.fromCharCode(0xac00 + (initial*588+vowel*28))
		}
		this.setState({
			character: ch,
		})
	}

	render() {
		return (
			<div>
			  <button onClick={this.gen}>Generate Korean Character</button>
			  <h1>{this.state.character}</h1>
			</div>
		)
	}
}
