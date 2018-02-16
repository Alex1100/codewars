package main

import "fmt"

func Check(result [3]uint64, limit uint64) [3]uint64 {
	a := uint64(1)
	b := uint64(0)
	temp := uint64(0)
	lim := uint64(25)
	var badRes [][3]uint64

	for int(lim) >= 0 {
		temp = a
		a = a + b
		b = temp
		result[0] = b
		result[1] = a
		result[2] = 0
		lim = lim - uint64(1)

		if a*b > limit {
			badRes = append(badRes, [3]uint64{b, a, 0})
		}

		if a*b == limit {
			result[0] = b
			result[1] = a
			result[2] = 1
			return result
		}
	}

	return badRes[0]
}

func ProductFib(prod uint64) [3]uint64 {
	var result [3]uint64
	return Check(result, prod)
}

func main() {
	fmt.Println(ProductFib(5895))
}
