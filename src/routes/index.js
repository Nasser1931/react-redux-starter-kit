import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import CounterRoute from './Counter'
import ContactRoute from './Contact' /** imported index.js file form Contact folder*/
import UserRoute from './User'




export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    CounterRoute(store),
    ContactRoute(store), /* i dont know what this is but it made it work so i will just keep it here */
    UserRoute(store)
  ]
})


export default createRoutes
