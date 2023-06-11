import "@/styles/globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import { useRouter } from "next/router";
import { dark } from "@clerk/themes";

const publicPages = ["/signin", "/signup", "/" ,"/api/mongoDB/connection"];

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isPublicPage = publicPages.includes(pathname);
  return (
    <ClerkProvider 
      appearance={{
        baseTheme: dark,
      }}
    >
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
}