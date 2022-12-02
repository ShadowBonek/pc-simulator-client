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
    <path
      d="m9.5.5h4c.5522847 0 1 .44771525 1 1v4c0 .55228475-.4477153 1-1 1h-4c-.55228475 0-1-.44771525-1-1v-4c0-.55228475.44771525-1 1-1zm-8 0h4c.55228475 0 1 .44771525 1 1v4c0 .55228475-.44771525 1-1 1h-4c-.55228475 0-1-.44771525-1-1v-4c0-.55228475.44771525-1 1-1zm8 8h4c.5522847 0 1 .44771525 1 1v4c0 .5522847-.4477153 1-1 1h-4c-.55228475 0-1-.4477153-1-1v-4c0-.55228475.44771525-1 1-1zm-8 0h4c.55228475 0 1 .44771525 1 1v4c0 .5522847-.44771525 1-1 1h-4c-.55228475 0-1-.4477153-1-1v-4c0-.55228475.44771525-1 1-1z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(3 3)"
    />
  </svg>
)

export default SvgComponent