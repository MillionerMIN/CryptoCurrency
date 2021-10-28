import { Line } from 'react-chartjs-2';
import { CurrencyHistoryType } from '../../../api/Api';

type BarChartPropsType = {
  id: string;
  infoData: CurrencyHistoryType[];
};

export const BarChart = (props: BarChartPropsType) => {
  const { id, infoData } = props;
  const arrDate = infoData.map((i) => i.date.slice(0, 10));
  const arrPriseUsd = infoData.map((i) => i.priceUsd);

  const data = {
    labels: arrDate,
    datasets: [
      {
        label: id.toUpperCase(),
        data: arrPriseUsd,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};
