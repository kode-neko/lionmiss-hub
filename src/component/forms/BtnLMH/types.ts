type BtnLMHProps = {
  label: JSX.Element;
  disabled: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: () => void
}

export type { BtnLMHProps };