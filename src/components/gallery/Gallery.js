import React from 'react';
import './gallery.css';
import gallery_ramp_min from './gallery-ramp-min.jpg';
import gallery_fence_min from './gallery-fence-min.jpg';
import gallery_remodel_min from './gallery-remodel-min.jpg';
import gallery_siding_min from './gallery-siding-min.jpg';
import gallery_custom_fence_min from './custom_fence-min.jpeg';
import gallery_custom_gate_min from './custom_gate-min.jpeg';
import gallery_door_installation_min from './door_installation-min.jpeg';
import gallery_raised_deck_min from './raised_deck-min.jpeg';

const Gallery = (props) => {
    const galleryImages = [[gallery_ramp_min, "Custom handrails"], [gallery_fence_min, "Beautiful custom cedar fencing"], [gallery_remodel_min, "Complete remodels"], [gallery_siding_min, "Beautiful wooden siding"], [gallery_custom_fence_min, "Custom fencing"], [gallery_custom_gate_min, "Custom gates"], [gallery_door_installation_min, "Door installation"], [gallery_raised_deck_min, "Restoration and raised decks"]]

    return (
        <>
        <h2 className="gallery-header" ref={props.galleryRef}>Gallery</h2>
        <div className="gallery-wrapper">
            {galleryImages.map(listImg => {
                return (<div className="individual-img-wrapper">
                <img src={listImg[0]} alt="Example of construction work" className="square-img" />
                <div className="gallery-txt">{listImg[1]}</div>
                </div>)
            })}
        </div>
        </>
    )
}

export default Gallery;