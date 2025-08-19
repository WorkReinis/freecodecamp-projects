function SoundButton({ label, url, sendDataToParent, id }) {
    const handleMouseClick = (e) => {
        sendDataToParent(e);

        // Button press animation code block
        const button = e.currentTarget;
        if (button) {
            button.classList.add("active");
            // Removes the active class after a short delay
            setTimeout(() => {
                button.classList.remove("active");
            }, 100);
        }
    };

    return (
        <button
            onClick={handleMouseClick}
            className="col drum-pad btn"
            id={id}
            label={label}
        >
            {id}
            <audio src={url} preload="auto" className="clip" id={id} />
        </button>
    );
}

export default SoundButton;
