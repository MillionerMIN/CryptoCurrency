import { Wrapper } from '../common/wrapper/Wrapper';
import { ProfileInfo } from '../personInfo/ProfileInfo';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../redux/store';
import {
  getCostWallet,
  getPercentTransaction,
  getSessionCostWallet,
  // setError,
  setLoading,
} from '../../redux/selectors';

import './content.scss';
import { Spinner } from '../common/spinner/Spinner';
import { CurrencyType } from '../../api/api';
import { Currency } from '../currency/Currency';
import { InformationPanel } from '../informationPanel/InformationPanel';

export type ContentPropsType = {
  data: CurrencyType[];
  totalCount: number;
  currentPage: number;
  perPage: number;
  onPageChange: (pageNumber: number) => void;
  active: boolean;
};

export const Content = (props: ContentPropsType) => {
  const { active } = props;
  const loading = useSelector<AppRootStateType, boolean>(setLoading);
  // const error = useSelector<AppRootStateType, string>(setError);
  // const activeBtn = useSelector<AppRootStateType, string>(setActiveBtn);

  const costWallet = useSelector<AppRootStateType, number>(getCostWallet);
  const sessionCostWallet = useSelector<AppRootStateType, number>(
    getSessionCostWallet
  );
  // percent transaction from cost wallet
  const percent = useSelector<AppRootStateType, number>(getPercentTransaction);

  const elementPage = active ? <Currency data={props} /> : <InformationPanel />;
  return (
    <section className="content content_pd20-30 content_pd10-15">
      <div className="content__wrapper">
        <div className="content__item content__item_grid1-3">
          <Wrapper>
            <ProfileInfo />
          </Wrapper>
        </div>
        <Wrapper>
          <div className="content__item content__item_grid_container">
            <div className="content__title">Balance Wallet:</div>
            <div className="content__desc">{costWallet} $</div>
          </div>
        </Wrapper>
        <Wrapper>
          <div className="content__item content__item_grid_container">
            <div className="content__title">Session operation:</div>
            <div className="content__desc">{sessionCostWallet} $</div>
            <div className="content__desc">{percent} %</div>
          </div>
        </Wrapper>

        <div className="content__item content__item_grid1-3">
          <Wrapper>
            {loading && <Spinner />}
            {elementPage}
          </Wrapper>
        </div>
      </div>
    </section>
  );
};
