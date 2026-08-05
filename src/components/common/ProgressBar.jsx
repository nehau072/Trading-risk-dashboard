function ProgressBar({ value, maxValue, color = "bg-blue-500" }) {
  const percentage = Math.min((value / maxValue) * 100, 100);

  return (
    <div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`${color} h-3 rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className="text-sm text-gray-500 mt-2">
        {percentage.toFixed(1)}% Used
      </p>
    </div>
  );
}

export default ProgressBar;