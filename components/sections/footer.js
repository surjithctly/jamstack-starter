import Container from "@/components/parts/container";

export default function Footer() {
  return (
    <Container>
      <div className="py-5 text-sm text-center text-gray-500">
        © Jamstack Starter by{" "}
        <a
          href="https://twitter.com/surjithctly"
          target="_blank"
          className="underline hover:text-black"
          rel="noreferrer noopener">
          Surjith S M
        </a>
      </div>
    </Container>
  );
}
