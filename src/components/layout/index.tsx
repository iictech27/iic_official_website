import Navbar from "@/components/layout/Navbar";

export default function Layout({ children }: any): JSX.Element {
  return (
    <div className="isolate bg-white">
      <Navbar />
      <main className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-6xl py-20 sm:pt-28 sm:pb-40">
          {children}
        </div>
      </main>
    </div>
  );
}
