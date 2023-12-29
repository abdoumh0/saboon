import {
  Playfair_Display,
  Major_Mono_Display,
  Lobster_Two,
  Cairo,
  Roboto_Mono,
  VT323,
} from "next/font/google";

import localFont from "next/font/local";

export const VT323_400 = VT323({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  preload: true,
});

export const Silkscreen_Regular = localFont({
  src: [{ path: "./public/fonts/Silkscreen/Silkscreen-Regular.ttf" }],
  display: "swap",
});

export const Roboto_Mono_400 = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const Cairo_400 = Cairo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const Playfair_Display_400 = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const Major_Mono_Display_400 = Major_Mono_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const Lobster_Two_400 = Lobster_Two({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
