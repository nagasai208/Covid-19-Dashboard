import {StateWideObject,StateCumulativeMainObject,StateCumulativeDailReport} from '../stores/Covid19StateStore/types';
interface CovidService {
    getStateWideAPI: () => Promise<Array<StateWideObject>>
    getStateWideDailyCumulativeAPI: () => Promise<Array<StateCumulativeMainObject>>
    getStateWideCumulativeReport: () => Promise<Array<StateCumulativeMainObject>>
    getStatewideDailyReport: () => Promise<Array<StateCumulativeDailReport>>
    getStateDailyReport: (date:string) => Promise<Array<StateCumulativeDailReport>>
    getDistrictWideAPI: (date:string,id:number) => Promise<Array<StateWideObject>>
    getDistrictWideCumulativeAPI: (id:number) => Promise<Array<StateWideObject>>
    getDistrictWideDailyCumulativeAPI: (id:number) => Promise<Array<StateWideObject>>
    getDistrictWideDailyAPI: (id:number,date:string) => Promise<Array<StateWideObject>>
    getDistrictDailyAPI: () => Promise<Array<StateWideObject>>
    getDistrictsWideAnalysisAPI: () => Promise<Array<StateWideObject>>
    
}
export default CovidService;