import React, { useState } from 'react'
import ReactMapboxGl, { Layer, Feature, Source, GeoJSONLayer } from 'react-mapbox-gl';
import { observer, inject } from "mobx-react";
import bbox from '@turf/bbox';
import DeckGL from '@deck.gl/react';
import stateBoundaries from '../../fixtures/stateBoundries.json';
import { MapMainDiv, DistrictButton } from './styledComponents';
import { observable, toJS, action } from 'mobx';
@inject('covid19StateStore')
@observer
class MapComponent extends React.Component {
    @action.bound
    onClickDistrict(event) {
        let name = event.target.value;
        let id= event.target.id
        this.props.covid19StateStore.onClickDistrict(id, name)
    }
    render() {
        const { totalDistictsData } = this.props.covid19StateStore;
        return (
        <MapMainDiv>
            {
                    totalDistictsData.map(eachDistrict => {
                        return <DistrictButton id={eachDistrict.district_id} value={eachDistrict.district_name} onClick={this.onClickDistrict}>{eachDistrict.district_name}</DistrictButton>
                })
            }
            </MapMainDiv>
        )
    }
   
}

export { MapComponent }













































































// const Map = ReactMapboxGl({
//     accessToken:
//         'pk.eyJ1IjoiY3Vnb3MiLCJhIjoiY2p4Nm43MzA3MDFmZDQwcGxsMjB4Z3hnNiJ9.SQbnMASwdqZe6G4n6OMvVw',

// });

// const viewState = {
//     longitude: -122.41669,
//     latitude: 37.7853,
//     zoom: 12,
//     pitch: 0,
//     bearing: 0,
//     opacity: 0.8,
//     color: "red",
// };
// render() {
//     const boundries = bbox(stateBoundaries)
//     return (
//         <MapMainDiv>
//             <Map
//                 style="mapbox://styles/mapbox/streets-v9"
//                 containerStyle={{
//                     height: '60vh',
//                     width: '45vw'
//                 }}

//                 fitBounds={[[boundries[0], boundries[1]], [boundries[2], boundries[3]]]}
//             >
//                 <DeckGL
//                     viewState={viewState}
//                 />
//             </Map>;
//         </MapMainDiv>
//     )
// }

// type = 'fill'
// data = { stateBoundaries }
// fillPaint = {{ 'fill-color': 'rgba(200, 100, 240, 0.4)', 'fill-outline-color': 'rgba(200, 100, 240, 1)' }}