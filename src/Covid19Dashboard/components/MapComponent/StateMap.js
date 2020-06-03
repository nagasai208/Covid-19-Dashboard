import React, { useState } from 'react'
import ReactMapboxGl, { Layer, Feature, Source, GeoJSONLayer } from 'react-mapbox-gl';
import { observer } from "mobx-react";
import stateBoundaries from '../../fixtures/stateBoundries.json';
import bbox from '@turf/bbox';
import { MapMainDiv } from './styledComponents';
const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoiY3Vnb3MiLCJhIjoiY2p4Nm43MzA3MDFmZDQwcGxsMjB4Z3hnNiJ9.SQbnMASwdqZe6G4n6OMvVw',

});

@observer
class MapComponent extends React.Component {
    render() {
        const boundries = bbox(stateBoundaries)
        return (
            <MapMainDiv>
                <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        height: '60vh',
                        width: '45vw'
                    }}

                    fitBounds={[[boundries[0], boundries[1]], [boundries[2], boundries[3]]]}
                >
                    <GeoJSONLayer
                        type='fill'
                        data={stateBoundaries}
                        
                        symbolLayout={{
                            "text-field": "{place}",
                            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                            "text-offset": [0, 0.6],
                            "text-anchor": "top",
                        }}
                        fillPaint={{ 'fill-color': 'rgba(200, 100, 240, 0.4)', 'fill-outline-color': 'rgba(200, 100, 240, 1)' }}/>
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                </Map>;
            </MapMainDiv>
        )
    }
}

export { MapComponent }