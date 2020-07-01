import React, { Suspense, lazy } from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect
} from 'react-router-dom'
import './App.css'
import { Provider } from 'mobx-react'
import stores from './Common/stores'
// import LoginPageRoute from './Authentication/routes/LoginInPageRoute'
import Covid19DashboardRoute from './Covid19Dashboard/routes/DashboardRoute/DashBoardRoute'
import DashBoard from './Covid19Dashboard/routes'
import { I18nextProvider } from 'react-i18next'
import LoadingView from './Common/components/common/LoadingWrapperWithFailure/LoadingView'
import i18n from './Common/i18n'

const LoginPageRoute = lazy(() =>
   import('./Authentication/routes/LoginInPageRoute')
)
class App extends React.Component {
   render() {
      return (
         <Provider {...stores}>
            <I18nextProvider i18n={i18n}>
               <Suspense fallback={<LoadingView />}>
                  <Router basename={process.env.PUBLIC_URL}>
                     <Switch>
                        {Covid19DashboardRoute}
                        {DashBoard}
                        <Route path='/login'>
                           <LoginPageRoute />
                        </Route>
                        <Route path='/'>
                           <Redirect to={'/login'} />
                        </Route>
                     </Switch>
                  </Router>
               </Suspense>
            </I18nextProvider>
         </Provider>
      )
   }
}
export default App
