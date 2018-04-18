import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { NavBar, Icon, List, InputItem, WhiteSpace, Button } from 'antd-mobile';

import style from './OrderPage.css';


class OrderPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={style.page}>
				<WhiteSpace size='lg' style={{ background: '#fff' }} />
				<NavBar
					mode="light"
					icon={
						<Link to='/'>
							<Icon type="left" color="#000" />
						</Link>
					}
					style={{ marginTop: '-2px' }}
				>
					Order
				</NavBar>
				<div>
					<div className={style.itemIcon}>
						<img src='assets/email icon.png' width='100%' />
					</div>
					<div className={style.itemTitle}>Customer information</div>
					<div className={style.clearFloat}></div>
				</div>
				<List style={{ 
					width: '90%',
					marginLeft: '32px',
					marginTop: '24px',
					boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
				}}>
					<InputItem 
						placeholder="Email" 
						style={{ 
							width: '100%'
						}}
					>
					</InputItem>
				</List>
				<div style={{ marginTop: '32px' }}>
					<div className={style.itemIcon}>
						<img src='assets/address icon.png' width='100%' />
					</div>
					<div className={style.itemTitle}>Shipping Address</div>
					<div className={style.clearFloat}></div>
				</div>
				<List style={{ 
					width: '43%',
					marginLeft: '32px',
					marginTop: '24px',
					float: 'left',
					boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
				}}>
					<InputItem 
						placeholder="First name" 
						style={{ 
							width: '100%'
						}}
					>
					</InputItem>
				</List>
				<List style={{ 
					width: '43%',
					marginLeft: '32px',
					marginTop: '24px',
					float: 'left',
					boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
				}}>
					<InputItem 
						placeholder="Last name" 
						style={{ 
							width: '100%'
						}}
					>
					</InputItem>
				</List>
				<List style={{ 
					width: '90%',
					marginLeft: '32px',
					marginTop: '24px',
					float: 'left',
					boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
				}}>
					<InputItem 
						placeholder="Address" 
						style={{ 
							width: '100%'
						}}
					>
					</InputItem>
				</List>
				<List style={{ 
					width: '90%',
					marginLeft: '32px',
					marginTop: '24px',
					float: 'left',
					boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
				}}>
					<InputItem 
						placeholder="Contact phone number" 
						style={{ 
							width: '100%'
						}}
					>
					</InputItem>
				</List>
				<div className={style.clearFloat}></div>
				<div style={{ marginTop: '32px' }}>
					<div className={style.itemIcon}>
						<img src='assets/delivery icon.png' width='100%' />
					</div>
					<div className={style.itemTitle}>Delivery Service</div>
					<div className={style.clearFloat}></div>
				</div>
				<div style={{ width: '90%', padding: '16px 5%' }}>
					<img src='assets/deliver service.png' width='100%' />
				</div>
				<div className={style.splitLine}> </div>
				<div>
					<div style={{ 
						float: 'left', 
						marginLeft: 32,
						fontSize: 32
					}}>
						Item
					</div>
					<div style={{ 
						float: 'right', 
						marginRight: 32,
						fontSize: 32
					}}>
						$1,395
					</div>
					<div className={style.clearFloat}></div>
					<div style={{ 
						float: 'left', 
						marginLeft: 32,
						fontSize: 32
					}}>
						Reseller delivery fee
					</div>
					<div style={{ 
						float: 'right', 
						marginRight: 32,
						fontSize: 32
					}}>
						$12
					</div>
					<div className={style.clearFloat}></div>
					<div style={{ 
						float: 'left', 
						marginLeft: 32,
						marginTop: 32,
						fontSize: 40
					}}>
						Order total
					</div>
					<div style={{ 
						float: 'right', 
						marginRight: 32,
						marginTop: 32,
						fontSize: 48
					}}>
						$1,407
					</div>
					<div className={style.clearFloat}></div>
				</div>
				<Link to='/waiting' >
					<Button 
						type="primary" 
						style={{ width: '92%', 
								 height: '90px',
								 marginLeft: '4%',
								 background: '#0057A3',
								 border: '1px solid #0057A3',
								 borderRadius: '0',
								 lineHeight: '90px',
								 marginTop: '32px'
							  }}
					>
						Next
					</Button>
				</Link>
			</div>
		);
	}
}

export default connect()(OrderPage);