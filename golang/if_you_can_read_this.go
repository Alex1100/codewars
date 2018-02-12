package main

import (
	"fmt"
	"strings"
)

func ToNato(s string) string {
	last := string(s[len(s)-1])

	if last == "?" || last == "." || last == "!" {
		s = strings.Trim(s, last)
	}

	words := strings.Split(s, " ")

	temp := make([]string, 0)

	for _, word := range words {
		for _, character := range word {
			if string(character) == "?" || string(character) == "!" || string(character) == "." {
				temp = append(temp, string(character))
			}

			if string(character) == "A" || string(character) == "a" {
				temp = append(temp, "Alfa")
			}

			if string(character) == "B" || string(character) == "b" {
				temp = append(temp, "Bravo")
			}

			if string(character) == "C" || string(character) == "c" {
				temp = append(temp, "Charlie")
			}

			if string(character) == "D" || string(character) == "d" {
				temp = append(temp, "Delta")
			}

			if string(character) == "E" || string(character) == "e" {
				temp = append(temp, "Echo")
			}

			if string(character) == "F" || string(character) == "f" {
				temp = append(temp, "Foxtrot")
			}

			if string(character) == "G" || string(character) == "g" {
				temp = append(temp, "Golf")
			}

			if string(character) == "H" || string(character) == "h" {
				temp = append(temp, "Hotel")
			}

			if string(character) == "I" || string(character) == "i" {
				temp = append(temp, "India")
			}

			if string(character) == "J" || string(character) == "j" {
				temp = append(temp, "Juliett")
			}

			if string(character) == "K" || string(character) == "k" {
				temp = append(temp, "Kilo")
			}

			if string(character) == "L" || string(character) == "l" {
				temp = append(temp, "Lima")
			}

			if string(character) == "M" || string(character) == "m" {
				temp = append(temp, "Mike")
			}

			if string(character) == "N" || string(character) == "n" {
				temp = append(temp, "November")
			}

			if string(character) == "O" || string(character) == "o" {
				temp = append(temp, "Oscar")
			}

			if string(character) == "P" || string(character) == "p" {
				temp = append(temp, "Papa")
			}

			if string(character) == "Q" || string(character) == "q" {
				temp = append(temp, "Quebec")
			}

			if string(character) == "R" || string(character) == "r" {
				temp = append(temp, "Romeo")
			}

			if string(character) == "S" || string(character) == "s" {
				temp = append(temp, "Sierra")
			}

			if string(character) == "T" || string(character) == "t" {
				temp = append(temp, "Tango")
			}

			if string(character) == "U" || string(character) == "u" {
				temp = append(temp, "Uniform")
			}

			if string(character) == "V" || string(character) == "v" {
				temp = append(temp, "Victor")
			}

			if string(character) == "W" || string(character) == "w" {
				temp = append(temp, "Whiskey")
			}

			if string(character) == "X" || string(character) == "x" {
				temp = append(temp, "Xray")
			}

			if string(character) == "Y" || string(character) == "y" {
				temp = append(temp, "Yankee")
			}

			if string(character) == "Z" || string(character) == "z" {
				temp = append(temp, "Zulu")
			}
		}
	}

	result := strings.Join(temp, " ")

	if last == "." || last == "?" || last == "!" {
		result += (" " + last)
	}

	return result
}

func main() {
	fmt.Println(ToNato("hello there."))
}
