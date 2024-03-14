import researchImage from '../assets/images/research.png';
import designImage from '../assets/images/design.png';
import buildImage from '../assets/images/build.png';
import testImage from '../assets/images/test.png';
import deployImage from '../assets/images/deploy.png';
import { useEffect, useState } from 'react';

function ProcessCard() {
    const cards = [
        { id: 'research', src: researchImage },
        { id: 'design', src: designImage },
        { id: 'build', src: buildImage },
        { id: 'test', src: testImage },
        { id: 'deploy', src: deployImage },
    ]
        return (
        <>
        {cards.map((card) => 
            <div className='card' key={card.id}>
                <img id={card.id} src={card.src}/>
            </div>
        )}
        </>
    )
}

export default ProcessCard;