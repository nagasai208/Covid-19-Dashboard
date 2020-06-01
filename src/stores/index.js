//import AuthenticationService from '../Authentication/services/AuthenticationService/AuthenticationAPIData';
import AuthenticationService from "../Authentication/services/AuthenticationService/AuthenticationFixturesData";
import AuthenticationStore from "../Authentication/stores/AuthenticationStore";
import Covid19StateStore from "../Covid19Dashboard/stores/Covid19StateStore"
//import Covid19Service from "../Covid19Dashboard/services/Covid19Service/Covid19APIData";
import Covid19ServiceFixturesData from "../Covid19Dashboard/services/Covid19Service/Covid19FixturesData/Covid19iService.fixtures";
import CounterStore from './CounterStore';


const counterStore = new CounterStore()
const authenticationService = new AuthenticationService()
const authenticationStore = new AuthenticationStore(authenticationService);
//const covid19Service = new Covid19Service();
const covid19Service = new Covid19ServiceFixturesData();
const covid19StateStore = new Covid19StateStore(covid19Service);



export default {
  counterStore,
  authenticationStore,
  covid19StateStore,

}
