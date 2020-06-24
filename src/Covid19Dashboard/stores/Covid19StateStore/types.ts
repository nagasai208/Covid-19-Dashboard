export interface stateDisrictReport {
district_id :number
district_name : string 
total_cases : number
total_deaths: number
total_recovered_cases :number
active_cases: number
}
export interface StateWideObject{
state_name:string
districts:Array<stateDisrictReport>
}

export interface StateCumulativeObject {
    date:string,
    total_cases: number
    total_deaths: number
    total_recovered_cases: number
    active_cases: number

}

export interface StateCumulativeMainObject {
    daily_cumulative:Array<StateCumulativeObject>
}

export interface EachDayCasesObject {
            date: string,
            Kadapa: number
            Kurnool: number
            guntur: number
            krishna: number
            vizag: number
            vijayanagaram: number
            srikakulam: number
            eastgodavari: number
            westgodavari: number
            Nellore: number
            chittoor: number
            ongale: number
            Ananthapuram:number
}

export interface StateCumulativeDailReport {
    xAxixsKey:string
    district_name:Array<string>
    Each_Day_cases:Array<EachDayCasesObject>
}