import React from 'react';
import { motion } from 'framer-motion';
import { properties } from '../data/mockData';

const PropertyList: React.FC = () => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">Propriétés populaires</h3>
          <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors">
            Voir tout
          </button>
        </div>
        
        <div className="space-y-4">
          {properties.slice(0, 3).map((property) => (
            <motion.div 
              key={property.id}
              className="flex bg-blue-50 bg-opacity-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-24 h-24 flex-shrink-0">
                <img 
                  src={property.images[0]} 
                  alt={property.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-blue-600 text-white px-1.5 py-0.5 text-xs font-medium rounded-tl-md">
                  {property.price}€/nuit
                </div>
              </div>
              
              <div className="flex-1 p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-800">{property.name}</h4>
                    <p className="text-xs text-gray-500">{property.location}</p>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-700">{property.rating}</span>
                  </div>
                </div>
                
                <div className="mt-2 flex flex-wrap gap-1">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                    {property.bedrooms} chambres
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                    {property.bathrooms} sdb
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                    {property.capacity} pers.
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-4 p-3 border border-dashed border-blue-300 rounded-lg flex items-center justify-center text-blue-500 cursor-pointer"
          whileHover={{ scale: 1.01, borderColor: '#3b82f6' }}
          whileTap={{ scale: 0.99 }}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span className="font-medium">Ajouter une propriété</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PropertyList;
