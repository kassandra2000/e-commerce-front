import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const AdminDetails = () => {
  const data = [
    { name: "Series-1", value: 21, color: "#00C49F" },
    { name: "Series-2", value: 34, color: "#FFBB28" },
    { name: "Series-3", value: 49, color: "#0088FE" },
    { name: "Series-4", value: 21, color: "#FF8042" },
    { name: "Series-5", value: 72, color: "#8A2BE2" },
  ];

  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="job-details-card">
      <div className="details-header text-center">
        <h5>Details</h5>
      </div>
      <div className="details-body ">
        <table className="table">
          <thead>
            <tr>
              <th>Series</th>
              <th>Point</th>
              <th>%</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td>
                  <span
                    className="dot"
                    style={{ backgroundColor: entry.color }}
                  ></span>
                  {entry.name}
                </td>
                <td>{entry.value}</td>
                <td>{((entry.value / total) * 100).toFixed(2)}%</td>
                <td>{((entry.value / total) * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={5}
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="center-text">
            <h2>{total}</h2>
            <p>+19%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDetails;
