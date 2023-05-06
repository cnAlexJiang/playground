## quick start
- [x] https://www.prisma.io/docs/getting-started/quickstart

### 创建 ts项目 安装  prisma
```
// 1
mkdir hello-prisma 
cd hello-prisma

// 2 

npm init -y
pnpm add typescript ts-node @types/node  -D

// 3 

npx tsc --init 

pnpm add prisma  -D

npx prisma init --datasource-provider xxxdatabase

```


###  数据迁移
```

pnpm add @prisma/client -D


npx prisma migrate dev --name init

// 结果会创建 migrations
```

### 业务侧
```
touch script.ts



// exec

npx ts-node script.ts
```

## 查看数据库
```
 npx prisma generate   

npx prisma studio
```


## 问题记录 
- mongoDB 连接 需要加参数才能通过身份验证

DATABASE_URL="mongodb://test:123456@localhost:27017/testdb?authSource=admin"

- mysql 连接  

DATABASE_URL="mysql://root:123456@localhost:3306/prismaDemo"

###  mongo 容器操作
docker exec -it mongodb /bin/bash

mongo mongodb://localhost:27017 -u admin -p admin

use admin
db.createUser({user:"root",pwd:"123456",roles:[{role:'root',db:'admin'}]})

###   mongo  进入容器  将 单个mongod 实例 变成 副本集  这个最烦
  
- 常看当前 mongod 实例个数
 pgrep mongod -c

