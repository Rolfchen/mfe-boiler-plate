export interface IStatisticFilter {
  before?: string | null; // Date string
  after?: string | null; // Date string YYYY-MM-DD
  buyer?: string; // Name or ID
}

export default IStatisticFilter;
