import { IconProp } from "@fortawesome/fontawesome-svg-core";

type SwitchProps = {
  icon: IconProp,
  isActive: boolean,
  onClickSw: () => void
};

export type { SwitchProps };