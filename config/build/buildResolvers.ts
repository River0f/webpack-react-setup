import { BuildOptions } from "./types/types";
import webpack from "webpack";

export const buildResolvers = (
  options: BuildOptions
): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: { "@": options.paths.src },
  };
};
