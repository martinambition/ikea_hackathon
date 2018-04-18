import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon, List, InputItem, Button, WhiteSpace } from 'antd-mobile';
import { Link } from 'dva/router';

import style from './ConfirmPage.css';


class ConfirmPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<WhiteSpace size='lg' />
				<img 
					src='assets/customer order header image.png' 
					width='90%' 
					style={{
						padding: '64px 5%',
						marginBottom: '32px'
					}}
				/>
				<div className={style.title}>Confirm order:</div>
				<div className={style.content}>
					<div style={{ borderBottom: '1px solid #000' }}>
						<div style={{ float: 'left' }}>STOCKSUND Sofa</div>
						<div style={{ float: 'right' }}>$599</div>
						<div className={style.clearFloat}></div>
					</div>
					<div style={{ borderBottom: '1px solid #000' }}>
						<div style={{ float: 'left' }}>Reseller dilvery fee</div>
						<div style={{ float: 'right' }}>$12</div>
						<div className={style.clearFloat}></div>
					</div>
					<div>
						<div style={{ float: 'left' }}>Numbers</div>
						<div style={{ float: 'right' }}>1</div>
						<div className={style.clearFloat}></div>
					</div>
				</div>
				<div className={style.price}>
					<div className={style.priceTitle}>Order total</div>
					<div className={style.priceValue}>$611</div>
					<div className={style.clearFloat}></div>
				</div>
				<div className={style.btnsBox}>
					<div className={style.btnBox}>
						<Button 
							type="primary" 
							style={{ width: '90%', 
									 height: '90px',
									 marginLeft: '5%',
									 background: '#0057A3',
									 border: '1px solid #0057A3',
									 borderRadius: '0px',
									 lineHeight: '90px'
								  }}
						>
							Pay with Wechat Pay
						</Button>
					</div>
					<div className={style.btnBox}>
						<Button 
							type="primary" 
							style={{ width: '90%', 
									 height: '90px',
									 marginLeft: '5%',
									 background: '#0057A3',
									 border: '1px solid #0057A3',
									 borderRadius: '0px',
									 lineHeight: '90px'
								  }}
						>
							Pay with AliPay
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(ConfirmPage);