import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";

import NavBar from "./NavBar";

/**
 * @vitest-environment jsdom
 */

describe("NavBar", () => {
  test("renders the correct links", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    expect(screen.getByText("Inicio")).toBeInTheDocument();
    expect(screen.getByText("Buscar eventos")).toBeInTheDocument();
    expect(screen.getByText("Comprar entradas")).toBeInTheDocument();
    expect(screen.getByText("Gestionar cuenta")).toBeInTheDocument();
  });

  test("navigates to the correct pages when clicked", async () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    const inicioLink = screen.getByText("Inicio");
    const busquedaEventosLink = screen.getByText("Buscar eventos");
    const compraEntradasLink = screen.getByText("Comprar entradas");
    const gestionCuentasLink = screen.getByText("Gestionar cuenta");

    userEvent.click(inicioLink);
    await waitFor(() => expect(window.location.pathname).toBe("/"));

    userEvent.click(busquedaEventosLink);
    await waitFor(() => expect(window.location.pathname).toBe("/busqueda_eventos"));

    userEvent.click(compraEntradasLink);
    await waitFor(() => expect(window.location.pathname).toBe("/compra_entradas"));

    userEvent.click(gestionCuentasLink);
    await waitFor(() => expect(window.location.pathname).toBe("/gestion_cuentas"));
  });
});
