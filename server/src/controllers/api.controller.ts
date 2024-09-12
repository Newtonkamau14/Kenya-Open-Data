import { Request, Response } from "express";
import * as fs from "fs";
import * as path from "path";
import { ApiRepository } from "../repository/api.repository";
import { ICounty } from "../models/county";
import { logger, nanoid } from "../util/util";

export class ApiController {
  private static apiRepository = new ApiRepository();
  
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
    const order = (req.query.order as "ASC" | "DESC") || "ASC"; // Default to "ASC"

    try {
      if (order !== "ASC" && order !== "DESC") {
        res.status(400).json({ message: "Not a valid size order" });
      }

      const counties = await ApiController.apiRepository.getCountiesBySize(
        order
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
