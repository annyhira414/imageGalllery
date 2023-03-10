import React from "react";

export default function ImageCard({ image }) {
  const tags = image.tags.split(",");
  return (
    <div>
      Gallary
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image.webformatURL} alt="" className="w-full" />
        <div className="px-6 py-4 ">
          <div
            className="font-bold
         text-purple-500 text-xl mb-2"
          >
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Download: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>

        {/* <div className="px-6 py-4 ">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2">#tag1</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2">#tag1</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2">#tag1</span>
        </div> */}
        <div className="px-6 py-4 ">
          {tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
