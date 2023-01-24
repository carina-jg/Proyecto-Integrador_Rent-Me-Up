import React from "react";
import styled from "styled-components";
import Select from "react-select";

const SelectStyle = styled(Select)`
  width: 100%;
  margin-bottom: 20px;

  .css-1s2u09g-control {
    // border: none;
    text-align: left;
  }
`;

function CustomSelect({ onChange, options, value, placeholder }) {
  const defaultValue = (options, value) => {
    return options.find((option) => option.value === value) || "";
  };

  return (
    <SelectStyle
      value={defaultValue(options, value)}
      onChange={(value) => onChange(value)}
      options={options}
      placeholder={placeholder}
      isClearable={true}
    />
  );
}

export default CustomSelect;
