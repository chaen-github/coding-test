// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1,
// 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(numer1, denom1, numer2, denom2) {
  // 1. 분자의 합
  let sumNumer = numer1 * denom2 + numer2 * denom1;
  // 2. 분모의 합
  let sumDenom = denom1 * denom2;

  // 3. 최대공약수 구하기
  let gcd = 1;
  let min = Math.min(sumDenom, sumNumer);

  for (let i = 0; i <= min; i++) {
    if (sumDenom % i === 0 && sumNumer % i === 0) {
      gcd = i;
    }
  }

  // 4. 최대공약수로 나누기
  sumDenom /= gcd;
  sumNumer /= gcd;

  // 5. 리턴 배열에 담기
  return [sumNumer, sumDenom];
}

console.log(solution(1, 2, 3, 4));
