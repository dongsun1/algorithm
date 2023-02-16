function solution(n, arr) {
  let answer = 0;

  const map = new Map()
  arr.forEach(([s, e]) => {
    if (!map.has(s)) map.set(s, [])
    map.set(s, [...map.get(s), e])
  })

  const visited = Array.from({ length: n }, () => false)

  const dfs = (v) => {
    if (v === n) {
      answer++
    } else {
      const arr = map.get(v)
      for (let i = 0; i < arr.length; i++) {
        if (!visited[arr[i]]) {
          visited[arr[i]] = true
          dfs(arr[i])
          visited[arr[i]] = false
        }
      }
    }
  }

  visited[1] = true
  dfs(1)

  return answer;
}

let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];

// 레퍼런스
// function solution(n, arr){  
//   let answer=0;
//   let graph=Array.from(Array(n+1), ()=>Array());
//   let ch=Array.from({length:n+1}, ()=>0);
//   let path=[]
//   for(let [a, b] of arr){
//       graph[a].push(b);
//   }
//   function DFS(v){
//       if(v===n){
//           answer++;
//           console.log(path);
//       }
//       else{
//           for(let nv of graph[v]){
//               if(ch[nv]===0){
//                   path.push(nv);
//                   ch[nv]=1;
//                   DFS(nv);
//                   ch[nv]=0;
//                   path.pop();
//               }
//           }
//       }
//   }
//   ch[1]=1;
//   path.push(1);
//   DFS(1);
//   return answer;
// }