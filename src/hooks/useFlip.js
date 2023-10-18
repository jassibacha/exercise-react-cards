import { useState } from 'react';

function useFlip(initialState = true) {
    // State variable to keep track of whether the card is toggled/flipped
    const [isToggled, setIsToggled] = useState(initialState);

    // Function to flip or toggle the state of the card
    const flipCard = () => {
        // Toggle the current state
        setIsToggled((current) => !current);
    };

    // Return the current state (isToggled) and the function (flipCard) to toggle it
    return [isToggled, flipCard];
}

export default useFlip;
