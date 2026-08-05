function ProgressBar({ value, maxValue, color = "bg-blue-500" }) {
  const percentage = Math.min((value / maxValue) * 100, 100);

  return (
    <div>
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`${color} h-full transition-all duration-700`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="mt-2 text-sm text-gray-500">
        {percentage.toFixed(1)}% Used
      </p>
    </div>
  );
}

export default ProgressBar;