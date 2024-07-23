import React, { useRef, useState } from "react";
import Logo from "./Logo";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Signup() {
    const [info, setInfo] = useState({
        fullname: "",
        email: "",
        phone: "",
        organization: "",
        code: "",
    });
    const empty = useRef({
        fullname: false,
        email: false,
        phone: false,
        organization: false,
        code: false,
    });
    const valid = useRef({
        fullname: true,
        email: true,
        phone: true,
        organization: true,
        code: true,
    });
    const [isEmpty, setIsEmpty] = useState(false);

    const handleEmpty = ({
        value,
        fullname = false,
        email = false,
        phone = false,
        organization = false,
        code = false,
    }: {
        value: string;
        fullname?: boolean;
        email?: boolean;
        phone?: boolean;
        organization?: boolean;
        code?: boolean;
    }) => {
        setIsEmpty((prev) => {
            return !prev;
        });

        if (fullname) {
            if (value.length === 0) {
                empty.current.fullname = true;
            } else {
                empty.current.fullname = false;
            }
        }

        if (email) {
            if (value.length === 0) {
                empty.current.email = true;
            } else {
                empty.current.email = false;
            }
        }

        if (phone) {
            if (value.length === 0) {
                empty.current.phone = true;
            } else {
                empty.current.phone = false;
            }
        }

        if (organization) {
            if (value.length === 0) {
                empty.current.organization = true;
            } else {
                empty.current.organization = false;
            }
        }

        if (code) {
            if (value.length === 0) {
                empty.current.code = true;
            } else {
                empty.current.code = false;
            }
        }
    };

    const handleValid = ({
        value,
        email = false,
        phone = false,
    }: {
        value: string;
        email?: boolean;
        phone?: boolean;
    }) => {
        if (email) {
            if (!value.includes("@")) {
                valid.current.email = false;
            } else {
                valid.current.email = true;
            }
        }

        if (phone) {
            if (!/^\d+$/.test(value) || value.length > 10) {
                valid.current.phone = false;
            } else {
                valid.current.phone = true;
            }
        }
    };

    const handleButton = () => {
        handleEmpty({ value: info.fullname, fullname: true });
        handleEmpty({ value: info.email, email: true });
        handleEmpty({ value: info.phone, phone: true });
        handleEmpty({ value: info.organization, organization: true });
        handleEmpty({ value: info.code, code: true });

        if (
            empty.current.fullname ||
            empty.current.email ||
            empty.current.phone ||
            empty.current.organization ||
            empty.current.code
        ) {
            return;
        }

        handleValid({ value: info.email, email: true });
        handleValid({ value: info.phone, phone: true });

        if (!valid.current.email || !valid.current.phone) {
            return;
        }

        // setValidSubmit(true);
    };

    return (
        <div className="bg-white w-1/3 rounded-lg flex flex-col justify-center items-center">
            <Logo />
            <Input
                type="text"
                id="fullname"
                label="Fullname"
                placeholder="Enter your fullname"
                onChange={(e) => {
                    setInfo({ ...info, fullname: e.target.value });
                    handleEmpty({ value: e.target.value, fullname: true });
                    handleValid({ value: e.target.value });
                }}
                require="Please enter your fullname"
                invalid=""
                empty={empty.current.fullname}
                valid={valid.current.fullname}
            />
            <Input
                type="text"
                id="email"
                label="Email Sign Up"
                placeholder="Enter your email"
                onChange={(e) => {
                    setInfo({ ...info, email: e.target.value });
                    handleEmpty({ value: e.target.value, email: true });
                    handleValid({ value: e.target.value, email: true });
                }}
                require="Please enter your email"
                invalid="Invalid email"
                empty={empty.current.email}
                valid={valid.current.email}
            />
            <Input
                type="text"
                id="phone"
                label="Phone Number"
                placeholder="Enter your phone number"
                onChange={(e) => {
                    setInfo({ ...info, phone: e.target.value });
                    handleEmpty({ value: e.target.value, phone: true });
                    handleValid({ value: e.target.value, phone: true });
                }}
                require="Please enter your phone number"
                invalid="Invalid phone number"
                empty={empty.current.phone}
                valid={valid.current.phone}
            />
            <Input
                type="text"
                id="organization"
                label="Organization's name"
                placeholder="Enter your organization's name"
                onChange={(e) => {
                    setInfo({ ...info, organization: e.target.value });
                    handleEmpty({ value: e.target.value, organization: true });
                    handleValid({ value: e.target.value });
                }}
                require="Please enter your organization's name"
                invalid=""
                empty={empty.current.organization}
                valid={valid.current.organization}
            />
            <Input
                type="text"
                id="taxcode"
                label="Tax Code"
                placeholder="Enter your tax code"
                onChange={(e) => {
                    setInfo({ ...info, code: e.target.value });
                    handleEmpty({ value: e.target.value, code: true });
                    handleValid({ value: e.target.value });
                }}
                require="Please enter your tax code"
                invalid=""
                empty={empty.current.code}
                valid={valid.current.code}
            />
            <Button content="Sign up" onClick={handleButton} />
            <div className="flex m-[20px]">
                <p className="mr-[10px]">Have an account already?</p>
                <Link to="/login" className="text-[#0055e6] no-underline">
                    Sign in
                </Link>
            </div>
        </div>
    );
}
