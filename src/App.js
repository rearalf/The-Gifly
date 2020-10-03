import React from 'react';
import { SearchResult } from './page/SearchResult';
import { Home } from './page/Home';
import { Route } from 'wouter';
import { GifsContextProvider } from './context/GifsContext';
import { Detail } from './page/Detail';
import { Logo } from 'components/Logo';

function App(){
    return (
        <GifsContextProvider>
            <header className="Header">
                <Logo height="75" width="75" />
                <h1 className="Title">The Gifly</h1>
            </header>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResult} />
            <Route path="/gif/:id" component={Detail} />
        </GifsContextProvider>
    );
}

export default App;
