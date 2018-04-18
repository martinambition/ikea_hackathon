/* eslint-disable no-plusplus, global-require */
import React from 'react';
import { connect } from 'dva';
import { Icon, TabBar } from 'antd-mobile';
import { createForm } from 'rc-form';

import style from './IndexPage.css';
import LaunchPage from './LaunchPage';

var pageHeight = document.body.clientHeight;

class IndexPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isNotificationClicked: true,
			beconstate: '',
			enterAnimConfig: {
				y: "-92vh", 
				duration: 500,
				delay: 800
			},
			leaveAnimConfig: {
				y: "-220vh", 
				duration: 1200
			},
			isCardEnter: true,
			isCardGoingToLeave: false,
			isCardLeave: false,
			showLaunchPage: true,
			showCheckoutPage: false,
			isBtnsShow: [false, false, false],
			showBuyBubble: false,
			productInfo: {
				name: "KIVIK",
				price: "$799",
				sku: "Sofa, Hillared with chaise, Hillared beige",
				image: ["1", "2", "3"],
				short: "",
				long: "Cuddle up in the soft comfort of KIVIK sofa. The generous size, low armrests, and memory foam that adapts to the contours of your body invites many hours of naps, socializing, and relaxation."
			}
		};
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

		this.onShowCheckoutPage = this.onShowCheckoutPage.bind(this);
		this.onCardEnter = this.onCardEnter.bind(this);
		this.onCardLeave = this.onCardLeave.bind(this);
		this.onShowBuyBubble = this.onShowBuyBubble.bind(this);
		this.onHideBuyBubble = this.onHideBuyBubble.bind(this);
	}
	onDeviceReady() {
		this.rangeBeaconsInRegion();
	}
	rangeBeaconsInRegion() {
	    try {
	  //   	var delegate = new cordova.plugins.locationManager.Delegate();
			// var owner = this;
   //    		delegate.didRangeBeaconsInRegion = function (pluginResult) {
			// 	owner.setState({
			// 		beconstate : pluginResult.beacons[0].accuracy
			// 	});
	  //       //windows.size =  JSON.stringify(pluginResult);
	  //       //alert(JSON.stringify(pluginResult));
			// };
			// var uuid = 'A540E533-550C-47CA-86A7-2F0AA2C9F226';
			// var identifier = 'beaconOnTheMacBooksShelf';
			// var minor = 1;
			// var major = 2;
			// var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);
			// cordova.plugins.locationManager.setDelegate(delegate);
			// cordova.plugins.locationManager.requestWhenInUseAuthorization(); 
			// cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion)
			// .fail(function(e) {  alert('startRangingBeaconsInRegion') })
			// .done();
			
			cordova.plugins.notification.local.on('click', function (obj) {
				alert('test');
				this.setState({
					isNotificationClicked: true,
					isCardEnter: true
				});
			});
	    }
	    catch(err) {
	    	alert(err);
	    }
	}
	
	onShowCheckoutPage() {
		this.setState({
			showLaunchPage: false,
			showCheckoutPage: true,
			isCardGoingToLeave: true,
			showBuyBubble: false
		});
	}

	onCardEnter() {
		this.setState({
			isCardEnter: true
		});
	}

	onCardLeave() {
		this.setState({
			isCardLeave: true
		});
	}

	onShowBuyBubble() {
		this.setState({
			showBuyBubble: true
		});
	}

	onHideBuyBubble() {
		this.setState({
			showBuyBubble: false
		});
	}

	render() {
		return (
			<div>
				<img src='assets/ikea.png' width='100%' style={{ marginTop: '-16px' }} />
				{(this.state.isNotificationClicked) ? [
					<LaunchPage 
						enterAnimConfig={this.state.enterAnimConfig} 
						leaveAnimConfig={this.state.leaveAnimConfig} 
						isCardEnter={this.state.isCardEnter}
						isCardGoingToLeave={this.state.isCardGoingToLeave} 
						isCardLeave={this.state.isCardLeave} 
						isBtnsShow={this.state.isBtnsShow}
						showCheckoutPage={this.state.showCheckoutPage}
						showBuyBubble={this.state.showBuyBubble}
						productInfo={this.state.productInfo} 
						onShowCheckoutPage={this.onShowCheckoutPage} 
						onCardEnter={this.onCardEnter}
						onCardLeave={this.onCardLeave}
						onShowBuyBubble={this.onShowBuyBubble}
						onHideBuyBubble={this.onHideBuyBubble}
						style={{
							display: this.state.showLaunchPage ? "block" : "none" 
						}}
					/>
				] : null}
			</div>
		);
	}
}

const IndexPageWrapper = createForm()(IndexPage);
export default connect()(IndexPageWrapper);
