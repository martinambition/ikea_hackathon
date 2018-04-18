import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon, List, InputItem } from 'antd-mobile';

import style from './OrderPage.css';


class OrderPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={style.page}>
				<List>
					<InputItem 
						placeholder="doasijdoiasdjoisa">
					</InputItem>
				</List>
			</div>
		);
	}
}

export default connect()(OrderPage);