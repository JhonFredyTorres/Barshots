import React from 'react';
import instagramPosts from '../mock/instagramPosts';

const InstagramGallery = () => {
  return (
    <section className="py-16 bg-gray-900 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bebas text-red-500 mb-12 text-center">
          GALERÍA INSTAGRAM
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {instagramPosts.map((post) => (
            <div key={post.id} className="relative group overflow-hidden">
              <div className="h-40 bg-gray-800 flex items-center justify-center">
                <span className="text-gray-500">Imagen: {post.image}</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;