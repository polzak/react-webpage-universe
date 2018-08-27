import React from 'react';
import earth from './../images/earth.jpg';

const ImageBox = () => {
    return <div className="img-fit">
        <h3>We can see ourselves.</h3>
        <h4>From our universe.</h4>
    </div>
}

const StoryBoxSun = () => {
    return <div className="sun">
        <h2>The Sun</h2>
        <p>Here comes the Sun.</p>
    </div>
}

const StoryBoxMoon = () => {
    return <div className="moon">
        <h2>The Moon</h2>
        <p>Here comes the Moon.</p>
    </div>
}

const StoryBoxEarth = () => {
    return <div className="earth">
        <h2>The Earth</h2>
        <p>Here comes the Earth.</p>
    </div>
}


const Main = () => {
    return <div>
        <ImageBox />
        <StoryBoxSun />
        <StoryBoxMoon />
        <StoryBoxEarth />
    </div>;
  }

export default Main;