import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "1",
      title: "Pajak Penghasilan",
      amount: 35_000_000,
      date: new Date(2023, 1, 10),
    },
    {
      id: "2",
      title: "Pajak Bumi dan Bangunan",
      amount: 2_500_00,
      date: new Date(2023, 1, 15),
    },
    {
      id: "3",
      title: "Pajak Kendaraan",
      amount: 15_000_000,
      date: new Date(2023, 1, 20),
    },
    {
      id: "4",
      title: "Gaji",
      amount: 250_000_000,
      date: new Date(2023, 1, 25),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;