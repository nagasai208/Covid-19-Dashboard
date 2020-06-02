import stateWideData from '../../../fixtures/stateWideData.json';
import cumulativeDistrictData from '../../../fixtures/covid19DistrictData.json';
import covid19ZonalWiseData from '../../../fixtures/districtWiseCasesDataAnalysis';
import stateWideCumulativeReport from '../../../fixtures/stateWideCumulativeData.json';
import stateWideDailyReport from '../../../fixtures/stateWideDailyData.json';
import districtWideCumulativeReport from '../../../fixtures/districtWideCumulativeData.json';
import districtWideDailyReport from '../../../fixtures/districtWideDailyData.json';
class Covid19ServiceFixturesData {
    getStateWideAPI() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(stateWideData)
            }, 1000)
        })

    }
    getStateWideCumulativeAPI() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(cumulativeDistrictData)
            }, 1000)
        })

    }
    getStatewideDailyReport() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(cumulativeDistrictData)
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
                resolve(covid19ZonalWiseData)
            }, 1000)
        })

    }
}

export default Covid19ServiceFixturesData;