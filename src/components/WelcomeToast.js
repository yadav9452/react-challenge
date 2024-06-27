import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const WelcomeToast = () => {
    useEffect(() => {
        toast(
            <div>
                <div>
                    🎉 Welcome to <b>Scratch Web Editor</b>!
                </div>
                <div>🖱️ Drag n' Drop Sprite to Remove</div>
                <div>
                    ▶️ Press <b>Run</b> to execute & 🛑 Press <b>Reset</b> to
                    reset cat position
                </div>
            </div>,
            {
                duration: 5000,
                position: 'top-center',
                style: {
                    background: 'rgb(251 207 232)', // Light background color
                    color: '#333',
                    padding: '15px',
                    borderRadius: '8px'
                }
            }
        );
    }, []);

    return <Toaster />;
};

export default WelcomeToast;
