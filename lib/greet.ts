export function greet(name:string): string{
    const trimmed  = name;

    if (trimmed === "") return "Hello, stranger!";

    return `Hello, ${trimmed}!`
}