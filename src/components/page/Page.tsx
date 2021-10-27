import './Page.scss';
import { Header } from '../header/Header';
import { CurrencyType } from '../../api/Api';
import { BarChart } from '../common/barChart/BarChart';

type PagePropsType = {
  data: CurrencyType[];
};

export const Page = (props: PagePropsType) => {
  const { data } = props;

  return (
    <section className="page">
      <Header data={data} />
      <BarChart />
    </section>
  );
};
