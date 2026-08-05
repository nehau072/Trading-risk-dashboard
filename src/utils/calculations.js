export function getTotalPnL(trades) {
  return trades.reduce((total, trade) => total + trade.pnl, 0);
}

export function getCurrentBalance(startingBalance, trades) {
  return startingBalance + getTotalPnL(trades);
}
export function getCurrentDrawdown(startingBalance, currentBalance) {
  return Math.max(0, startingBalance - currentBalance);
}


export function getRemainingDrawdown(maxDrawdown, currentDrawdown) {
  return Math.max(0, maxDrawdown - currentDrawdown);
}

export function getDailyLoss(trades, selectedDate) {
  return Math.abs(
    trades
      .filter(
        (trade) =>
          trade.date === selectedDate &&
          trade.pnl < 0
      )
      .reduce((total, trade) => total + trade.pnl, 0)
  );
}


export function getRemainingDailyLoss(limit, dailyLoss) {
  return Math.max(0, limit - dailyLoss);
}


export function getWinRate(trades) {
  const wins = trades.filter((trade) => trade.pnl > 0).length;
  return ((wins / trades.length) * 100).toFixed(1);
}


export function getWinningTrades(trades) {
  return trades.filter((trade) => trade.pnl > 0).length;
}


export function getLosingTrades(trades) {
  return trades.filter((trade) => trade.pnl < 0).length;
}


export function getRiskStatus(
  remainingDrawdown,
  remainingDailyLoss
) {
  if (
    remainingDrawdown <= 1000 ||
    remainingDailyLoss <= 500
  ) {
    return "At Risk";
  }

  if (
    remainingDrawdown <= 3000 ||
    remainingDailyLoss <= 1500
  ) {
    return "Approaching Limit";
  }

  return "Safe";
}