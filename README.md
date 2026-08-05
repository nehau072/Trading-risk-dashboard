# Trading Risk Dashboard

A React-based trading risk monitoring dashboard that helps traders track account health, risk limits, trade performance, and equity movement.

## Live Demo

https://trading-risk-dashboard-l2jl.vercel.app

## GitHub Repository

https://github.com/nehau072/Trading-risk-dashboard

---

# What I Built

I built a Trading Risk Dashboard that provides traders with a clear view of their account risk and performance.

The dashboard includes:

* Account summary cards

  * Starting Balance
  * Current Balance
  * Remaining Drawdown
  * Today's Loss

* Risk monitoring section

  * Current drawdown tracking
  * Daily loss limit tracking
  * Risk status indicator

* Equity Curve

  * Visual representation of account balance movement over time

* Trade History

  * View all trades
  * Search trades by symbol
  * Filter profitable and losing trades
  * Sort trades by profit/loss

* Performance Analytics

  * Total trades
  * Winning trades
  * Losing trades
  * Win rate
  * Net profit
  * Average win/loss
  * Profit factor
  * Best and worst trades

* Add Trade functionality

  * Users can add new trades dynamically
  * Dashboard calculations update automatically using React Context API

---

# Additional Feature Implemented

## Dynamic Trade Management

I added an interactive trade management system where users can add new trades through the dashboard.

The newly added trades are automatically reflected in:

* Current account balance
* Drawdown calculations
* Daily loss calculations
* Trade history table
* Performance analytics

This was implemented using React Context API to maintain shared trade state across components.

---

# How to Run the Project Locally

## Prerequisites

Make sure you have:

* Node.js installed
* npm installed

## Installation

Clone the repository:

```bash
git clone https://github.com/nehau072/Trading-risk-dashboard.git
```

Navigate to the project folder:

```bash
cd Trading-risk-dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will run on:

```
http://localhost:5173
```

---

# Product Questions

## 1. What is drawdown in trading?

Drawdown is the decline in a trading account's value from its peak balance to its lowest point during a specific period.

For example, if a trader's account grows from $100,000 to $110,000 and later falls to $105,000, the drawdown is $5,000 from the peak.

Drawdown helps measure the risk and loss exposure of a trading strategy.

---

## 2. Why do you think a trader would care about their remaining drawdown rather than just their current P&L?

A trader cares about remaining drawdown because it shows how much risk capacity they have left before reaching their maximum allowed loss limit.

Current P&L only shows profit or loss at the moment, but remaining drawdown provides a clearer picture of account safety and helps traders avoid excessive risk-taking.

For example, a trader may currently be profitable but still be close to violating a risk limit after previous losses. Monitoring remaining drawdown helps maintain discipline and protect the account.

---

## 3. If you had another day to work on this dashboard, what would you improve?

If I had another day, I would improve the dashboard with:

* Backend integration for persistent trade storage
* User authentication
* Real-time market data integration
* More advanced risk metrics such as Sharpe ratio and maximum drawdown
* Interactive charts with date range filtering
* Exporting reports as CSV/PDF
* Better mobile responsiveness

These improvements would make the dashboard closer to a production trading risk management tool.

---

# Tech Stack

* React.js
* Vite
* Tailwind CSS
* React Context API
* Recharts
* JavaScript

---

# Project Structure

```
src
├── components
│   ├── common
│   └── Dashboard
├── context
├── data
├── pages
├── utils
├── App.jsx
└── main.jsx
```
