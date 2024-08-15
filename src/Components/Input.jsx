import { useCanvasContext } from "../CanvasContext";
import { useRef } from "react";

const Input = () => {
  let { setInput, cards, setCards } = useCanvasContext();
  let text = useRef();
  let desc = useRef();

  const addCard = () => {
    // Check if inputs are not empty
    if (text.current.value.trim() === "" || desc.current.value.trim() === "") {
      alert("Please fill in both the title and description.");
      return;
    }

    // Calculate random x and y positions within the canvas bounds
    const canvasWidth = 720; 
    const canvasHeight = 720; 
    const x = Math.floor(Math.random() * (canvasWidth - 200)); 
    const y = Math.floor(Math.random() * (canvasHeight - 100)); 
    
    // Create a new card object
    const newCard = {
      id: `card-${cards.length}`,
      text: text.current.value,
      detailedText: desc.current.value,
      x: x,
      y: y,
      width: 200,
      height: 100,
    };
    
    // Update the cards state with the new card
    setCards([...cards, newCard]);

    // Clear the input fields
    text.current.value = "";
    desc.current.value = "";

    // Close the input modal
    setInput(false);
  };

  return (
    <div className="flex flex-col gap-4 p-4 backdrop-blur-xl w-96 border md:w-[700px] rounded-md">
      <input
        type="text"
        placeholder="Title"
        style={{
          border: 'solid blue',
          borderWidth: '0px 0px 0px 4px'
        }}
        className="p-2"
        ref={text}
      />
      <textarea
        placeholder="Description"
        style={{
          border: 'solid blue',
          borderWidth: '0px 0px 0px 4px'
        }}
        className="p-2"
        ref={desc}
      />
      <div className="flex gap-6 justify-center">
        <button className="border p-2 rounded-md" onClick={addCard}>SUBMIT</button>
        <button className="border p-2 rounded-md" onClick={() => { setInput(false) }}>CANCEL</button>
      </div>
    </div>
  );
};

export default Input;
