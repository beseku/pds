import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Flex, Button } from '@mantine/core'

import HomePage from './pages/HomePage'
import TextInputPage from './pages/TextInputPage'

import './App.css'

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "15rem 1fr", gridTemplateRows: "1fr", gap: 0 }}>
        <div style={{ gridColumn: "1 / span 1", paddingInline: "var(--padding-inline-container)", paddingBlock: "var(--padding-block-container)", backgroundColor: "var(--color-background-neutral)" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flexStart", gap: "var(--magin-tight)" }}>
            <h1 style={{ all: "unset", padding: 0, color: "var(--color-foreground-neutral-weak)", fontFamily: "var(--font-family-text)", fontFeatureSettings: "var(--font-feature-settings-heading)", fontSize: "var(--font-size-2xs)", fontWeight: "var(--font-weight-heading)", letterSpacing: "0.1em", lineHeight: "var(--line-height-2xs)", textTransform: "uppercase" }}>Inputs</h1>
            <ul style={{ all: "unset", display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flexStart", gap: "var(--magin-tighter)" }}>
              <li style={{ listStyle: "none" }}>
                <a href="/text-input" style={{ color: "var(--color-foreground-neutral)", fontFamily: "var(--font-family-text)", fontFeatureSettings: "var(--font-feature-settings-text)", fontSize: "var(--font-size-sm)", fontWeight: "var(--font-weight-text)", lineHeight: "var(--line-height-sm)", textDecoration: "none" }}>Text Input</a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ gridColumn: "2 / span 1", paddingInline: "var(--padding-inline-container)", paddingBlock: "var(--padding-block-container)", backgroundColor: "var(--color-background-default)" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/text-input" element={<TextInputPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App