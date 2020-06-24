import AuthenticationData from '../../../fixtures/LoginDetails.json';

class AuthenticationService {
    loginAPI() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(AuthenticationData)
            }, 2000)
        })

    }
}


export { AuthenticationService }
