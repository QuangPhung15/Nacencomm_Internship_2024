import React from "react";
import Download from "./Download.tsx";

export default function Introduction() {
    return (
        <div className="flex justify-center items-center flex-col bg-[#0055E6] m-0 p-[10px] h-[100%] w-[50%]">
            <h1 className="m-[15px] text-white text-[40px]">
                Experience E-sign on mobile with Ca2 Remote Signing
            </h1>
            <p className="m-[15px] text-white text-[16px]">
                Sign right on your mobile device, no need for USB Token. Helps
                you work remotely in one place
            </p>
            <div className="flex justify-center">
                <Download
                    downloadSource="https://apps.apple.com/vn/app/ca2-remote-signing/id6445924092?l=vi"
                    imageSource="/src/assets/apple.svg.png"
                    alt="apple logo"
                />
                <Download
                    downloadSource="https://play.google.com/store/apps/details?id=com.rs.ca2&pli=1"
                    imageSource="/src/assets/ggplay.svg.png"
                    alt="google play logo"
                />
            </div>
        </div>
    );
}
