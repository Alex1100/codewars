package main

import (
	"fmt"
	"strings"
)

func Accum(s string) string {
	newString := ""
	for i := 0; i < len(s); i++ {
		count := 0
		if count == i {
			newString += strings.Title(string(s[i]))
		} else {
			for count != i+1 {
				if count == 0 {
					newString += strings.Title(string(s[i]))
					count++
				} else {
					newString += strings.ToLower(string(s[i]))
					count++
				}
			}
		}
		if i != len(s)-1 {
			newString += "-"
		}
	}
	return newString
}

func main() {
	fmt.Println(Accum("hello"))
}
