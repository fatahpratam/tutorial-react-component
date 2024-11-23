import React from 'react';
import { rocksImg } from "../assets/index.js";

function Card({ username = 'Azura', post = 'Not assigned yet', imageUrl = rocksImg }) {
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src={imageUrl} alt="" width="384" height="512" />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, minima?</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {post}
            </div>
          </figcaption>
        </div>
      </figure>
      <h1 className="text-2xl bg-green-500 p-3 rounded">A card for photos</h1>
    </div>
  )
}

export default Card;