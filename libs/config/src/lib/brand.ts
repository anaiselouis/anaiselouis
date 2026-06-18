/*
 * Copyright © 2026 Gavin William Sawyer. All rights reserved.
 */

import colorsLib from "@bowstring/colors";
import { Brand } from "@bowstring/core";


export const brand: Brand = {
  copyrightHolder:    "Anaïse Louis",
  copyrightHolderUrl: "https://anaiselouis.com/",
  city:               "Boston, MA",
  fontFamily:         "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  primaryColor:       {
    hue:        15,
    lightness:  .26,
    saturation: .71,
  },
  roundness:          1.375,
  secondaryColor:     colorsLib.flax,
  timeZone:           "America/New_York",
  warningColor:       colorsLib.carmine,

  get description(): string {
    return $localize`:@@libs--Config--Brand--Description:Anaïse Louis is a multidisciplinary artist and the founder of apparel brand After Awakening.`;
  },
  get title(): string {
    return $localize`:@@libs--Config--Brand--Title:Anaïse Louis`;
  },
};
