import React from 'react';

const Boxes = ({boxes}) => {


    return (
        <div className='boxes'>

        {boxes.map((box,index)=><div className='box' key={index} style={{backgroundColor:box.color,width:parseInt(box.width),height:parseInt(box.height)}} > {box.color} </div> )}
            
        </div>
    );
}

export default Boxes;
