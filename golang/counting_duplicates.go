package main

import (
	"fmt"
	"strings"
)

type Seen struct {
	data map[string]int
}

func duplicate_count(s1 string) int {
	c := make(map[string]int)
	b := &Seen{
		data: c,
	}
	for _, letter := range s1 {
		if b.data[strings.ToUpper(string(letter))] == 0 {
			b.data[strings.ToUpper(string(letter))] = 1
		} else {
			b.data[strings.ToUpper(string(letter))]++
		}
	}

	keys := make([]string, 0, len(b.data))
	for k, v := range b.data {
		if v > 1 {
			keys = append(keys, k)
		}
	}

	return len(keys)
}

func main() {
	fmt.Println(duplicate_count("aaaAAbb"))
}
