// src/components/AnimatedImageGrid.tsx
import './AnimatedImageGrid.css'

export default function AnimatedImageGrid() {
  return (
    <div className="animated-container">
      <div className="column column-1">
        <div className="item item-1" />
        <div className="item item-2" />
        <div className="item item-3" />
      </div>
      <div className="column column-2">
        <div className="item item-1" />
        <div className="item item-2" />
        <div className="item item-3" />
      </div>
      <div className="column column-3">
        <div className="item item-1" />
        <div className="item item-2" />
        <div className="item item-3" />
      </div>
    </div>
  )
}
