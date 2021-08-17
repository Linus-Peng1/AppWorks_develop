# Week 3 Part 4

## More AWS services
If we want to traffic our user requests into multiple server nodes in the future, we should move some services from the original server to a shared data center so that we can maintain the data more easily.
1. Move your redis server to `AWS ElastiCache` (Note: choose `t2.micro` node and 0 replica)
2. Send your server logs to `AWS CloudWatch Log Group`
3. A good back-end engineer should learn how to write meaningful server logs. As a begineer, you can use `morgan-body` library to help you design the log system.

## Advanced Optional
1. What if we need more than one Database and Cache Server?
2. What is partition and replication menas ?
3. What is load balancer and consistent hashing scheme?