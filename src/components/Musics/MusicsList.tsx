import {FunctionComponent} from "react";
import {useGetMusicsQuery} from "../../api/generated/graphql";
import {MusicDisplay} from "./MusicDisplay";
import styled from "styled-components";

const List = styled.ul`
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template: 1fr / 1fr;
  grid-gap: 20px;
`
export const MusicsList: FunctionComponent = () => {
    const {data, loading, error} = useGetMusicsQuery();
    return (
        <>
            {
                loading ? <></> :
                    error ? error.message :
                        <List>
                            {data?.musics.map((music, index) => <li key={index}>
                                <MusicDisplay music={music}/>
                            </li>)}
                        </List>
            }
        </>
    )
}