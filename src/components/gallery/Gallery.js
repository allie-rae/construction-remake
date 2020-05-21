import React from 'react';
import './gallery.css';
import gallery_ramp_min from './gallery-ramp-min.jpg';
import gallery_fence_min from './gallery-fence-min.jpg';
import gallery_remodel_min from './gallery-remodel-min.jpg';
import gallery_siding_min from './gallery-siding-min.jpg';
import gallery_beam_min from './gallery-beam-min.jpg';
import gallery_bedframe_min from './gallery-bedframe-min.jpg';
import gallery_coffee_table_min from './gallery-coffee-table-min.jpg';
import gallery_window_min from './gallery-window-min.jpg';

const Gallery = (props) => {
    return (
        <>
        <h2 className="gallery-header" ref={props.galleryRef}>Gallery</h2>
<div className="gallery-container">
    <div className="responsive">
        <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={gallery_ramp_min}>
                <img src={gallery_ramp_min} alt="Ramp" width="600" height="400" />
            </a>
            <div className="desc">Custom handrails</div>
        </div>
    </div>
    <div className="responsive">
        <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={gallery_fence_min}>
                <img src={gallery_fence_min} alt="Fence" width="600" height="400" />
            </a>
            <div className="desc">Beautiful custom cedar fencing</div>
        </div>
    </div>
    <div className="responsive">
        <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={gallery_remodel_min}>
                <img src={gallery_remodel_min} alt="Ceiling remodel" width="600" height="400" />
            </a>
            <div className="desc">Complete remodels</div>
        </div>
    </div>
    <div className="responsive">
        <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={gallery_siding_min}>
                <img src={gallery_siding_min} alt="Siding" width="600" height="400" />
            </a>
            <div className="desc">Beautiful wooden siding</div>
        </div>
    </div>
    <div className="responsive">
        <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={gallery_beam_min}>
                <img src={gallery_beam_min} alt="Beam" width="600" height="400" />
            </a>
            <div className="desc">Boxed beams</div>
        </div>
    </div>
    <div className="responsive">
        <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={gallery_bedframe_min}>
                <img src={gallery_bedframe_min} alt="Custom bedframe" width="600" height="400" />
            </a>
            <div className="desc">Unique custom bedframe with multicolor LED lights</div>
        </div>
    </div>
    <div className="responsive">
        <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={gallery_coffee_table_min}>
                <img src={gallery_coffee_table_min} alt="Rustic coffee table" width="600" height="400" />
            </a>
            <div className="desc">Rustic coffee table made with reclaimed wood</div>
        </div>
    </div>
    <div className="responsive">
        <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href={gallery_window_min}>
                <img src={gallery_window_min} alt="Custom window" width="600" height="400" />
            </a>
            <div className="desc">Precise finish carpentry</div>
        </div>
    </div>
</div>
</>
    )
}

export default Gallery;