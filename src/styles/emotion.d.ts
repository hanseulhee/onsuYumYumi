import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      yellow: string;
      grey: string;
    };
    fontWeight: {
      light: number;
      normal: number;
      bold: number;
    };
  }
}
