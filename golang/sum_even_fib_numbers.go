package main

import "fmt"

func Check(sum, limit, original_limit int) int {
	a := 1
	b := 0
	temp := 0

	for limit >= 0 {
		temp = a
		a = a + b
		b = temp
		limit--
		if b > 0 && b%2 == 0 {
			sum += b
		}
		if (sum + b) > original_limit {
			return sum
		}
	}

	return sum
}

func SumEvenFibonacci(limit int) int {
	if limit == 1 {
		return 2
	}
	sum := 0
	sum = Check(sum, limit, limit)
	return sum
}

func main() {
	fmt.Println(SumEvenFibonacci(8))
}
