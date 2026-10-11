# Design Patterns with Python/Java

A collection of design pattern examples for learning how to organize object creation, compose classes and objects, and manage interactions between them.

The repository currently contains **Python implementations** in the [`patterns/python/`](patterns/python/) directory. Java implementations are planned for a future update.

## What are design patterns?

Design patterns are reusable approaches to common software design problems. They describe how classes and objects can work together rather than providing ready-made code for every situation.

Used where appropriate they can make code easier to extend reduce duplication and provide a shared vocabulary for discussing design decisions. Choose a pattern when it solves a concrete problem; adding one unnecessarily can make code more complex.

## Types of design patterns

![Types of design patterns image](https://scaler.com/topics/images/types_of_patterns.webp)

- **Creational:** organize object creation so that client code is less dependent on concrete classes.
- **Structural:** compose classes and objects into larger structures while keeping their responsibilities clear.
- **Behavioral:** organize communication, algorithms, and responsibilities between objects.

## Implemented patterns

Each link opens an existing Python example in this repository.

### Creational

| Pattern | Short explanation | Python example |
| --- | --- | --- |
| Singleton | Ensures that a class has a single instance and provides access to it. The example reuses one database helper instance. | [singleton.py](patterns/python/creational/singleton.py) |
| Factory Method | Defines an object creation interface and lets subclasses choose the concrete product. The example uses separate workshops to create cars and trucks. | [factory.py](patterns/python/creational/factory.py) |
| Abstract Factory | Creates families of related objects without exposing their concrete classes. The example groups car and engine creation by manufacturer. | [abstract_factory.py](patterns/python/creational/abstract_factory.py) |
| Builder | Constructs a complex object step by step, separating the construction process from the resulting object. The example assembles different phones. | [builder.py](patterns/python/creational/builder.py) |
| Prototype | Creates new objects by copying an existing object. The example clones a sheep and deep-copies its parameters. | [prototype.py](patterns/python/creational/prototype.py) |

An additional [static factory methods example](patterns/python/creational/factory_method.py) creates points from Cartesian or polar coordinates using named creation methods. This differs from the subclass-based Factory Method pattern shown in `factory.py`.

### Structural

| Pattern | Short explanation | Python example |
| --- | --- | --- |
| Adapter | Converts an object's interface into the format a client expects. The example adapts a new response DTO to an existing response format. | [adapter.py](patterns/python/structural/adapter.py) |
| Bridge | Separates an abstraction from its implementation so both can vary independently. The example combines different message senders with different data readers. | [bridge.py](patterns/python/structural/bridge.py) |
| Composite | Organizes objects into a tree and lets clients treat individual objects and groups through the same interface. The example handles files and folders uniformly. | [composite.py](patterns/python/structural/composite.py) |
| Decorator | Adds behavior by wrapping an object in another object with the same interface. The example adds milk or chocolate costs to coffee. | [decorator.py](patterns/python/structural/decorator.py) |
| Facade | Provides a simple interface to a more complex subsystem. The example coordinates a television and DVD player through one facade. | [facade.py](patterns/python/structural/facade.py) |
| Flyweight | Shares common state between many objects to reduce memory use. The example shares tree types while keeping each tree's position separate. | [flyweight.py](patterns/python/structural/flyweight.py) |
| Proxy | Controls access to another object through a compatible interface. The example caches a currency rate to avoid repeated service calls. | [proxy.py](patterns/python/structural/proxy.py) |

### Behavioral

| Pattern | Short explanation | Python example |
| --- | --- | --- |
| Chain of Responsibility | Passes a request through a chain of handlers, each of which can process it or stop further handling. The example chains authentication, login, and business handlers. | [chain_of_responsibility.py](patterns/python/behavioral/chain_of_responsibility.py) |
| Command | Encapsulates an action as an object, separating the caller from the object that performs it. The examples control a light and a conveyor. | [command.py](patterns/python/behavioral/command.py), [command_2.py](patterns/python/behavioral/command_2.py) |
| Iterator | Provides sequential access to a collection without exposing its internal representation. The example walks through pizza slices. | [iterator.py](patterns/python/behavioral/iterator.py) |
| Mediator | Coordinates interactions through a central object to reduce direct dependencies between participants. The example routes messages through a chat room. | [mediator.py](patterns/python/behavioral/mediator.py) |
| Memento | Saves an object's state so it can be restored later. The example stores snapshots of currency balances for undo operations. | [memento.py](patterns/python/behavioral/memento.py) |
| Observer | Notifies subscribed objects when another object's state changes. The example informs buyers when a product's price changes. | [observer.py](patterns/python/behavioral/observer.py) |
| State | Delegates state-specific behavior to separate state objects. The example models traffic light transitions. | [state.py](patterns/python/behavioral/state.py) |
| Strategy | Defines interchangeable algorithms that can be selected at runtime. The example switches a calculator between arithmetic operations. | [strategy.py](patterns/python/behavioral/strategy.py) |
| Visitor | Places operations on a set of object types in a separate visitor. The example visits a zoo, cinema, and circus to produce different results. | [visitor.py](patterns/python/behavioral/visitor.py) |

## Running an example

Use **Python 3.9 or newer**. The current examples use only the Python standard library.

From the repository root run an example as a module:

```bash
python3 -m patterns.python.behavioral.strategy
```

Use the category and module name of another example, such as `patterns.python.creational.builder` or `patterns.python.creational.factory_method`.

## Learning Resources

- [Design Patterns - Rustam Z.](https://rustamz.com/clean-architecture/design-patterns)
- [Software Design Patterns - GeeksforGeeks](https://www.geeksforgeeks.org/system-design/software-design-patterns/)
- [Design Patterns - AlgoMaster](https://algomaster.io/learn/lld/design-patterns)
- [Design Patterns - Refactoring.Guru](https://refactoring.guru/design-patterns)
