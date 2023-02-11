import React from "react";

export default function TabularArea({ displayDroppedColumn }) {
  return (
    <div
      style={{
        marginTop: "20px",
        color: "black",
        display: "flex",
        whiteSpace: "nowrap",
      }}
    >
      {displayDroppedColumn}
    </div>
  );
}
