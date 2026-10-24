package main

import "fmt"

type Copyable interface {
	Clone() Copyable
}

type GameCharacter struct {
	id     int
	name   string
	level  int
	weapon string
}

func NewGameCaharcter(id int, name string, level int, weapon string) *GameCharacter {
	return &GameCharacter{
		id:     id,
		name:   name,
		level:  level,
		weapon: weapon,
	}
}

func (g *GameCharacter) Clone() Copyable {
	c := *g
	return &c
}

func (g *GameCharacter) ID() int        { return g.id }
func (g *GameCharacter) Name() string   { return g.name }
func (g *GameCharacter) Level() int     { return g.level }
func (g *GameCharacter) Weapon() string { return g.weapon }

func (g *GameCharacter) SetID(id int)            { g.id = id }
func (g *GameCharacter) SetName(name string)     { g.name = name }
func (g *GameCharacter) SetLevel(level int)      { g.level = level }
func (g *GameCharacter) SetWeapon(weapon string) { g.weapon = weapon }

type CharacterFactory struct {
	prototype *GameCharacter
}

func NewCharacterFactory(prototype *GameCharacter) *CharacterFactory {
	return &CharacterFactory{prototype: prototype}
}

func (f *CharacterFactory) SetCharacter(prototype *GameCharacter) {
	f.prototype = prototype
}

func (f *CharacterFactory) CloneCharacter() *GameCharacter {
	return f.prototype.Clone().(*GameCharacter)
}

func main() {
	original := NewGameCaharcter(1, "warrior", 10, "Sword")

	factory := NewCharacterFactory(original)

	clone1 := factory.CloneCharacter()
	clone2 := factory.CloneCharacter()

	clone1.SetName("Archer")
	clone1.SetLevel(15)
	clone1.SetWeapon("Bow")

	clone2.SetName("Mage")
	clone2.SetLevel(20)
	clone2.SetWeapon("Staff")

	fmt.Println("Original:", original)
	fmt.Println("Clone 1: ", clone1)
	fmt.Println("Clone 2: ", clone2)
}
