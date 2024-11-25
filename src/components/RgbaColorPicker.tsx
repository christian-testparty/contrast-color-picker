import React from "react";

import { AlphaColorPicker } from "./common/AlphaColorPicker";
import { ColorModel, ColorPickerBaseProps, RgbaColor } from "../types";
import { equalColorObjects } from "../utils/compare";
import { rgbaToHsva, hsvaToRgba } from "../utils/convert";
import { RgbaColorInput } from "./RgbaColorInput";

const colorModel: ColorModel<RgbaColor> = {
  defaultColor: { r: 0, g: 0, b: 0, a: 1 },
  defaultBackgroundColor: { r: 255, g: 255, b: 255, a: 1 },
  toHsva: rgbaToHsva,
  fromHsva: hsvaToRgba,
  equal: equalColorObjects,
};

export const RgbaColorPicker = (props: Partial<ColorPickerBaseProps<RgbaColor>>): JSX.Element => (
  <AlphaColorPicker {...props} colorModel={colorModel}>
    {
      (props.color && props.onChange) 
      &&
      <RgbaColorInput color={props.color} onChange={props.onChange} />
    }
  </AlphaColorPicker>
);
