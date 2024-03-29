import Thumbnail from './thumbnail';
import FlipMove from 'react-flip-move';
function Results({results}) {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
         3xl:flex flex-wrap justify-center">
            {results.map(e=>
                 <Thumbnail key={e.id} result={e}></Thumbnail>
            )}
        </FlipMove>
    )
}

export default Results
