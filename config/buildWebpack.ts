import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { buildDevServer } from "./buildDevServer";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { BuildOptions } from "./types/types";
import { buildResolvers } from "./buildResolvers";

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths } = options;

  const isDev = mode === "development";

  return {
    mode: mode,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "bundle.[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    devtool: isDev ? "eval-cheap-module-source-map" : "source-map",
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
