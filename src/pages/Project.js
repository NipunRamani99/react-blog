import React from 'react';

function Project() {
    return (
        <div className='parent container mx-auto' style={{width:"800px"}}>
            <div className="child">
                <h1>Projects</h1>
            </div>
            <hr class="hr" />
            <div className='child d-inline-flex flex-column mb-3'>
                <div className="p-2">
                <a href="https://github.com/NipunRamani99/mach">
                <h4>Mach</h4>
                </a>
                </div>
                <div className="d-flex flex-row">
                <div class="p-2"> Lorem Ipsum Blah Blah </div>
                <div class="p-2">
                <img src="/img/mach/bridge_train.gif" className='mr-3' style={{width:"200px", height:"200px"}} type="image/gif"/>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Project;