import { Flex, TextInput } from '@mantine/core'
import './App.css'

function App() {
  return (
    <Flex direction="column" align="stretch" justify="center" gap="1.5rem" wrap="nowrap" style={{ border: "dashed 1px #9747FF", margin: "1.5rem", padding: "1.5rem" }}>
      <TextInput label="Extravaganza lime" description="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." placeholder="Extravaganza lime" size="lg" />
      <TextInput label="Extravaganza lime" description="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." placeholder="Extravaganza lime" disabled size="lg" />
      <TextInput label="Extravaganza lime" description="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." placeholder="Extravaganza lime" error="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." size="lg" />
      <TextInput label="Extravaganza lime" description="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." placeholder="Extravaganza lime" size="xl" />
      <TextInput label="Extravaganza lime" description="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." placeholder="Extravaganza lime" disabled size="xl" />
      <TextInput label="Extravaganza lime" description="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." placeholder="Extravaganza lime" error="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." size="xl" />
      <TextInput label="Extravaganza lime" description="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." placeholder="Extravaganza lime" size="2xl" />
      <TextInput label="Extravaganza lime" description="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." placeholder="Extravaganza lime" disabled size="2xl" />
      <TextInput label="Extravaganza lime" description="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." placeholder="Extravaganza lime" error="The rabbit-hole went straight on like a tunnel for some way and then dipped suddenly down." size="2xl" />
    </Flex>
  )
}

export default App