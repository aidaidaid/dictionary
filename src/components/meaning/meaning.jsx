import { useSelector } from 'react-redux';
import { selectSynonyms, selectMeanings, selectPartOfSpeech, selectTranscription, selectAudio, selectWord, selectSourceUrls } from "../../redux/toolkitSlice";
import './meaning.css';

export const Meaning = () => {
    const word = useSelector(selectWord);
    const meanings = useSelector(selectMeanings);
    const synonyms = useSelector(selectSynonyms);
    const partOfSpeech = useSelector(selectPartOfSpeech);
    const transcription = useSelector(selectTranscription);
    const audioLink = useSelector(selectAudio);
    const audio = new Audio(audioLink);
    const sourceUrls = useSelector(selectSourceUrls);

  return (
    <>
        {meanings?.length > 0 ?
        <>
            <div id='dictionary'>
                <div className='first'>
                    <div className='word-and-trans'>
                        <p className='word'>{word}</p>
                        <p className='transcription'>{transcription}</p>
                    </div>
                    <div className='button'>
                        {audioLink ? (
                        <button className='audio' onClick={()=>audio.play()}>
                            <span className='play'></span>
                        </button>
                        ) : null}
                    </div>
                </div>
                <div className='line'>
                    <span className='partOfSpeech'>{partOfSpeech}</span>
                </div>
                <p id='meanings'>Meaning</p>
                <ul className="meanings">
                    {meanings?.map((item, index) => {
                    return <li key={index} className="meaning">{item.definition}</li>
                    })}
                </ul>
            </div>
            {synonyms.length > 0 ?
            <div>
                <span className='synonym'>Synonyms</span><span className='synonyms'>{synonyms.join(', ')}</span>
            </div> 
             : <></>}
            <div className='lineBottom'>
                <span className='source'>Source</span>
                <a href={sourceUrls} target="_blank" rel="noreferrer noopener" className='sourceLink'>{sourceUrls}</a>
            </div>
        </> : <></>
        }
    </>
  );
};