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
    >
      <path d="m10.5 8v-5.5" />
      <path d="m10.5 18.5v-5.5" />
      <circle cx={10.5} cy={10.5} r={2.5} />
    </g>
  </svg>
)

export default SvgComponent
