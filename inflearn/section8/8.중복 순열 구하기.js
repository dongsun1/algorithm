function solution(n, m) {
  let answer = [];
  const arr = []
  for (let i = 0; i < n; i++) arr.push(i + 1)

  const dfs = (array) => {
    if (array.length === m) answer.push(array.join(' '))
    else {
      for (let i = 0; i < n; i++) {
        dfs([...array, arr[i]])
      }
    }
  }

  arr.forEach(o => {
    dfs([o])
  })

  return answer;
}

console.log(solution(4, 3));

// function solution(n, m){
//   let answer=[];
//   let tmp=Array.from({length:m}, ()=>0);
//   function DFS(L){
//       if(L===m){
//           answer.push(tmp.slice());
//       }
//       else{
//           for(let i=1; i<=n; i++){
//               tmp[L]=i;
//               DFS(L+1);
//           }
//       }   
//   }
  
//   DFS(0);
//   return answer;
// }