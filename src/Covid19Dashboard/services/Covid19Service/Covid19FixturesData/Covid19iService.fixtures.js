import stateWideReport from '../../../fixtures/stateWideData.json';
import stateWideAllDistrictReport from '../../../fixtures/StateWideAllDistrictsDailyCumulativeReport.json';
import stateWideCumulativeReport from '../../../fixtures/stateWideCumulativeData.json';
import stateWideDailyReport from '../../../fixtures/stateWideDailyData.json';
import allDistrictsAnalysis from '../../../fixtures/districtWiseCasesDataAnalysis';
import districtWideCumulativeReport from '../../../fixtures/districtWideCumulativeData.json';
import districtWideDailyReport from '../../../fixtures/districtWideDailyData.json';
import cumulativeDistrictData from '../../../fixtures/covid19AllDistrictsreport.json';

class Covid19ServiceFixturesData {
    getStateWideAPI() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(stateWideReport)
            }, 1000)
        })

    }
    getStateWideCumulativeAPI() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(stateWideCumulativeReport)
            }, 1000)
        })

    }

    getSetStateWideAllDistrictCumuLativeConfirmedCases() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(stateWideAllDistrictReport)
            }, 1000)
        })

    }


    getStatewideDailyReport() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(stateWideDailyReport)
            }, 1000)
        })

    }
    getDistrictWiseCumulativeAPI() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(districtWideCumulativeReport)
            }, 1000)
        })

    }
    getDistrictWiseDailyCumulativeAPI() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(cumulativeDistrictData)
            }, 1000)
        })

    }
    getDistrictWideDailyAPI() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(districtWideDailyReport)
            }, 1000)
        })

    }
    
    getCasesZonalDistrictWiseDataAPI() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(allDistrictsAnalysis)
            }, 1000)
        })

    }
}

export default Covid19ServiceFixturesData;