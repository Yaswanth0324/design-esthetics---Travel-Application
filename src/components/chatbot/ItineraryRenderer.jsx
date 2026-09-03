import React from 'react';
import {
  Calendar, MapPin, Utensils, DollarSign,
  Clock, Lightbulb, CheckCircle, Sun
} from 'lucide-react';
import './ItineraryRenderer.css';

const activityIcons = {
  sightseeing: '👁️',
  food: '🍽️',
  transport: '🚗',
  accommodation: '🏨',
  activity: '🎯',
  shopping: '🛍️',
};

const activityColors = {
  sightseeing: '#00d4aa',
  food: '#f59e0b',
  transport: '#8b5cf6',
  accommodation: '#3b82f6',
  activity: '#f97316',
  shopping: '#ec4899',
};

export default function ItineraryRenderer({ itinerary }) {
  if (!itinerary) return null;

  return (
    <div className="itinerary" role="region" aria-label="Generated itinerary">
      {/* Header */}
      <div className="itinerary__header">
        <div className="itinerary__badge">
          <Calendar size={14} />
          {itinerary.duration}-Day Itinerary
        </div>
        <h2 className="itinerary__title">{itinerary.title}</h2>
        <p className="itinerary__summary">{itinerary.summary}</p>

        <div className="itinerary__meta">
          <div className="itinerary__meta-item">
            <DollarSign size={14} />
            <span>{itinerary.totalBudget}</span>
          </div>
          <div className="itinerary__meta-item">
            <Sun size={14} />
            <span>{itinerary.bestTimeToVisit}</span>
          </div>
        </div>
      </div>

      {/* Days */}
      <div className="itinerary__days">
        {itinerary.days.map((day) => (
          <div key={day.day} className="itinerary__day">
            {/* Day header */}
            <div className="itinerary__day-header">
              <div className="itinerary__day-number">
                <span>Day</span>
                <strong>{day.day}</strong>
              </div>
              <div>
                <h3 className="itinerary__day-title">{day.title}</h3>
                {day.theme && <p className="itinerary__day-theme">{day.theme}</p>}
              </div>
            </div>

            {/* Activities timeline */}
            <div className="itinerary__timeline">
              {day.activities.map((activity, i) => (
                <div key={i} className="itinerary__activity">
                  <div className="itinerary__activity-time">{activity.time}</div>
                  <div
                    className="itinerary__activity-dot"
                    style={{ background: activityColors[activity.type] || '#00d4aa' }}
                  />
                  <div className="itinerary__activity-body">
                    <div className="itinerary__activity-header">
                      <span className="itinerary__activity-icon">
                        {activityIcons[activity.type] || '📍'}
                      </span>
                      <h4 className="itinerary__activity-name">{activity.name}</h4>
                      {activity.duration && (
                        <span className="itinerary__activity-duration">
                          <Clock size={11} /> {activity.duration}
                        </span>
                      )}
                    </div>
                    <p className="itinerary__activity-desc">{activity.description}</p>
                    {activity.tips && (
                      <div className="itinerary__activity-tip">
                        <Lightbulb size={12} />
                        <span>{activity.tips}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Meals */}
            {day.meals && (
              <div className="itinerary__meals">
                <div className="itinerary__meals-title">
                  <Utensils size={13} /> Today's Dining
                </div>
                <div className="itinerary__meals-grid">
                  {['breakfast', 'lunch', 'dinner'].map(meal => (
                    day.meals[meal] && (
                      <div key={meal} className="itinerary__meal">
                        <span className="itinerary__meal-type">{meal}</span>
                        <span className="itinerary__meal-name">{day.meals[meal]}</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Cost + Accommodation */}
            <div className="itinerary__day-footer">
              {day.accommodation && (
                <div className="itinerary__accommodation">
                  🏨 {day.accommodation}
                </div>
              )}
              {day.estimatedCost && (
                <div className="itinerary__day-cost">
                  <DollarSign size={12} /> Est. {day.estimatedCost}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      {itinerary.tips?.length > 0 && (
        <div className="itinerary__tips">
          <h3 className="itinerary__tips-title">
            <Lightbulb size={16} style={{ color: 'var(--accent-gold)' }} />
            Travel Tips
          </h3>
          <ul className="itinerary__tips-list">
            {itinerary.tips.map((tip, i) => (
              <li key={i} className="itinerary__tip">
                <CheckCircle size={14} style={{ color: 'var(--accent-teal)', flexShrink: 0, marginTop: '2px' }} />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
