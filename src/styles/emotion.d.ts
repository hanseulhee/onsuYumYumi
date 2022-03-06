import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      yellow: string;
      grey: string;
      white: string;
      black: string;
    };
    fontWeight: {
      light: number;
      normal: number;
      bold: number;
    };
    mediaQuery: {
      tablet: string;
      mobile: string;
    };
  }
}
