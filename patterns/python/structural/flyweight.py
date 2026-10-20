class TreeType:
    def __init__(self, name: str, color: str, texture: str):
        self.name = name
        self.color = color
        self.texture = texture

    def draw(self, x: int, y: int):
        return f"drawing {self.color} {self.name} tree at {x}:{y} with {self.texture}"


class TreeTypeFactory:
    _tree_type: dict[str, TreeType] = {}

    @staticmethod
    def create(name: str, color: str, texture: str) -> TreeType:
        if name not in TreeTypeFactory._tree_type:
            TreeTypeFactory._tree_type[name] = TreeType(name, color, texture)
            print("create new tree with name", name)
            return TreeTypeFactory._tree_type[name]
        return TreeTypeFactory._tree_type[name]


class Tree:
    def __init__(self, x: int, y: int, tree_type: TreeType):
        self.x = x
        self.y = y
        self.tree_type = tree_type

    def display(self):
        return self.tree_type.draw(self.x, self.y)


if __name__ == "__main__":
    trees: list[Tree] = []
    for i in range(200):
        tree_type = TreeTypeFactory.create("Archa", "Yashil", "Igna bargli")
        tree = Tree(i, i * 2, tree_type)
        trees.append(tree)
    print(trees)

    for i in range(200):
        tree_type = TreeTypeFactory.create("Yong'oq", "Kulrang", "Katta bargli")
        trees.append(Tree(i, i * 2, tree_type))

    print("tree[0]:", trees[0].display())
    print("tree[199]:", trees[199].display())
    print("tree[201]:", trees[201].display())
    print("tree[399]:", trees[399].display())

    print("Length of trees:", len(trees))
    print("Length of tree factory:", len(TreeTypeFactory._tree_type))
