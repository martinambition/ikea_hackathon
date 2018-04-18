import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon, List, InputItem, Button } from 'antd-mobile';
import { Link } from 'dva/router';

import style from './ConfirmPage.css';


class ConfirmPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className={style.title}>Confirm order:</div>
				<div className={style.content}>
					<div style={{ float: 'left' }}>GRONLID/Inseros light brown</div>
					<div style={{ float: 'right' }}>$1,395</div>
					<br />
					<div style={{ float: 'left' }}>Reseller dilvery fee</div>
					<div style={{ float: 'right' }}>$12</div>
				</div>
				<div className={style.price}>
					<div className={style.priceTitle}>Order total</div>
					<div className={style.priceValue}>$1,407</div>
				</div>
				<div className={style.btnBox}>
					<Button 
						type="primary" 
						style={{ width: '94%', 
								 height: '90px',
								 marginLeft: '3%',
								 background: '#6C6C6C',
								 border: '1px solid #6C6C6C',
								 borderRadius: '50px',
								 lineHeight: '90px'
							  }}
					>
						Pay with Wechat Pay
					</Button>
				</div>
				<div className={style.btnBox}>
					<Button 
						type="primary" 
						style={{ width: '94%', 
								 height: '90px',
								 marginLeft: '3%',
								 background: '#6C6C6C',
								 border: '1px solid #6C6C6C',
								 borderRadius: '50px',
								 lineHeight: '90px'
							  }}
					>
						Pay with AliPay
					</Button>
				</div>
			</div>
		);
	}
}

export default connect()(ConfirmPage);