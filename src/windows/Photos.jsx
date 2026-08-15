import React, { useState } from "react";
import { Mail, Search } from "lucide-react";
import clsx from "clsx";

import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import { gallery, photosLinks } from "#constants";
import useWindowStore from "#store/window.js";

const Photos = () => {
    const { openWindow } = useWindowStore();

    // Library is selected by default
    const [activeSection, setActiveSection] = useState(
        photosLinks[0]?.id
    );

    const activeLink = photosLinks.find(
        (item) => item.id === activeSection
    );

    // Library shows all photos.
    // Other sections show only photos assigned to that section.
    const filteredGallery =
        activeLink?.title === "Library"
            ? gallery
            : gallery.filter(
                (photo) =>
                    photo.section?.toLowerCase() ===
                    activeLink?.title.toLowerCase()
            );

    return (
        <>
            {/* Window Header */}
            <div id="window-header">
                <WindowControls target="photos" />

                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon" />
                    <Search className="icon" />
                </div>
            </div>

            {/* Photos */}
            <div className="flex w-full h-full">

                {/* Sidebar */}
                <div className="sidebar">

                    <h2>Photos</h2>

                    <ul>
                        {photosLinks.map(({ id, icon, title }) => (
                            <li
                                key={id}
                                onClick={() => setActiveSection(id)}
                                className={clsx(
                                    id === activeSection
                                        ? "active"
                                        : "not-active"
                                )}
                            >
                                <img
                                    src={icon}
                                    alt={title}
                                />

                                <p>{title}</p>
                            </li>
                        ))}
                    </ul>

                </div>

                {/* Gallery */}
                <div className="gallery">

                    <h2>{activeLink?.title}</h2>

                    {filteredGallery.length > 0 ? (
                        <ul>
                            {filteredGallery.map(({ id, img }) => (
                                <li
                                    key={id}
                                    onClick={() =>
                                        openWindow("imgfile", {
                                            id,
                                            name: "Gallery image",
                                            imageUrl: img,
                                        })
                                    }
                                >
                                    <img
                                        src={img}
                                        alt={`Gallery image ${id}`}
                                    />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="empty-gallery">
                            <p>
                                No photos in {activeLink?.title} yet.
                            </p>
                        </div>
                    )}

                </div>

            </div>
        </>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;