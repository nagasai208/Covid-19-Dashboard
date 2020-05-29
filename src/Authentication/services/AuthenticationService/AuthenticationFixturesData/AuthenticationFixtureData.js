import AuthenticationData from '../../../fixtures/LoginDetails.json';

class AuthenticationService {
    loginApi() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(AuthenticationData)
            }, 2000)
        })

    }
}


export default AuthenticationService
