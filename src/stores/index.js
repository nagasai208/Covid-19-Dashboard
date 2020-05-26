import CounterStore from './CounterStore'
import AuthenticationService from "../Authentication/services/AuthenticationService"
import AuthenticationStore from "../Authentication/stores/AuthenticationStore"

const counterStore = new CounterStore()

const authenticationService = new AuthenticationService()
const authenticationStore = new AuthenticationStore(authenticationService);

export default {
  counterStore,
  authenticationStore
}
