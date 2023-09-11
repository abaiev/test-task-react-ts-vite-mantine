/** splits an array into two sub arrays at the midpoint
  * usage example: input [1,2,3,4,5] => output: [[1,2,3], [4, 5]]
 * */
export const splitArrayAtMidpoint = <T>(arr: T[]): [T[], T[]] => {
  const middle = Math.ceil(arr.length / 2);

  return [arr.slice(0, middle), arr.slice(middle)]
};
