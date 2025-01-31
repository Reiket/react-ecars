import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export type TInputProps<T extends FieldValues> = {
  name: Path<T>;
  id?: string;
  classnames?: string;
  register: UseFormRegister<T>;
  type?: string;
  placeholder?: string;
  rules: FieldValues;
};
