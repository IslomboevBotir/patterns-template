# Python/Java bilan Design Patterns

Design patternlar dastur tuzilishini loyihalashda ko'p uchraydigan muammolar uchun qayta qo'llash mumkin bo'lgan yondashuvlar. Ular tayyor kod emas ular class va object'larning birgalikda ishlashini tashkil qilish usullari.

> Repositoryda hozir [Python misollari](../patterns/python/) mavjud. Java misollari keyinchalik `patterns/java/` ichiga qo'shiladi. [Asosiy README](../README.md) ingliz tilida yozilgan.

Patternlar o'rinli ishlatilsa kodni kengaytirishni osonlashtiradi takrorlanishni kamaytiradi va jamoada dizayn qarorlarini tushuntirish uchun umumiy atamalar beradi. Har bir patternni aniq muammoni hal qilish uchun tanlash kerak; keraksiz pattern kodni murakkablashtirishi mumkin.

## Creational - obyekt yaratish

Obyekt yaratish jarayonini tashkil qiladi va undan foydalanadigan kodning konkret klasslarga bog'liqligini kamaytiradi.

| Pattern | Qisqa tushuncha | Python misoli |
| --- | --- | --- |
| Singleton | Klassning yagona nusxasini yaratadi va unga kirishni ta'minlaydi. Misolda bitta database helper qayta ishlatiladi. | [singleton.py](../patterns/python/creational/singleton.py) |
| Factory Method | Obyekt yaratish interfeysini belgilaydi konkret mahsulotni tanlashni esa voris klasslarga topshiradi. Misolda alohida ustaxonalar avtomobil va yuk mashinasini yaratadi. | [factory.py](../patterns/python/creational/factory.py) |
| Abstract Factory | O'zaro bog'liq obyektlar oilasini konkret klasslarni oshkor qilmasdan yaratadi. Misolda avtomobil va dvigatel ishlab chiqaruvchiga qarab yaratiladi. | [abstract_factory.py](../patterns/python/creational/abstract_factory.py) |
| Builder | Murakkab obyektni bosqichma-bosqich quradi va qurish jarayonini natijadagi obyektdan ajratadi. Misolda turli telefonlar yig'iladi. | [builder.py](../patterns/python/creational/builder.py) |
| Prototype | Mavjud obyektni nusxalash orqali yangi obyekt yaratadi. Misolda qo'y nusxalanadi va uning parametrlari chuqur nusxalanadi. | [prototype.py](../patterns/python/creational/prototype.py) |

Qo'shimcha [static factory methods misoli](../patterns/python/creational/factory_method.py) nuqtani Dekart yoki qutb koordinatalaridan nomlangan metodlar orqali yaratadi. Bu `factory.py` ichidagi voris klasslarga asoslangan Factory Method patternidan farq qiladi.

## Structural - tuzilma va kompozitsiya

Klass va obyektlarni kattaroq tuzilmalarga birlashtiradi ularning vazifalarini aniq saqlashga yordam beradi.

| Pattern | Qisqa tushuncha | Python misoli |
| --- | --- | --- |
| Adapter | Obyekt interfeysini uni ishlatuvchi kod kutayotgan formatga moslashtiradi. Misolda yangi response DTO eski javob formatiga moslashtiriladi. | [adapter.py](../patterns/python/structural/adapter.py) |
| Bridge | Abstraksiyani uning amalga oshirilishidan ajratib ikkalasini mustaqil o'zgartirish imkonini beradi. Misolda xabar yuboruvchilar turli ma'lumot o'quvchilar bilan ishlaydi. | [bridge.py](../patterns/python/structural/bridge.py) |
| Composite | Obyektlarni daraxt shaklida tashkil qiladi va alohida obyekt hamda guruh bilan bir xil interfeys orqali ishlash imkonini beradi. Misolda fayl va papkalar bir xil usulda o'qiladi. | [composite.py](../patterns/python/structural/composite.py) |
| Decorator | Obyektni bir xil interfeysga ega boshqa obyekt bilan o'rab qo'shimcha xatti-harakat qo'shadi. Misolda qahvaga sut yoki shokolad narxi qo'shiladi. | [decorator.py](../patterns/python/structural/decorator.py) |
| Facade | Murakkab quyi tizim uchun sodda interfeys beradi. Misolda televizor va DVD pleer bitta facade orqali boshqariladi. | [facade.py](../patterns/python/structural/facade.py) |
| Flyweight | Ko'p obyektlar orasida umumiy holatni ulashib xotira sarfini kamaytiradi. Misolda daraxtlar tur ma'lumotlarini ulashadi joylashuvi esa alohida saqlanadi. | [flyweight.py](../patterns/python/structural/flyweight.py) |
| Proxy | Mos interfeys orqali boshqa obyektga kirishni boshqaradi. Misolda valyuta kursi keshda saqlanib xizmatga takroriy murojaatlar kamaytiriladi. | [proxy.py](../patterns/python/structural/proxy.py) |

