function isTestWorking(exclamation: String) {
  return `It is working ${exclamation}`;
}

describe("isTestWorking()", () => {
  it("says It is working with any exclamation", () => {
    expect(isTestWorking("smoothly")).toBe("It is working smoothly");
  });
});

export {};
