package main

import "fmt"

type Seen struct {
	data map[float32]int
}

func FindUniq(arr []float32) float32 {
	c := make(map[float32]int)
	b := &Seen{
		data: c,
	}
	for _, num := range arr {
		if b.data[float32(num)] == 0 {
			b.data[float32(num)] = 1
		} else {
			b.data[float32(num)]++
		}
	}

	keys := make([]float32, 0, len(b.data))
	for k, v := range b.data {
		if v == 1 {
			keys = append(keys, k)
		}
	}

	return keys[0]
}

func main() {
	a := make([]float32, 0)
	a = append(a, 1.0, 3.3, 3.3, 2.0, 1.0)
	fmt.Println(FindUniq(a))
}
