package main

import "fmt"

type PosPeaks struct {
	Pos   []int
	Peaks []int
}

func PickPeaks(a []int) PosPeaks {
	b := PosPeaks{
		Pos:   make([]int, 0),
		Peaks: make([]int, 0),
	}

	if len(a) > 2 {
		pos := -1
		for i := 1; i < len(a); i++ {
			if int(a[i]) > int(a[i-1]) {
				pos = i
			} else if int(a[i]) < int(a[i-1]) && pos != -1 {
				b.Pos = append(b.Pos, pos)
				b.Peaks = append(b.Peaks, int(a[pos]))
				pos = -1
			}
		}
	}

	return b
}

func main() {
	a := make([]int, 0)
	a = append(a, 3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3)

	fmt.Println(PickPeaks(a))
}
