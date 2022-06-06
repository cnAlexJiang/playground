 
interface TeamStanding {
  team_abbreviation: string
  team_id: number
  asd: number
}


// 类型合并
let aa:TeamStanding = {
  team_abbreviation: '123',
  team_id: 123,
  asd: 123

}  
console.log(aa)