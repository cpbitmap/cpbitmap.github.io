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
  <FormControl id={label} sx={{ ...style, width: "100%" }}>
    <FormControl.Label htmlFor={label} sx={{ width: "100%" }}>
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
    </FormControl.Label>
    <PrimerSelect onChange={onChange} value={value} sx={{ width: "100%" }}>
      {options.map((option) => (
        <PrimerSelect.Option key={option} value={option}>
          {option}
        </PrimerSelect.Option>
      ))}
    </PrimerSelect>
  </FormControl>
);

export default Select;
