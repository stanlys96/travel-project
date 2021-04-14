import Home from '../views/Home';
import SignIn from '../views/Login';

const routes = [
  {
    id: 1,
    path: "/",
    component: Home,
    exact: true
  },
  {
    id: 2,
    path: "/login",
    component: SignIn,
    exact: true
  }
]

export default routes;