package main

import (
	"fmt"
	"math"
	"strconv"
	"strings"
)

func DigPow(n, p int) int {
	numString := strconv.Itoa(n)
	stringNumArr := strings.Split(numString, "")
	sum := 0

	for i, num := range stringNumArr {
		curr, err := strconv.ParseInt(num, 10, 64)
		if err != nil {
			panic(err)
		}
		sum += int(math.Pow(float64(curr), float64(i+p)))
	}

	for i := 1; i < 100000; i++ {
		if i*n == sum {
			return i
		}
	}

	return -1
}

func main() {
	fmt.Println(DigPow(89, 1))
}
