package main

import "fmt"

type Cms string

const (
	Wordpress Cms = "WORDPRESS"
	Tilda     Cms = "TILDA"
)

type Website struct {
	Name  string
	Cms   Cms
	Price int
}

func (w *Website) String() string {
	return fmt.Sprintf("Website{name='%s', cms=%s, price=%d}", w.Name, w.Cms, w.Price)
}

type WebsiteBuilder interface {
	CreateWebsite()
	BuildName()
	BuildCms()
	BuildPrice()
	GetWebsite() *Website
}

type baseBuilder struct {
	website *Website
}

func (b *baseBuilder) CreateWebsite() {
	b.website = &Website{}
}

func (b *baseBuilder) GetWebsite() *Website {
	return b.website
}

type SimpleWebsiteBuilder struct {
	baseBuilder
}

func (s *SimpleWebsiteBuilder) BuildName() {
	s.website.Name = "Simple Website Builder"
}

func (s *SimpleWebsiteBuilder) BuildCms() {
	s.website.Cms = Tilda
}

func (s *SimpleWebsiteBuilder) BuildPrice() {
	s.website.Price = 500
}

type EnterpriseWebsiteBuilder struct {
	baseBuilder
}

func (e *EnterpriseWebsiteBuilder) BuildName() {
	e.website.Name = "Enterprise Website"
}

func (e *EnterpriseWebsiteBuilder) BuildCms() {
	e.website.Cms = Wordpress
}

func (e *EnterpriseWebsiteBuilder) BuildPrice() {
	e.website.Price = 1000
}

type Director struct {
	builder WebsiteBuilder
}

func (d *Director) SetBuilder(builder WebsiteBuilder) {
	d.builder = builder
}

func (d *Director) BuildWebsite() *Website {
	d.builder.CreateWebsite()
	d.builder.BuildName()
	d.builder.BuildCms()
	d.builder.BuildPrice()
	return d.builder.GetWebsite()
}

func main() {
	director := &Director{}

	director.SetBuilder(&SimpleWebsiteBuilder{})
	fmt.Println(director.BuildWebsite())

	director.SetBuilder(&EnterpriseWebsiteBuilder{})
	fmt.Println(director.BuildWebsite())
}
