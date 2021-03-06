import React from "react";
import { Slide } from 'react-slideshow-image';

const Static = () => {

    const slideImages = [
        'https://picsum.photos/700/400?random=1',
        'https://picsum.photos/700/400?random=2',
        'https://picsum.photos/700/400?random=3'
    ];

    const properties = {
        arrows: true,
        autoplay: false,
        transitionDuration: 500
    }

    return (
        <div className="container static">
            <div className="gallery">
                <h2>Gallery</h2>
                <div className="slide-container">
                    <Slide {...properties}>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
            <div className="text">
                <h2>Heading 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ligula feugiat, pharetra mi ut, aliquet sem. Morbi pellentesque dapibus risus, a condimentum turpis lobortis at. Praesent vitae tempor libero. Nullam nisl sapien, lacinia ac orci sit amet, varius fringilla sapien. In mauris dolor, volutpat ut lorem nec, molestie finibus purus. Etiam ac quam porttitor, commodo risus vel, iaculis est. In tincidunt convallis orci vitae fermentum. Ut sed lectus ornare ipsum eleifend elementum in non ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur et risus euismod, posuere ante quis, ullamcorper tortor.</p>
            </div>
            <div className="text">
                <h2>Heading 2</h2>
                <p>Morbi pretium tristique dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vitae nibh ut erat hendrerit gravida eget nec magna. Morbi semper metus eget odio eleifend, ac bibendum felis lacinia. Donec convallis eros euismod, vestibulum metus et, bibendum mi. Duis auctor semper ex. Integer tempus eros at massa congue elementum. Suspendisse ornare, felis nec efficitur placerat, risus velit cursus nunc, in luctus purus dui eget neque. Proin dapibus, odio at venenatis interdum, orci lectus convallis lorem, sed accumsan nulla dui vitae odio.</p>
            </div>
        </div>
    )
}

export default Static;