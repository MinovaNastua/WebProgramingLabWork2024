import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Mainn from '/src/moduls/Pageses/main.jsx';
import Scetches from '/src/moduls/Pageses/sketchesPage.jsx';
import NotFound from '/src/moduls/Pageses/NotFound.jsx';

function App(){
    return (  
        <Router>
            <div>
                        
                <Routes>
                    <Route path="/" exact element={<Mainn />} />
                    <Route path="/Scetches" element={<Scetches />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    
)
}
export default App;