import React, {FunctionComponent, useState} from "react";

type MusicPlayingInfosType = {
    musicId: string;
    musicSrc: string;
}
type AudiosPlayingType = { [musicId: string]: HTMLAudioElement }

type MusicPlayerContextType = {
    currentMusicPlayingInfos: MusicPlayingInfosType,
    audiosPlaying: AudiosPlayingType,
    play: (musicToPlay: MusicPlayingInfosType) => Promise<void>;
    pause: (musicId: string) => void;
}

const initialMusicPlaying: MusicPlayingInfosType = {
    musicId: '',
    musicSrc: ''
}

export const MusicPlayerContext = React.createContext<MusicPlayerContextType>({
    currentMusicPlayingInfos: initialMusicPlaying,
    audiosPlaying: {},
    play: async () => {
        return;
    },
    pause: () => {
        return
    }
});

export const MusicPlayerProvider: FunctionComponent = ({children}) => {
    const [currentMusicPlayingInfos, setCurrentMusicPlayingInfos] = useState<MusicPlayingInfosType>(initialMusicPlaying);
    const [audiosPlaying, setAudiosPlaying] = useState<AudiosPlayingType>({});

    const play = async (musicToPlay: MusicPlayingInfosType) => {
        audiosPlaying[currentMusicPlayingInfos.musicId]?.pause();

        let audioHavingMusicToPlayId = audiosPlaying[musicToPlay.musicId];
        if (!audioHavingMusicToPlayId) {
            const newAudio = new Audio(musicToPlay.musicSrc);
            audiosPlaying[musicToPlay.musicId] = newAudio;
            setAudiosPlaying(audiosPlaying);
            audioHavingMusicToPlayId = newAudio;
        }

        await audioHavingMusicToPlayId.play();
        setCurrentMusicPlayingInfos(musicToPlay);
    }
    const pause = (musicId: string) => {
        const newAudiosPlaying = Object.assign({}, audiosPlaying);
        newAudiosPlaying[musicId]?.pause();
        setAudiosPlaying(newAudiosPlaying);
    }

    return <MusicPlayerContext.Provider value={{
        currentMusicPlayingInfos,
        audiosPlaying,
        play,
        pause
    }}>
        {children}
    </MusicPlayerContext.Provider>
}