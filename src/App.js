import React, { useState, useEffect, useCallback } from 'react';

// Define the entire project plan structure with all details
const initialProjectPlan = [
  {
    id: 'phase1',
    title: 'Phase 1: Forging the Website\'s Foundation and Core Content',
    sections: [
      {
        id: 'p1s1',
        title: 'Website Core Structure - Laying the Digital Paths',
        notes: 'To create the basic navigational framework for your website, ensuring all future content has a designated home. This is your immediate act of digital architecture.',
        tasks: [
          { id: 'p1s1t1', text: 'Open Google Sites (in edit mode)', completed: false, intendedTime: '5 mins', targetDate: 'July 4th' },
          { id: 'p1s1t2', text: 'Access "Pages" Panel (on right-hand side)', completed: false, intendedTime: '2 mins', targetDate: 'July 4th' },
          {
            id: 'p1s1t3',
            text: 'Create Essential Pages (Home, The Awakening, The Weight Loss Wars, The Sanctuary Awaits, Cast of Characters, Your Journey & Healing, Resources & Reflections)',
            completed: false,
            intendedTime: '10-15 mins',
            targetDate: 'July 4th',
            subtasks: [
              { id: 'p1s1t3s1', text: 'Create "Home" page (if not already main)', completed: false },
              { id: 'p1s1t3s2', text: 'Create "The Awakening" page', completed: false },
              { id: 'p1s1t3s3', text: 'Create "The Weight Loss Wars" page', completed: false },
              { id: 'p1s1t3s4', text: 'Create "The Sanctuary Awaits" page', completed: false },
              { id: 'p1s1t3s5', text: 'Create "Cast of Characters" page', completed: false },
              { id: 'p1s1t3s6', text: 'Create "Your Journey & Healing" page', completed: false },
              { id: 'p1s1t3s7', text: 'Create "Resources & Reflections" page', completed: false },
            ]
          },
          { id: 'p1s1t4', text: 'Arrange Navigation (drag & drop pages in logical order)', completed: false, intendedTime: '5 mins', targetDate: 'July 4th' },
        ]
      },
      {
        id: 'p1s2',
        title: 'Homepage Finalization - Anchoring Your Digital Hearth',
        notes: 'To ensure your website\'s entrance immediately conveys the essence of your world and invites the seeker in. This is about establishing the core aesthetic and initial welcome.',
        tasks: [
          { id: 'p1s2t1', text: 'Go to Homepage (in edit mode)', completed: false, intendedTime: '2 mins', targetDate: 'July 4th' },
          { id: 'p1s2t2', text: 'Confirm Banner Image (ensure chosen image is present as header)', completed: false, intendedTime: '5 mins', targetDate: 'July 4th' },
          { id: 'p1s2t3', text: 'Confirm Intro Text (ensure 2-3 welcome sentences are present below banner)', completed: false, intendedTime: '5 mins', targetDate: 'July 4th' },
          { id: 'p1s2t4', text: 'Confirm Basic Website Name (clear in the header)', completed: false, intendedTime: '2 mins', targetDate: 'July 4th' },
        ]
      }
    ]
  },
  {
    id: 'phase2',
    title: 'Phase 2: Core Website Content & Story Finalization',
    sections: [
      {
        id: 'p2s1',
        title: 'Website Story Pages - Weaving the Narrative',
        notes: 'To populate your website with the core narrative, allowing users to journey through your personal story and its themes.',
        tasks: [
          { id: 'p2s1t1', text: 'Copy "The Awakening" story text to "The Awakening" page', completed: false, intendedTime: '30-45 mins', targetDate: 'July 5th' },
          { id: 'p2s1t2', text: 'Copy remaining story text to relevant pages/sections (e.g., "The Sanctuary Awaits")', completed: false, intendedTime: '30-45 mins', targetDate: 'July 6th' },
          { id: 'p2s1t3', text: 'Review story flow across pages for coherence', completed: false, intendedTime: '20 mins', targetDate: 'July 7th' },
        ]
      },
      {
        id: 'p2s2',
        title: 'Website Cast of Characters - Summoning the Guardians',
        notes: 'To introduce your beloved companions and key figures, bringing your world to life with text and imagery.',
        tasks: [
          { id: 'p2s2t1', text: 'Create "Cast of Characters" page content (text descriptions)', completed: false, intendedTime: '20-30 mins', targetDate: 'July 8th' },
          {
            id: 'p2s2t2',
            text: 'Gather/Generate Imagery for Core Animal Companions & Protagonist',
            completed: false,
            intendedTime: '45-60 mins',
            targetDate: 'July 10th',
            subtasks: [
              { id: 'p2s2t2s1', text: 'Protagonist image', completed: false },
              { id: 'p2s2t2s2', text: 'Willow image', completed: false },
              { id: 'p2s2t2s3', text: 'Grimm image', completed: false },
              { id: 'p2s2t2s4', text: 'Mooshu image', completed: false },
              { id: 'p2s2t2s5', text: 'Pina image', completed: false },
              { id: 'p2s2t2s6', text: 'Plumpus (spirit/memorial) image', completed: false },
            ]
          },
          { id: 'p2s2t3', text: 'Add images to "Cast of Characters" page', completed: false, intendedTime: '20 mins', targetDate: 'July 11th' },
        ]
      },
      {
        id: 'p2s3',
        title: 'Website "Weight Loss Wars" App Embedding - The Interactive Crucible',
        notes: 'To integrate the core interactive experience of the project onto your website.',
        tasks: [
          { id: 'p2s3t1', text: 'Ensure "Weight Loss Wars" React app is complete and functional', completed: false, intendedTime: 'Ongoing' }, // This is a prerequisite, not a task to do here
          { id: 'p2s3t2', text: 'Build "Weight Loss Wars" React app for production (npm run build)', completed: false, intendedTime: '15 mins', targetDate: 'July 12th' },
          { id: 'p2s3t3', text: 'Host compiled React app on a static hosting service (e.g., Netlify, GitHub Pages)', completed: false, intendedTime: '30-45 mins', targetDate: 'July 13th' },
          { id: 'p2s3t4', text: 'Embed hosted app URL into "The Weight Loss Wars" Google Sites page', completed: false, intendedTime: '10 mins', targetDate: 'July 13th' },
        ]
      }
    ]
  },
  {
    id: 'phase3',
    title: 'Phase 3: Game Mechanics & Physical Components',
    sections: [
      {
        id: 'p3s1',
        title: 'Rules of the Journey - Forging the Game\'s Logic',
        notes: 'To define the clear, compassionate rules that guide movement on your board game, linking it to daily actions and self-care.',
        tasks: [
          { id: 'p3s1t1', text: 'Outline core game loop (daily app interaction -> board movement)', completed: false, intendedTime: '20 mins', targetDate: 'July 15th' },
          { id: 'p3s1t2', text: 'Define simple forward movement rules (e.g., meeting deficit, self-care habits)', completed: false, intendedTime: '30 mins', targetDate: 'July 16th' },
          { id: 'p3s1t3', text: 'Brainstorm types of "Challenge" spaces and their effects', completed: false, intendedTime: '20 mins', targetDate: 'July 17th' },
          { id: 'p3s1t4', text: 'Brainstorm types of "Sanctum Resource" spaces and their benefits', completed: false, intendedTime: '20 mins', targetDate: 'July 17th' },
          { id: 'p3s1t5', text: 'Integrate "Rest/Pause" concepts into rules', completed: false, intendedTime: '15 mins', targetDate: 'July 18th' },
        ]
      },
      {
        id: 'p3s2',
        title: 'Map Design (Board Game) - Charting the Realms',
        notes: 'To visually manifest your game board, incorporating key metaphorical locations and visual cues for progress.',
        tasks: [
          { id: 'p3s2t1', text: 'Finalize list of key metaphorical locations for the board (Start, Whispering Woods, Oasis of Intention, Shifting Sands, River of Flow, Guardian\'s Grove, Citadel of Strength, Sanctum)', completed: false, intendedTime: '15 mins', targetDate: 'July 19th' },
          { id: 'p3s2t2', text: 'Generate/Create Board Game Map Image (with 50-60 spaces, new apothecary, positive castle, desert, water, house as start)', completed: false, intendedTime: '1-2 hours', targetDate: 'July 22nd' },
          { id: 'p3s2t3', text: 'Add "Data Point" icons (scale, water, heart, brain) to map spaces', completed: false, intendedTime: '30 mins', targetDate: 'July 23rd' },
          { id: 'p3s2t4', text: 'Add "Challenge" and "Sanctum Resource" symbols to map spaces', completed: false, intendedTime: '30 mins', targetDate: 'July 23rd' },
        ]
      },
      {
        id: 'p3s3',
        title: 'QR System Integration - The Lost & Found Spell',
        notes: 'To implement a practical system for organizing physical game components and planner items, reducing personal anxiety about clutter.',
        tasks: [
          { id: 'p3s3t1', text: 'Research simple QR code generation/scanning apps for personal use', completed: false, intendedTime: '20 mins', targetDate: 'July 25th' },
          { id: 'p3s3t2', text: 'Outline core concept for QR system (labeling, scanning in/out)', completed: false, intendedTime: '15 mins', targetDate: 'July 25th' },
          { id: 'p3s3t3', text: 'Add explanation of QR system to "Resources & Reflections" website page', completed: false, intendedTime: '20 mins', targetDate: 'July 26th' },
        ]
      },
      {
        id: 'p3s4',
        title: 'Cleaning Plan/Tracker - Taming the Physical Chaos',
        notes: 'To create a simple, sustainable daily/weekly cleaning plan for your physical space, combating overwhelm.',
        tasks: [
          { id: 'p3s4t1', text: 'Define 3-5 small, daily cleaning tasks (e.g., "5 mins tidy living room")', completed: false, intendedTime: '15 mins', targetDate: 'July 28th' },
          { id: 'p3s4t2', text: 'Integrate cleaning tasks into Physical Planner template', completed: false, intendedTime: '15 mins', targetDate: 'July 28th' },
          // Note: This could also be a habit tracker item in the app's daily log, but for now, it's planner-focused.
        ]
      }
    ]
  },
  {
    id: 'phase4',
    title: 'Phase 4: Enhancements & Final Touches',
    sections: [
      {
        id: 'p4s1',
        title: 'Voice Recordings & Scripts - The Echoes of Wisdom',
        notes: 'To create and integrate audio elements that provide guidance, reflection, or narrative immersion.',
        tasks: [
          { id: 'p4s1t1', text: 'Outline themes/topics for initial voice recordings (e.g., "Thought-Release Whisper" guidance)', completed: false, intendedTime: '30 mins', targetDate: 'Aug 1st' },
          { id: 'p4s1t2', text: 'Write scripts for 1-2 initial voice recordings', completed: false, intendedTime: '1-2 hours', targetDate: 'Aug 3rd' },
          { id: 'p4s1t3', text: 'Record 1-2 initial voice recordings', completed: false, intendedTime: '30-60 mins', targetDate: 'Aug 5th' },
          { id: 'p4s1t4', text: 'Embed/link audio on "Resources & Reflections" website page', completed: false, intendedTime: '20 mins', targetDate: 'Aug 6th' },
        ]
      },
      {
        id: 'p4s2',
        title: 'Rule Book & Game Pieces - Manifesting the Tangible Game',
        notes: 'To formalize the physical components of your board game, making it ready for play.',
        tasks: [
          { id: 'p4s2t1', text: 'Draft Rule Book (based on P3S1 rules)', completed: false, intendedTime: '1-2 hours', targetDate: 'Aug 8th' },
          { id: 'p4s2t2', text: 'Design/Create Game Cards (e.g., Character cards, Challenge cards, Resource cards)', completed: false, intendedTime: '2-3 hours', targetDate: 'Aug 12th' },
          { id: 'p4s2t3', text: 'Design/Create Game Tokens (e.g., player token, companion tokens)', completed: false, intendedTime: '1 hour', targetDate: 'Aug 13th' },
        ]
      },
      {
        id: 'p4s3',
        title: 'Apothecary Room Setup - The Physical Sanctuary',
        notes: 'To physically manifest your Apothecary space, creating a real-world themed area for personal well-being.',
        tasks: [
          { id: 'p4s3t1', text: 'Define purpose/function of Apothecary room (e.g., meditation, self-care, planning)', completed: false, intendedTime: '30 mins', targetDate: 'Aug 15th' },
          { id: 'p4s3t2', text: 'Brainstorm aesthetic/items for Apothecary room (e.g., lighting, plants, comfort items)', completed: false, intendedTime: '30 mins', targetDate: 'Aug 16th' },
          { id: 'p4s3t3', text: 'Begin curating/acquiring items for Apothecary room', completed: false, intendedTime: 'Ongoing' },
        ]
      },
      {
        id: 'p4s4',
        title: 'Prizes - Rewards for the Valiant',
        notes: 'To define tangible rewards that celebrate milestones and the ultimate completion of your quest.',
        tasks: [
          { id: 'p4s4t1', text: 'Brainstorm milestone prizes (e.g., self-care item, new book)', completed: false, intendedTime: '20 mins', targetDate: 'Aug 18th' },
          { id: 'p4s4t2', text: 'Define ultimate "Crested Crown" prize/celebration', completed: false, intendedTime: '20 mins', targetDate: 'Aug 19th' },
        ]
      }
    ]
  },
  {
    id: 'phase5',
    title: 'Phase 5: Personal Well-being & Daily Practice - The Ongoing Quest',
    sections: [
      {
        id: 'p5s1',
        title: 'Daily Rituals & Self-Care - Sustaining the Sanctuary',
        notes: 'These are the ongoing, foundational practices that support your holistic well-being and integrate into your daily planner.',
        tasks: [
          { id: 'p5s1t1', text: 'Hydration & Sustenance Ritual (Daily)', completed: false, intendedTime: 'Daily', targetDate: 'Ongoing' },
          { id: 'p5s1t2', text: 'Movement as Healing (Daily)', completed: false, intendedTime: 'Daily', targetDate: 'Ongoing' },
          { id: 'p5s1t3', text: 'Night Routine Preparation (Daily)', completed: false, intendedTime: 'Daily', targetDate: 'Ongoing' },
          { id: 'p5s1t4', text: 'The Wind-Down Protocol (Daily)', completed: false, intendedTime: 'Daily', targetDate: 'Ongoing' },
          { id: 'p5s1t5', text: 'Meds & Water (Daily)', completed: false, intendedTime: 'Daily', targetDate: 'Ongoing' },
          { id: 'p5s1t6', text: 'The Cleansing Ritual: Shower (Daily/as needed)', completed: false, intendedTime: 'Daily', targetDate: 'Ongoing' },
          { id: 'p5s1t7', text: 'The "Annoyance Companion" Spell (As needed)', completed: false, intendedTime: 'As needed', targetDate: 'Ongoing' },
        ]
      },
      {
        id: 'p5s2',
        title: 'Planner Integration - Your Daily Compass',
        notes: 'To fully integrate your physical and digital planners for consistent self-understanding and organization.',
        tasks: [
          { id: 'p5s2t1', text: 'Physical Planner - "Daily Capture" Setup (One-time setup)', completed: false, intendedTime: '15 mins', targetDate: 'July 4th' },
          { id: 'p5s2t2', text: 'Anxiety Journaling Section (Setup in planner)', completed: false, intendedTime: '15 mins', targetDate: 'July 5th' },
          { id: 'p5s2t3', text: 'Daily Planner/Brain Dump (Setup in planner)', completed: false, intendedTime: '10 mins', targetDate: 'July 5th' },
          { id: 'p5s2t4', text: 'Event Schedule Integration (Setup in digital planner)', completed: false, intendedTime: '20 mins', targetDate: 'July 6th' },
          { id: 'p5s2t5', text: 'Venting Space: Release Negativity (Setup in planner)', completed: false, intendedTime: '10 mins', targetDate: 'July 6th' },
          { id: 'p5s2t6', text: 'Planning for Tomorrow (Setup in planner)', completed: false, intendedTime: '10 mins', targetDate: 'July 7th' },
        ]
      }
    ]
  }
];

