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
    <g fill="none" fillRule="evenodd" transform="translate(2 2)">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <circle cx={8.5} cy={8.5} r={8} />
        <path d="m8.5 12.5v-4h-1" />
        <path d="m7.5 12.5h2" />
      </g>
      <circle cx={8.5} cy={5.5} fill="currentColor" r={1} />
    </g>
  </svg>
)

export default SvgComponent
