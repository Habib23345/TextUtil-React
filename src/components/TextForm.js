import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
let newText=text.toUpperCase();
setText(newText);

    }
        const handleLowClick = ()=>{
let newText=text.toLowerCase();
setText(newText);

    }
            const handleClearClick = ()=>{
let newText=('');
setText(newText);

    }
        const handleOnchange = (event)=>{
setText(event.target.value);

    }
    const [text,setText] =useState('');
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Text Clear</button>
    </div>

<div className="container my-3">
<h2>your text summmary</h2>
<p>{text.split(" ").length} Words and {text.length} Characters</p>
<p> {0.008 * text.split(" ").length} Minutes Read</p>
<h2>Preview</h2>
<p>{text}</p>
</div>
    </>
  )
}
