import React, { useState, useEffect, useRef } from 'react';
import LabelTag from '../base/label-tag';
import { useTranslation } from 'react-i18next';

const TagList = ({ options }) => {
    const containerRef = useRef(null);
    const { t } = useTranslation('global');

    const [visibleTags, setVisibleTags] = useState([]);
    const [hiddenCount, setHiddenCount] = useState(0);

    useEffect(() => {
        const calculateVisibleTags = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                let totalWidth = 0;
                let visible = [];
                let hidden = 0;

                // Create a temporary div to measure each tag's width
                const tempDiv = document.createElement("div");
                tempDiv.style.position = "absolute";
                tempDiv.style.visibility = "hidden";
                tempDiv.style.whiteSpace = "nowrap";
                document.body.appendChild(tempDiv);

                for (let label of options) {
                    tempDiv.textContent = label;
                    const tagWidth = tempDiv.offsetWidth + 16; // Approximate padding

                    if (totalWidth + tagWidth <= containerWidth) {
                        totalWidth += tagWidth;
                        visible.push(label);
                    } else {
                        hidden += 1;
                    }
                }

                document.body.removeChild(tempDiv);
                setVisibleTags(visible);
                setHiddenCount(hidden);
            }
        };

        calculateVisibleTags();
        window.addEventListener("resize", calculateVisibleTags);
        return () => window.removeEventListener("resize", calculateVisibleTags);
    }, [options]);

    return (
        <div ref={containerRef} className="flex gap-1 p-2 w-52 items-center">
            {visibleTags.map((label, index) => (
                <LabelTag key={index} label={t(label)} />
            ))}
            {hiddenCount > 0 && (
                <span className="text-neutral text-xxs">+{hiddenCount}</span>
            )}
        </div>
    );
};

export default TagList;
