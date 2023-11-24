import { BuildOptions } from "config/build/types/types";
import { removeDataTestIdPlugin } from "./removeDataTestIdPlugin";

export const buildBabelLoader = ({ mode }: BuildOptions) => {
  const isProd = mode == "production";
  const isDev = mode == "development";

  const plugins = [];

  if (isProd) {
    plugins.push([
      removeDataTestIdPlugin,
      {
        props: ["data-testid"],
      },
    ]);
  }

  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript",
          [
            "@babel/preset-react",
            {
              runtime: isDev ? "automatic" : "classic",
            },
          ],
        ],
        plugins: plugins.length ? plugins : undefined,
      },
    },
  };
};
