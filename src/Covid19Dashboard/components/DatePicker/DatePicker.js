import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { observable } from "mobx";
import { observer } from "mobx-react";
import { DatePickerDiv } from './styledComponent';
@observer
class DatePickerComponent extends Component {
    @observable startDate

    constructor(props) {
        super(props)
            this.startDate= new Date()
    }

    handleChange = (date) => {
        this.startDate = date;
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
