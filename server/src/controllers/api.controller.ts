import { NextFunction, Request, Response } from "express";
import { ApiRepository } from "../repository/api.repository";
import { ICounty } from "../models/county";
import { AppError, logger, nanoid } from "../util/util";

export class ApiController {
  private static apiRepository = new ApiRepository();

  static async getAllCounties(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const counties = await ApiController.apiRepository.getAllCounties();
      if (counties.length === 0) {
        res.status(204).json({ message: "No counties found" });
      } else {
        res.status(200).json(counties);
      }
    } catch (error) {
      next(new AppError("Error in getting counties", 500));
    }
  }

  static async getCountyByCountyCode(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { countyCode } = req.params;

    if (!countyCode || typeof countyCode !== "string") {
      res.status(400).json({ message: "Invalid county code" });
    }
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
      next(new AppError("Error in getting county", 500));
    }
  }

  static async getCountiesBySize(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const order = (req.query.order as "ASC" | "DESC" | "RANDOM") || "RANDOM";

    try {
      if (order !== "ASC" && order !== "DESC" && order !== "RANDOM") {
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
      next(new AppError("Error in getting counties by size", 500));
    }
  }

  static async getCountiesPopulation(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const order = (req.query.order as "ASC" | "DESC" | "RANDOM") || "RANDOM";

    try {
      if (order !== "ASC" && order !== "DESC" && order !== "RANDOM") {
        res.status(400).json({ message: "Not a valid size order" });
      }
      const counties = await ApiController.apiRepository.getCountiesPopulation(
        order
      );

      if (!counties) {
        res.status(404).json({ message: "Counties population not found" });
      }
      if (counties.length === 0) {
        res.status(204).json({ message: "No counties population" });
      } else {
        res.status(200).json(counties);
      }
    } catch (error) {
      next(new AppError("Error in getting counties poulation", 500));
    }
  }

  static async getCountiesPopulationDensity(
    req: Request,
    res: Response,
    next: NextFunction
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
      next(new AppError("Error in getting counties population density", 500));
    }
  }

  static async getCountiesHousehold(
    req: Request,
    res: Response,
    next: NextFunction
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
      next(new AppError("Error in getting counties household", 500));
    }
  }

  static async getCountiesRegisteredVoters(
    req: Request,
    res: Response,
    next: NextFunction
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
      next(new AppError("Error in getting counties registered voters", 500));
    }
  }

  static async getCountiesCapital(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
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
      next(new AppError("Error in getting counties capital", 500));
    }
  }

  static async getConstituenciesByCounty(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const constituencies =
        await ApiController.apiRepository.getConstituenciesByCounty();

      if (!constituencies) {
        res.status(404).json({ message: "No constituencies found" });
      }
      if (constituencies.length === 0) {
        res.status(204).json({ message: "No constituencies" });
      } else {
        res.status(200).json(constituencies);
      }
    } catch (error) {
      next(new AppError("Error in getting county constituencies", 500));
    }
  }

  static async getConstituencies(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const constituencies =
        await ApiController.apiRepository.getConstituencies();

      if (!constituencies) {
        res.status(404).json({ message: "No constituencies found" });
      }
      if (constituencies.length === 0) {
        res.status(204).json({ message: "No constituencies" });
      } else {
        res.status(200).json(constituencies);
      }
    } catch (error) {
      next(new AppError("Error in getting constituencies", 500));
    }
  }

  static async getConstituencyByConstituencyCode(
    req: Request,
    res: Response,
    next: NextFunction
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
      next(new AppError("Error in getting constituency by code", 500));
    }
  }
}
