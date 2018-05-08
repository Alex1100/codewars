import (
"strings"
)

func Solution(str string) []string {
  stringCouple := "";
  var resultArray []string;
  count := 0;

  for i, character := range strings.Split(str, "") {
      stringCouple = stringCouple + character;
      count++;

    if i != 0 && count == 2 {
      resultArray = append(resultArray, string(stringCouple))
      stringCouple = "";
      count = 0;
      i = i + 1
    }

    if i == (len(str) - 1) && count == 1 {
      stringCouple = character + "_";
      resultArray = append(resultArray, string(stringCouple))
      stringCouple = "";
      return resultArray
    }

  }
  return resultArray;
}
