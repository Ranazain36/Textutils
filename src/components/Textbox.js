import  React, {useState} from 'react'

export default function Textbox(props) {

    const HandleUpclick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase", "success");
    }
    const HandleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    
     
    }
    const HandleLowclick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase", "success");
    }
    const HandleCopyText = () => {
        console.log("Copy was clicked" + text);
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard", "success"); 
    }
    const HandleClearClick = () => {
        console.log("Clear was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }
  
    const HandleExtraSpaces = () => {
        console.log("Extra Spaces was clicked" + text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
  const [text, setText] = useState('Enter text here2');

//   text = "new text";wrong way to change the state
//   setText("new text");correct way to change the state

  return (
  <>
  <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
    <h1>{props.heading}</h1>
<div className="mb-3" >

  <textarea className="form-control"  style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={HandleOnChange} rows="8"></textarea>
</div>
<div>
    <button className="btn btn-primary mx-2" onClick={HandleUpclick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={HandleLowclick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={HandleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={HandleCopyText}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text : "Enter some text to preview it here."}</p>
    
  </div>

  </div>
  </>
  )
}
