import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
      name: "toolkit",
      initialState: {
          wordData: [],
          audio: ''
      },
      reducers: {
          setWordData: (state, action) => {
              state.wordData = action.payload;
              action.payload[0]?.phonetics.forEach(item => {
                if (item.audio !== '') {
                    state.audio = item.audio;
                    return;
                }
              });
          },
        }
    })

export default slice.reducer;

export const { setWordData } = slice.actions;

export const selectWord = (state) => state.toolkit.wordData[0]?.word;
export const selectMeanings = (state) => state.toolkit.wordData[0]?.meanings[0]?.definitions;
export const selectTranscription = (state) => state.toolkit.wordData[0]?.phonetics[0]?.text;
export const selectAudio = (state) => state.toolkit.audio;
export const selectSynonyms = (state) => state.toolkit.wordData[0]?.meanings[0]?.synonyms;
export const selectPartOfSpeech = (state) => state.toolkit.wordData[0]?.meanings[0]?.partOfSpeech;
export const selectSourceUrls = (state) => state.toolkit.wordData[0]?.sourceUrls[0];
