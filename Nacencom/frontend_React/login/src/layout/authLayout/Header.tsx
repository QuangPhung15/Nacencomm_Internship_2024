import React from "react";

type Props = { header: string };

export default function Header({ header }: Props) {
    return <h3 className="m-[15px] text-[24px]">{header}</h3>;
}
