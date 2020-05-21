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
    const galleryImages = [[gallery_ramp_min, "Custom handrails"], [gallery_fence_min, "Beautiful custom cedar fencing"], [gallery_remodel_min, "Complete remodels"], [gallery_siding_min, "Beautiful wooden siding"], [gallery_beam_min, "Boxed beams"], [gallery_bedframe_min, "Unique custom bedframe with multicolor LED lights"], [gallery_coffee_table_min, "Rustic coffee table made with reclaimed wood"], [gallery_window_min, "Precise finish carpentry"]]

    return (
        <>
        <h2 className="gallery-header" ref={props.galleryRef}>Gallery</h2>
        <div className="gallery-wrapper">
            {galleryImages.map(listImg => {
                return (<div className="individual-img-wrapper">
                <img src={listImg[0]} alt="Example of construction work" className="square" />
                <div className="gallery-txt">{listImg[1]}</div>
                </div>)
            })}
        </div>
        </>
    )
}

export default Gallery;