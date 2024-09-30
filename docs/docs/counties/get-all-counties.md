---
sidebar_label: "Get all counties"
sidebar_postion: 1
---

# Get all counties

This endpoint retrieves a comprehensive list of all counties in Kenya, providing essential information about each one.

```bash
    curl -X GET https://kenya-open-data.onrender.com/api/v1/counties \
         -H "x-api-key: your api key"
```

### Response Format:

The endpoint will typically return a list of objects, each representing a county. The objects may include the following fields:

- County Code: A unique identifier for the county.
- County Name: The official name of the county.
- Size: The size of the county in square kilomtetres
- Population: The estimated population of the county.
- Other relevant data: Additional information such as area, capital city, governor,deputy governor, women representative and constituencies which contain an array of objects.


### Example Response:

```json
[
  {
    "countyCode": "001",
    "countyName": "Mombasa (County)",
    "size": 220,
    "population": 1208333,
    "populationDensity": 5495,
    "numberOfHouseholds": 378422,
    "averageHouseholdSize": 3,
    "sexRatio": 102,
    "capital": "Mombasa (City)",
    "governor": "Abdullswammad  Sherif Nassir",
    "deputyGovernor": "Francis Thoya",
    "womenRepresentative": "Zamzam Mohamed",
    "constituencies": [
      {
        "Constituency Code": "005",
        "Constituency Name": "LIKONI"
      },
      {
        "Constituency Code": "002",
        "Constituency Name": "JOMVU"
      },
      {
        "Constituency Code": "001",
        "Constituency Name": "CHANGAMWE"
      },
      {
        "Constituency Code": "004",
        "Constituency Name": "NYALI"
      },
      {
        "Constituency Code": "003",
        "Constituency Name": "KISAUNI"
      },
      {
        "Constituency Code": "006",
        "Constituency Name": "MVITA"
      }
    ]
  },
  {
    "countyCode": "002",
    "countyName": "Kwale",
    "size": 8267,
    "population": 866820,
    "populationDensity": 105,
    "numberOfHouseholds": 173176,
    "averageHouseholdSize": 5,
    "sexRatio": 96,
    "capital": "Kwale",
    "governor": "Fatuma Mohamed Achani",
    "deputyGovernor": "Josephat Chirema Kombo",
    "womenRepresentative": "Fatuma Abdi Masito",
    "constituencies": [
      {
        "Constituency Code": "008",
        "Constituency Name": "LUNGALUNGA"
      },
      {
        "Constituency Code": "009",
        "Constituency Name": "MATUGA"
      },
      {
        "Constituency Code": "010",
        "Constituency Name": "KINANGO"
      },
      {
        "Constituency Code": "007",
        "Constituency Name": "MSAMBWENI"
      }
    ]
  }
]
```
