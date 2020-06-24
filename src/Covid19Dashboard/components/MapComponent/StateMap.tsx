import React, { useState } from 'react'
import { observer, inject } from "mobx-react";
import { MapMainDiv, DistrictButton } from './styledComponents';
import { observable, toJS, action } from 'mobx';
import Covid19StateStore from "../../stores/Covid19StateStore";
type MapComponentProps = {
    onClickDistrict:Function
    totalDistictsData:any
    districtName:string
    covid19StateStore:Covid19StateStore
    onclickDistrict:() =>void
}
@inject('covid19StateStore')
@observer
class MapComponent extends React.Component <MapComponentProps> {
    @action.bound
    onclickDistrict(event: { target: { value: any; id: number; }; }) {
        let name = event.target.value;
        let id= event.target.id
        this.props.covid19StateStore.onClickDistrict(id, name)
    }
    render() {
        const { totalDistictsData, districtName } = this.props;
        if (districtName === '') {
            return (
                <MapMainDiv>
                    {
                        totalDistictsData.map(eachDistrict => {
                            return <DistrictButton id={eachDistrict.districtId} value={eachDistrict.districtName} onClick={this.onclickDistrict}>{eachDistrict.districtName}</DistrictButton>
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
