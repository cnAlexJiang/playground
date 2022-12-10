interface O1{
  a: number;
  b:number,
  c?:number,
  e: number
}

interface O2{
  b:number
  c:number
  d:number
  e: number
}

let o1 :O1= {
  a:1,
  b:2,
  c:3,
  e:4
}

let o2:O2 = {
  b:2,
  c:3,
  d:4,
  e:6
}

 
let keys = ['b', 'c']  as const
type k = (typeof keys)[number]

 keys.map(key =>{
  o1[key] = o2[key]
 })