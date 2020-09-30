import React from 'react';
import './App.css';
import { SearchResult } from './page/SearchResult';
import { Home } from './page/Home';
import { Route } from 'wouter';
import { GifsContextProvider } from './context/GifsContext';
import { Detail } from './page/Detail';

function App(){
    return (
        <div className="App">
            <GifsContextProvider>
                <Route path="/" component={Home} />
                <Route path="/search/:keyword" component={SearchResult} />
                <Route path="/gif/:id" component={Detail} />
            </GifsContextProvider>
        </div>
    );
}

export default App;
