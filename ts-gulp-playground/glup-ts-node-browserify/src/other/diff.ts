// 简单diff 算法


 let d1  = {
  name: '0',
  children: [
    {
      name: '1',
      children: [
        {
          name: '3',
          children: []
        },
        {
          name: '4',
          children: []
        }
      ]
    },
    {
      name: '2',
      children: []
    }
  ]
}
let d2  = {
  name: '0',
  children: [
    {
      name: '1',
      children: [
        {
          name: '3',
          children: []
        },
        {
          name: '5',
          children: []
        }
      ]
    },
    {
      name: '2',
      children: []
    }
  ]
}

let d3  = {
  name: '0',
  children: [
    {
      name: '1',
      children: [
        
      ]
    },
    {
      name: '2',
      children: [
        {
          name: '3',
          children: []
        },
        {
          name: '4',
          children: []
        }
      ]
    }
  ]
}


function diffTest(a: any, b: any) {
  const s1 = [a];
  const s2 = [b];
  let result =true;
  while (s1.length > 0 || s2.length > 0) {
    const n1 = s1.shift();
    const n2 = s2.shift();

    if (!n1 || !n2 || n1.name !== n2.name || n1.parentName!=n2.parentName) {
      result =  false;
      break;
    }

    if (n1.children.length > 0) {
      n1.children.map(item=>item.parentName = n1.name)
      s1.push(...n1.children)
    }
    if (n2.children.length > 0) {
      n2.children.map(item=>item.parentName = n2.name)
      s2.push(...n2.children)
    }

  }
  return result;
}

console.log(diffTest(d1,d2))
console.log(diffTest(d1,d3))


