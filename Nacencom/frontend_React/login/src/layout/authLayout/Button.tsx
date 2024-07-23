import React from "react";

type Props = { content: string; onClick: () => void };

export default function Button({ content, onClick }: Props) {
    return (
        <>
            <button
                className="text-[14px] bg-[#0055e6] m-[10px] w-[350px] text-white pt-[8px] pb-[8px] rounded-lg border border-solid border-[#3b76dc] cursor-pointer duration-300 hover:bg-[#3b76dc]"
                onClick={onClick}
            >
                {content}
            </button>
        </>
    );
}
