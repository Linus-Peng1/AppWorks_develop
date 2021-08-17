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

## Advanced Optional
1. Try to understand Cache mechanism in general.
2. Figure out why Redis can improve the performance. What's the differencee between Memory and Disk.
