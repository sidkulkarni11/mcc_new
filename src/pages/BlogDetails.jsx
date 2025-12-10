import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogData";

export default function BlogDetails() {
    const { slug } = useParams();
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return (
            <div className="px-6 py-40 text-center text-xl text-gray-600">
                Blog not found.
            </div>
        );
    }

    return (
        <div className="bg-[#F7FAFF] min-h-screen pb-20">

            {/* BACK BUTTON */}
            <div className="px-6 md:px-24 pt-10">
                <Link
                    to="/blogs"
                    className="text-[#0D3B66] text-lg hover:underline"
                >
                    ← Back to Blogs
                </Link>
            </div>

            {/* BLOG IMAGE */}
            <div className="mt-6 flex justify-center">
                <img
                    src={blog.img}
                    alt={blog.title}
                    className="rounded-3xl shadow-lg w-full max-w-5xl object-cover"
                />
            </div>

            {/* BLOG CONTENT */}
            <div className="mt-10 mx-auto bg-white rounded-3xl shadow-md p-8 md:p-12 max-w-4xl border">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#0D3B66] leading-snug">
                    {blog.title}
                </h1>

                {/* DESCRIPTION */}
                <p className="mt-4 text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                    {blog.desc}
                </p>

                {/* FULL CONTENT */}
                <div className="mt-8 text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                    {blog.content}
                </div>
            </div>
        </div>
    );
}
