import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { observable } from "mobx";
import { observer } from "mobx-react";
import { DatePickerDiv } from './styledComponents';
import { inject } from "mobx-react";
@inject('covid19StateStore')
@observer
class DatePickerComponent extends Component {
    @observable startDate
    constructor(props) {
        super(props)
        this.startDate = this.props.covid19StateStore.currentDate;
    }

    handleChange = (date) => {
        this.startDate = date; 
        this.props.onChangeDate(date)
    }

    onFormSubmit=(e)=> {
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
