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
        this.props.onClickDistrict();
        let name = event.target.value;
        let id= event.target.id
        this.props.covid19StateStore.onClickDistrict(id, name)
    }
    render() {
        const { totalDistictsData, districtName } = this.props.covid19StateStore;
        if (districtName === '') {
            return (
                <MapMainDiv>
                    {
                        totalDistictsData.map(eachDistrict => {
                            return <DistrictButton id={eachDistrict.districtId} value={eachDistrict.districtName} onClick={this.onClickDistrict}>{eachDistrict.districtName}</DistrictButton>
                        })
                    }
                </MapMainDiv>
            )
        }
        else {
            return <MapMainDiv ><DistrictButton>Mandals</DistrictButton> </MapMainDiv>
        }
       
    }
   
}

export { MapComponent }
