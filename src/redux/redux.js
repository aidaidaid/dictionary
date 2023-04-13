// import { actionTypes } from './actionTypes';

// const initialState = {
//     wordData: []
// };

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionTypes.SET_WORD_DATA:
//             return {
//                 ...state,
//                 wordData: action.payload
//             };
//         default: return state;
//     }
// };

// export const selectWord = (state) => state.wordData[0]?.word;
// export const selectMeanings = (state) => state.wordData[0]?.meanings[0]?.definitions;
// export const selectTranscription = (state) => state.wordData[0]?.phonetics[0]?.text;
// export const selectAudio = (state) => state.wordData[0]?.phonetics[0]?.audio;
// export const selectSynonyms = (state) => state.wordData[0]?.meanings[0]?.synonyms;
// export const selectPartOfSpeech = (state) => state.wordData[0]?.meanings[0]?.partOfSpeech;


// export default reducer;

// export const setWordData = (payload) => ({
//     type: actionTypes.SET_WORD_DATA,
//     payload,
// });

// export const actionTypes = {
//     SET_WORD_DATA: 'SET_WORD_DATA',
// }