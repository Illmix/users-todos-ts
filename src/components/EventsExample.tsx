import React, {FC, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log();
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {

    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    return (
        <div>
            <input value={value} type="text" placeholder="changeable" onChange={changeHandler}/>
            <button onClick={clickHandler}>Click!</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: "red"}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: isDrag ? "blue" : "red", marginTop: 20}}>

            </div>
        </div>
    );
};

export default EventsExample;