export interface IAddress {
  address: string;
  locality: string; // Suburb/City, i.e. Runcorn
  stateCode: string; // i.e. QLD
  postcode: string;
  state?: string; // i.e. Queensland
}

export default IAddress;
