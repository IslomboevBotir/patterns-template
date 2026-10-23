package main

type PcBuilder interface {
	CreatePc()
	BuildCpu()
	BuildGpu()
	BuildRam()
	BuildStorage()
	BuildPrice()
	GetPc() *Pc
}

type basePcBuilder struct {
	pc *Pc
}

func (b *basePcBuilder) CreatePc() {
	b.pc = &Pc{}
}

func (b *basePcBuilder) GetPc() *Pc {
	return b.pc
}
