import Container from "@/components/parts/container";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/img/logo.svg";
export default function Navbar() {
  return (
    <Container>
      <nav className="py-4">
        <Link href="/">
          <Image src={Logo} alt="Logo" className="w-12" />{" "}
        </Link>
      </nav>
    </Container>
  );
}
