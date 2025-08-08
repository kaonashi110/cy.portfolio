import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `
      $color01: #B8BFCE;
      $color02: #061A40;
      $color03: #0353A4;
      $color04: #006DAA;
      $color05: #003559;
      $colorAccent01: #00a8a8;
      $colorAccent02: #ed6b43;
      $textColor: #333;
      $textColor02: #747474;
      $transition: all .3s;
      $fontEn: "Roboto", sans-serif;
      $fontJa: "Noto Sans JP", sans-serif;
      $fontSaira: "Saira", sans-serif;
    `,
  },
};

export default nextConfig;