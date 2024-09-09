import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BlogDetailScreen, BlogScreen } from './screens';
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BlogScreen />} />
          <Route path="/blog/:id" element={<BlogDetailScreen />} />
        </Routes>
      </Router>
    </>
  )
}