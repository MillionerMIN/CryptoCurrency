import './Page.scss';
import { Header } from '../header/Header';
import { CurrencyType } from '../../api/api';
import { History } from '../history/History';

type PagePropsType = {
  data: CurrencyType[];
};

export const Page = (props: PagePropsType) => {
  const { data } = props;

  return (
    <section className="page">
      <div className="page__wrapper">
        <Header data={data} />
        <History />
      </div>
    </section>
  );
};
