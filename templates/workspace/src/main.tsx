import "@rbbt/ui/fonts.css";
import "@rbbt/ui/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RbTheme } from "@rbbt/ui";

createRoot(document.getElementById("root")!).render(
  <StrictMode><RbTheme family="glass" mode="light" canvas style={{ minHeight: "100vh", padding: 24 }}><main><h1>Ambiente pronto</h1><p>@rbbt/ui 0.5.0-rc.6 carregado. Implemente os seis módulos conforme o brief e a receita.</p></main></RbTheme></StrictMode>,
);
