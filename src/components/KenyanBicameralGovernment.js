import React from 'react';

const KenyanLegislatureSVG = () => (
  <svg
    width="800"
    height="500"
    viewBox="0 0 800 500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#000000"
    strokeWidth="2"
  >
    {/* Background */}
    <rect x="0" y="0" width="800" height="500" fill="#F0F0F0" />

    {/* National Assembly (Lower House) */}
    <g transform="translate(150, 200)">
      {/* Building */}
      <rect x="-100" y="-100" width="200" height="200" fill="#005AA7" />
      {/* Roof */}
      <polygon points="-100,-100 0,-150 100,-100" fill="#003F6B" />
      {/* Columns */}
      <rect x="-80" y="-90" width="20" height="180" fill="#FFFFFF" />
      <rect x="-40" y="-90" width="20" height="180" fill="#FFFFFF" />
      <rect x="0" y="-90" width="20" height="180" fill="#FFFFFF" />
      <rect x="40" y="-90" width="20" height="180" fill="#FFFFFF" />
      <rect x="80" y="-90" width="20" height="180" fill="#FFFFFF" />
      {/* Door */}
      <rect x="-20" y="50" width="40" height="50" fill="#FFFFFF" />
      {/* Label */}
      <text x="0" y="180" textAnchor="middle" fill="#000000" fontSize="16">
        National Assembly
      </text>
    </g>

    {/* Senate (Upper House) */}
    <g transform="translate(650, 200)">
      {/* Building */}
      <rect x="-100" y="-100" width="200" height="200" fill="#E5C100" />
      {/* Roof */}
      <polygon points="-100,-100 0,-150 100,-100" fill="#B79F00" />
      {/* Columns */}
      <rect x="-80" y="-90" width="20" height="180" fill="#FFFFFF" />
      <rect x="-40" y="-90" width="20" height="180" fill="#FFFFFF" />
      <rect x="0" y="-90" width="20" height="180" fill="#FFFFFF" />
      <rect x="40" y="-90" width="20" height="180" fill="#FFFFFF" />
      <rect x="80" y="-90" width="20" height="180" fill="#FFFFFF" />
      {/* Door */}
      <rect x="-20" y="50" width="40" height="50" fill="#FFFFFF" />
      {/* Label */}
      <text x="0" y="180" textAnchor="middle" fill="#000000" fontSize="16">
        Senate
      </text>
    </g>

    {/* Path */}
    <path
      d="M250,250 Q400,350 550,250"
      fill="none"
      stroke="#000000"
      strokeWidth="4"
    />

    {/* Grass */}
    <rect x="0" y="300" width="800" height="200" fill="#73C264" />

    {/* Trees */}
    <g transform="translate(100, 300)">
      {/* Tree 1 */}
      <rect x="-10" y="-80" width="20" height="80" fill="#8B5A2B" />
      <circle cx="0" cy="-100" r="30" fill="#2E8B57" />
      <circle cx="-20" cy="-70" r="30" fill="#2E8B57" />
      <circle cx="20" cy="-70" r="30" fill="#2E8B57" />
      {/* Tree 2 */}
      <rect x="120" y="-120" width="20" height="120" fill="#8B5A2B" />
      <circle cx="130" cy="-150" r="30" fill="#2E8B57" />
      <circle cx="110" cy="-120" r="30" fill="#2E8B57" />
      <circle cx="150" cy="-120" r="30" fill="#2E8B57" />
    </g>

    {/* Text explanation */}
    <text x="400" y="450" textAnchor="middle" fill="#000000" fontSize="14">
      Kenya's bicameral legislature consists of the National Assembly and the Senate.
    </text>
    <text x="400" y="470" textAnchor="middle" fill="#000000" fontSize="14">
      The National Assembly represents the people of Kenya, while the Senate represents the counties.
    </text>
    <text x="400" y="490" textAnchor="middle" fill="#000000" fontSize="14">
      Both houses work together to pass legislation and ensure good governance.
    </text>
  </svg>
);

export default KenyanLegislatureSVG;
