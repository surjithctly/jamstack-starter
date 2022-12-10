import cx from "classnames";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

interface CoverImageProps {
  title: string;
  slug?: string;
  image: any;
  priority?: boolean;
}

export default function CoverImage(props: CoverImageProps) {
  const { title, slug, image: source, priority } = props;
  // console.log(
  //   source && urlForImage(source).height(1000).width(2000).url()
  // );
  const image = source?.asset?._ref ? (
    <div
      className={cx(
        "shadow-small",
        slug && "transition-shadow duration-200 hover:shadow-medium"
      )}>
      <Image
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(1000).width(2000).url()}
        sizes="(max-width 768px) 80vw, 50vw"
        priority={priority}
      />
    </div>
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/blog/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
