import casesData from '../../fixtures/covid19Data.json';
class Covi19Service {
    getCasesDataAPI() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(casesData)   
            },1000)
        })

    }
}

export { Covi19Service };