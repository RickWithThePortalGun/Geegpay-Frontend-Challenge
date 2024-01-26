import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { LeftSidebar,Topbar,Bottombar } from "./components";
import Provider from "./provider";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"],   variable: '--font-jakarta',});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thundr Analytics",
  description: "View your sales and statistics on your dashboard.",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <Provider>
      <body className={`${jakarta.className} bg-[#fafafa] dark:bg-[#171717] `}>
      <Topbar />
        <main className="flex flex-row">
          <LeftSidebar />
          <section className="main-container">
            <div className="w-full">
              {" "}
              {children}
            </div>
          </section>
        </main>
        <Bottombar />
      </body>
      </Provider>
    </html>
  );
}
