/* eslint-disable no-plusplus, global-require */
import React from 'react';
import { connect } from 'dva';
import { Icon, TabBar } from 'antd-mobile';
import { createForm } from 'rc-form';

import style from './IndexPage.css';


class IndexPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			beconstate:''
		};
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
	}
	onDeviceReady()
	{
		this.rangeBeaconsInRegion();
	}
	rangeBeaconsInRegion() 
  {
    try{
			
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
    catch(err)
    {
      alert(err)
    }
  }
	
	render() {
		return (
			<div style={{ position: 'fixed', height: '100%', width: '100%', top: 0, background: '#fff' }}>
				Haha:
				{this.state.beconstate}
				{/* <img src='./assets/sofa.jpeg' style={{  height: '80%', width: '100%' }} /> */}
			</div>
		);
	}
}

const IndexPageWrapper = createForm()(IndexPage);
export default connect()(IndexPageWrapper);
