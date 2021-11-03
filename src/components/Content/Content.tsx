import './content.scss';
import { Header } from '../header/Header';
import { History } from '../history/History';

export const Content = () => {
  return (
    <section className="content content_pd20-30">
      <div className="content__wrapper">
        <Header />
        <History />
      </div>
    </section>
  );
};
