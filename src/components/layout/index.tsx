import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

export default function Layout({ children }: any): JSX.Element {
  return (
    <div className="isolate bg-white dark:bg-black">
      <Navbar />
      <main className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-6xl py-20 sm:pt-28 sm:pb-40">
          {children}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
