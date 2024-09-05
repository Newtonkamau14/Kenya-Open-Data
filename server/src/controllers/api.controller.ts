import { Request, Response } from "express";
import * as fs from "fs";
import * as path from "path";
import { ApiRepository } from "../repository/api.repository";
import { ICounty } from "../models/county";
import { logger,nanoid } from "../util/util";



export class ApiController {
  private static apiRepository = new ApiRepository();

  static async addAll(req: Request, res: Response): Promise<void> {
    try {
      const filePath = path.join(
        __dirname,
        "../../modified_combined_county_data.json"
      );
      const counties = (await ApiController.readJSONFile(
        filePath
      )) as ICounty[];
      await ApiController.apiRepository.addAllCountyData(counties);
      res.status(200).json({ message: "Data successfully inserted" });
    } catch (error) {
      logger.error("Failed to insert data", error);
      res.status(500).json({ message: "Failed to insert data", error });
    }
  }

  // Function to read JSON file
  private static async readJSONFile(filePath: string): Promise<ICounty[]> {
    try {
      const data = fs.readFileSync(filePath, "utf-8");
      const parsedData = JSON.parse(data);

      // Ensure parsedData is an array
      if (!Array.isArray(parsedData)) {
        throw new Error("Parsed data is not an array");
      }

      // Convert to the correct format if necessary
      const counties: ICounty[] = parsedData.map(
        (county: any) =>
          ({
            id: nanoid(),
            countyCode: county["County Code"],
            countyName: county["County Name"],
            size: parseFloat(county["Size(km2)"]),
            population: parseInt(county["Population(KPHC 2019)"], 10),
            populationDensity: parseInt(county["Population Density(km2)"], 10),
            numberOfHouseholds: parseInt(county["Number of Households"], 10),
            averageHouseholdSize: parseInt(
              county["Average Household size"],
              10
            ),
            sexRatio: parseInt(
              county["Sex Ratio(No of Males per 100 females)"],
              10
            ),
            capital: county["Capital"],
            governor: county["Governor"],
            deputyGovernor: county["Deputy Governor"],
            womenRepresentative: county["Women Representative"],
            mainEconomicActivities: Array.isArray(
              county["Main Economic Activities"]
            )
              ? county["Main Economic Activities"]
              : [],
            constituencies: Array.isArray(county["Constituencies"])
              ? county["Constituencies"].map((constituency: any) => ({
                  constituencyCode: constituency["Constituency Code"],
                  constituencyName: constituency["Constituency Name"],
                  registeredVoters: parseInt(
                    constituency["Registered Voters"],
                    10
                  ),
                }))
              : [],
          } as ICounty)
      ); // Assert that the created object is of type ICounty

      return counties;
    } catch (error) {
      console.error("Error reading or parsing JSON file:", error);
      throw error;
    }
  }

  static async getAllCounties(req: Request, res: Response): Promise<void> {
    try {
      const counties = await ApiController.apiRepository.getAllCounties();
      if (counties.length === 0) {
        res.status(204).json({ message: "No counties found" });
      } else {
        res.status(200).json(counties);
      }
    } catch (error) {
      logger.error("Error in getting counties", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getCountyByCountyCode(
    req: Request,
    res: Response
  ): Promise<void> {
    const { countyCode } = req.params;
    try {
      const county = await ApiController.apiRepository.getCountyByCountyCode(
        countyCode
      );

      if (!county) {
        res.status(404).json({ message: "No county found" });
      } else {
        res.status(200).json(county);
      }
    } catch (error) {
      logger.error("Error in getting county", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getCountiesBySize(req: Request, res: Response): Promise<void> {
    const { order } = req.query;
    console.log("Received request with size order:", order); // Log the incoming request

    try {
      if (order !== "ASC" && order !== "DESC") {
        res.status(400).json({ message: "Not a valid size order" });
      }

      const counties = await ApiController.apiRepository.getCountiesBySize(
        order as "ASC" | "DESC"
      );

      if (!counties || counties.length === 0) {
        res.status(204).json({ message: "No counties found" });
      }

      res.status(200).json(counties);
    } catch (error) {
      logger.error("Error in getting counties by size", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getCountiesPopulation(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const counties =
        await ApiController.apiRepository.getCountiesPopulation();

      if (!counties) {
        res.status(404).json({ message: "Counties population not found" });
      }
      if (counties.length === 0) {
        res.status(204).json({ message: "No counties population" });
      } else {
        res.status(200).json(counties);
      }
    } catch (error) {
      logger.error("Error in getting counties population", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getCountiesPopulationDensity(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const counties =
        await ApiController.apiRepository.getCountiesPopulationDensity();

      if (!counties) {
        res
          .status(404)
          .json({ message: "Counties population density not found" });
      }
      if (counties.length === 0) {
        res.status(204).json({ message: "No counties population density" });
      } else {
        res.status(200).json(counties);
      }
    } catch (error) {
      logger.error("Error in getting counties population density", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getCountiesHousehold(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const counties = await ApiController.apiRepository.getCountiesHousehold();

      if (!counties) {
        res
          .status(404)
          .json({ message: "Counties population household not found" });
      }
      if (counties.length === 0) {
        res.status(204).json({ message: "No counties household" });
      } else {
        res.status(200).json(counties);
      }
    } catch (error) {
      logger.error("Error in getting counties household", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getCountiesRegisteredVoters(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const counties =
        await ApiController.apiRepository.getCountiesRegisteredVoters();

      if (!counties) {
        res
          .status(404)
          .json({ message: "Counties registered voters not found" });
      }
      if (counties.length === 0) {
        res.status(204).json({ message: "No counties registered voters" });
      } else {
        res.status(200).json(counties);
      }
    } catch (error) {
      logger.error("Error in getting counties registered voters", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getCountiesCapital(req: Request, res: Response): Promise<void> {
    try {
      const counties = await ApiController.apiRepository.getCountiesCapital();

      if (!counties) {
        res.status(404).json({ message: "Counties capital not found" });
      }
      if (counties.length === 0) {
        res.status(204).json({ message: "No counties capital" });
      } else {
        res.status(200).json(counties);
      }
    } catch (error) {
      logger.error("Error in getting counties capital", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getConstituenciesByCounty(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const constituencies =
        await ApiController.apiRepository.getConstituenciesByCounty();

      if (!constituencies) {
        res.status(404).json({ message: "No constituencies" });
      }
      if (constituencies.length === 0) {
        res.status(204).json({ message: "No constituencies found" });
      } else {
        res.status(200).json(constituencies);
      }
    } catch (error) {
      logger.error("Error in getting counties by size", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getConstituencies(req: Request, res: Response): Promise<void> {
    try {
      const constituencies =
        await ApiController.apiRepository.getConstituencies();

      if (!constituencies) {
        res.status(404).json({ message: "No constituencies" });
      }
      if (constituencies.length === 0) {
        res.status(204).json({ message: "No constituencies found" });
      } else {
        res.status(200).json(constituencies);
      }
    } catch (error) {
      logger.error("Error in getting constituencies", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getConstituencyByConstituencyCode(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { constituencyCode } = req.params;

      const constituency =
        await ApiController.apiRepository.getConstituencyByConstituencyCode(
          constituencyCode
        );

      if (!constituency) {
        res.status(404).json({ message: "No constituencies" });
      } else {
        res.status(200).json(constituency);
      }
    } catch (error) {
      logger.error("Error in getting constituency by code", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
