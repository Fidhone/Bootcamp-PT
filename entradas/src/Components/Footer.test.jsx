import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Footer from "./Footer";

/**
 * @vitest-environment jsdom
 */

describe("Footer", () => {
  test("renders correctly", () => {
    render(<Footer />);
    expect(screen.getByText(/Creado por: Francisco Torres/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Mi sitio web. Todos los derechos reservados./i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Sígueme en:/i)).toBeInTheDocument();
  });
});
