function StatusBadge({ status }) {

  let bgColor = "bg-green-100";
  let textColor = "text-green-700";

  if (status === "Approaching Limit") {
    bgColor = "bg-yellow-100";
    textColor = "text-yellow-700";
  }

  if (status === "Limit Reached") {
    bgColor = "bg-red-100";
    textColor = "text-red-700";
  }

  return (
    <span
      className={`inline-block px-4 py-2 rounded-full font-semibold ${bgColor} ${textColor}`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;