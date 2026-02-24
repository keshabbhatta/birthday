import React from "react";
import { Sparkles, Cake } from "lucide-react";
import "./BirthdayCake.css"; // animation CSS

export default function BirthdayCake() {
  return (
    <div className="cake-container">
      {/* Animated flames */}
      <div className="candles">
        <Sparkles className="flame" size={60} color="gold" strokeWidth={2} />
        <Sparkles className="flame" size={70} color="orange" strokeWidth={2} />
        <Sparkles className="flame" size={65} color="red" strokeWidth={2} />
        <Sparkles className="flame" size={75} color="yellow" strokeWidth={2} />
      </div>

      {/* Cake */}
      <Cake size={150} color="#FF69B4" strokeWidth={3} />
    </div>
  );
}