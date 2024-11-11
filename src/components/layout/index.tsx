import FadeIn from "@/components/animation/FadeIn";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import MadeBy from "@/components/MadeBy";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";

export default function Layout({ children }: any): JSX.Element {
  return (<>

<Script async src="https://www.googletagmanager.com/gtag/js?id=G-Q7VCJLV5DZ"></Script>
<Script id="google-analytics">
  {
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-Q7VCJLV5DZ');`
  }
</Script>

 
    <FadeIn className="isolate bg-white dark:bg-black" noVertical>
      <Navbar />
      <main className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-6xl py-20 sm:pt-28 sm:pb-40">
          {children}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
      <MadeBy />
    </FadeIn>
  </>
  );
}
