import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { bookingStats } from '../data/mockData';

const RevenueChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    // Configuration du canvas pour le retina display
    const dpr = window.devicePixelRatio || 1;
    const rect = canvasRef.current.getBoundingClientRect();
    canvasRef.current.width = rect.width * dpr;
    canvasRef.current.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    // Dimensions
    const width = rect.width;
    const height = rect.height;
    const padding = 40;
    
    // Données
    const data = bookingStats.revenueByMonth;
    const maxRevenue = Math.max(...data.map(d => d.revenue));
    const minRevenue = Math.min(...data.map(d => d.revenue));
    
    // Dessiner la grille et les axes
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    
    // Lignes horizontales
    const numYLines = 5;
    for (let i = 0; i <= numYLines; i++) {
      const y = padding + (height - 2 * padding) * (1 - i / numYLines);
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
      
      // Labels de l'axe Y
      ctx.fillStyle = '#6b7280';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'right';
      const value = minRevenue + (maxRevenue - minRevenue) * (i / numYLines);
      ctx.fillText(`${Math.round(value / 1000)}k €`, padding - 10, y + 4);
    }
    
    // Points et lignes pour les données
    const barWidth = (width - 2 * padding) / data.length;
    
    // Dessiner le gradient pour l'aire sous la courbe
    const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.5)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)');
    
    // Points pour le chemin de l'aire
    const points = data.map((d, i) => ({
      x: padding + i * barWidth + barWidth / 2,
      y: height - padding - ((d.revenue - minRevenue) / (maxRevenue - minRevenue)) * (height - 2 * padding)
    }));
    
    // Dessiner l'aire sous la courbe
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(points[0].x, height - padding);
    points.forEach(point => {
      ctx.lineTo(point.x, point.y);
    });
    ctx.lineTo(points[points.length - 1].x, height - padding);
    ctx.closePath();
    ctx.fill();
    
    // Dessiner la ligne de courbe
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
    
    // Dessiner les points
    points.forEach((point, i) => {
      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Labels de l'axe X
      ctx.fillStyle = '#6b7280';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(data[i].month, point.x, height - padding + 20);
    });
    
  }, []);
  
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">Revenus mensuels</h3>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full">Année</button>
            <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-full">Mois</button>
            <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-full">Semaine</button>
          </div>
        </div>
        <div className="relative h-72">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>
      </div>
    </motion.div>
  );
};

export default RevenueChart;
