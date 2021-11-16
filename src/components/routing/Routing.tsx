import { Route, Switch } from 'react-router';
import { CostWallet } from '../costWallet/CostWallet';
import { Information } from '../information/Information';
import { BasePage } from '../page/BasePage/BasePage';

import { NotFound } from '../page/notFound/NotFound';

export const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path={'/'} render={() => <BasePage />} />
        <Route path={'/assets/:id'} render={() => <Information />} />
        <Route path={'/costwallet'} render={() => <CostWallet />} />
        <Route path="*" component={() => <NotFound />} />
      </Switch>
    </>
  );
};
