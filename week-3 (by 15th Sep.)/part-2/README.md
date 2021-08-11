# Week 3 Part 2

## Security

### Authorization
To improve our security, we should not let anyone to access our admin page. We should give each user a `role` which can tell you its authority. In our website, we only need to set 2 `roles` which are `user` and `admin`. Set the `role` of your own account to be `admin` and set other accounts to be `user`.

When a user access the admin pages, there will be 3 situations.

1. User not sign in.
2. User already sign in but its role is not `admin`.
3. User already sign in and have `admin` role.

We should only allow the last one to access our 3 admin pages.

* **/admin/product.html** for product management.
* **/admin/campaign.html** for campaign management.
* **/admin/checkout.html** for check out testing.

## More AWS services (Advanced Optional)
If we want to traffic our user requests into multiple server nodes in the future, we should move some services from the original server to a shared data center so that we can maintain the data more easily.
1. Move your redis server to `AWS ElastiCache` (Note: choose `t2.micro` node and 0 replica)
2. Send your server logs to `AWS CloudWatch Log Group`

Note: A good back-end engineer should learn how to write meaningful server logs. As a begineer, you can use `morgan-body` library to help you and see what it do.