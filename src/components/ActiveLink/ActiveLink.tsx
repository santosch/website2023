import {usePathname} from 'next/navigation'
import Link, { LinkProps } from 'next/link'
import React, { PropsWithChildren, useState, useEffect } from 'react'

type ActiveLinkProps = LinkProps & {
    className?: string
    activeClassName: string
}

/**
 * @see https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.tsx
 * adapted for use of new app directory
 */
export default function ActiveLink(
    {
        children,
        activeClassName,
        className,
        ...props
    }: PropsWithChildren<ActiveLinkProps>
): JSX.Element {
    const path = usePathname();
    const [computedClassName, setComputedClassName] = useState(className)

    useEffect(() => {
        // Check if the router fields are updated client-side
        if (path) {
            // Dynamic route will be matched via props.as
            // Static route will be matched via props.href
            const linkPathname = new URL(
                (props.as || props.href) as string,
                location.href
            ).pathname

            // Using URL().pathname to get rid of query and hash
            const activePathname = new URL(path, location.href).pathname

            const newClassName =
                linkPathname === activePathname
                    ? `${className} ${activeClassName}`.trim()
                    : className

            if (newClassName !== computedClassName) {
                setComputedClassName(newClassName)
            }
        }
    }, [
        path,
        props.as,
        props.href,
        activeClassName,
        className,
        computedClassName,
    ])

    return (
        <Link className={computedClassName} {...props}>
            {children}
        </Link>
    )
}