import { Route, Switch } from 'react-router';
import { Information } from '../information/Information';
import { BasePage } from '../page/BasePage/BasePage';

import { NotFound } from '../page/notFound/NotFound';

export const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path={'/'} render={() => <BasePage />} />
        <Route path={'/404'} render={() => <NotFound />} />
        <Route path={'/assets/:id'} render={() => <Information />} />
      </Switch>
    </>
  );
};
