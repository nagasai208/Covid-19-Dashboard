import React, { useState } from 'react'
import { observer, inject } from "mobx-react";
import { MapMainDiv, DistrictButton } from './styledComponents';
import { observable, toJS, action } from 'mobx';
import Covid19StateStore from "../../stores/Covid19StateStore";
interface MapComponentProps  {
     
}

interface InjectedProps extends MapComponentProps {
    covid19StateStore:Covid19StateStore
}
@inject('covid19StateStore')
@observer
class MapComponent extends React.Component <MapComponentProps> {
    @action.bound
    onclickDistrict(event: { target: { value: any; id: number; }; }) {
        let name = event.target.value;
        let id= event.target.id
        this.getCovidStore().onClickDistrict(id, name)
    }

    getInjectedProps=():InjectedProps => this.props as InjectedProps

    getCovidStore = () => {
        return this.getInjectedProps().covid19StateStore
    }
    render() {
        const { totalDistictsData, districtName } = this.getCovidStore();
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
