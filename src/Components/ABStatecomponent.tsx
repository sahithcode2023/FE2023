import { useState } from "react";
export default function ABStateComponent(){
    //var name="sahith";
    //name="reddy";
    //adding state
    const [name,setName]=useState('sahith ');
    //setName('sahith reddy ');
    //return(<div>ABStateComponent given name = {name}</div>)
    //react-dom.development.js:16317 Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop
    //endukante once setstate changes the state it again renders the function;
    ///////
    if(name==='sahith')setName('sahith reddy');
    //name ==='sahith' && setName('sahith reddy')
    return(<>
        <div>ABStateComponent given name = {name}</div></>)

    
}
//This JSX tag's 'children' prop expects a single child of type 'ReactNode', but multiple children were provided
//</div><div>{name==='sahith'&& setName('sahith reddy')}</div>