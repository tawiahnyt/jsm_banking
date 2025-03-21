/** @format */

import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "tawiah",
    lastName: "in4k",
    email: "contact@tawiah.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={792422.28}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSideBar user={loggedIn} transactions={[]} banks={[{currentBalance: 21344.33}, {currentBalance:2903.23}]} />
    </section>
  );
};

export default Home;
