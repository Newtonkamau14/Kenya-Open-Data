import { RowDataPacket } from "mysql2";

type EconomicActivity = string;

export interface IConstituency {
  constituencyCode: string;
  constituencyName: string;
  registeredVoters: number;
}

export interface ICounty extends RowDataPacket {
  id: string;
  countyCode: string;
  countyName: string;
  size: number;
  population: number;
  capital: string;
  governor: string;
  deputyGovernor: string;
  womenRepresentative: string;
  mainEconomicActivities: EconomicActivity[];
  constituencies: IConstituency[];
}
