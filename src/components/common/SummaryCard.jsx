function SummaryCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <p className="text-gray-500 text-sm font-medium">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-3 text-gray-800">
        {value}
      </h2>
    </div>
  );
}

export default SummaryCard;