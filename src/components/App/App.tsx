import React from 'react';
import './App.css';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {MusicsList} from "../Musics/MusicsList";
import {MusicPlayerProvider} from "../../contexts/AudioPlayer/MusicPlayerContext";

const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URL,
    cache: new InMemoryCache()
});

function App() {
    console.debug(process.env.REACT_APP_API_URL);
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <MusicPlayerProvider>
                    <MusicsList/>
                </MusicPlayerProvider>
            </div>
        </ApolloProvider>
    );
}

export default App;
