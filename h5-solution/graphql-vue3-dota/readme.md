Dota2 排名展示
------------------

请模仿 [Dota2 DPC Ranking](https://www.dota2.com/esports/ti11/tistandings) 开发一个排名展示页面

# 后端
后端项目在 `projects/backend`, 是一个简单的 GraphQL 服务器. 通过访问 dota2 web restful API 获取战队排名, 并封装成 GraphQL 接口供给前端
但现在 API 返回的数据只有联赛 ID. 原网站上会发起另外的请求去获取联赛的详细信息. 我们的后端服务要求将多个接口获取到的数据拼装在一起, 一次性返回所有联赛信息给前端.

示例: Dota 提供的 API 是需要 getRanking => 得到多个 League ID, 再单独去根据每一个 LeagueID 作为参数去请求 getLeagueData
     GetRanking 返回: { 
         "result": [
           { "league_id": 1, "standing": 1 },
           { "league_id": 2, "standing": 2 },  
           { "league_id": 3, "standing": 3 },  
         ] }
     然后查询 GetLeagueData?league_id=1 
     返回 {
            "info": {
                "league_id": 1,
                "league_name": "ABC"
            }
         }
      


需求包括

- 修改 `providers/dpc.provider.ts`, 从 league API 中获取联赛数据, 与战队排名信息组装在一起之后返回.
- 修改 `dpc.type.ts` 和 `dpc.provider.ts` 中联赛数据的类型信息.
- 需要单元测试覆盖

# 前端
前端项目是一个简单的 Vue3 项目, 使用 [Antfu's Vitese Lite](https://github.com/antfu/vitesse-lite) 生成.
 现在页面只有基础的样式, 页面元素也全都在一个组件 `pages/index.vue` 中.

需求包括

- 美化页面样式. 现在项目使用的是 UnoCSS, 你也可以自由选择 CSS 框架
- 将页面拆分成可读性强, 可维护的小组件
- 仿照原页面做一个可折叠列表
- 对接后端接口, 修改 `services/DPCServic.ts` 
- 需要单元测试覆盖


