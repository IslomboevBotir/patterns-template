package main

import "fmt"

func main() {
	director := &Director{}

	director.SetBuilder(&OfficePcBuilder{})
	fmt.Println(director.BuildPc())

	director.SetBuilder(&GamingPcBuilder{})
	fmt.Println(director.BuildPc())
}
