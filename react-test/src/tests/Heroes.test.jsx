import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Heroes from "../components/Heroes/Heroes";
import calculateHeroStrengthPower from "../utils/heroStrength";

vi.mock("../utils/heroStrength", () => ({
  default: vi.fn((strength) => {
    if (strength < 10) return `${strength} (mock-weak)`;
    if (strength >= 10 && strength < 20) return `${strength} (mock-strong)`;
    return `${strength} (mock-unbelievable)`;
  }),
}));

describe("Heroes", () => {
  it('should display "No heroes available" when heroes prop is null', () => {
    render(<Heroes heroes={null} />);
    expect(screen.getByText("No heroes available")).toBeInTheDocument();
  });

  it('should display "No heroes available" when heroes prop is an empty array', () => {
    render(<Heroes heroes={[]} />);
    expect(screen.getByText("No heroes available")).toBeInTheDocument();
  });

  it("should render a list of heroes with their names and calculated power", () => {
    const mockHeroes = [
      { id: "1", name: "Hero A", strength: 5 },
      { id: "2", name: "Hero B", strength: 15 },
      { id: "3", name: "Hero C", strength: 25 },
    ];

    render(<Heroes heroes={mockHeroes} />);

    expect(screen.queryByText("No heroes available")).not.toBeInTheDocument();

    const heroList = screen.getByRole("list");
    expect(heroList).toBeInTheDocument();

    expect(screen.getByText("Hero A: power=5 (mock-weak)")).toBeInTheDocument();
    expect(
      screen.getByText("Hero B: power=15 (mock-strong)")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Hero C: power=25 (mock-unbelievable)")
    ).toBeInTheDocument();

    expect(calculateHeroStrengthPower).toHaveBeenCalledTimes(mockHeroes.length);
    expect(calculateHeroStrengthPower).toHaveBeenCalledWith(5);
    expect(calculateHeroStrengthPower).toHaveBeenCalledWith(15);
    expect(calculateHeroStrengthPower).toHaveBeenCalledWith(25);
  });

  it('should render list items with the "listitem" role', () => {
    const mockHeroes = [{ id: "1", name: "Hero A", strength: 10 }];
    render(<Heroes heroes={mockHeroes} />);
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });
});
