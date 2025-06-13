import React from "react";
import SeriesCard from "./SeriesCard";
import SeriesTemplate from "./SeriesTemplate";
import { sixtySeries, eightySeries, ninetyySeries } from "./ImageObject";

const seriesConfigs = [
  {
    data: sixtySeries,
    props: {
      title: "60 Series Casement System",
      info:
        "The 60 Series Casement System offers sleek windows for any architectural style, enhanced security, and a dust-reducing design. Choose from single-opening, double-opening, or fixed options, with grills for extra sophistication. Perfect for clear views and custom ventilation in any space.",
      l1: "3 different sizes of outer frames to suit your requirements",
      l2: "Capable of handling heights up to 8 Ft",
      l3: "Double locking mechanism in beading for better security",
      ideal:
        "Bedrooms, living rooms, and kitchens, blending seamlessly with both traditional and contemporary architecture.",
      height: "Maximum Permissible Height: 8 Feet.",
      wall: "Average wall thickness: 2.2 mm, extendable up to 2.5 mm",
    }
  },
  {
    data: eightySeries,
    props: {
      title: "80 Series Sliding System",
      info:
        "The 80 Series offers robust sliding frames with multi-point locking and superior insulation. It's suitable for larger openings, terraces, and commercial spaces.",
      l1: "Heavy-duty rollers for smooth operation",
      l2: "Sash options for fixed and sliding window combos",
      l3: "Compatible with curved glazing options",
      ideal: "Terraces, living areas, and balconies.",
      height: "Supports heights up to 10 Feet.",
      wall: "Wall thickness around 2.5 mm.",
    }
  },
  {
    data: ninetyySeries,
    props: {
      title: "90/112 Series Heavy-Duty System",
      info:
        "The 90/112 Series is engineered for heavy-duty applications like floor-to-ceiling windows and large sliding doors. Excellent thermal performance and custom mullion support.",
      l1: "Designed for large-format glazing",
      l2: "Supports double and triple track options",
      l3: "High load-bearing mullions included",
      ideal: "Commercial fronts and patio openings.",
      height: "Up to 12 Feet supported.",
      wall: "Standard wall thickness: 3 mm.",
    }
  }
];

const CompleteSeriesCard = () => (
  <div className="p-4 space-y-12">
    {seriesConfigs.map(({ data, props }) => (
      <div key={props.title}>
        <SeriesTemplate {...props} />
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
          {data.map(({ title, image }) => (
            <SeriesCard key={title} title1={title} img={image} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default CompleteSeriesCard;
