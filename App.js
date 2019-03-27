/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import token from './token';

MapboxGL.setAccessToken(token);
const columbusCircleCoordinates = [
    -73.98197650909422, 40.768793007758816
];
export default class App extends Component<{}> {
    render () {
        return (
            <View style={{flex: 1}}>
                <MapboxGL.MapView
                    ref={(c) => this._map = c}
                    style={{flex: 1}}
                    zoomLevel={12}
                    centerCoordinate={columbusCircleCoordinates}
                    showUserLocation={true}
                >

                </MapboxGL.MapView>
            </View>
        );
    }
}