import { ResultSetHeader } from "mysql2";
import { connection } from "../config/database";
import { v4 as uuidv4 } from "uuid";
import { ICounty, IConstituency } from "../models/county";

export class ApiRepository {
  async addAllCountyData(counties: ICounty[]): Promise<void> {
    try {
      for (const county of counties) {
        const countyId = uuidv4();
        console.log("Inserting county:", JSON.stringify(county, null, 2)); // Log county data for debugging

        // Insert county data
        await connection.execute<ResultSetHeader>(
          `INSERT INTO counties (id, countyCode, countyName, size, population , populationDensity, numberOfHouseholds, averageHouseholdSize, sexRatio, capital, governor, deputyGovernor, womenRepresentative) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            countyId,
            county.countyCode,
            county.countyName,
            county.size,
            county.population,
            county.populationDensity,
            county.numberOfHouseholds,
            county.averageHouseholdSize,
            county.sexRatio,
            county.capital,
            county.governor,
            county.deputyGovernor,
            county.womenRepresentative,
          ]
        );

        // Ensure mainEconomicActivities is an array before iterating
        if (Array.isArray(county.mainEconomicActivities)) {
          for (const activity of county.mainEconomicActivities) {
            await connection.execute<ResultSetHeader>(
              `INSERT INTO economic_activities (countyId, activity) VALUES (?, ?)`,
              [countyId, activity]
            );
          }
        } else {
          console.warn(
            `mainEconomicActivities for county ${county.countyCode} is not an array.`
          );
        }

        // Ensure constituencies is an array before iterating
        if (Array.isArray(county.constituencies)) {
          for (const constituency of county.constituencies) {
            await connection.execute<ResultSetHeader>(
              `INSERT INTO constituencies (id, countyId, constituencyCode, constituencyName, registeredVoters) 
              VALUES (?, ?, ?, ?, ?)`,
              [
                uuidv4(),
                countyId,
                constituency.constituencyCode,
                constituency.constituencyName,
                constituency.registeredVoters,
              ]
            );
          }
        } else {
          console.warn(
            `Constituencies for county ${county.countyCode} is not an array.`
          );
        }
      }
    } catch (err) {
      console.error("Error inserting data:", err);
      throw err;
    } finally {
      await connection.end();
    }
  }

  getAllCounties(): Promise<ICounty[]> {
    return new Promise((resolve, reject) => {
      connection.query<ICounty[]>(
        `SELECT 
            counties.countyCode,
            counties.countyName,
            counties.size,
            counties.population,
            counties.populationDensity,
            counties.numberOfHouseholds,
            counties.averageHouseholdSize,
            counties.sexRatio,
            counties.capital,
            counties.governor,
            counties.deputyGovernor,
            counties.womenRepresentative,
            JSON_ARRAYAGG(JSON_OBJECT('Constituency Code', c.constituencyCode, 'Constituency Name', c.constituencyName)) AS constituencies
          FROM counties
          INNER JOIN (
            SELECT *
            FROM constituencies
            ORDER BY constituencyCode ASC
          ) AS c ON counties.id = c.countyId
          GROUP BY counties.countyCode, counties.countyName
          ORDER BY counties.countyCode;`,
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }
  getCountyByCountyCode(countyCode: string): Promise<ICounty | undefined> {
    return new Promise((resolve, reject) => {
      connection.query<ICounty[]>(
        `SELECT
          counties.countyCode,
          counties.countyName,
          counties.size,
          counties.population,
          counties.populationDensity,
          counties.numberOfHouseholds,
          counties.averageHouseholdSize,
          counties.sexRatio,
          counties.capital,
          counties.governor,
          counties.deputyGovernor,
          counties.womenRepresentative,
          JSON_ARRAYAGG(JSON_OBJECT('Constituency Code', constituencies.constituencyCode, 'Constituency Name', constituencies.constituencyName)) AS constituencies
        FROM counties
        INNER JOIN constituencies ON
            counties.id = constituencies.countyId
        WHERE counties.countyCode = ?
        GROUP BY
          counties.countyCode,
          counties.countyName,
          counties.size,
          counties.population,
          counties.populationDensity,
          counties.numberOfHouseholds,
          counties.averageHouseholdSize,
          counties.sexRatio,
          counties.capital,
          counties.governor,
          counties.deputyGovernor,
          counties.womenRepresentative
        ORDER BY counties.countyCode    
        `,
        [countyCode],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results?.[0]);
          }
        }
      );
    });
  }

  getCountiesBySize(order: "ASC" | "DESC"): Promise<ICounty[]> {
    return new Promise((resolve, reject) => {
      connection.query<ICounty[]>(
        `SELECT
            countyCode,
            countyName,
            size
         FROM
          counties
         ORDER BY
            size ${order}
        `,
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }

  getCountiesPopulation(): Promise<ICounty[]> {
    return new Promise((resolve, reject) => {
      connection.query<ICounty[]>(
        `SELECT
            countyCode,
            countyName,
            population
         FROM
            counties   
        `,
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }

  getCountiesPopulationDensity(): Promise<ICounty[]> {
    return new Promise((resolve, reject) => {
      connection.query<ICounty[]>(
        `SELECT
            countyCode,
            countyName,
            populationDensity
         FROM
            counties   
        `,
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }

  getCountiesHousehold(): Promise<ICounty[]> {
    return new Promise((resolve, reject) => {
      connection.query<ICounty[]>(
        `SELECT
            countyCode,
            countyName,
            numberOfHouseholds,
            averageHouseholdSize
         FROM
            counties   
        `,
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }

  getCountiesRegisteredVoters(): Promise<ICounty[]> {
    return new Promise((resolve, reject) => {
      connection.query<ICounty[]>(
        `
        SELECT
          counties.countyCode,
          counties.countyName,
          counties.capital,
          SUM(constituencies.registeredVoters) AS total_registered_voters
        FROM
          counties
        INNER JOIN constituencies ON 
          counties.id = constituencies.countyId  
        GROUP BY   
          counties.countyCode,
          counties.countyName,
          counties.capital
        `,
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }


  getCountiesCapital(): Promise<ICounty[]> {
    return new Promise((resolve, reject) => {
      connection.query<ICounty[]>(
        `SELECT
            countyCode,
            countyName,
            capital
         FROM
            counties   
        `,
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }

  getConstituenciesByCounty(): Promise<IConstituency[]> {
    return new Promise((resolve, reject) => {
      connection.query<IConstituency[]>(
        `SELECT 
            counties.countyName,
            JSON_ARRAYAGG(JSON_OBJECT('Constituency Code', constituencies.constituencyCode, 'Constituency Name', constituencies.constituencyName)) AS constituencies
         FROM
            constituencies
         INNER JOIN counties ON
            constituencies.countyId = counties.id
         GROUP BY
            counties.countyName
        `,
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }

  getConstituencies(): Promise<IConstituency[]> {
    return new Promise((resolve, reject) => {
      connection.query<IConstituency[]>(
        `SELECT
            constituencyCode,
            constituencyName,
            registeredVoters
         FROM
            constituencies
         ORDER BY constituencyCode ASC  
        `,
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }

  getConstituencyByConstituencyCode(
    constituencyCode: string
  ): Promise<IConstituency | undefined> {
    return new Promise((resolve, reject) => {
      connection.query<IConstituency[]>(
        `SELECT
            constituencyCode,
            constituencyName,
            registeredVoters
         FROM
            constituencies 
         WHERE constituencyCode = ? 
        `,
        [constituencyCode],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results?.[0]);
          }
        }
      );
    });
  }
}
