// React import removed as it is not used
import { Card, Navbar } from "flowbite-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

// register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Website Traffic",
      data: [65, 59, 80, 81, 56, 55, 70],
      fill: true,
      tension: 0.4,
      backgroundColor: "rgba(59, 130, 246, 0.2)", // blue-500 alpha
      borderColor: "rgb(59, 130, 246)",
      pointBackgroundColor: "white",
      pointBorderColor: "rgb(59, 130, 246)",
      pointRadius: 5,
    },
  ],
};

const lineOptions = {
  responsive: true,
  plugins: {
    legend: { position: "top" as const },
    title: {
      display: true,
      text: "Monthly Website Traffic",
      font: { size: 18 },
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
    },
  },
  hover: {
    mode: 'nearest' as const,
    intersect: true,
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: { color: "rgba(203, 213, 225, 0.5)" }, // gray-300 alpha
    },
    x: {
      grid: { display: false },
    },
  },
};

const barData = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      label: "Sales ($)",
      data: [15000, 20000, 18000, 22000],
      backgroundColor: [
        "rgba(34, 197, 94, 0.6)", // green-500 alpha
        "rgba(249, 115, 22, 0.6)", // orange-500 alpha
        "rgba(239, 68, 68, 0.6)", // red-500 alpha
        "rgba(79, 70, 229, 0.6)", // indigo-500 alpha
      ],
      borderColor: [
        "rgba(34, 197, 94)",
        "rgba(249, 115, 22)",
        "rgba(239, 68, 68)",
        "rgba(79, 70, 229)",
      ],
      borderWidth: 1,
    },
  ],
};

const barOptions = {
  responsive: true,
  plugins: {
    legend: { position: "bottom" as const },
    title: {
      display: true,
      text: "Quarterly Sales",
      font: { size: 18 },
    },
    tooltip: {
      callbacks: {
        label: function(context: { dataset: { label: string }; parsed: { y: number } }) {
          let label = context.dataset.label || "";
          if (label) label += ': ';
          if (context.parsed.y !== null) {
            label += '$' + context.parsed.y.toLocaleString();
          }
          return label;
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { callback: (value: number) => '$' + value }
    }
  }
};

export default function FlowbiteChartsPage() {
  return (
    <>
      <Navbar fluid rounded className="bg-white border-b">
        <Navbar.Link href="#">
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            Flowbite Charts Demo
          </span>
        </Navbar.Link>
      </Navbar>

      <main className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Dynamic Charts with Flowbite & Chart.js</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <Line data={lineData} options={lineOptions} />
          </Card>

          <Card>
            <Bar data={barData} options={barOptions} />
          </Card>
        </div>
      </main>
    </>
  );
}
