import { Line, Pie } from 'react-chartjs-2';

export const PieChart = () => {
  const data = {
    type: 'bar',
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
  };

  return (
    <Pie
      data={data}
      options={{
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      }}
    />
  );
};
