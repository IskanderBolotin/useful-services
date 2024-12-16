import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { isDefinedFn } from "shared/lib/isDefined";
import s from "./checkboxForm.module.scss";

type CheckboxFormProps = {
  name: string;
  label: string;
  defaultValue?: boolean;
  handleChange?: () => void;
};

const CheckboxForm: React.FC<CheckboxFormProps> = ({
  name,
  label,
  defaultValue = false,
  handleChange,
}) => {
  const [checkboxValue, setCheckboxValue] = useState(defaultValue);

  const onChange = () => {
    setCheckboxValue((value) => !value);
    if (isDefinedFn(handleChange)) {
      handleChange();
    }
  };

  return (
    <FormControlLabel
      className={s.label}
      control={
        <Checkbox checked={checkboxValue} onChange={onChange} name={name} />
      }
      labelPlacement="start"
      label={label}
    />
  );
};

export default CheckboxForm;
