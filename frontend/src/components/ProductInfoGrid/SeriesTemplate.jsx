import React from "react";

const SeriesTemplate = ({
  title,
  info,
  l1, l2, l3,
  ideal,
  height,
  wall,
}) => (
  <div className="mb-8">
    <h1 className="text-2xl md:text-3xl font-medium text-green-950 underline mb-2">
      {title}
    </h1>
    <p className="text-gray-700 mb-4">{info}</p>

    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 mb-6">
      {[{ label: "Unique Features", items: [l1, l2, l3] },
        { label: "Ideal For", items: [ideal] },
        { label: "Height", items: [height] },
        { label: "Wall Thickness", items: [wall] }
      ].map(({ label, items }) => (
        <div key={label} className="bg-gray-50 rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">{label}</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {items.map((text, i) => <li key={i}>{text}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default SeriesTemplate;
