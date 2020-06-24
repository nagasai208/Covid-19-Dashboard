import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { observable } from "mobx";
import { observer } from "mobx-react";
import { DatePickerDiv } from './styledComponents';
import { inject } from "mobx-react";
import Covid19StateStore from "../../stores/Covid19StateStore";
type DatePickerProps = {
    covid19StateStore:Covid19StateStore
    onChangeDate:() =>void
}
@inject('covid19StateStore')
@observer
class DatePickerComponent extends Component <DatePickerProps>{
    @observable startDate: Date
    constructor(props: Readonly<DatePickerProps>) {
        super(props)
        this.startDate = this.props.covid19StateStore.currentDate;
    }

    handleChange = (date: Date) => {
        this.startDate = date; 
        this.props.covid19StateStore.onChangeDate(date)
    }

    onFormSubmit=(e: { preventDefault: () => void; })=> {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <DatePickerDiv className="form-group">
                    <DatePicker
                        selected={this.startDate}
                        onChange={this.handleChange}
                        name="startDate"
                        dateFormat="yyyy-MM-dd"
                    />

                </DatePickerDiv>
            </form>
        );
    }

}

export {
    DatePickerComponent
};
