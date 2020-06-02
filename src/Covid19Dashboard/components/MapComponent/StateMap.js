import * as React from 'react';
import ReactMapboxGl, { GeoJSONLayer } from '../../../';
import * as MapboxGL from 'mapbox-gl';

// tslint:disable-next-line:no-var-requires
//const { token, styles } = require('./config.json');
// tslint:disable-next-line:no-var-requires
const geojson = require(' https://is.gd/andhra_pradesh_districts');

//const Map = ReactMapboxGl({ accessToken: token });

// const mapStyle = {
//     flex: 1
// };

// const symbolLayout: MapboxGL.SymbolLayout = {
//     'text-field': '{place}',
//     'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
//     'text-offset': [0, 0.6],
//     'text-anchor': 'top'
// };
// const symbolPaint: MapboxGL.SymbolPaint = {
//     'text-color': 'white'
// };

// const circleLayout: MapboxGL.CircleLayout = { visibility: 'visible' };
// const circlePaint: MapboxGL.CirclePaint = {
//     'circle-color': 'white'
// };


class GeoJsonLayer extends React.Component {
    center = [-77.01239, 38.91275];

    
    onClickCircle = (evt) => {
        console.log(evt);
    };


    onStyleLoad = (map => {
        const { onStyleLoad } = this.props;
        return onStyleLoad && onStyleLoad(map);
    });

    render() {
        return (
            <Map
                style={styles.dark}
                center={this.center}
                containerStyle={mapStyle}
                onStyleLoad={this.onStyleLoad}
            >
                <GeoJSONLayer
                    data={geojson}
                    circleOnClick={this.onClickCircle}
                    symbolLayout={symbolLayout}
                    symbolPaint={symbolPaint}
                />
            </Map>
        );
    }
}

export default GeoJsonLayer;