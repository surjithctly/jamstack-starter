import "@/styles/globals.css";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>
        <div className="container mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
}
