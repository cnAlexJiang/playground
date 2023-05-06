
## Using Prisma with MongoDB
介绍了为啥需要 使用副本集
- https://www.prisma.io/docs/guides/database/mongodb


## prisma 使用 mongo 副本集

- [] 参考  https://stackoverflow.com/questions/73570090/prisma-mongodb-replica-set/76043251#76043251

```
Local Instance with docker
An easy to use docker image is available that creates a single instance replica

Pull the image with docker pull prismagraphql/mongo-single-replica:5.0.3
Run the image with
docker run --name mongo \
      -p 27017:27017 \
      -e MONGO_INITDB_ROOT_USERNAME="monty" \
      -e MONGO_INITDB_ROOT_PASSWORD="pass" \
      -d prismagraphql/mongo-single-replica:5.0.3
The connection URL should like this
DATABASE_URL="mongodb://monty:pass@localhost:27017/db_name?authSource=admin&directConnection=true"
You must provide authSource=admin option otherwise authentication will fail

MongoDB Atlas
Create a free cluster with all default values
Note the username, password and the hostname
The URL should look like this
DATABASE_URL="mongodb+srv://username:password@cluster_name.random_string.net/db_name?retryWrites=true&w=majority"
Note that the official documentaion currently follows the previous format used for the local instance but here it does not include the port number and has the +srv suffix, without which I ran into some problems.

If you want use the format used in the documentation then you must provide the option ssl=true and for the hostname you have to use the primary cluster which looks like random_string.mongodb.net:27017, which you can find in the overview tab after clicking in your cluster name

```