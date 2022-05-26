class TeamStanding {
  team_abbreviation: string
  team_id: number
  // ...
}
interface TeamStanding {
  team_abbreviation: string
  team_id: number
  asd: number
}


// 类型合并
let a:TeamStanding = {
  team_abbreviation: '123',
  team_id: 123,
  asd: 123

}  
console.log(a)