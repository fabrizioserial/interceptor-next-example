import React, {ReactNode} from "react";

export default function Layout(
    {
        children,
        modal,
    }: {
        children: ReactNode,
        modal: ReactNode,
    }) {
    return (
        <body>
        {children}
        {modal}
        </body>
    )
}
