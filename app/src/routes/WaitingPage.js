import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon, List, InputItem, WhiteSpace } from 'antd-mobile';

import style from './WaitingPage.css';


class WaitingPage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		setTimeout(function() { 
			window.location = '/#/confirm';
		}, 2000);
	}

	render() {
		return (
			<div className={style.page}>
				<WhiteSpace />
				<img src='assets/car icon.png' className={style.waitingImg} />
				<div className={style.waitingText}>
					Wait a moment! <br />
					We are finding for an Reseller <br />
					getting the job done.
				</div>
			</div>
		);
	}
}

export default connect()(WaitingPage);