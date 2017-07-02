import React, { Component } from 'react';

export default class Dashboard extends Component {

	constructor() {
		super();
	}

	save() {
	}

	render() {
		return (
			<div>
				Dashboard:

				<div onClick={this.save}>Save</div>

			</div>
		)
	}

}