export function greet(name:string): string{
    // Trim name
    const trimmed  = name.trim();

    if (trimmed === "") return "Hello, stranger!";

    return `Hello, ${trimmed}!`
}