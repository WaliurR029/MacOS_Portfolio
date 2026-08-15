import React from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const TxtFile = () => {
    const { windows } = useWindowStore();

    const data = windows.txtfile?.data;

    if (!data) return null;

    const {
        name,
        image,
        subtitle,
        description = [],
    } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <article className="text-file p-6 overflow-y-auto">
                <h1 className="text-2xl font-semibold mb-3">
                    {name}
                </h1>

                {subtitle && (
                    <h2 className="text-base text-gray-500 mb-6">
                        {subtitle}
                    </h2>
                )}

                {image && (
                    <img
                        src={image}
                        alt={name}
                        className="w-full max-h-80 object-cover rounded-xl mb-6"
                    />
                )}

                <div className="space-y-6 leading-7 text-base">
                    {description.map((paragraph, index) => (
                        <p key={index}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </article>
        </>
    );
};

const TxtFileWindow = WindowWrapper(TxtFile, "txtfile");

export default TxtFileWindow;