import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TemplateOne from '../../components/blog/template-one';
import { createBlog } from '../../services/blog';

const BlogEditor = () => {
    const [template, setTemplate] = useState("template1");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [textSections, setTextSections] = useState(["", "", "", "", ""]);
    const [subtitlesSections, setSubtitleSections] = useState(["", "", "", "", ""]);
    const [imageLinks, setImageLinks] = useState(["", "", "", ""]);
    const [isPreview, setIsPreview] = useState(false);
    const navigate = useNavigate();

    const blogData = () => {
        return {
            template,
            title,
            subtitle,
            textSections,
            subtitlesSections,
            imageLinks
        };
    };

    // Handle save blog function
    const saveBlog = async () => {
        const blogData = {
            template,
            title,
            subtitle,
            textSections,
            subtitlesSections,
            imageLinks
        };

        try {
            await createBlog(blogData).then(
                (response) => {
                    navigate(`/blog-list`);
                }
            )
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="flex gap-4">
            <div className="p-4 max-w-lg bg-white shadow-md rounded w-1/3">
                <h2 className="text-2xl font-bold mb-4">Create Blog</h2>

                {/* Template Selection */}
                {/* <div className="mb-4">
                    <label className="font-semibold">Select Template:</label>
                    <select
                        className="w-full p-2 border rounded"
                        value={template}
                        onChange={(e) => setTemplate(e.target.value)}
                    >
                        <option value="template1">Template 1</option>
                        <option value="template2">Template 2</option>
                    </select>
                </div> */}

                {/* Title */}
                <div className="mb-4">
                    <label className="font-semibold">Title</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Subtitle */}
                <div className="mb-4">
                    <label className="font-semibold">Subtitle</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                    />
                </div>

                {/* Text and Subtitle Sections */}
                {[0, 1, 2, 3, 4].map((index) => (
                    <div key={index} className="mb-6">
                        <label className="font-semibold">Subtitle Section {index + 1}</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded mb-2"
                            value={subtitlesSections[index]}
                            onChange={(e) => {
                                const newSubtitleSections = [...subtitlesSections];
                                newSubtitleSections[index] = e.target.value;
                                setSubtitleSections(newSubtitleSections);
                            }}
                        />
                        <label className="font-semibold">Text Section {index + 1}</label>
                        <textarea
                            className="w-full p-2 border rounded"
                            rows="3"
                            value={textSections[index]}
                            onChange={(e) => {
                                const newTextSections = [...textSections];
                                newTextSections[index] = e.target.value;
                                setTextSections(newTextSections);
                            }}
                        />
                    </div>
                ))}

                {/* Image Links */}
                {[0, 1, 2, 3].map((index) => (
                    <div key={index} className="mb-4">
                        <label className="font-semibold">Image Link {index + 1}</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={imageLinks[index]}
                            onChange={(e) => {
                                const newImageLinks = [...imageLinks];
                                newImageLinks[index] = e.target.value;
                                setImageLinks(newImageLinks);
                            }}
                        />
                    </div>
                ))}

                {/* Preview and Save Buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={saveBlog}
                        className="w-full p-2 bg-blue-500 text-white font-semibold rounded"
                    >
                        Save Blog
                    </button>
                </div>
            </div>

            {/* Preview Section */}
            <div className="mt-8 p-4 border-t w-2/3">
                <TemplateOne config={blogData()} />
            </div>
        </div>
    );
};

export default BlogEditor;