## Behavioral - xatti-harakat va o'zaro aloqa

Obyektlar orasidagi aloqa algoritmlar va vazifalar taqsimotini tashkil qiladi.

| Pattern | Qisqa tushuncha | Python misoli |
| --- | --- | --- |
| Chain of Responsibility | So'rovni handlerlar zanjiri orqali uzatadi; har bir handler uni qayta ishlashi yoki keyingi ishlovni to'xtatishi mumkin. Misolda autentifikatsiya login va biznes handlerlari ulanadi. | [chain_of_responsibility.py](../patterns/python/behavioral/chain_of_responsibility.py) |
| Command | Amalni obyekt ko'rinishida saqlab uni chaqiruvchi kodni amalni bajaruvchi obyektdan ajratadi. Misollarda chiroq va konveyer boshqariladi. | [command.py](../patterns/python/behavioral/command.py) [command_2.py](../patterns/python/behavioral/command_2.py) |
| Iterator | Kolleksiyaning ichki tuzilishini oshkor qilmasdan elementlarini ketma-ket ko'rib chiqish imkonini beradi. Misolda pitsa bo'laklari ko'rib chiqiladi. | [iterator.py](../patterns/python/behavioral/iterator.py) |
| Mediator | Ishtirokchilar orasidagi bevosita bog'liqlikni kamaytirish uchun aloqani markaziy obyekt orqali boshqaradi. Misolda xabarlar chat xonasi orqali yuboriladi. | [mediator.py](../patterns/python/behavioral/mediator.py) |
| Memento | Obyekt holatini keyinchalik tiklash uchun saqlaydi. Misolda valyuta balanslari nusxalari undo amali uchun saqlanadi. | [memento.py](../patterns/python/behavioral/memento.py) |
| Observer | Obyekt holati o'zgarganda unga obuna bo'lgan obyektlarga xabar beradi. Misolda mahsulot narxi o'zgarsa xaridorlar xabardor qilinadi. | [observer.py](../patterns/python/behavioral/observer.py) |
| State | Holatga bog'liq xatti-harakatni alohida holat obyektlariga topshiradi. Misolda svetoforning holatlari va ular orasidagi o'tishlar ko'rsatilgan. | [state.py](../patterns/python/behavioral/state.py) |
| Strategy | Bajarilish vaqtida tanlash mumkin bo'lgan bir-birini almashtiruvchi algoritmlarni belgilaydi. Misolda kalkulyator arifmetik amallarni almashtiradi. | [strategy.py](../patterns/python/behavioral/strategy.py) |
| Visitor | Turli obyektlar ustida bajariladigan amallarni alohida visitor ichiga joylaydi. Misolda hayvonot bog'i kinoteatr va sirk uchun turli natijalar olinadi. | [visitor.py](../patterns/python/behavioral/visitor.py) |

## Misolni ishga tushirish

**Python 3.9 yoki yangiroq** versiya kerak. Hozirgi misollar faqat Python standart kutubxonasidan foydalanadi.

Repositoryning asosiy papkasidan quyidagicha ishga tushiring:

```bash
python3 -m patterns.python.behavioral.strategy
```

Boshqa misol uchun guruh va modul nomini almashtiring:

```bash
python3 -m patterns.python.creational.builder
python3 -m patterns.python.creational.factory_method
```

## Qo'shimcha manbalar

- [Design Patterns - Rustam Z.](https://rustamz.com/clean-architecture/design-patterns)
- [Software Design Patterns - GeeksforGeeks](https://www.geeksforgeeks.org/system-design/software-design-patterns/)
- [Design Patterns - AlgoMaster](https://algomaster.io/learn/lld/design-patterns)
- [Design Patterns - Refactoring.Guru](https://refactoring.guru/design-patterns)
