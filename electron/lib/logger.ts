type LogLevel = "info" | "error" | "warn";
type LogMeta = { filepath: string; [key: string]: any };

const createLevel =
  (level: LogLevel, meta: LogMeta) =>
  (message: string, obj: any = null) => {
    const formatted = [
      new Date().toISOString(),
      level === "error" ? level : " " + level,
      meta.filepath,
      message,
    ];

    console[level](
      ...formatted.map((string, i) => {
        const colors = [
          "\x1b[1m",
          string.includes("error")
            ? "\x1b[31m"
            : string.includes("warn")
            ? "\x1b[33m"
            : "\x1b[32m",
        ];

        return (colors[i] ?? "") + string + "\x1b[0m" + " |";
      }),
      typeof obj === "object"
        ? obj
        : {
            value: obj,
          }
    );
  };

export const getLogger = (meta: LogMeta) => {
  return {
    info: createLevel("info", meta),
    error: createLevel("error", meta),
    warn: createLevel("warn", meta),
  };
};
