import React from 'react';

function Image( {title, src} ){
    return (<div>
      <img src={src} height={"75%"}/>
      <h4>{title}</h4>
    </div>)
  }

export default function WatchedTable({watchedHistory}) {
    console.log(watchedHistory);
    const watchedList = watchedHistory.map((list) => {
        <img src={list[1].thumb}/>
    });

    // Render the UI for your table
    return (
        <div className='img-container'>
            {watchedHistory.map((list) => (
                <Image title={list[1].title} src={list[1].thumb}></Image>
            ))}
        </div>
    )
};