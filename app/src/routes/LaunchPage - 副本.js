import React from 'react';
import TweenOne from 'rc-tween-one';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { NavBar, Icon, Carousel, Button, Picker } from 'antd-mobile';

import style from './LaunchPage.css';


class LaunchPage extends React.Component {
	constructor(props) {
		super(props);
		this.showCheckout = this.showCheckout.bind(this);
		this.handleCardLeave = this.handleCardLeave.bind(this);
		this.changeSelectPackage = this.changeSelectPackage.bind(this);
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

	render() {
		const showCheckoutPage = this.props.showCheckoutPage;
		const productInfo = this.props.productInfo;

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
								src={`assets/yay${val}.jpg`}
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
					<div className={style.CFLBox}>
						With chaise longues/Inseros light brown
						<Icon type='down' size='sm' style={{ float: 'right' }} />
					</div>
					<Link to='/waiting'>
						<div className={style.buyBtnBox}>
							<Button 
								type="primary" 
								style={{ width: '94%', 
										 height: '100px',
										 marginLeft: '3%',
										 background: '#0356B1',
										 border: '1px solid #0356B1',
										 borderRadius: '50px',
										 lineHeight: '100px'
									  }}
							>
								Buy Now
							</Button>
						</div>
					</Link>
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
					<div className={style.cardTitle}>Hi there</div>
					<div className={style.cardText}>
						I'm GRONLID sofa come from Sweden. Crap the chance and check me out.
					</div>
					<div className={style.allBtns}>
						<div className={style.btnBox}>
							<div className={style.btnText}>Review me</div>
							<img src='assets/review.png' className={style.btnImg} />
						</div>
						<div className={style.btnBox} onClick={this.showCheckout}>
							<div className={style.btnText}>Buy me</div>
							<img src='assets/buy.png' className={style.btnImg} />
						</div>
						<div className={style.btnBox}>
							<div className={style.btnText}>Find more</div>
							<img src='assets/more.png' className={style.btnImg} />
						</div>
					</div>
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