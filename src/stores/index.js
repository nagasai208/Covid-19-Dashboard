import CounterStore from './CounterStore'
import AuthenticationService from "../Authentication/services/AuthenticationService"
import AuthenticationStore from "../Authentication/stores/AuthenticationStore"
import Covid19StateStore from "../Covid19Dashboard/stores/Covid19StateStore"
import Covid19DistrictStore from "../Covid19Dashboard/stores/Covid19DistrictStore"
import Covi19Service from "../Covid19Dashboard/services/Covid19Service"

const counterStore = new CounterStore()

const authenticationService = new AuthenticationService()
const authenticationStore = new AuthenticationStore(authenticationService);
const covid19Service = new Covi19Service();
const covid19StateStore = new Covid19StateStore(covid19Service);
const covid19DistrictStore = new Covid19DistrictStore(covid19Service);


export default {
  counterStore,
  authenticationStore,
  covid19StateStore,
  covid19DistrictStore

}
