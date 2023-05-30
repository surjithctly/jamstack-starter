import classNames from "classnames";
import ms from "ms";

export const cx = (...inputs) => classNames(inputs);

export const timeAgo = (timestamp) => {
  if (!timestamp) return null;
  return `${ms(Date.now() - new Date(timestamp).getTime())}${" ago"}`;
};
