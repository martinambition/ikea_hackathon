import React from 'react';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { NavBar, Icon, Carousel, Button, Picker, WhiteSpace } from 'antd-mobile';

import style from './LaunchPage.css';


class LaunchPage extends React.Component {
	constructor(props) {
		super(props);
		this.showCheckout = this.showCheckout.bind(this);
		this.handleCardLeave = this.handleCardLeave.bind(this);
		this.changeSelectPackage = this.changeSelectPackage.bind(this);
		this.handleClickBuyBtn = this.handleClickBuyBtn.bind(this);
	}

	componentDidMount() {
		this.props.onCardEnter();
	}

	showCheckout() {
		this.props.onShowCheckoutPage();
	}

	handleCardLeave() {
		var that = this;
		if (this.props.isCardGoingToLeave) {
			setTimeout(function(){ 
				that.props.onCardLeave(); 
			}, 500);
		}
	}

	changeSelectPackage(value) {
		console.log(value)
	}

	handleClickBuyBtn() {
		window.location = '/#/waiting';
	}

	render() {
		const showCheckoutPage = this.props.showCheckoutPage;
		const productInfo = this.props.productInfo;
		const isBtnsShow = this.props.isBtnsShow;

		var animation;
		var cardStyle;
		if (this.props.isCardEnter) {
			if(this.props.showCheckoutPage) {
				animation = this.props.leaveAnimConfig;
				cardStyle = {
					bottom: '-190vh',
					height: '190vh'
				};
			} else {
				animation = this.props.enterAnimConfig;
				cardStyle = {
					bottom: '-90vh',
					height: '90vh'
				};
			}
		};

		const packages = [
			{
				label: 'Inseros light brown',
				value: '1',
			},
			{
				label: 'With chaise longues/Inseros light brown4',
				value: '2',
			}
		];

		var content = null;
		if (this.props.isCardLeave) {
			content = (
				<div className={style.checkoutPage}>
					<WhiteSpace />
					<NavBar
						mode="light"
						icon={<Icon type="left" color="#000" />}
						onLeftClick={() => console.log('onLeftClick')}
					>
						{productInfo.name}
					</NavBar>
					<Carousel
						autoplay={true}
						infinite
					>
						{productInfo.image.map(val => (
							<img
								src={`assets/product profile${val}.png`}
								key={val}
								style={{ width: '100%', verticalAlign: 'top' }}
							/>
						))}
					</Carousel>
					<div className={style.productName}>{productInfo.name}</div>
					<div className={style.productIntroShort}>{productInfo.short}</div>
					<div className={style.productSku}>{productInfo.sku}</div>
					<div className={style.productPrice}>{productInfo.price}</div>
					<div className={style.productIntroLong}>{productInfo.long}</div>
					<div className={style.CFLBox} style={{ marginTop: '64px' }}>
						Cover: Nolhaga gray-beige
						<Icon type='down' size='sm' style={{ float: 'right' }} />
					</div>
					<div className={style.CFLBox}>
						Legs: Light brown
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
		} else {
			content = (
				<TweenOne
					animation={animation} 
					updateReStart={true} 
	            	className={style.popCard} 
	            	style={cardStyle} 
	            	onChange={this.handleCardLeave}
				>
					<div className={style.cardHeader}>Message</div>
					{this.props.isCardEnter ? [
						<QueueAnim 
							type="right"
							delay={500}
							duration={800} 
							interval={500}
							key="m"
						>
							<div className={style.cardText} key="m1">
								Hello,I'm the Sofa STOCKSUND, and I was designed by <b>Nike Karlsson</b>.
							</div>
							<img src='assets/designer.png' className={style.cardImg} key="m2" />
							<div className={style.cardText} key="m3">
								We would appreciate your Feedback or even deliver one piece directly to your home?!
								<div className={style.allBtns}>
									<div className={style.btnBox} key="1">
										<img src='assets/review me icn.png' className={style.btnImg} />
									</div>
									<div className={style.btnBox} onClick={this.showCheckout} key="2">
										<img src='assets/buy me icon.png' className={style.btnImg} />
									</div>
									<div className={style.btnBox} key="3">
										<img src='assets/find me icon.png' className={style.btnImg} />
									</div>
								</div>
								<div className={style.btnClear}></div>
							</div>
						</QueueAnim>
					] : null}
				</TweenOne>
			);
		}

		return (
			<div style={{ overflow: 'hidden' }}>
				{content}
			</div>
		);
	}
}

export default connect()(LaunchPage);