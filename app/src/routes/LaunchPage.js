import React from 'react';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'dva';
import { Link, hashHistory } from 'dva/router';
import { NavBar, Icon, Carousel, Button, Picker, WhiteSpace, Slider, Flex } from 'antd-mobile';

import style from './LaunchPage.css';

import 'emoji-mart/css/emoji-mart.css'
import { Emoji } from 'emoji-mart'


class LaunchPage extends React.Component {
	constructor(props) {
		super(props);
		this.showCheckout = this.showCheckout.bind(this);
		this.handleCardLeave = this.handleCardLeave.bind(this);
		this.changeSelectPackage = this.changeSelectPackage.bind(this);
		this.handleClickBuyBtn = this.handleClickBuyBtn.bind(this);
		this.onChangeSlider = this.onChangeSlider.bind(this);
	}

	componentDidMount() {
		// this.props.onCardEnter();
	}

	showCheckout() {
		this.props.onShowCheckoutPage();
	}

	handleCardLeave() {
		var that = this;
		if (this.props.isCardGoingToLeave) {
			that.props.onCardLeave(); 
			// setTimeout(function(){ 
			// 	that.props.onCardLeave(); 
			// 	// hashHistory.push('/info');
			// }, 500);
		}
	}

	changeSelectPackage() {}

	handleClickBuyBtn() {}

	onChangeSlider(value) {
		if (value === 5) {
			this.props.onShowBuyBubble();
		}
	}

	render() {
		const showCheckoutPage = this.props.showCheckoutPage;
		const productInfo = this.props.productInfo;
		const isBtnsShow = this.props.isBtnsShow;

		var animation;
		var cardStyle;
		if (this.props.isCardEnter) {
			if(this.props.isCardGoingToLeave) {
				cardStyle = {
					bottom: '-220vh',
					height: '220vh'
				};
				animation = this.props.leaveAnimConfig;
			} else {
				cardStyle = {
					bottom: '-92vh',
					height: '92vh',
					overflowY: 'scroll'
				};
				animation = this.props.enterAnimConfig;
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

		var displayStatus = this.props.isCardLeave ? 'block' : 'none';

		return (
			<div>
				<TweenOne
					animation={animation} 
					updateReStart={true} 
	            	className={style.popCard} 
	            	style={cardStyle} 
	            	onChange={this.handleCardLeave}
				>
					<div className={style.cardHeader}>Message</div>
					{this.props.isCardEnter ? [
						<div>
						<QueueAnim 
							type="right"
							delay={1600}
							duration={1000} 
							interval={800}
							key="m"
						>
							<div className={style.cardText} key="m1">
								Hello,I'm the Sofa KIWIK, and I was designed by <b>Ola Wihlborg</b>.
								<br/>
								Here is my design story.
							</div>
							<img src='assets/designer.png' className={style.cardImg} key="m2" />
							<div className={style.cardText} key="m3">
								<div style={{ float: 'left', width: '100%' }}>
									Am I comfortable?
								</div>
								<div style={{ float: 'left', marginTop: '16px', width: '15%' }}>
									<img src='assets/sad icon.png' width='75%' />
								</div>
								<div 
									style={{ 
										float: 'left',
										width: '70%'
									}}
								>
									<Slider 
										style={{ 
											float: 'left',
											width: '86%',
											margin: '36px 12% 40px 2%'
										}}
										defaultValue={3}
										min={1}
										max={5} 
										trackStyle={{
											height: '25px',
											background: 'linear-gradient(90deg, #61DFFA, #F7E81C)',
											borderRadius: '12px',
										}}
										railStyle={{
											height: '25px',
											borderRadius: '12px',
										}}
										handleStyle={{
											borderColor: '#000',
											height: '50px',
											width: '50px',
											marginLeft: '-25px',
											marginTop: '-12.5px',
										}}
									/>
								</div>
								<div style={{ float: 'left', marginTop: '16px', width: '15%' }}>
									<img src='assets/happy icon.png' width='75%'/>
								</div>
								<div className={style.clearFloat}></div>
							</div>
							<div className={style.cardText} key="m4">
								<div style={{ float: 'left', width: '100%' }}>
									Do I look good?
								</div>
								<div style={{ float: 'left', marginTop: '16px', width: '15%' }}>
									<img src='assets/sad icon.png' width='75%' />
								</div>
								<div 
									style={{ 
										float: 'left',
										width: '70%'
									}}
								>
									<Slider 
										style={{ 
											float: 'left',
											width: '86%',
											margin: '36px 12% 40px 2%'
										}}
										defaultValue={3}
										min={1}
										max={5} 
										trackStyle={{
											height: '25px',
											background: 'linear-gradient(90deg, #61DFFA, #F7E81C)',
											borderRadius: '12px',
										}}
										railStyle={{
											height: '25px',
											borderRadius: '12px',
										}}
										handleStyle={{
											borderColor: '#000',
											height: '50px',
											width: '50px',
											marginLeft: '-25px',
											marginTop: '-12.5px',
										}}
										onChange={this.onChangeSlider}
									/>
								</div>
								<div style={{ float: 'left', marginTop: '16px', width: '15%' }}>
									<img src='assets/happy icon.png' width='75%'/>
								</div>
								<div className={style.clearFloat}></div>
							</div>
							
						</QueueAnim>
						{this.props.showBuyBubble ? [
							<div className={style.cardText} key="m5">
								A lot people like me,do you want try?
								<img src='assets/star.jpg' width='60%' />
								<Flex style={{ padding: '0 32px' }}>
									<Flex.Item style={{ textAlign: 'center' }} onClick={this.showCheckout}>
										<img src='assets/buy.png' className={style.btnImg} />
									</Flex.Item>
									<Flex.Item style={{ textAlign: 'center' }}>
										<img src='assets/find.png' className={style.btnImg} />
									</Flex.Item>
								</Flex>
								<div className={style.btnClear}></div>
							</div>
						] : null}
						</div>
					] : null}
				</TweenOne>

				<div className={style.checkoutPage} style={{ display: displayStatus }}>
					<WhiteSpace size='lg' />
					<NavBar
						mode="light"
						icon={<Link to='/'><Icon type="left" color="#000" /></Link>}
					>
						{productInfo.name}
					</NavBar>
					<Carousel
						autoplay={true}
						infinite
					>
						{productInfo.image.map(val => (
							<img
								src={`assets/kivik${val}.png`}
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
			</div>
		);
	}
}

export default connect()(LaunchPage);