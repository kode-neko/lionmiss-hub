import { ChangeEvent, FocusEvent } from "react";

interface TextAreaLMHProps extends React.PropsWithChildren {
  id: string;
  label: string;
  placeholder?: string;
  value: string,
  hint?: string;
  error?: string; 
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void,
}

export type { TextAreaLMHProps };