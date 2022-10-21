import path from "path";

import { Exits } from "./constants";

export const getRoute = (exit: Exits): string =>
  path.resolve(__dirname, `../../${exit}`)