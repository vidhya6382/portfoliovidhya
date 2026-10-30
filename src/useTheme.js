// Switches the page between light and dark by setting data-theme on <html>.
export function toggleTheme() {
  const root = document.documentElement;
  const current = root.getAttribute("data-theme");
  const isDark =
    current === "dark" || (!current && window.matchMedia("(prefers-color-scheme: dark)").matches);
  root.setAttribute("data-theme", isDark ? "light" : "dark");
}
