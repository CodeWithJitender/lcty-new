import React, { useState } from 'react';
import { ChevronDown, Globe, BookOpen, Users } from 'lucide-react';

const Timeline = () => {
  const [activeStyle, setActiveStyle] = useState('thin');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const timelineData = [
    {
      id: 1,
      year: '1',
      title: 'Registration',
      content: `Please register using our safe online portal to start your adventure
          with us. This will enable us to collect all the data we need to give
          your child the best care possible. Remember to upload all necessary
          information when registering.`,
      icon: Globe,
      color: 'blue'
    },
    {
      id: 2,
      year: '2',
      title: 'Insurance & Billing',
      content: `Uploading your insurance and referral documents using the same site is the next step after creating your account. This guarantees that we can proceed without hiccups and verify your service coverage.`,
      icon: BookOpen,
      color: 'orange'
    },
    {
      id: 3,
      year: '2020',
      title: 'Evaluation',
      content: `Our administrative staff will get in touch with you to arrange for your child's initial evaluation, which can take place at our friendly clinic or in the convenience of your home, once we have received your referral, intake form and insurance information.`,
      icon: Users,
      color: 'pink'
    },
    {
      id: 4,
      year: '2020',
      title: 'Scheduling',
      content: `Our therapist will prepare a thorough report after the assessment and provide it to your child's pediatrician. We ensure to maintain the continuity of therapy sessions once your insurance has been accepted and allowed. Depending on what works best for your family.`,
      icon: Users,
      color: 'pink'
    }
  ];

  const colorMap = {
    blue: {
      bg: 'bg-blue-500',
      border: 'border-blue-500',
      text: 'text-blue-500',
      hover: 'hover:bg-blue-500',
      ring: 'ring-blue-500'
    },
    orange: {
      bg: 'bg-orange-500',
      border: 'border-orange-500',
      text: 'text-orange-500',
      hover: 'hover:bg-orange-500',
      ring: 'ring-orange-500'
    },
    pink: {
      bg: 'bg-pink-500',
      border: 'border-pink-500',
      text: 'text-pink-500',
      hover: 'hover:bg-pink-500',
      ring: 'ring-pink-500'
    }
  };

  const handleMouseEnter = (id) => {
    const newExpanded = new Set(expandedItems);
    newExpanded.add(id);
    setExpandedItems(newExpanded);
  };

  const handleMouseLeave = (id) => {
    const newExpanded = new Set(expandedItems);
    newExpanded.delete(id);
    setExpandedItems(newExpanded);
  };

  const getTimelineItemClasses = (item, index) => {
    const isExpanded = expandedItems.has(item.id);
    const color = colorMap[item.color];
    const isLast = index === timelineData.length - 1;

    let classes = {
      container: `relative pl-8 ${!isLast ? 'border-l-2' : ''} pb-8`,
      circle: 'absolute -left-3 top-0 w-6 h-6 rounded-full border-4 border-white transition-all duration-300',
      button: 'w-full text-left p-4 rounded-none transition-all duration-300 flex items-center justify-between',
      content: 'px-4 pb-4 text-gray-600'
    };

    // Style variations
    if (activeStyle === 'thin') {
      classes.container += ` border-gray-400`;
      classes.circle += isExpanded 
        ? ` ${color.bg} ring-2 ${color.ring}` 
        : ' bg-white ring-2 ring-gray-400';
      classes.button += isExpanded
        ? ` border ${color.border} ${color.text} bg-white`
        : ' border border-gray-400 text-gray-700 bg-white';
    } else if (activeStyle === 'light') {
      classes.container += ` border-gray-300`;
      classes.circle += isExpanded 
        ? ` ${color.bg} ring-2 ${color.ring}` 
        : ' bg-gray-300 ring-2 ring-gray-300';
      classes.button += isExpanded
        ? ` ${color.bg} text-white border ${color.border}`
        : ' bg-gray-200 border border-gray-200 text-gray-700';
    } else { // dark
      classes.container += ` border-gray-600`;
      classes.circle += isExpanded 
        ? ` ${color.bg} ring-2 ${color.ring}` 
        : ' bg-gray-600 ring-2 ring-gray-600';
      classes.button += isExpanded
        ? ` ${color.bg} text-white border ${color.border}`
        : ' bg-gray-600 text-white border border-gray-600';
    }

    return classes;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Interactive Timeline</h1>
        <p className="text-gray-600 mb-6">Explore the evolution of the internet through time</p>
        
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveStyle('thin')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeStyle === 'thin' 
                ? 'bg-blue-500 text-white shadow-lg transform scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300'
            }`}
          >
            Thin Style
          </button>
          <button
            onClick={() => setActiveStyle('light')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeStyle === 'light' 
                ? 'bg-blue-500 text-white shadow-lg transform scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300'
            }`}
          >
            Light Style
          </button>
          <button
            onClick={() => setActiveStyle('dark')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeStyle === 'dark' 
                ? 'bg-blue-500 text-white shadow-lg transform scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300'
            }`}
          >
            Dark Style
          </button>
        </div>
      </div> */}

      {/* Timeline */}
      <div className=" p-8">
        <div className="relative">
          {timelineData.map((item, index) => {
            const classes = getTimelineItemClasses(item, index);
            const isExpanded = expandedItems.has(item.id);
            const Icon = item.icon;
            
            return (
              <div key={item.id} className={classes.container}>
                {/* Timeline Circle/Icon */}
                <div className={classes.circle}>
                  {activeStyle === 'thin' && (
                    <div className="w-full h-full" />
                  )}
                </div>

                {/* Timeline Item */}
                <div 
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={() => handleMouseLeave(item.id)}
                >
                  <div
                    className={classes.button}
                  >
                    <div className="flex items-center gap-4">
                      {(activeStyle === 'light' || activeStyle === 'dark') && (
                        <div className="flex-shrink-0">
                          <Icon size={24} />
                        </div>
                      )}
                      <div className="flex-grow">
                        <h3 className="font-bold  text-lg">
                          {item.year} - {item.title}
                        </h3>
                      </div>
                    </div>
                    <ChevronDown 
                      size={20} 
                      className={`transform transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  
                  {/* Expandable Content */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className={classes.content}>
                      <p className="leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Timeline;