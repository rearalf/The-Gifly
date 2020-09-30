import { useContext } from 'react';
import { Context } from '../context/GifsContext';

export default function useGlobalGifs(){
    return useContext(Context).gifs;
}
