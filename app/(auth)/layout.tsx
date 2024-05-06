import "@/app/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
//import MakeStore from "@/redux/store";  // Import your store configuration

export default function AuthLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        // <Provider store={akeStore}> 
            <SessionProvider>
                <html>
                    <body>{children}</body>
                </html>
            </SessionProvider>
        // </Provider>
    );
}
