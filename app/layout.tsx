import "../styles/globals.css";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <main>
          <div className="container mx-auto">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
