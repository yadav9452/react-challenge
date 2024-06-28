import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import Sidebar from './components/Sidebar';
import MidArea from './components/MidArea';
import PreviewArea from './components/PreviewArea';
import { deleteSprite, allowDrop } from './utils/dragNDrop';
import { showWelcome } from './utils/utility';
import WelcomeToast from './components/WelcomeToast';

export default function App() {
    return (
        <div
            onDrop={deleteSprite}
            onDragOver={allowDrop}
            className="bg-blue-100 pt-6 font-sans"
        >
            <WelcomeToast />
            <div className="h-screen overflow-hidden flex flex-col md:flex-row">
                <div className="flex flex-col md:flex-row flex-1 h-full overflow-hidden bg-white border-t border-r border-gray-200 rounded-tl-xl mt-2 md:mt-0 ml-0 md:ml-2">
                    <Sidebar className="w-full md:w-1/4 bg-red-100" />
                    <MidArea className="w-full md:w-2/3 lg:w-1/2" />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 h-full overflow-hidden bg-white border-t border-l border-gray-200 rounded-tl-xl mt-2 md:mt-0 ml-0 md:ml-2">
                    <PreviewArea className="w-full h-full" />
                </div>
            </div>
        </div>
    );
}
