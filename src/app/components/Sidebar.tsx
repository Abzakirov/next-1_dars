import React from "react";

const menuItems = [
  { label: "Asosiy oziq-ovqatlar", key: "food" },
  { label: "Tayyor oziq-ovqatlar", key: "prepared-food" },
  { label: "Ichimliklar", key: "drinks" },
  { label: "Mobil telefon va kompyuter...", key: "electronics" },
  { label: "Go'zallik & Sog'lik", key: "beauty-health" },
  { label: "Oilaviy do'kon", key: "family-store" },
  { label: "Kitoblar", key: "books" },
  { label: "Shirinliklar", key: "sweets" },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-sm  overflow-y-auto mt-5">
      <div className="p-4 border-b border-gray-100  bg-white">
        <h4 className="font-medium text-gray-800">O'zbekistonga yetkazish</h4>
      </div>

      <div className="p-4">
        <div className="mb-4 pb-2 border-b border-gray-100">
          <h1 className="text-gray-600 font-medium">Go'sht va Baliq</h1>
        </div>

        <nav>
          {menuItems.map((item) => (
            <MenuItem key={item.key} label={item.label} />
          ))}
        </nav>
      </div>
    </div>
  );
}

function MenuItem({ label }: { label: string }) {
  return (
    <a href="#" className="group flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 mb-1">
      <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200 text-sm font-medium">
        {label}
      </span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}