import { useState, useEffect } from 'react';
// import '../styles/reset.css';
// import '../styles/HomeBody.css'

function HomeBody() {
    const [currentPic, setCurrentPic] = useState('');
    
    // useEffect(() => getPic(), []);

    if (!currentPic) return <div />;

    return (
        <div className="pic pic-container">
            {/* {currentPic && (
                <article className="pic pic-container-inner">
                    <header className="pic pic-header">
                        {currentPic.title} - <i>{currentPic.date}</i>
                    </header>
                    <img src={currentPic.hdurl} alt="APOD" width="450" height="auto" className="pic-image" />
                    <p className="pic pic-explanation">{currentPic.explanation}</p>
                </article>
            )} */}
        </div>
    );
}

export default HomeBody;