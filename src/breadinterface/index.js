import React from 'react';

export class Bar extends React.Component {
	render() {
		return (
		 	<header>
		 		<nav className={"navbar navbar-expand-md navbar-dark fixed-"+this.props.pos+" bg-dark"}>
					{this.props.children}
		 		</nav>
		 	</header>
		)
	}
}

export class Button extends React.Component {
	render() {
		return (
			<a className="navbar-brand" href="#" onClick={this.props.onClick}>
				{this.props.title}
			</a>
		)
	}
}

export class View extends React.Component {
	render() {
		return (
			<div style={{padding: "60px 15px"}}>
				{this.props.children}
			</div>
		)
	}
}
