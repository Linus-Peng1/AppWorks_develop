# Week 3 Part 1

## Build Cache Mechanism

You just build a demo web site which is sufficient for backend engineer. Now, turn back to backend field and build a cache mechanism.

## Cache Marketing Campaigns Data

Cache mechanism is very suitable for rarely updating data. For example, our **Marketing Campaings API** always response the same data to the front-end. If we store data in the web server memory, we can get it directly rather than database.

Follow the logics below to build a cache mechanism:
1. Every time we need campaign data, check cache first.
2. If data existed in the cache, get it.
3. If there is no data in the cache, get it from database and store in the cache.
4. If data is updated from database, clear cache.

## Cache Product Details Data

Similar procedure described above, we can add cache mechanism for **Product Details API** to cache product details for the requests which send the same product id.

## Rate limiter (Advanced Optional)

Sometimes, there will be malicious users who attack (or crawl) our website by firing thousands of requests within a short time window and crash your server. 

We can build a `rate limiter` to prevent this kind of attacks. The basic idea is tracking the `ip` of each requests and only allow each ip address to request our website `N` times within `M` seconds. How to choose N, M properly is a hard question, but let's set them to be `N=10` and `M=1` for practice today.

You can set smaller `N` for manual testing.
