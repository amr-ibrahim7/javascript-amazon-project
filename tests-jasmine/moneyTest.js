import { formatCurrency } from "../scripts/utilis/money.js";

describe("Test suite: formatCurrency", () => {
  it("Converts cents into dollers", () => {
    expect(formatCurrency(1000)).toBe("$10.00");
  });

  it("works with 0", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });

  it("rounds up to the nearest cent", () => {
    expect(formatCurrency(2000.5)).toBe("$20.01");
  });
});
