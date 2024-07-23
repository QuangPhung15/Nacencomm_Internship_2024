import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input.tsx";
import Logo from "./Logo.tsx";
import Header from "./Header.tsx";
import Button from "./Button.tsx";
import { test } from "./api.ts";

export default function Login() {
    const [info, setInfo] = useState({ username: "", password: "" });
    const empty = useRef({ username: false, password: false });
    const valid = useRef({ username: true, password: true });
    const [isEmpty, setIsEmpty] = useState(false);

    const handleEmpty = (value: string, isUsername: boolean) => {
        setIsEmpty(!isEmpty);

        if (isUsername) {
            if (value.length === 0) {
                empty.current.username = true;
            } else {
                empty.current.username = false;
            }
        } else {
            if (value.length === 0) {
                empty.current.password = true;
            } else {
                empty.current.password = false;
            }
        }
    };

    const handleValid = (value: string) => {
        if (!value.includes("@")) {
            valid.current.username = false;
        } else {
            valid.current.username = true;
        }
    };

    const handleButton = async () => {
        handleEmpty(info.username, true);
        handleEmpty(info.password, false);

        if (empty.current.username || empty.current.password) {
            return;
        }

        handleValid(info.username);

        if (!valid.current.username) {
            return;
        }

        await test();
    };

    return (
        <div className="flex justify-center items-center flex-col m-0 p-[10px] h-[100%] w-[50%]">
            <Logo />
            <Header header="Sign in" />
            <form className="items-left">
                <Input
                    type="text"
                    id="username"
                    label="Account (Email)"
                    placeholder="johndoe@gmail.com"
                    onChange={(e) => {
                        setInfo({ ...info, username: e.target.value });
                        handleEmpty(e.target.value, true);
                        handleValid(e.target.value);
                    }}
                    require="Please enter your email"
                    invalid="Invalid username"
                    empty={empty.current.username}
                    valid={valid.current.username}
                />
                <Input
                    type="password"
                    id="password"
                    label="Password"
                    placeholder="......."
                    onChange={(e) => {
                        setInfo({ ...info, password: e.target.value });
                        handleEmpty(e.target.value, false);
                    }}
                    require="Please enter your password"
                    invalid=""
                    empty={empty.current.password}
                    valid={valid.current.password}
                />
            </form>
            <Button content="Sign in" onClick={handleButton} />
            <div className="flex justify-center items-center m-[10px]">
                <a
                    className="text-[#0055e6] no-underline text-[14px] duration-300 hover:text-[#3c7dec]"
                    href=""
                >
                    Forgot password?
                </a>
            </div>
            <div className="flex justify-center items-center m-[10px] overflow-hidden">
                <p className="relative text-center before:absolute before:top-[50%] before:right-[100%] before:content-[''] before:block before:w-[350px] before:h-[1px] before:bg-[blue] after:absolute after:bottom-[50%] after:left-[100%] after:content-[''] after:block after:w-[350px] after:h-[1px] after:bg-[blue]">
                    Or
                </p>
            </div>
            <div className="flex justify-center items-center">
                <button className="relative text-[14px] bg-white mt-[10px] ml-[10px] mr-[10px] mb-0 w-[350px] pt-[8px] pb-[8px] rounded-lg border border-solid border-[lightgrey] cursor-pointer duration-300 hover:text-[#3b76dc] hover:border-[#3b76dc]">
                    <img
                        src="/src/assets/google.svg.png"
                        alt="google logo"
                        className="w-[15px] absolute top-[11px] left-[20px]"
                    />
                    Sign in with Google
                </button>
            </div>
            <div className="flex justify-center items-center m-[20px]">
                <p className="mr-[10px]">Don't have an account yet?</p>
                <Link to="/signup" className="text-[#0055e6] no-underline">
                    Sign up
                </Link>
            </div>
            <div className="flex justify-center items-center m-[10px]">
                <a className="flex text-black no-underline mr-[40px]" href="">
                    <img
                        src="https://ca2sp.nacencomm.vn/assets/cloud_download-f522c85c.svg"
                        alt="cloud download"
                        className="w-[16px] mr-[5px]"
                    />
                    USB Token sign tool
                </a>
                <a className="flex text-black no-underline mr-[40px]" href="">
                    <img
                        src="https://ca2sp.nacencomm.vn/assets/text_sniper-c7babe21.svg"
                        alt="text snipper"
                        className="w-[16px] mr-[5px]"
                    />
                    Manual
                </a>
            </div>
        </div>
    );
}
