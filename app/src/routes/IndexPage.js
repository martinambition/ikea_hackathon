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
			beconstate: '',
			enterAnimConfig: {
				y: "-90vh", 
				duration: 500
			},
			leaveAnimConfig: {
				y: "-190vh", 
				duration: 600
			},
			isCardEnter: false,
			isCardGoingToLeave: false,
			isCardLeave: false,
			showLaunchPage: true,
			showCheckoutPage: false,
			isBtnsShow: [false, false, false],
			productInfo: {
				name: "GRONLID",
				price: "$1,395",
				sku: "Inseros light brown",
				image: ["1", "2", "3"],
				short: "4-seat sofa, with chaise longues",
				long: "Snuggle up, feel warmly embraced and enjoy cosy nights and lazy days. This sofa is extra deep, has soft and moveable back cushions, and comes in various sizes and shapes-everything for your comfort."
			}
		};
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

		this.onShowCheckoutPage = this.onShowCheckoutPage.bind(this);
		this.onCardEnter = this.onCardEnter.bind(this);
		this.onCardLeave = this.onCardLeave.bind(this);
	}
	onDeviceReady() {
		this.rangeBeaconsInRegion();
	}
	rangeBeaconsInRegion() {
	    try {
	    	var delegate = new cordova.plugins.locationManager.Delegate();
			var owner = this;
      		delegate.didRangeBeaconsInRegion = function (pluginResult) {
				owner.setState({
					beconstate : pluginResult.beacons[0].accuracy
				});
	        //windows.size =  JSON.stringify(pluginResult);
	        //alert(JSON.stringify(pluginResult));
			};
			var uuid = 'A540E533-550C-47CA-86A7-2F0AA2C9F226';
			var identifier = 'beaconOnTheMacBooksShelf';
			var minor = 1;
			var major = 2;
			var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);
			cordova.plugins.locationManager.setDelegate(delegate);
			cordova.plugins.locationManager.requestWhenInUseAuthorization(); 
			cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion)
			.fail(function(e) {  alert('startRangingBeaconsInRegion') })
			.done();
	    }
	    catch(err) {
	    	alert(err);
	    }
	}
	
	onShowCheckoutPage() {
		this.setState({
			showLaunchPage: false,
			showCheckoutPage: true,
			isCardGoingToLeave: true
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

	render() {
		return (
			<div>
				<div style={{ width: "100%", 
							  height: "100vh", 
							  background: "rgba(0, 0, 0, 0.2)", 
							  overflow: "hidden"
							}}
				>
				</div>
				<LaunchPage 
					enterAnimConfig={this.state.enterAnimConfig} 
					leaveAnimConfig={this.state.leaveAnimConfig} 
					isCardEnter={this.state.isCardEnter}
					isCardGoingToLeave={this.state.isCardGoingToLeave} 
					isCardLeave={this.state.isCardLeave} 
					isBtnsShow={this.state.isBtnsShow}
					showCheckoutPage={this.state.showCheckoutPage}
					productInfo={this.state.productInfo} 
					onShowCheckoutPage={this.onShowCheckoutPage} 
					onCardEnter={this.onCardEnter}
					onCardLeave={this.onCardLeave}
					style={{
						display: this.state.showLaunchPage ? "block" : "none" 
					}}
				/>
			</div>
		);
	}
}

const IndexPageWrapper = createForm()(IndexPage);
export default connect()(IndexPageWrapper);
