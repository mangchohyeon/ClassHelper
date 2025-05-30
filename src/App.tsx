import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react';
import { useEffect } from 'react';
import Layout from '@layout/Layout';  // 위에서 만든 Layout 컴포넌트
import Home from '@pages/Home/Home';
import ChangeClass from '@pages/Teacher/ChangeClass/ChangeClass';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';


function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    let vw = window.innerHeight* 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--vw", `${vw}px`);
  }

  useEffect(() => {
    setScreenSize();
  });

  return (
    <React.StrictMode>
      <ChakraProvider value={defaultSystem}>
        <Router>
          <Routes>
            {/* Layout 컴포넌트를 기준으로 중첩 라우트를 설정 */}
            <Route path="/" element={<Layout />}>
              {/* index 라우트: 기본 경로 ("/")에 해당하는 컴포넌트 */}
              <Route index element={<Home />} />
              <Route path="/changeclass" element = {<ChangeClass />} />
            </Route>
          </Routes>
        </Router>
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default App;