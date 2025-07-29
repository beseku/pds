// react-i18next [https://react.i18next.com]
import { useTranslation } from 'react-i18next';

// Mantine UI [https://mantine.dev/]
import { NumberInput } from '@mantine/core'

function NumberInputPage() {
  const { t } = useTranslation();
  
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flexStart", gap: "var(--magin-loose)", padding: "1.5rem", border: "solid 1px var(--color-stroke-neutral)", borderRadius: "var(--border-radius-rounded)" }}>
      <NumberInput label={ t("inputs.NumberInputPage.example.label") } description={ t("inputs.NumberInputPage.example.description") } placeholder={ t("inputs.NumberInputPage.example.placeholder") } hideControls size="lg" />
      <NumberInput label={ t("inputs.NumberInputPage.example.label") } description={ t("inputs.NumberInputPage.example.description") } placeholder={ t("inputs.NumberInputPage.example.placeholder") } disabled hideControls size="lg" />
      <NumberInput label={ t("inputs.NumberInputPage.example.label") } description={ t("inputs.NumberInputPage.example.description") } placeholder={ t("inputs.NumberInputPage.example.placeholder") } error={ t("inputs.NumberInputPage.example.error") } hideControls size="lg" />
      <NumberInput label={ t("inputs.NumberInputPage.example.label") } description={ t("inputs.NumberInputPage.example.description") } placeholder={ t("inputs.NumberInputPage.example.placeholder") } hideControls size="xl" />
      <NumberInput label={ t("inputs.NumberInputPage.example.label") } description={ t("inputs.NumberInputPage.example.description") } placeholder={ t("inputs.NumberInputPage.example.placeholder") } disabled hideControls size="xl" />
      <NumberInput label={ t("inputs.NumberInputPage.example.label") } description={ t("inputs.NumberInputPage.example.description") } placeholder={ t("inputs.NumberInputPage.example.placeholder") } error={ t("inputs.NumberInputPage.example.error") } hideControls size="xl" />
      <NumberInput label={ t("inputs.NumberInputPage.example.label") } description={ t("inputs.NumberInputPage.example.description") } placeholder={ t("inputs.NumberInputPage.example.placeholder") } hideControls size="2xl" />
      <NumberInput label={ t("inputs.NumberInputPage.example.label") } description={ t("inputs.NumberInputPage.example.description") } placeholder={ t("inputs.NumberInputPage.example.placeholder") } disabled hideControls size="2xl" />
      <NumberInput label={ t("inputs.NumberInputPage.example.label") } description={ t("inputs.NumberInputPage.example.description") } placeholder={ t("inputs.NumberInputPage.example.placeholder") } error={ t("inputs.NumberInputPage.example.error") } hideControls size="2xl" />
    </div>
  )
}

export default NumberInputPage