/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at
 
 http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

//
//  AppDelegate.m
//  HelloCordova
//
//  Created by ___FULLUSERNAME___ on ___DATE___.
//  Copyright ___ORGANIZATIONNAME___ ___YEAR___. All rights reserved.
//

#import "AppDelegate.h"
#import "MainViewController.h"

@implementation AppDelegate
{
    CLLocationManager *_locationManager;
    NSString * _ibeaconUUID;
}

- (instancetype)init
{
    if(self = [super init])//初始化父类并判断是否初始化成功
    {
        _ibeaconUUID = @"A540E533-550C-47CA-86A7-2F0AA2C9F226";
    }
    return self;
}

- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
{
    [self initNotification];
    [self monitorIbeacon];
    self.viewController = [[MainViewController alloc] init];
    return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (void)initNotification
{
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    center.delegate = self;
    [center requestAuthorizationWithOptions:(UNAuthorizationOptionAlert + UNAuthorizationOptionSound)
                          completionHandler:^(BOOL granted, NSError * _Nullable error) {
                          }];
    [center getNotificationSettingsWithCompletionHandler:^(UNNotificationSettings * _Nonnull settings) {
    }];
}
- (void)monitorIbeacon
{
    _locationManager = [[CLLocationManager alloc] init];
    _locationManager.delegate = self;
    CLBeaconRegion *region;
    
    if ([[UIDevice currentDevice].systemVersion floatValue] >=8.0 ) {
        [_locationManager requestAlwaysAuthorization];
    }
    
    region = [[CLBeaconRegion alloc] initWithProximityUUID:[[NSUUID alloc] initWithUUIDString:self->_ibeaconUUID] major: 1 minor: 1 identifier: @"region1"];
    region.notifyEntryStateOnDisplay = NO;
    
    [_locationManager startMonitoringForRegion:region];
    [_locationManager stopRangingBeaconsInRegion:region];
}


- (void)locationManager:(CLLocationManager *)manager didDetermineState:(CLRegionState)state forRegion:(CLRegion *)region
{
    if(state == CLRegionStateInside) {
        
        NSLog(@"locationManager didDetermineState INSIDE for %@", region.identifier);
        
        
        CLBeaconRegion *beaconRegion = (CLBeaconRegion *)region;
        
        UNMutableNotificationContent* content = [[UNMutableNotificationContent alloc] init];
        content.title = [NSString localizedUserNotificationStringForKey:@"IKea Product" arguments:nil];
        content.body = [NSString localizedUserNotificationStringForKey:@"We found one IKEA Product"
                                                             arguments:nil];
        //content.userInfo[@"major"] = beaconRegion.major
        content.userInfo  =  @{@"major": beaconRegion.major};
        
        content.categoryIdentifier = @"ikeaNotification";
        content.sound = [UNNotificationSound defaultSound];
        
        // 在 alertTime 后推送本地推送
        UNTimeIntervalNotificationTrigger *trigger = [UNTimeIntervalNotificationTrigger triggerWithTimeInterval:1 repeats:NO];
        
        UNNotificationRequest* request = [UNNotificationRequest requestWithIdentifier:@"ikeaNotification"
                                                                              content:content trigger:trigger];
        [[UNUserNotificationCenter currentNotificationCenter] addNotificationRequest:request withCompletionHandler:^(NSError * _Nullable error) {
        }];
    }
    else if(state == CLRegionStateOutside) {
        NSLog(@"locationManager didDetermineState OUTSIDE for %@", region.identifier);
    }
    else {
        NSLog(@"locationManager didDetermineState OTHER for %@", region.identifier);
    }
}

@end