// Helper function to calculate overall progress for a given phase or the entire plan
const calculateProgress = (plan, phaseId = null) => {
  let totalTasks = 0;
  let completedTasks = 0;

  const phasesToCalculate = phaseId ? plan.filter(p => p.id === phaseId) : plan;

  phasesToCalculate.forEach(phase => {
    phase.sections.forEach(section => {
      section.tasks.forEach(task => {
        totalTasks++;
        if (task.completed) {
          completedTasks++;
        }
        if (task.subtasks) {
          task.subtasks.forEach(subtask => {
            totalTasks++;
            if (subtask.completed) {
              completedTasks++;
            }
          });
        }
      });
    });
  });
  return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
};

// Component for a single task
const ProjectTask = ({ task, onToggle }) => (
  <div className="flex items-start mb-2">
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => onToggle(task.id)}
      className="form-checkbox h-5 w-5 text-[#702d8a] rounded-md mt-1 cursor-pointer focus:ring-[#702d8a]" // Purple checkbox
    />
    <label className={`ml-3 text-gray-700 text-base font-kalam ${task.completed ? 'line-through text-gray-500' : ''}`}>
      {task.text}
      {task.intendedTime && <span className="text-sm text-gray-400 ml-2 font-caveat">({task.intendedTime})</span>}
      {task.targetDate && <span className="text-sm text-[#7378c5] ml-2 font-caveat font-medium">Due: {task.targetDate}</span>} {/* Light purple/blue for date */}
    </label>
  </div>
);

