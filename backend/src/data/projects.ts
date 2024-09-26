export { projects };

const projects = [
    {
        id: crypto.randomUUID(),
        title: "Example project",
        createdAt: new Date("2024-01-01"),
        categories: ["portfolio"],
    },
    {
        id: crypto.randomUUID(),
        title: "Example project 2",
        createdAt: new Date("2024-02-02"),
        categories: ["portfolio"],
    },
    {
        id: crypto.randomUUID(),
        title: "Example project 3",
        createdAt: new Date("2024-03-03"),
        categories: ["work"],
    },
]