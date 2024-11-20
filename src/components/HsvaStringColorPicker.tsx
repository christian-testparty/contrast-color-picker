import React from "react";

import { AlphaColorPicker } from "./common/AlphaColorPicker";
import { ColorModel, ColorPickerBaseProps } from "../types";
import { equalColorString } from "../utils/compare";
import { hsvaStringToHsva, hsvaToHsvaString } from "../utils/convert";
import { HsvaStringColorInput } from "./HsvaStringColorInput";

const colorModel: ColorModel<string> = {
  defaultColor: "hsva(0, 0%, 0%, 1)",
  defaultBackgroundColor: "hsva(0, 0%, 100%, 1)",
  toHsva: hsvaStringToHsva,
  fromHsva: hsvaToHsvaString,
  equal: equalColorString,
};

export const HsvaStringColorPicker = (
  props: Partial<ColorPickerBaseProps<string>>
): JSX.Element => (
  <AlphaColorPicker {...props} colorModel={colorModel}>
    <HsvaStringColorInput {...props} label="HSVA" />
  </AlphaColorPicker>
);
