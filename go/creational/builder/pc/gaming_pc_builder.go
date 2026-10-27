package main

type GamingPcBuilder struct {
	basePcBuilder
}

func (g *GamingPcBuilder) BuildCpu() {
	g.pc.Cpu = "AMD Ryzen 7"
}

func (g *GamingPcBuilder) BuildGpu() {
	g.pc.Gpu = "NVIDIA RTX 5090"
}

func (g *GamingPcBuilder) BuildRam() {
	g.pc.Ram = 32
}

func (g *GamingPcBuilder) BuildStorage() {
	g.pc.Storage = 1000
}

func (g *GamingPcBuilder) BuildPrice() {
	g.pc.Price = 1500
}
