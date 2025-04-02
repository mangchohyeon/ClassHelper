import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react';
import Layout from '@layout/Layout';  // 위에서 만든 Layout 컴포넌트
import Home from '@pages/Home/Home';
import EngWords from '@pages/EngWords/EngWords';
import Kodle from '@pages/EngWords/Kodle/Kodle';
import ClassHelper from '@pages/ClassHelper/ClassHelper'
import ChangeClass from '@pages/ClassHelper/ChangeClass/ChangeClass';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

function App() {
  return (
    <React.StrictMode>
      <ChakraProvider value={defaultSystem}>
        <Router>
          <Routes>
            {/* Layout 컴포넌트를 기준으로 중첩 라우트를 설정 */}
            <Route path="/" element={<Layout />}>
              {/* index 라우트: 기본 경로 ("/")에 해당하는 컴포넌트 */}
              <Route index element={<Home />} />
              <Route path="/EngWords" element={<EngWords />} />
              <Route path="/EngWords/kodle" element={<Kodle />} />
              <Route path="/ClassHelper" element={<ClassHelper />} />
              <Route path="/ClassHelper/ChangeClass" element = {<ChangeClass />} />
            </Route>
          </Routes>
        </Router>
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default App;