import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PageLoading from './Components/GlobalComponents/PageLoading';

const Home = lazy(() => import('./Pages/Home'));

const Routes = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
