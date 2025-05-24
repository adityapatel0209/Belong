import React from 'react';
import resourceData from '../data/govresource.json';

const ResourceCard = ({ resource }) => {
    return (
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/30 transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{resource.title}</h3>
                <div className="space-y-4">
                    {resource.content.map((item, index) => (
                        <div key={index} className="text-gray-600">
                            <p className="leading-relaxed">{item.paragraph}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const ResourceGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceData.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
            ))}
        </div>
    );
};

export default ResourceGrid; 