// Component for a section (collection of tasks)
const ProjectSection = ({ section, onToggle }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-[#7378c5]"> {/* Light purple/blue border */}
    <h3 className="text-xl font-semibold mb-4 text-[#702d8a] font-dancing-script">{section.title}</h3> {/* Dark purple for section title */}
    <p className="text-gray-600 text-sm mb-4 italic font-caveat">{section.notes}</p>
    <div>
      {section.tasks.map(task => (
        <React.Fragment key={task.id}>
          <ProjectTask task={task} onToggle={onToggle} />
          {task.subtasks && (
            <div className="ml-8 mt-1 mb-2 border-l-2 border-[#7378c5] pl-4"> {/* Light purple/blue border for subtasks */}
              {task.subtasks.map(subtask => (
                <ProjectTask key={subtask.id} task={subtask} onToggle={onToggle} />
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

// Floating Clock Component
const FloatingClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="fixed top-4 right-4 bg-white p-3 rounded-lg shadow-md border border-[#7378c5] text-[#0b2e80] font-kalam text-lg font-bold z-50">
      {time.toLocaleTimeString()}
    </div>
  );
};

// Floating Countdown Timer Component
const FloatingCountdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }, [targetDate, calculateTimeLeft]);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate, calculateTimeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="fixed top-4 left-4 bg-white p-3 rounded-lg shadow-md border border-[#7378c5] text-[#0b2e80] font-kalam text-lg font-bold z-50">
      {timerComponents.length ? timerComponents : <span>Quest Complete!</span>}
    </div>
  );
};


// Main App component
const App = () => {
  // Load plan from localStorage or use initial plan
  const [projectPlan, setProjectPlan] = useState(() => {
    const savedPlan = localStorage.getItem('projectCompassPlan');
    return savedPlan ? JSON.parse(savedPlan) : initialProjectPlan;
  });

  // Save plan to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('projectCompassPlan', JSON.stringify(projectPlan));
  }, [projectPlan]);

  // Toggle task completion
  const handleToggleTask = (taskId) => {
    const updatedPlan = projectPlan.map(phase => ({
      ...phase,
      sections: phase.sections.map(section => ({
        ...section,
        tasks: section.tasks.map(task => {
          if (task.id === taskId) {
            return { ...task, completed: !task.completed };
          }
          if (task.subtasks) {
            return {
              ...task,
              subtasks: task.subtasks.map(subtask =>
                subtask.id === taskId ? { ...subtask, completed: !subtask.completed } : subtask
              ),
            };
          }
          return task;
        }),
      })),
    }));
    setProjectPlan(updatedPlan);
  };

  const overallProgress = calculateProgress(projectPlan);
  const phase1Progress = calculateProgress(projectPlan, 'phase1');


  // Target date for overall project completion (e.g., Aug 19th, 2025)
  const overallProjectTargetDate = new Date('2025-08-19T23:59:59');

  return (
    <>
      {/* Google Fonts Import (for a real app, this goes in public/index.html) */}
      {/* The <style> block has been removed from here as per previous instructions */}

      <FloatingClock />
      <FloatingCountdown targetDate={overallProjectTargetDate} />

      <div className="bg-[#faf5eb] min-h-screen p-4 sm:p-6 lg:p-8 rounded-lg"> {/* Off-white background */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#0b2e80] mb-6 sm:mb-8 rounded-lg p-4 bg-white shadow-lg font-dancing-script"> {/* Dark blue for main title */}
            Project Compass: The Journey to the Crested Crown
          </h1>
          <p className="text-center text-[#2753b7] mb-8 max-w-2xl mx-auto font-kalam"> {/* Medium blue for description */}
            This is your living map, seeker, guiding you step-by-step through the creation of your world. Mark each task as complete, and watch your progress illuminate the path!
          </p>

          {/* Overall Project Progress Bar */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-[#7378c5]"> {/* Light purple/blue border */}
            <h2 className="text-2xl font-bold text-[#702d8a] mb-4 font-dancing-script">Overall Quest Progress:</h2> {/* Dark purple for progress header */}
            <div className="w-full bg-gray-200 rounded-full h-6 mb-2 overflow-hidden">
              <div
                className="bg-[#2753b7] h-6 rounded-full transition-all duration-500 ease-in-out flex items-center justify-center text-white text-sm font-semibold font-kalam" // Medium blue for progress bar fill
                style={{ width: `${overallProgress}%` }}
              >
                {Math.round(overallProgress)}%
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center font-kalam">
              {Math.round(overallProgress)}% of tasks completed. Keep going, brave one!
            </p>
          </div>

          {/* Project Phases */}
          {projectPlan.map(phase => (
            <div key={phase.id} className="mb-10">
              <h2 className="text-3xl font-bold text-[#702d8a] mb-6 p-4 bg-[#e8abff] rounded-lg shadow-inner font-dancing-script"> {/* Dark purple for phase title, light purple for phase background */}
                {phase.title}
              </h2>
              {/* Phase-specific Progress Bar */}
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6 border border-[#7378c5]">
                <h3 className="text-xl font-bold text-[#702d8a] mb-2 font-dancing-script">Phase Progress:</h3>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-[#2753b7] h-4 rounded-full transition-all duration-500 ease-in-out"
                    style={{ width: `${calculateProgress(projectPlan, phase.id)}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 text-center font-kalam mt-2">
                  {Math.round(calculateProgress(projectPlan, phase.id))}% of this phase completed.
                </p>
              </div>
              {phase.sections.map(section => (
                <ProjectSection key={section.id} section={section} onToggle={handleToggleTask} />
              ))}
            </div>
          ))}

          {/* Add New Task/Project Placeholder (User requested this functionality) */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-[#7378c5] text-center">
            <h3 className="text-xl font-semibold mb-4 text-[#702d8a] font-dancing-script">Expand Your Quest:</h3>
            <p className="text-gray-700 font-kalam mb-4">
              The Oracle is ready to help you add new projects, tasks, and subtasks to this compass. For now, simply tell me what new elements you wish to add, and I will weave them into your plan.
            </p>
            {/* In a full implementation, this would involve input fields and state management for adding new items */}
          </div>

          {/* Reset Button */}
          <div className="text-center mt-10">
            <button
              onClick={() => {
                if (window.confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
                  setProjectPlan(initialProjectPlan);
                }
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 font-kalam" // Button text also Kalam
            >
              Reset All Progress
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
