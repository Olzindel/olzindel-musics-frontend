import {FunctionComponent, useContext, useEffect, useState} from "react";
import {Music} from "../../api/generated/graphql";
import {MusicPlayerContext} from "../../contexts/AudioPlayer/MusicPlayerContext";
import styled from "styled-components";
import {Pause, Play} from "@styled-icons/boxicons-regular";
import {IconButton} from "../Commons/IconButton";
import {MusicProgressBar} from "./MusicProgressBar";

interface Props {
    music: Music
}

const Content = styled.div`
  background: rgba(155, 155, 155, 0.25);
  border-radius: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);
  }
`

export const MusicDisplay: FunctionComponent<Props> = (props) => {
    const [audioPlayingThisMusic, setAudioPlayingThisMusic] = useState<HTMLAudioElement>();
    const {play, audiosPlaying, currentMusicPlayingInfos, pause} = useContext(MusicPlayerContext);

    useEffect(() => {

    });

    // const audio = new Audio(props.music.linkToFile);

    const handlePlayMusic = async () => {
        // audioRef.current?.load();
        await play({
            musicId: props.music.id,
            musicSrc: props.music.linkToFile
        });

        setAudioPlayingThisMusic(audiosPlaying[props.music.id])
    }

    const handlePauseMusic = () => {
        pause(props.music.id)
    }

    const hasBeenPlayed = () => {
        return !!audiosPlaying[props.music.id];
    }

    const isPlaying = () => {
        if (currentMusicPlayingInfos.musicId !== props.music.id) {
            return false;
        }
        return !audiosPlaying[props.music.id].paused;
    }

    // console.log(`Rendering music ${props.music.id}`)

    return (
        <>
            <Content>
                <h1>
                    {props.music.title}
                </h1>
                {hasBeenPlayed() && isPlaying() ?
                    <IconButton icon={Pause} onClick={handlePauseMusic}>Pause</IconButton>
                    :
                    <IconButton icon={Play} onClick={handlePlayMusic}/>
                }
                <MusicProgressBar duration={audioPlayingThisMusic?.duration || 0}
                                  currentTime={audioPlayingThisMusic?.currentTime || 0}/>
            </Content>
        </>
    )
        ;
}