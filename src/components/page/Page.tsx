import './Page.scss';
import { Header } from '../header/Header';
import { History } from '../history/History';


export const Page = () => {
  return (
    <section className="page">
      <div className="page__wrapper">
        <Header />
        <History />
      </div>
    </section>
  );
};
