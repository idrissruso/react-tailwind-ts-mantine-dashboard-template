import { Button, Tooltip } from '@mantine/core'
import './App.css'

export default function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Tooltip label="Tooltip">
        <Button>mantine</Button>
      </Tooltip>
    </div>
  )
}
