import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height="1em"
    viewBox="0 0 21 21"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(2 4)"
    >
      <path d="m8.5 8.5 4 4.107 4-4.107" />
      <path d="m8.5 4.5-4-4-4 3.997" />
      <path d="m4.5.5v12" />
      <path d="m12.5.5v12" />
    </g>
  </svg>
)

export default SvgComponent
