import { IStatisticFilter } from "../../../Database/Interfaces";
import type { DateDelta } from "../Types/DateDelta";

export interface IStatisticFilterRequest extends IStatisticFilter {
  delta?: DateDelta;
}
