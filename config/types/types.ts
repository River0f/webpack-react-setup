export type BuildMode = "production" | "development";
export type Platform = "mobile" | "desktop";

export interface BuildPaths {
  entry: string;
  public: string;
  output: string;
  src: string;
}

export interface BuildOptions {
  mode: BuildMode;
  port: number;
  paths: BuildPaths;
  platform: Platform;
  analyzer: boolean;
}
