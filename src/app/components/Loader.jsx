"use client";

import Image from "next/image";
import Link from "next/link";

const Loader = () => {
    return (
        <div className="page-loader">
            <Link href="/">
                <Image
                    src="/headerlogo.png"
                    alt="Logo"
                    width={170} height={63}
                    priority
                    className="loader-logo"
                />
            </Link>
        </div>
    );
};

export default Loader;
