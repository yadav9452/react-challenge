import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CatSprite from './CatSprite';
import mergeSprite from '../utils/mergeSprite';
import commandParser from '../utils/commandParser';
import toast from 'react-hot-toast';

const PreviewArea = () => {
    const commands = useSelector((state) => state.commands);
    const dispatch = useDispatch();

    const reset = () => {
        const cat = document.querySelector('#movingCat');
        cat.style = '';
        toast.success('Reset', { position: 'bottom-left' });
    };

    const execute = async (e) => {
        if (e.target.dataset.run) {
            // Merge and execute current commands
            await commandParser(mergeSprite(commands));
        }
        if (e.target.dataset.reset) reset();
    };

    return (
        <div
            onClick={execute}
            className="flex-none w-full h-full overflow-y-auto p-2 relative"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <CatSprite id="movingCat" className="transition-all" />
            <button
                className="fixed right-5 bottom-5 bg-green-500 hover:bg-green-700 text-gray-50 rounded-full h-12 w-12"
                data-run
            >
                Run
            </button>
            <button
                className="fixed right-20 bottom-5 bg-red-500 hover:bg-red-700 text-gray-50 rounded-full h-12 w-12"
                data-reset
            >
                Reset
            </button>
        </div>
    );
};

export default PreviewArea;
