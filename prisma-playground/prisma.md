## quick start
 

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


import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })


// exec

npx ts-node script.ts
```

## 查看数据库
```
npx prisma studio
```