interface TextAreaLMHProps extends React.PropsWithChildren {
  id: string;
  label: string;
  placeholder?: string;
  value: string,
  hint?: string;
  error?: string; 
  onChange: (value: string) => void,
  onBlur: (value:string) => void
}

export type { TextAreaLMHProps };