package main

type Director struct {
	builder PcBuilder
}

func (d *Director) SetBuilder(builder PcBuilder) {
	d.builder = builder
}

func (d *Director) BuildPc() *Pc {
	d.builder.CreatePc()
	d.builder.BuildCpu()
	d.builder.BuildGpu()
	d.builder.BuildRam()
	d.builder.BuildStorage()
	d.builder.BuildPrice()
	return d.builder.GetPc()
}
