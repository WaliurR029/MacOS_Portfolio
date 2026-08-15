import React from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const ImgFile = () => {
    const { windows } = useWindowStore();

    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>

            <div className="bg-white flex items-center justify-center h-full p-4">
                <img
                    src={imageUrl}
                    alt={name}
                    className="max-w-full max-h-full object-contain"
                />
            </div>
        </>
    );
};

const ImgFileWindow = WindowWrapper(ImgFile, "imgfile");

export default ImgFileWindow;