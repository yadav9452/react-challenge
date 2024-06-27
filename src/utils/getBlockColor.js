const getBlockColor = (blockName) => {
    switch (blockName) {
        case 'Looks':
            return 'purple';
        case 'Motion':
            return 'blue';

        default:
            return 'green';
    }
};

export default getBlockColor;
