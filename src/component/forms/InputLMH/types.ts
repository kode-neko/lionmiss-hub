import { ChangeEvent, FocusEvent } from "react";

type InputLMHProps = {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  hint?: string;
  error?: string; 
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void,
}

export type { InputLMHProps };