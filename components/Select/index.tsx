import { FormControl, Select as PrimerSelect, Text } from "@primer/react";
import React from "react";

type SelectProps = {
  options: string[];
  label: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  style?: React.CSSProperties;
};

const Select = ({ options, value, label, onChange, style }: SelectProps) => (
  <div id={label} style={{ ...style, width: "100%" }}>
    <label htmlFor={label} style={{ width: "100%" }}>
      <Text
        as="p"
        sx={{
          fontSize: 1,
          fontWeight: "bold",
          m: 0,
          p: 0,
          pb: 1,
        }}
      >
        {label}
      </Text>
    </label>
    <FormControl sx={{ width: "100%" }}>
      <PrimerSelect
        id={label}
        onChange={onChange}
        value={value}
        sx={{ width: "100%" }}
      >
        {options.map((option) => (
          <PrimerSelect.Option key={option} value={option}>
            {option}
          </PrimerSelect.Option>
        ))}
      </PrimerSelect>
    </FormControl>
  </div>
);

export default Select;
