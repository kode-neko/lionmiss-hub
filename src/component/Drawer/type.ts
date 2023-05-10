import { MenuOptionLMH } from "../../models";

type DrawerProps = {
  isVisible: boolean,
  menuMain: MenuOptionLMH[],
  onClickClose: () => void,
  onClickOptMainMenu: (opt: MenuOptionLMH) => void,
  onClickTheme: () => void,
  onClickLang: () => void,
}

export type {
  DrawerProps
};