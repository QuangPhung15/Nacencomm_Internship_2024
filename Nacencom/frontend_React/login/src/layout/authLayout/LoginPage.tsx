import React from "react";
import Introduction from "./Introduction.tsx";
import Login from "./Login.tsx";

export default function LoginPage() {
    return (
        <div className="flex m-0 h-screen">
            <Introduction />
            <Login />
        </div>
    );
}
