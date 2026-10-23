package main

type OfficePcBuilder struct {
	basePcBuilder
}

func (o *OfficePcBuilder) BuildCpu() {
	o.pc.Cpu = "Intel Core i3"
}

func (o *OfficePcBuilder) BuildGpu() {
	o.pc.Gpu = "Integrated"
}

func (o *OfficePcBuilder) BuildRam() {
	o.pc.Ram = 8
}

func (o *OfficePcBuilder) BuildStorage() {
	o.pc.Storage = 256
}

func (o *OfficePcBuilder) BuildPrice() {
	o.pc.Price = 400
}
