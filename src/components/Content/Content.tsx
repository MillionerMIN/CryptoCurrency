import './content.scss';
import { InfoPanel } from '../info/InfoPanel';
import { History } from '../history/History';

export const Content = () => {
  return (
    <section className="content content_pd20-30">
      <div className="content__wrapper">
        <InfoPanel />
        <History />
      </div>
    </section>
  );
};
