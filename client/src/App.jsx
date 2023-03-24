import { useState } from 'react'
import Layout from './components/layout/Layout'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<Layout />
		</div>
	)
}

export default App
