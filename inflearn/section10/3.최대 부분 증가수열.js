function solution(arr) {
  const dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1

  for (let i = 1; i < arr.length; i++) {
    let max = 1

    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) max = Math.max(max, dy[j] + 1)
    }
    dy[i] = max
  }
  return Math.max(...dy);
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