import webpack from "webpack";
import { buildWebpack } from "./config/buildWebpack";
import path from "path";
import { BuildOptions, Platform } from "./config/types/types";

type Mode = "production" | "development";

interface EnvVariables {
  mode: Mode;
  port: number;
  analyzer: boolean;
  platform: Platform;
}

export default (env: EnvVariables) => {
  const buildOptions: BuildOptions = {
    mode: env.mode ?? "development",
    port: env.port ?? 5000,
    platform: env.platform ?? "desktop",
    analyzer: env.analyzer,
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      public: path.resolve(__dirname, "public"),
      output: path.resolve(__dirname, "build"),
      src: path.resolve(__dirname, "src"),
    },
  };
  const config: webpack.Configuration = buildWebpack(buildOptions);

  return config;
};
