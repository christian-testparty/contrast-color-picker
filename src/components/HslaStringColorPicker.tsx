import React from "react";

import { AlphaColorPicker } from "./common/AlphaColorPicker";
import { ColorModel, ColorPickerBaseProps } from "../types";
import { equalColorString } from "../utils/compare";
import { hslaStringToHsva, hsvaToHslaString } from "../utils/convert";
import { HslaStringColorInput } from "./HslaStringColorInput";

const colorModel: ColorModel<string> = {
  defaultColor: "hsla(0, 0%, 0%, 1)",
  defaultBackgroundColor: "hsla(0, 0%, 100%, 1)",
  toHsva: hslaStringToHsva,
  fromHsva: hsvaToHslaString,
  equal: equalColorString,
};

export const HslaStringColorPicker = (
  props: Partial<ColorPickerBaseProps<string>>
): JSX.Element => ( 
  <AlphaColorPicker {...props} colorModel={colorModel}>
      <HslaStringColorInput {...props} label="HSLA"/>
  </AlphaColorPicker>
);
