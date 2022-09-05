import Link from "next/link";

function Header() {
    return (
        <div className={"flex items-center p-5 justify-between max-w-7xl mx-auto"}>
            <div className={"flex items-center space-x-5 "}>
                <div>
                    <Link href={"/"}>
                        <img className={"cursor-pointer w-44 object-contain"} src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png" alt="Medium" />
                    </Link>
                </div>
                <div className={"hidden md:inline-flex items-center space-x-5"}>
                    <h1>About</h1>
                    <h1>Contact</h1>
                    <h1 className={"bg-green-600 text-white px-5 py-1 rounded-full"}>Follow</h1>
                </div>
            </div>
            <div className={"flex items-center space-x-10"}>
                <h1 className={"text-green-600 font-medium"}>Sign In</h1>
                <h1 className={"border cursor-pointer hover:bg-green-400 hover:text-white text-green-600 rounded-full py-1 px-5 border-green-600"}>Get Started</h1>
            </div>
        </div>
    );
}

export default Header;