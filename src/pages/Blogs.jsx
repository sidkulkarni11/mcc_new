import React from "react";
import { Link } from "react-router-dom";
import blogs from "../data/blogData.js";

export default function Blogs() {
    return (
        <div className="px-6 md:px-12 lg:px-20 py-16 bg-[#F8FAFF] min-h-screen">

            <h1 className="text-center text-4xl md:text-5xl font-extrabold text-[#0D2440]">
                Mindopiia Blogs
            </h1>

            <p className="text-center mt-4 text-gray-600 text-lg">
                Evidence-based mental health techniques for everyday use.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">

                {blogs.map((blog) => (
                    <Link
                        key={blog.slug}
                        to={`/blogs/${blog.slug}`}
                        className="bg-white rounded-3xl shadow-xl p-6 border hover:-translate-y-2 hover:shadow-2xl transition-all"
                    >
                        <div className="w-full h-64 bg-[#F3F6FC] rounded-xl overflow-hidden flex items-center justify-center">
                            <img src={blog.img} className="max-h-full max-w-full" />
                        </div>

                        <h2 className="mt-5 font-bold text-xl text-[#0D3B66]">
                            {blog.title}
                        </h2>

                        <p className="text-gray-600 text-sm mt-2">
                            {blog.desc}
                        </p>
                    </Link>
                ))}

            </div>
        </div>
    );
}
