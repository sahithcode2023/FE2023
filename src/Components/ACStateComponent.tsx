import {useState} from 'react';
export default function ACStateComponent(){
    const [name,setName]=useState('sahith ');
    console.log(name)
    if(false){
        setName('reddy')
    }
    function ChangeName(){
        setName('reddy')
    }
    return(<h1>{name}<button onClick={()=>ChangeName()}>Clivkme</button></h1>)
}