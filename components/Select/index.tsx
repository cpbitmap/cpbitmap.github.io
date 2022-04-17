import { FormControl, Select as PrimerSelect } from "@primer/react";
import React from "react";

type SelectProps = {
  options: string[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  label?: string;
  style?: React.CSSProperties;
};

const Select = ({ options, value, label, onChange, style }: SelectProps) => (
  <FormControl id={label} sx={{ ...style, width: "100%" }}>
    {label !== undefined && <FormControl.Label>{label}</FormControl.Label>}
    <PrimerSelect onChange={onChange} value={value}>
      {options.map((option) => (
        <PrimerSelect.Option key={option} value={option}>
          {option}
        </PrimerSelect.Option>
      ))}
    </PrimerSelect>
  </FormControl>
);

export default Select;
