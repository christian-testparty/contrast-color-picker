import React from "react";

import { AlphaColorPicker } from "./common/AlphaColorPicker";
import { ColorModel, ColorPickerBaseProps } from "../types";
import { equalColorString } from "../utils/compare";
import { rgbaStringToHsva, hsvaToRgbaString } from "../utils/convert";
import { RgbaStringColorInput } from "./RgbaStringColorInput";

const colorModel: ColorModel<string> = {
  defaultColor: "rgba(0, 0, 0, 1)",
  defaultBackgroundColor: "rgba(0, 0, 0, 0)",
  toHsva: rgbaStringToHsva,
  fromHsva: hsvaToRgbaString,
  equal: equalColorString,
};

export const RgbaStringColorPicker = (
  props: Partial<ColorPickerBaseProps<string>>
): JSX.Element => (
  <AlphaColorPicker {...props} colorModel={colorModel}>
    <RgbaStringColorInput {...props} label="RGBA" />
  </AlphaColorPicker>
);
