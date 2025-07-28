import { TextInput } from '@mantine/core'

function TextInputPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flexStart", gap: "var(--magin-loose)", padding: "1.5rem", border: "solid 1px var(--color-stroke-neutral)", borderRadius: "var(--border-radius-rounded)" }}>
      <TextInput label="Extravaganza lime" description="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." placeholder="Extravaganza lime" size="lg" />
      <TextInput label="Extravaganza lime" description="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." placeholder="Extravaganza lime" disabled size="lg" />
      <TextInput label="Extravaganza lime" description="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." placeholder="Extravaganza lime" error="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." size="lg" />
      <TextInput label="Extravaganza lime" description="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." placeholder="Extravaganza lime" size="xl" />
      <TextInput label="Extravaganza lime" description="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." placeholder="Extravaganza lime" disabled size="xl" />
      <TextInput label="Extravaganza lime" description="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." placeholder="Extravaganza lime" error="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." size="xl" />
      <TextInput label="Extravaganza lime" description="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." placeholder="Extravaganza lime" size="2xl" />
      <TextInput label="Extravaganza lime" description="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." placeholder="Extravaganza lime" disabled size="2xl" />
      <TextInput label="Extravaganza lime" description="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." placeholder="Extravaganza lime" error="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." size="2xl" />
    </div>
  )
}

export default TextInputPage