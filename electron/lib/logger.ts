type LogLevel = "info" | "error" | "warn";
type LogMeta = { filepath: string; [key: string]: any };

let maxLengthFilepath = 0;

const createLevel =
  (level: LogLevel, meta: LogMeta) =>
  (message: string, obj: any = null) => {
    if (maxLengthFilepath < meta.filepath.length) {
      maxLengthFilepath = meta.filepath.length;
    }

    const formatted = [
      new Date().toISOString(),
      level === "error" ? level : " " + level,
      meta.filepath.padEnd(maxLengthFilepath, " "),
      "\n",
      message,
    ];

    const formatObj = (obj: any) => {
      if (!obj) return ["\n"];
      if (typeof obj !== "object")
        return [
          "\n",
          {
            value: obj,
          },
          "\n",
        ];
      return ["\n", obj, "\n"];
    };

    console[level](
      ...formatted.map((string, i) => {
        const colors = [
          "\x1b[1m",
          string.includes("error")
            ? "\x1b[31m"
            : string.includes("warn")
            ? "\x1b[33m"
            : "\x1b[32m",
          "\x1b[1m",
        ];

        return (colors[i] ?? "") + string + "\x1b[0m";
      }),
      ...formatObj(obj)
    );
  };

export const getLogger = (meta: LogMeta) => {
  return {
    info: createLevel("info", meta),
    error: createLevel("error", meta),
    warn: createLevel("warn", meta),
  };
};
