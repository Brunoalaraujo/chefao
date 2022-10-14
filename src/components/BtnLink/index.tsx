import React from "react";

interface BtnLinkProps {
  children: string;
  redirect: string;
  class?: string;
}

export default function BtnLink(props: BtnLinkProps) {
  return (
    <a className={`${props.class}`} href={`${props.redirect}`}>
      {props.children}
    </a>
  );
}
