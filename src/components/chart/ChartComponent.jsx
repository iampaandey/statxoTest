import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



const ChartComponent = ({data}) => {
  const impacts = data?.map(item => item?.Impact) || "";
  console.log(impacts);
  const quantities = data?.map(item => item?.quantity) || "";
 console.log(quantities);
  const chartData = {
    labels: impacts,
    datasets: [
      {
        label: 'Quantity',
        data: quantities,
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
        borderColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Impact Chart',
      },
    },
  };

  return (
    <div className="flex justify-center items-center mb-4 bg-gray-100">
      <div className="w-full max-w-lg">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ChartComponent;
