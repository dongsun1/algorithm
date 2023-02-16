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
//   let graph=Array.from(Array(n+1), ()=>Array(n+1).fill(0));
//   let ch=Array.from({length:n+1}, ()=>0);
//   path=[];
//   for(let [a, b] of arr){
//       graph[a][b]=1;
//   }
//   function DFS(v){
//       if(v===n){
//           answer++;
//           console.log(path);
//       }
//       else{
//           for(let i=1; i<=n; i++){
//               if(graph[v][i]===1 && ch[i]===0){
//                   ch[i]=1;
//                   path.push(i);
//                   DFS(i);
//                   ch[i]=0;
//                   path.pop();
//               }
//           }
//       }
//   }

//   path.push(1);
//   ch[1]=1;
//   DFS(1);
//   return answer;
// }