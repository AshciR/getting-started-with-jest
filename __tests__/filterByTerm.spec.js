const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {

    test("it should filter by a search term (link)", () => {

        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.link3.dev" }];

        expect(filterByTerm(input, "link")).toEqual(output)
        expect(filterByTerm(input, "LINK")).toEqual(output)

    });

    test("it should return an empty array if there is an empty search term", () => {

        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [];

        expect(filterByTerm(input, " ")).toEqual(output)
    });

    test("it should throw and error if inputArr is empty", () => {
        expect(() => filterByTerm([], "link")).toThrow(Error);
    });

    test("it should throw and error if searchTerm is empty", () => {
        expect(() => filterByTerm(["a", "b", "c"], "") ).toThrow(Error);
    });

});
