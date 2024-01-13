import React, { useState } from 'react'


export default function Textform(props) {

    const [text,setText]=useState("");

  const handleUpClick =()=>
  {
      let newText= text.toUpperCase();
      setText(newText);
      props.showAlert("Converted To UpperCase!","success");

  }

  const handleLowerCase =()=>
  {
      let newText= text.toLowerCase();
      setText(newText);
      props.showAlert("Converted To LowerCase!","success");

  }

  const handleCopyText =()=>
  {
      
      let text=document.getElementById("Textarea");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert(" Copied Text Successfully!","success");
  }

  const handleExtraSpaces =()=>
  {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed Extra Spaces Successfully!","success");
  }

  const handleClearText =()=>
  {
    let text=document.getElementById("Textarea");
    setText('');
    props.showAlert("Cleared Text Successfully!","success");

  }

const handleOnChange =(event)=>
{
     console.log("on change");
     setText(event.target.value);
}




  return (
    <div>
       <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >

       <h3 className='my-3'  >Enter Text here</h3>
               <textarea className="form-control" id="Textarea" style={{backgroundColor:props.mode==='dark'?'rgb(5 24 39)':'white', color:props.mode==='dark'?'white':'black'}}  value={text} onChange={handleOnChange} rows="8"></textarea>

            
               <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleUpClick} >Convert To UpperCase</button>
               <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleLowerCase} >Convert To LowerCase</button>
               <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleCopyText} >Copy Text</button>
               <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
               <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleClearText} >Clear Text</button>


            <div>        
               <h3>Your Text Summary</h3>
               <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Charecters </p>
               <p> {0.008*text.length} Minutes Read</p>
               <h3>Preview</h3>
               <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>                

       </div>

    </div>
  )
}
