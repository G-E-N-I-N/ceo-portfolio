
import { SVGProps } from 'react'

export function Warning(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                fill="currentColor"
                d="M12 5.99L19.53 19H4.47zM12 2L1 21h22z"
            ></path>
            <path fill="currentColor" d="M13 16h-2v2h2zm0-6h-2v5h2z"></path>
        </svg>
    )
}
