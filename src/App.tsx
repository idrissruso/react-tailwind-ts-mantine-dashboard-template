import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BaseLayout from '@layout/AppShell'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}></Route>

        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}
