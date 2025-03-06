import { type RowDataPacket } from "mysql2";

type EconomicActivity = {
  id: string
  countyId: string
  activity: string
};

export interface IConstituency extends RowDataPacket {
  id: string;
  countyId: string;
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
  populationDensity: number;
  numberOfHouseholds: number;
  averageHouseholdSize: number;
  sexRatio: number;
  capital: string;
  governor: string;
  deputyGovernor: string;
  womenRepresentative: string;
  mainEconomicActivities: EconomicActivity[];
  constituencies: IConstituency[];
}
