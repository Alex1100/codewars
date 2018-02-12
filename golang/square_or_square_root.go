package main

import (
	"math"
)

func SquareOrSquareRoot(arr []int) []int {
	var temp []int

	for _, value := range arr {
		square := math.Sqrt(float64(value))
		if square == math.Trunc(square) {
			temp = append(temp, int(square))
		} else {
			newVal := value * value
			temp = append(temp, newVal)
		}
	}

	return temp
}


main() {
  return SquareOrSquareRoot([2, 4, 6, 8, 25])
}

