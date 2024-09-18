---
sidebar_position: 1
---

# Introduction

## Getting Started

Get started by creating an account to get and receive the API key.

## Authentication

The API requires an API key for authentication. You can pass the API key either through the request headers or as a query parameter.

### Header Authentication

Place the API key in the `x-api-key` header:


```bash
    curl -X GET https://kenya-open-data.onrender.com/counties \
         -H "x-api-key: your api key"
```

Alternatively, you can pass the API key as a query parameter:


```bash
    curl -X GET https://kenya-open-data.onrender.com/counties?API_KEY=your api key 
```

When there is other query parameters the `API_KEY` paramter should come first.


## Rate Limiting

The API enforces rate limiting to prevent abuse. The default rate limit is 10 requests per minute. If you exceed this limit, you will receive a `429 Too Many Requests` response.



