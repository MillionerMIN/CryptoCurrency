import { Bar } from 'react-chartjs-2';
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
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="chart">
        <Bar data={data} options={options} />
      </div>
    </>
  );
};
