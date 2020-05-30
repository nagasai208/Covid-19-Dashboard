import casesData from '../../fixtures/covid19Data.json';
class Covid19Service {
    getCasesDataAPI() {
        console.log(4)
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(casesData)   
            },1000)
        })

    }
}

export { Covid19Service };