import React, { useState, useEffect } from 'react';
import welcomeUnderlined from '../../img/welcome-underlined.png'

function WelcomePage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const welcomePageStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
        pointerEvents: isVisible ? 'auto' : 'none',
        backgroundColor: isVisible ? 'rgba(0, 0, 0, 0.7)' : '',
    };

    const welcomeContainer = {
        display: 'flex',
        width: '877.516px',
        height: '271.423px',
        transform: 'rotate(-0.556deg)',
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: 0,
    }

    const textStyle = {
        color: '#FFF',
        textAlign: 'center',
        fontSize: '128px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '130.5px', /* 101.953% */
        letterSpacing: '7.68px',
        textTransform: 'uppercase',
    }
    
    const spanStyle = {
        backgroundImage: `url(${welcomeUnderlined})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return (
        <div style={welcomePageStyle}>
            <div style={welcomeContainer}>
                <h1 style={textStyle} className='font-indie'>Welcome to My <span style={spanStyle}>Portfolio</span></h1>
            </div>
        </div>
    );
}

export default WelcomePage;
