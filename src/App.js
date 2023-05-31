import { Routes, Route } from 'react-router-dom'
import Chat from './components/Chat/Chat'
import Fetch from './components/Fetch/Fetch'

function App() {
    return (
        <Routes>
            {/* <Route path="" element={<Fetch title={'Github Info from Props'} />} /> */}
            <Route path="" element={<Chat />} />
        </Routes>
    )
}

export default App
