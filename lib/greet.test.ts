import {expect, test} from "vitest";
import { greet } from "./greet";

test("greets a person by name", ()=>{
    expect(greet("Victor")).toBe("Hello, Victor!");
});

test("handles whitespace-only names", ()=>{
    expect(greet("  ")).toBe("Hello, stranger!");
});