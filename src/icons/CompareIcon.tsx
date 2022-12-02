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
      <path d="m.5 8.5 8 4 8.017-4" />
      <path d="m.5 4.657 8.008 3.843 8.009-3.843-8.009-4.157z" />
    </g>
  </svg>
)

export default SvgComponent
