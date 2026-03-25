import React, { useState, useEffect, useRef } from 'react';
import { Camera, RefreshCw, Sparkles } from 'lucide-react';
import { Card } from './ui/Card';
import { cn } from '../lib/utils';

export function AuraScanner() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<{ name: string, color: string, meaning: string } | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const AURA_COLORS = [
    { name: 'Purple & Indigo', color: 'from-purple-500 to-indigo-500', meaning: 'Spiritual, intuitive, and deeply connected to higher wisdom.' },
    { name: 'Blue & Cyan', color: 'from-blue-500 to-cyan-500', meaning: 'Calm, communicative, and radiating peaceful energy.' },
    { name: 'Emerald & Teal', color: 'from-emerald-500 to-teal-500', meaning: 'Healing, balanced, and grounded in nature.' },
    { name: 'Yellow & Orange', color: 'from-yellow-400 to-orange-500', meaning: 'Joyful, creative, and full of vibrant life force.' },
    { name: 'Rose & Pink', color: 'from-rose-500 to-pink-500', meaning: 'Compassionate, loving, and emotionally open.' },
    { name: 'White & Silver', color: 'from-slate-300 to-white', meaning: 'Pure, transcendent, and experiencing a spiritual awakening.' }
  ];

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      streamRef.current = stream;
      setHasPermission(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
      setHasPermission(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const scanAura = () => {
    setIsScanning(true);
    setScanResult(null);
    
    setTimeout(() => {
      let r = 0, g = 0, b = 0;
      
      if (videoRef.current) {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = videoRef.current.videoWidth || 640;
          canvas.height = videoRef.current.videoHeight || 480;
          const ctx = canvas.getContext('2d');
          
          if (ctx && canvas.width > 0 && canvas.height > 0) {
            ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            
            let count = 0;
            // Sample pixels to get average color, skipping some for performance
            for (let i = 0; i < data.length; i += 16) {
              r += data[i];
              g += data[i+1];
              b += data[i+2];
              count++;
            }
            
            if (count > 0) {
              r = Math.floor(r / count);
              g = Math.floor(g / count);
              b = Math.floor(b / count);
            }
          }
        } catch (e) {
          console.error("Error processing video frame", e);
        }
      }

      // Fallback if video processing fails or is completely black
      if (r === 0 && g === 0 && b === 0) {
        const timeSeed = new Date().getTime();
        r = (timeSeed % 255);
        g = ((timeSeed / 2) % 255);
        b = ((timeSeed / 3) % 255);
      }

      // Boost saturation to ensure we don't just get white/grey all the time
      const max = Math.max(r, g, b);
      if (max > 0) {
        const multiplier = 255 / max;
        r = Math.min(255, Math.floor(r * multiplier * 0.8));
        g = Math.min(255, Math.floor(g * multiplier * 0.8));
        b = Math.min(255, Math.floor(b * multiplier * 0.8));
      }

      const targetColors = [
        { name: 'Purple & Indigo', r: 147, g: 51, b: 234, color: 'from-purple-500 to-indigo-500', meaning: 'Spiritual, intuitive, and deeply connected to higher wisdom.' },
        { name: 'Blue & Cyan', r: 59, g: 130, b: 246, color: 'from-blue-500 to-cyan-500', meaning: 'Calm, communicative, and radiating peaceful energy.' },
        { name: 'Emerald & Teal', r: 16, g: 185, b: 129, color: 'from-emerald-500 to-teal-500', meaning: 'Healing, balanced, and grounded in nature.' },
        { name: 'Yellow & Orange', r: 234, g: 179, b: 8, color: 'from-yellow-400 to-orange-500', meaning: 'Joyful, creative, and full of vibrant life force.' },
        { name: 'Rose & Pink', r: 244, g: 63, b: 94, color: 'from-rose-500 to-pink-500', meaning: 'Compassionate, loving, and emotionally open.' },
        { name: 'White & Silver', r: 255, g: 255, b: 255, color: 'from-slate-300 to-white', meaning: 'Pure, transcendent, and experiencing a spiritual awakening.' }
      ];

      let closestAura = targetColors[0];
      let minDistance = Infinity;

      for (const aura of targetColors) {
        // Simple Euclidean distance in RGB space
        const distance = Math.sqrt(
          Math.pow(r - aura.r, 2) + 
          Math.pow(g - aura.g, 2) + 
          Math.pow(b - aura.b, 2)
        );
        if (distance < minDistance) {
          minDistance = distance;
          closestAura = aura;
        }
      }

      setIsScanning(false);
      setScanResult({
        name: closestAura.name,
        color: closestAura.color,
        meaning: closestAura.meaning
      });
    }, 3000);
  };

  return (
    <Card className="flex flex-col items-center justify-center p-6 md:p-8 border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-black relative overflow-hidden w-full max-w-2xl mx-auto">
      <div className="absolute top-4 left-4 flex items-center gap-2 text-purple-400">
        <Sparkles size={20} />
        <span className="font-bold text-sm tracking-widest uppercase">Aura Scanner</span>
      </div>

      <h2 className="text-2xl font-black text-white mt-8 mb-2 text-center">Discover Your Energy</h2>
      <p className="text-slate-400 text-center mb-8 max-w-md">
        Allow camera access to read your current bio-energetic field and reveal your dominant aura color.
      </p>

      {hasPermission === false && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl text-center mb-6">
          Camera access was denied. Please enable camera permissions in your browser to use the Aura Scanner.
        </div>
      )}

      <div className="relative w-full aspect-[3/4] md:aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 mb-8 shadow-2xl">
        {!hasPermission ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/50">
            <Camera size={48} className="text-slate-500 mb-4" />
            <button 
              onClick={startCamera}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-colors"
            >
              Enable Camera
            </button>
          </div>
        ) : (
          <>
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              muted 
              className={cn(
                "absolute inset-0 w-full h-full object-cover transform -scale-x-100 transition-all duration-1000",
                isScanning ? "saturate-[2] contrast-125 hue-rotate-15 scale-105 blur-[2px]" : "saturate-100 contrast-100 scale-100 blur-0"
              )}
            />
            
            {/* Scanning Overlay */}
            {isScanning && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-fuchsia-500/20 mix-blend-overlay animate-pulse" />
                
                {/* Scanning line */}
                <div 
                  className="absolute left-0 right-0 h-48 bg-gradient-to-b from-transparent via-fuchsia-500/30 to-transparent w-full"
                  style={{ animation: 'scan-vertical 2s linear infinite' }} 
                />
                <style>{`
                  @keyframes scan-vertical {
                    0% { top: -30%; }
                    100% { top: 130%; }
                  }
                `}</style>

                <div className="relative z-20 flex flex-col items-center bg-black/60 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(217,70,239,0.3)]">
                  <RefreshCw size={40} className="text-fuchsia-400 animate-spin mb-4" />
                  <p className="text-white font-bold tracking-widest uppercase animate-pulse">Analyzing Field...</p>
                </div>
              </div>
            )}

            {/* Result Overlay */}
            {scanResult && !isScanning && (
              <div className={cn(
                "absolute inset-0 mix-blend-screen opacity-60 bg-gradient-to-t transition-all duration-1000",
                scanResult.color
              )} />
            )}
          </>
        )}
      </div>

      {scanResult && !isScanning && (
        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col items-center">
          <h3 className="text-xl font-black text-white mb-2 uppercase tracking-widest">Your Aura is {scanResult.name}</h3>
          <div className={cn("w-24 h-2 rounded-full mb-4 bg-gradient-to-r", scanResult.color)} />
          <p className="text-purple-200 font-medium max-w-md">{scanResult.meaning}</p>
        </div>
      )}

      {hasPermission && (
        <button 
          onClick={scanAura}
          disabled={isScanning}
          className="mt-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black uppercase tracking-widest rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(168,85,247,0.4)]"
        >
          {isScanning ? 'Scanning...' : scanResult ? 'Scan Again' : 'Initiate Scan'}
        </button>
      )}
    </Card>
  );
}
