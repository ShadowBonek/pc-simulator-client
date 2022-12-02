import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg height="1em" viewBox="0 0 21 21" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" fillRule="evenodd" transform="translate(-1 -1)">
      <path
        d="m14.517 3.5 4.983 5v6l-4.983 5h-6.017l-5-5v-6l5-5z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m11.5 12.5v-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={11.5} cy={15.5} fill="currentColor" r={1} />
    </g>
  </svg>
);

export default SvgComponent;
