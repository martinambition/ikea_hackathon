import React from 'react';
import { connect } from 'dva';
import { Link, hashHistory } from 'dva/router';
import { NavBar, Icon, Carousel, Button, Picker, WhiteSpace, Slider, Flex } from 'antd-mobile';

import style from './LaunchPage.css';


class InfoPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var images = ['1', '2', '3'];
		return (
				<div className={style.checkoutPage}>
					<WhiteSpace size='lg' />
					<NavBar
						mode="light"
						icon={<Link to='/'><Icon type="left" color="#000" /></Link>}
					>
						{"KIVIK"}
					</NavBar>
					<Carousel
						autoplay={true}
						infinite
					>
						{images.map(val => (
							<img
								src={`assets/kivik${val}.png`}
								key={val}
								style={{ width: '100%', verticalAlign: 'top' }}
							/>
						))}
					</Carousel>
					<div className={style.productName}>{"KIVIK"}</div>
					<div className={style.productIntroShort}>{}</div>
					<div className={style.productSku}>{"Sofa, Hillared with chaise, Hillared beige"}</div>
					<div className={style.productPrice}>{"$799"}</div>
					<div className={style.productIntroLong}>
						{"Cuddle up in the soft comfort of KIVIK sofa. The generous size, low armrests, and memory foam that adapts to the contours of your body invites many hours of naps, socializing, and relaxation."}
					</div>
					<div className={style.CFLBox} style={{ marginTop: '64px' }}>
						With chaise/Hillared beige
						<Icon type='down' size='sm' style={{ float: 'right' }} />
					</div>
					<div className={style.CFLBox} style={{ borderBottomWidth: '1px' }}>
						Models: Sofa
						<Icon type='down' size='sm' style={{ float: 'right' }} />
					</div>
					<div className={style.buyBtnBox}>
						<Link to='/order'>
							<Button 
								type="primary" 
								style={{ width: '94%', 
										 height: '100px',
										 marginLeft: '3%',
										 background: '#0057A3',
										 border: '1px solid #0057A3',
										 borderRadius: '0px',
										 lineHeight: '100px'
									  }}
							>
								Buy Now
							</Button>
						</Link>
					</div>
				</div>
		);
	}
}

export default connect()(InfoPage);