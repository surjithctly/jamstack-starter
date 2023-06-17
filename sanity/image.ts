import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./config";

const imageBuilder = createImageUrlBuilder({ projectId, dataset });
// image builder which sends width & height as well.
// Also ceils maximum of 2000 width to reduce Sanity API Bandwidth

export const urlForImage = (source) => {
  if (!source || !source.asset) return;
  const dimensions = source?.asset?._ref.split("-")[2];

  const [width, height] = dimensions.split("x").map((num) => parseInt(num, 10));

  const url = imageBuilder
    .image(source)
    .auto("format")
    .width(Math.min(width, 2000))
    .url();

  return {
    src: url,
    width: width,
    height: height,
  };
};
