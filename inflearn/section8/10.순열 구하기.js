function solution(m, arr) {
  let answer = [];
  const visited = new Array(arr.length).fill(false)
  const dfs = (array) => {
    if (array.length === m) {
      return answer.push(array.join(' '))
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (!visited[i]) {
          visited[i] = true
          dfs([...array, arr[i]])
          visited[i] = false
        }
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    visited[i] = true
    dfs([arr[i]])
    visited[i] = false
  }

  return answer;
}

// 레퍼런스
// function solution(m, arr){         
//   let answer=[];
//   n=arr.length;
//   let ch=Array.from({length:n}, ()=>0);
//   let tmp=[];
//   function DFS(L){
//       if(L===m){
//           answer.push(tmp.slice()); 
//       }
//       else{
//           for(let i=0; i<n; i++){
//               if(ch[i]===0){
//                   ch[i]=1;
//                   tmp.push(arr[i]);
//                   DFS(L+1);
//                   ch[i]=0;
//                   tmp.pop();
//               }
//           }
//       }
//   }
//   DFS(0);
//   return answer;
// }