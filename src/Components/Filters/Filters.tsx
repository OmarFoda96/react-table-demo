import React from "react";

export const FiltersInput: React.FC<{ column: any }> = ({ column }) => {
  const { filter, setFilter,Header } = column;
  return (
    <span>
      <input placeholder={Header} type="text" value={filter} onChange={(e=>setFilter(e.target.value))} />
    </span>
  );
};

export default FiltersInput;
