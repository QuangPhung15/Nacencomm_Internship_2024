import React from "react";

type Props = { downloadSource: string; imageSource: string; alt: string };

export default function Download({ downloadSource, imageSource, alt }: Props) {
    return (
        <div>
            <a href={downloadSource} target="_blank">
                <img
                    src={imageSource}
                    alt={alt}
                    className="w-[200px] m-[10px]"
                />
            </a>
        </div>
    );
}
