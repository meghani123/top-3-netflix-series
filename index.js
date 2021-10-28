import react from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';
import Sdata from './Sdata';

ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 3 Netflix Series in 2020</h1>
    <Card imgsrc={Sdata[0].imgscr}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].link} />

    <Card imgsrc={Sdata[1].imgscr}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link} />

    <Card imgsrc={Sdata[2].imgscr}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      link={Sdata[2].link} />



    {/* <Card imgsrc="https://www.hitc.com/static/uploads/hitcn/1816/extracurricular_netflix_780_1544944.jpg" title="A Netflix Original Series" sname="Extra curricular"
        link="https://www.netflix.com/in/title/80990668?source=35" />
      <Card imgsrc="https://wallpapercave.com/wp/wp1917154.jpg" title="A Netflix Original Series" sname="Stranger Things"
        link="https://www.netflix.com/in/title/80990668?source=35" />
       */}







  </>,


  document.getElementById('root')
);

