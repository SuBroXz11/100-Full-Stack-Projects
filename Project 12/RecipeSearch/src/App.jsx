import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecipeScreen, RecipeDetailScreen } from './screens'
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RecipeScreen />} />
          <Route path="/recipe/:id" element={<RecipeDetailScreen />} />
        </Routes>
      </Router>
    </>
  )
}