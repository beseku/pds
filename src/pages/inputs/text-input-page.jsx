// react-i18next [https://react.i18next.com]
import { useTranslation } from 'react-i18next';

// Mantine UI [https://mantine.dev/]
import { TextInput } from '@mantine/core'

function TextInputPage() {
  const { t } = useTranslation();
  
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flexStart", gap: "var(--magin-loose)", padding: "1.5rem", border: "solid 1px var(--color-stroke-neutral)", borderRadius: "var(--border-radius-rounded)" }}>
      <TextInput label={ t("inputs.textInputPage.example.label") } description={ t("inputs.textInputPage.example.description") } placeholder={ t("inputs.textInputPage.example.placeholder") } size="lg" />
      <TextInput label={ t("inputs.textInputPage.example.label") } description={ t("inputs.textInputPage.example.description") } placeholder={ t("inputs.textInputPage.example.placeholder") } disabled size="lg" />
      <TextInput label={ t("inputs.textInputPage.example.label") } description={ t("inputs.textInputPage.example.description") } placeholder={ t("inputs.textInputPage.example.placeholder") } error={ t("inputs.textInputPage.example.error") } size="lg" />
      <TextInput label={ t("inputs.textInputPage.example.label") } description={ t("inputs.textInputPage.example.description") } placeholder={ t("inputs.textInputPage.example.placeholder") } size="xl" />
      <TextInput label={ t("inputs.textInputPage.example.label") } description={ t("inputs.textInputPage.example.description") } placeholder={ t("inputs.textInputPage.example.placeholder") } disabled size="xl" />
      <TextInput label={ t("inputs.textInputPage.example.label") } description={ t("inputs.textInputPage.example.description") } placeholder={ t("inputs.textInputPage.example.placeholder") } error={ t("inputs.textInputPage.example.error") } size="xl" />
      <TextInput label={ t("inputs.textInputPage.example.label") } description={ t("inputs.textInputPage.example.description") } placeholder={ t("inputs.textInputPage.example.placeholder") } size="2xl" />
      <TextInput label={ t("inputs.textInputPage.example.label") } description={ t("inputs.textInputPage.example.description") } placeholder={ t("inputs.textInputPage.example.placeholder") } disabled size="2xl" />
      <TextInput label={ t("inputs.textInputPage.example.label") } description={ t("inputs.textInputPage.example.description") } placeholder={ t("inputs.textInputPage.example.placeholder") } error={ t("inputs.textInputPage.example.error") } size="2xl" />
    </div>
  )
}

export default TextInputPage