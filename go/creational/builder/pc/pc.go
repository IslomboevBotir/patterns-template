package main

import "fmt"

type Pc struct {
	Cpu     string
	Gpu     string
	Ram     int
	Storage int
	Price   int
}

func (p *Pc) String() string {
	return fmt.Sprintf("Pc{cpu='%s', gpu='%s', ram=%dGB, storage=%dGB, price=%d}",
		p.Cpu, p.Gpu, p.Ram, p.Storage, p.Price)
}
