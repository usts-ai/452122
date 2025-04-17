import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  color: string;
  percentChange?: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color, percentChange }) => {
  return (
    <motion.div 
      className={`bg-white rounded-xl shadow-md overflow-hidden ${color}`}
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">{title}</p>
            <h2 className="mt-1 text-2xl font-bold">{value}</h2>
            
            {percentChange !== undefined && (
              <div className={`mt-1 flex items-center text-sm ${percentChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                <svg 
                  className="w-3 h-3 mr-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d={percentChange >= 0 
                      ? "M5 10l7-7m0 0l7 7m-7-7v18" 
                      : "M19 14l-7 7m0 0l-7-7m7 7V3"
                    } 
                  />
                </svg>
                <span>{Math.abs(percentChange)}% depuis le mois dernier</span>
              </div>
            )}
          </div>
          
          <div className={`p-3 rounded-full ${color.replace('border-l-4', 'bg-opacity-10 bg')}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;
