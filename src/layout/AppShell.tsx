import { AppShell, Burger, Group, Skeleton, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Navbar from '@components/ui/Navbar'
export default function BaseLayout() {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <h1>Logo</h1>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        Alt layout – Navbar and Aside are rendered on top on Header and Footer
      </AppShell.Main>

      <AppShell.Footer p="md">Footer</AppShell.Footer>
    </AppShell>
  )
}
