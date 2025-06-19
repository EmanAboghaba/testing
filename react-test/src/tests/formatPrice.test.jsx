import { formatPrice } from "../components/formatPrice/formatPrice";

describe("formatPrice function", () => {
  // Test case 1: formats number with default currency and 2 decimals
  it("formats number with default currency and 2 decimals", () => {
    expect(formatPrice(1234.5)).toBe("$1,234.50");
    expect(formatPrice(100)).toBe("$100.00");
    expect(formatPrice(0)).toBe("$0.00");
    expect(formatPrice(99.999)).toBe("$100.00");
    expect(formatPrice(0.1)).toBe("$0.10");
    expect(formatPrice(1234567.89)).toBe("$1,234,567.89");
    expect(formatPrice(1)).toBe("$1.00");
  });

  it("formats number with custom currency symbol and decimals", () => {
    expect(formatPrice(500, "€")).toBe("€500.00");
    expect(formatPrice(25.75, "£")).toBe("£25.75");
    expect(formatPrice(123.456, "$", 0)).toBe("$123");
    expect(formatPrice(123.456, "$", 1)).toBe("$123.5");
    expect(formatPrice(123.456, "$", 3)).toBe("$123.456");
    expect(formatPrice(10, "JPY", 0)).toBe("JPY10");
    expect(formatPrice(9876.54321, "CAD", 4)).toBe("CAD9,876.5432");
  });

  // Test case 3: returns empty string for invalid input
  it("returns empty string for invalid input", () => {
    expect(formatPrice(null)).toBe("");
    expect(formatPrice(undefined)).toBe("");
    expect(formatPrice("abc")).toBe("");
    expect(formatPrice(NaN)).toBe("");
    expect(formatPrice(null, "€", 3)).toBe("");
    expect(formatPrice("test", "$", 0)).toBe("");
  });
});
