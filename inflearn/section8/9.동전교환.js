function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;

  const dfs = (sum, cnt) => {
    if (cnt > answer) return
    if (sum >= 15) {
      if (sum === 15) answer = Math.min(answer, cnt)
      return
    } else {
      for (let i = 0; i < arr.length; i++) {
        dfs(sum + arr[i], cnt + 1)
      }
    }
  }

  dfs(0, 0)

  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));

// function solution(m, arr){
//   let answer=Number.MAX_SAFE_INTEGER;
//   let n=arr.length;
//   function DFS(L, sum){
//       if(sum>m) return;
//       if(L>=answer) return;
//       if(sum===m){
//           answer=Math.min(answer, L);
//       }
//       else{
//           for(let i=0; i<n; i++){
//               DFS(L+1, sum+arr[i]);
//           }
//       }
//   }
//   DFS(0, 0);
//   return answer;
// }