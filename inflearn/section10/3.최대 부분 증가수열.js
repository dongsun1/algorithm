function solution(arr) {
  let ch = new Array(arr.length).fill(0)
  ch[0] = 1
  for (let i = 1; i < arr.length; i++) {
    let preArr = arr.slice(0, i)
    const filtered = preArr.filter(ele => ele < arr[i])
    const underBig = filtered.length ? Math.max(...filtered) : false
    underBig ? (ch[i] = ch[preArr.indexOf(underBig)] + 1) : (ch[i] = 1)
  }
  return Math.max(...ch)
}

let arr = [2, 7, 5, 8, 6, 4, 7, 12, 3];
console.log(solution(arr));

// 레퍼런스
// function solution(arr){  
//   let answer=0;
//   let dy=Array.from({length:arr.length}, ()=>0);
//   dy[0]=1;
//   for(let i=1; i<arr.length; i++){
//       let max=0;
//       for(let j=i-1; j>=0; j--){
//           if(arr[j]<arr[i] && dy[j]>max){
//               max=dy[j];
//           }
//       }
//       dy[i]=max+1;
//       answer=Math.max(answer, dy[i]);
//   }
//   return answer;
// }