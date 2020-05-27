import React, { Component } from 'react'
import DatePickerComponent from "../../components/DatePicker"
import { observer } from "mobx-react";
import { observable } from "mobx";
@observer
class DatePickerRoute extends Component {
    render() {
        return (
           <DatePickerComponent  />
        )
    }
}

export { DatePickerRoute }
