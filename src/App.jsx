// React Router [https://reactrouter.com]
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

// react-i18next [https://react.i18next.com]
import { useTranslation } from "react-i18next";
import "./i18n";

import HomePage from "./pages/home-page"
import NumberInputPage from "./pages/inputs/number-input-page"
import TextInputPage from "./pages/inputs/text-input-page"
import StepperPage from "./pages/navigation/stepper-page"

import "./app.css"

function App() {
  const { t, i18n } = useTranslation();
    
  return (
    <Router>
      <div style={{ height: "100vh", display: "grid", gridTemplateColumns: "15rem 1fr", gridTemplateRows: "1fr", gap: 0, overflow: "hidden" }}>
        <menu style={{ gridColumn: "1 / span 1", display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flexStart", gap: 0, overflowY: "scroll", backgroundColor: "var(--color-background-neutral)", borderRight: "solid 1px var(--color-stroke-neutral)" }}>
          <div style={{ flexGrow: "1", display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flexStart", gap: "var(--magin-loose)", paddingInline: "var(--padding-inline-container)", paddingBlock: "var(--padding-block-container)", borderBottom: "solid 1px var(--color-stroke-neutral)" }}>  
            <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flexStart", gap: "var(--magin-tight)" }}>
              <h1 style={{ color: "var(--color-foreground-neutral-weak)", fontFamily: "var(--font-family-text)", fontFeatureSettings: "var(--font-feature-settings-heading)", fontSize: "var(--font-size-2xs)", fontWeight: "var(--font-weight-heading)", letterSpacing: "0.1em", lineHeight: "var(--line-height-2xs)", textTransform: "uppercase" }}>
                { t("app.menu.inputs") }
              </h1>
              <ul style={{ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flexStart", gap: "var(--magin-tighter)" }}>
                <li>
                  <Link style={{ color: "var(--color-foreground-neutral)", fontFamily: "var(--font-family-text)", fontFeatureSettings: "var(--font-feature-settings-text)", fontSize: "var(--font-size-sm)", fontWeight: "var(--font-weight-text)", lineHeight: "var(--line-height-sm)", textDecoration: "none" }} to="/inputs/number-input">
                    { t("app.menu.numberInput") }
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "var(--color-foreground-neutral)", fontFamily: "var(--font-family-text)", fontFeatureSettings: "var(--font-feature-settings-text)", fontSize: "var(--font-size-sm)", fontWeight: "var(--font-weight-text)", lineHeight: "var(--line-height-sm)", textDecoration: "none" }} to="/inputs/text-input">
                    { t("app.menu.textInput") }
                  </Link>
                </li>
              </ul>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flexStart", gap: "var(--magin-tight)" }}>
              <h1 style={{ color: "var(--color-foreground-neutral-weak)", fontFamily: "var(--font-family-text)", fontFeatureSettings: "var(--font-feature-settings-heading)", fontSize: "var(--font-size-2xs)", fontWeight: "var(--font-weight-heading)", letterSpacing: "0.1em", lineHeight: "var(--line-height-2xs)", textTransform: "uppercase" }}>
                { t("app.menu.navigation") }
              </h1>
              <ul style={{ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flexStart", gap: "var(--magin-tighter)" }}>
                <li>
                  <Link style={{ color: "var(--color-foreground-neutral)", fontFamily: "var(--font-family-text)", fontFeatureSettings: "var(--font-feature-settings-text)", fontSize: "var(--font-size-sm)", fontWeight: "var(--font-weight-text)", lineHeight: "var(--line-height-sm)", textDecoration: "none" }} to="/navigation/stepper">
                    { t("app.menu.stepper") }
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ paddingInline: "var(--padding-inline-container)", paddingBlock: "var(--padding-block-container)" }}>  
            <ul style={{ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flexStart", gap: "var(--magin-tighter)" }}>
              <li>
                {
                  i18n.language != "en" ? 
                  <button onClick={ () => i18n.changeLanguage("en") } style={{ backgroundColor: "transparent", border: "none", color: "var(--color-foreground-neutral)", fontFamily: "var(--font-family-text)", fontFeatureSettings: "var(--font-feature-settings-text)", fontSize: "var(--font-size-sm)", fontWeight: "var(--font-weight-text)", lineHeight: "var(--line-height-sm)", textDecoration: "none", cursor: "pointer" }}>
                    English
                  </button>
                  : 
                  <span style={{ color: "var(--color-foreground-neutral)", fontFamily: "var(--font-family-text)", fontFeatureSettings: "var(--font-feature-settings-text)", fontSize: "var(--font-size-sm)", fontWeight: "var(--font-weight-text-strong)", lineHeight: "var(--line-height-sm)", cursor: "disabled" }}>
                    English
                  </span>
                }
              </li>
              <li>
                {
                  i18n.language != "es" ? 
                  <button onClick={ () => i18n.changeLanguage("es") } style={{ backgroundColor: "transparent", border: "none", color: "var(--color-foreground-neutral)", fontFamily: "var(--font-family-text)", fontFeatureSettings: "var(--font-feature-settings-text)", fontSize: "var(--font-size-sm)", fontWeight: "var(--font-weight-text)", lineHeight: "var(--line-height-sm)", textDecoration: "none", cursor: "pointer" }}>
                    Español
                  </button>
                  : 
                  <span style={{ color: "var(--color-foreground-neutral)", fontFamily: "var(--font-family-text)", fontFeatureSettings: "var(--font-feature-settings-text)", fontSize: "var(--font-size-sm)", fontWeight: "var(--font-weight-text-strong)", lineHeight: "var(--line-height-sm)", cursor: "disabled" }}>
                    Español
                  </span>
                }
              </li>
            </ul>
          </div>
        </menu>
        <main style={{ gridColumn: "2 / span 1", display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flexStart", gap: 0, overflowY: "scroll", backgroundColor: "var(--color-background-default)" }}>
          <div style={{ paddingInline: "var(--padding-inline-container)", paddingBlock: "var(--padding-block-container)" }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/inputs/number-input" element={<NumberInputPage />} />
              <Route path="/inputs/text-input" element={<TextInputPage />} />
              <Route path="/navigation/stepper" element={<StepperPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App