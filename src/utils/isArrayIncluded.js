const isArrayIncluded = (arrayA, arrayB) => (
  arrayA.every((item, index) => item === arrayB[index])
)

export default isArrayIncluded
