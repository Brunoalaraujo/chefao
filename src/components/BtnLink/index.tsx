import React from "react";

interface BtnLinkProps{
    children: string
    redirect: string
}

export default function BtnLink(props: BtnLinkProps) {
    return <a href={`${props.redirect}`}>{props.children}</a>
}