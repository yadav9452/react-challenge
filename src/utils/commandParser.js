import {
    controlCommands,
    motionCommands,
    looksCommands
} from './commandMapping';

const commandParser = async (commands) => {
    let toRepeat = false;
    let itr;
    const cmdToRepeat = [];
    for (const cmd of commands) {
        const resp = await commandRunner(cmd);
    }
};

const commandRunner = async (cmd) => {
    if (cmd?.cmdID.includes('Looks')) return looksCommands(cmd.cmdText);
    if (cmd?.cmdID.includes('Motion')) return motionCommands(cmd.cmdText);
};

export default commandParser;
