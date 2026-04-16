const statusClasses = {
  Overdue: "bg-[#FF4D4F] text-white",
  "Almost Due": "bg-[#F6B94C] text-white",
  "On Track": "bg-[#244D3F] text-white",
  "Need Attention": "bg-[#FF4D4F] text-white",
};

const formatStatus = (status) => {
  if (status === "On Track") return "On-Track";
  return status;
};

const CardUi = ({ friend }) => {
  const { name, avatar, lastContactDaysAgo, tags = [], status } = friend;

  return (
    <div className="w-full max-w-[182px] rounded-[12px] border border-[#E9E9E9] bg-white px-6 py-4 cursor-pointer">
      <div className="flex flex-col items-center text-center">
        <img
          src={avatar}
          alt={name}
          className="mb-3 h-[56px] w-[56px] rounded-full object-cover"
        />

        <h3 className="text-[15px] font-semibold leading-[22px] text-[#1E293B]">
          {name}
        </h3>

        <p className="mt-1 text-[11px] font-medium leading-[16px] text-[#94A3B8]">
          {lastContactDaysAgo}d ago
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-1">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#DCFCE7] px-2 py-[2px] text-[9px] font-medium uppercase leading-[14px] text-[#5F8F71]"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className={`mt-2 rounded-full px-2 py-[3px] text-[9px] font-medium leading-[14px] ${
            statusClasses[status] || "bg-slate-200 text-slate-700"
          }`}
        >
          {formatStatus(status)}
        </span>
      </div>
    </div>
  );
};

export default CardUi;
