package kata

func Decode(romNum string) int {
	numerals := make(map[string]int)
	numerals["I"] = 1
	numerals["V"] = 5
	numerals["X"] = 10
	numerals["L"] = 50
	numerals["C"] = 100
	numerals["D"] = 500
	numerals["M"] = 1000
	numbers := make([]int, 0)

	for i := 0; i < len(romNum); i++ {
		j := i + 1
		next := "A"
		current := string(romNum[i])
		if j != len(romNum) {
			next = string(romNum[j])
		}

		if numerals[current] < numerals[next] {
			numbers = append(numbers, numerals[next]-numerals[current])
			i++
		} else {
			numbers = append(numbers, numerals[string(romNum[i])])
		}
	}

	result := 0

	for i := 0; i < len(numbers); i++ {
		result = result + int(numbers[i])
	}

	return result
}
