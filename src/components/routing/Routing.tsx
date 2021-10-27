import { Route, Switch } from 'react-router';
import { Information } from '../information/Information';
import { Layout } from '../layout/Layout';
import { NotFound } from '../page/notFound/NotFound';

export const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path={'/assets'} render={() => <Layout />} />
        <Route path={'/404'} render={() => <NotFound />} />
        <Route path={'/assets/:id'} render={() => <Information />} />
      </Switch>
    </>
  );
};
