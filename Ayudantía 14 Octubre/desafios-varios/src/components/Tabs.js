import React, { useState } from 'react';

const Tabs = () => {

    const [tabs,setTabs] = useState([
        {
            title:"Tab 1",
            content:"Soy el primer tab",
            state:"active"
        },
        {
            title:"Tab 2",
            content:"Soy el segundo tab",
            state:""
        },
        {
            title:"Tab 3",
            content:"Soy el tercer tab",
            state:""
        }
    ]);

    /* const [contentElegido,setContentElegido] = useState(tabs.filter(item=>item.state==="active")[0].content); */

    const changeActive = (tabElegida,i) => {
        //setContentElegido(tabElegida.content);
        const newTabs = tabs.map((tab,index)=>{
            tab.title === tabElegida.title ? tab.state="active":tab.state="";
            return tab;
        })

        setTabs(newTabs);
    }



    return (
        <div className='tabcontainer'>

            <div className='titles'>

                {tabs.map((tab,i)=>{
                    return (<a href="#" key={i} className={tab.state} onClick={()=>changeActive(tab,i)} >{tab.title} </a>)
                })}

            </div>

            <div className='content'>
                <p>
                    {tabs.filter(item=>item.state==="active")[0].content}
                </p>

                {/* {tabs.filter(item=>item.state==="active").map((item,index)=><p key={index} >{item.content} </p>)} */}
                {/* {contentElegido} */}

            </div>


            
        </div>
    );
}

export default Tabs;
