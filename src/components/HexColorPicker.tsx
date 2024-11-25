import React from "react";

import { ColorPicker } from "./common/ColorPicker";
import { HexColorInput } from "./HexColorInput";
import { ColorModel, ColorPickerBaseProps } from "../types";
import { equalHex } from "../utils/compare";
import { hexToHsva, hsvaToHex } from "../utils/convert";

const colorModel: ColorModel<string> = {
  defaultColor: "000",
  defaultBackgroundColor: "fff",
  toHsva: hexToHsva,
  fromHsva: ({ h, s, v }) => hsvaToHex({ h, s, v, a: 1 }),
  equal: equalHex,
};

export const HexColorPicker = (props: Partial<ColorPickerBaseProps<string>>): JSX.Element => (
  <ColorPicker {...props} colorModel={colorModel}>
    <HexColorInput {...props} label="Hex" prefixed />
  </ColorPicker>
);
