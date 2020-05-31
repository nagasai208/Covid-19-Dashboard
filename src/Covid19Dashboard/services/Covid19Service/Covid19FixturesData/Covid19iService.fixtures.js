import casesData from '../../../fixtures/covid19Data.json';
import cumulativeDistrictData from '../../../fixtures/covid19DistrictData.json';
import covid19ZonalWiseData from '../../../fixtures/covid19DistrictWiseZonalData';
class Covid19ServiceFixturesData {
    getCasesDataAPI() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(casesData)   
            },1000)
        })

    }
    getCasesDistrictDataAPI() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(cumulativeDistrictData)
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

export default  Covid19ServiceFixturesData ;