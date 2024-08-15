const Help = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-xl rounded-lg relative top-[70px]">
            <h1 className="text-3xl text-center font-bold mb-4">Drag-and-Drop Card Canvas</h1>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Overview</h2>
                <p className="text-gray-700">
                    This project provides an interactive drag-and-drop interface where users can create, move, resize, and connect cards on a canvas. It allows for the visualization of connected ideas or processes, making it a versatile tool for diagramming, brainstorming, or creating flowcharts.
                </p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Features</h2>
                <ul className="list-disc list-inside pl-4 text-gray-700">
                    <li>Add Cards: Users can add cards with custom titles and descriptions.</li>
                    <li>Drag and Drop: Move cards around the canvas to organize your thoughts or workflow.</li>
                    <li>Resize Cards: Resize cards to fit the amount of text or to emphasize importance.</li>
                    <li>Connect Cards: Click one card and then another to draw a connecting arrow between them.</li>
                    <li>Remove Cards: Easily delete unwanted cards.</li>
                    <li>Remove Connections: Double-tap on an arrow to remove the connection between two cards.</li>
                    <li>Popup Detailed View: Click "Show more" on a card to view the full description in a popup.</li>
                </ul>
                
            </div>
            <div>
                <h1 className="text-3xl text-center font-bold mt-2 mb-2">How to Use</h1>
                <h2 className="text-2xl font-semibold mb-2">Adding a Card</h2>
                <ul className="list-disc list-inside pl-4 text-gray-700">
                    <li>Click the "Add Card" button located at the bottom of the canvas.</li>
                    <li>An input form will appear where you can enter the card's title and description.</li>
                    <li>Once filled, click "SUBMIT" to add the card to the canvas.</li>
                    <li>The card will appear at a random position on the canvas.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2 mt-4">Moving a Card</h2>
                <ul className="list-disc list-inside pl-4 text-gray-700">
                    <li>Click and hold a card to drag it around the canvas.</li>
                    <li>Release the card to drop it in the desired position.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2 mt-4">Resizing a Card</h2>
                <ul className="list-disc list-inside pl-4 text-gray-700">
                    <li>Click on the bottom-right corner of a card and drag to resize.</li>
                    <li>The card's size will adjust based on your dragging, with a minimum width of 200px and height of 100px.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2 mt-4">Connecting Cards</h2>
                <ul className="list-disc list-inside pl-4 text-gray-700">
                    <li>Click on one card to select it (the border will turn blue).</li>
                    <li>Click on another card to draw an arrow connecting the two.</li>
                    <li>Repeat to create more connections.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2 mt-4">Viewing Detailed Text</h2>
                <ul className="list-disc list-inside pl-4 text-gray-700">
                    <li>Each card shows a brief preview of the text.</li>
                    <li>Click "Show more" to open a popup displaying the full detailed text.</li>
                    <li>Close the popup by clicking the "Close" button.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2 mt-4">Removing a Card</h2>
                <ul className="list-disc list-inside pl-4 text-gray-700">
                    <li>Click the "X" button in the bottom-right corner of a card to delete it.</li>
                    <li>The card and any connections associated with it will be removed from the canvas.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2 mt-4">Removing Connections</h2>
                <ul className="list-disc list-inside pl-4 text-gray-700">
                    <li>Double-tap on an arrow to remove the connection between two cards.</li>
                    <li>The arrow will disappear from the canvas.</li>
                </ul>
            </div>
        </div>
    );
}

export default Help;