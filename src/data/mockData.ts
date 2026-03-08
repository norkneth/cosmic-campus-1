export interface Topic {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

export interface Unit {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  units: Unit[];
}

export interface Semester {
  id: string;
  number: number;
  subjects: Subject[];
}

export interface Branch {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
  semesters: Semester[];
}

function generateTopics(prefix: string, count: number): Topic[] {
  const topicNames: Record<string, string[]> = {
    'ds': ['Arrays & Linked Lists', 'Stacks & Queues', 'Trees & Graphs', 'Hashing', 'Sorting Algorithms', 'Dynamic Programming'],
    'dbms': ['ER Model', 'Relational Algebra', 'SQL Basics', 'Normalization', 'Transactions', 'Indexing'],
    'os': ['Process Management', 'CPU Scheduling', 'Memory Management', 'Virtual Memory', 'File Systems', 'Deadlocks'],
    'cn': ['OSI Model', 'TCP/IP', 'Routing Algorithms', 'DNS & HTTP', 'Network Security', 'Socket Programming'],
    'math': ['Matrices', 'Differential Equations', 'Probability', 'Statistics', 'Linear Algebra', 'Numerical Methods'],
    'phy': ['Mechanics', 'Thermodynamics', 'Optics', 'Electromagnetism', 'Quantum Basics', 'Wave Theory'],
    'chem': ['Atomic Structure', 'Chemical Bonding', 'Thermochemistry', 'Electrochemistry', 'Organic Chemistry', 'Polymers'],
    'default': ['Introduction', 'Core Concepts', 'Advanced Topics', 'Applications', 'Case Studies', 'Review & Summary'],
  };
  const names = topicNames[prefix] || topicNames['default'];
  return names.slice(0, count).map((name, i) => ({
    id: `${prefix}-topic-${i + 1}`,
    title: name,
    duration: `${15 + Math.floor(Math.random() * 30)} min`,
    completed: Math.random() > 0.6,
  }));
}

function generateUnits(subjectKey: string, count: number): Unit[] {
  const unitNames = ['Fundamentals', 'Core Theory', 'Advanced Concepts', 'Practical Applications', 'Problem Solving'];
  return unitNames.slice(0, count).map((name, i) => ({
    id: `${subjectKey}-unit-${i + 1}`,
    title: `Unit ${i + 1}: ${name}`,
    topics: generateTopics(subjectKey, 4 + Math.floor(Math.random() * 3)),
  }));
}

const csBranch: Branch = {
  id: 'cs',
  name: 'Computer Science',
  description: 'Master algorithms, data structures, AI, and modern software engineering.',
  image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
  color: 'blue',
  semesters: Array.from({ length: 8 }, (_, i) => ({
    id: `cs-sem-${i + 1}`,
    number: i + 1,
    subjects: [
      { id: `cs-s${i + 1}-1`, name: i < 2 ? 'Programming Fundamentals' : i < 4 ? 'Data Structures' : i < 6 ? 'Operating Systems' : 'Machine Learning', icon: '💻', units: generateUnits(i < 4 ? 'ds' : 'os', 4) },
      { id: `cs-s${i + 1}-2`, name: i < 2 ? 'Mathematics I' : i < 4 ? 'Database Systems' : i < 6 ? 'Computer Networks' : 'Cloud Computing', icon: i < 2 ? '📐' : i < 4 ? '🗄️' : '🌐', units: generateUnits(i < 4 ? 'math' : 'cn', 4) },
      { id: `cs-s${i + 1}-3`, name: i < 2 ? 'Digital Logic' : i < 4 ? 'Algorithms' : i < 6 ? 'Software Engineering' : 'Cybersecurity', icon: '🔧', units: generateUnits('default', 3) },
    ],
  })),
};

const mechBranch: Branch = {
  id: 'mech',
  name: 'Mechanical Engineering',
  description: 'Explore thermodynamics, fluid mechanics, manufacturing, and robotics.',
  image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
  color: 'emerald',
  semesters: Array.from({ length: 8 }, (_, i) => ({
    id: `mech-sem-${i + 1}`,
    number: i + 1,
    subjects: [
      { id: `mech-s${i + 1}-1`, name: i < 2 ? 'Engineering Mechanics' : i < 4 ? 'Thermodynamics' : 'Machine Design', icon: '⚙️', units: generateUnits('phy', 4) },
      { id: `mech-s${i + 1}-2`, name: i < 2 ? 'Physics' : i < 4 ? 'Fluid Mechanics' : 'Manufacturing', icon: '🔬', units: generateUnits('phy', 3) },
      { id: `mech-s${i + 1}-3`, name: i < 2 ? 'Mathematics' : i < 4 ? 'Material Science' : 'Robotics', icon: '📐', units: generateUnits('math', 3) },
    ],
  })),
};

const eeBranch: Branch = {
  id: 'ee',
  name: 'Electrical Engineering',
  description: 'Study circuits, power systems, electronics, and signal processing.',
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
  color: 'purple',
  semesters: Array.from({ length: 8 }, (_, i) => ({
    id: `ee-sem-${i + 1}`,
    number: i + 1,
    subjects: [
      { id: `ee-s${i + 1}-1`, name: i < 2 ? 'Circuit Theory' : i < 4 ? 'Analog Electronics' : 'Power Systems', icon: '⚡', units: generateUnits('phy', 4) },
      { id: `ee-s${i + 1}-2`, name: i < 2 ? 'Mathematics' : i < 4 ? 'Signals & Systems' : 'Control Systems', icon: '📐', units: generateUnits('math', 3) },
      { id: `ee-s${i + 1}-3`, name: i < 2 ? 'Physics' : i < 4 ? 'Digital Electronics' : 'VLSI Design', icon: '🔌', units: generateUnits('default', 3) },
    ],
  })),
};

const civilBranch: Branch = {
  id: 'civil',
  name: 'Civil Engineering',
  description: 'Learn structural analysis, construction, surveying, and urban planning.',
  image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
  color: 'blue',
  semesters: Array.from({ length: 8 }, (_, i) => ({
    id: `civil-sem-${i + 1}`,
    number: i + 1,
    subjects: [
      { id: `civil-s${i + 1}-1`, name: i < 2 ? 'Engineering Mechanics' : i < 4 ? 'Structural Analysis' : 'Construction Technology', icon: '🏗️', units: generateUnits('phy', 4) },
      { id: `civil-s${i + 1}-2`, name: i < 2 ? 'Surveying' : i < 4 ? 'Geotechnical Engineering' : 'Transportation Engg', icon: '📏', units: generateUnits('default', 3) },
      { id: `civil-s${i + 1}-3`, name: i < 2 ? 'Mathematics' : i < 4 ? 'Fluid Mechanics' : 'Environmental Engg', icon: '📐', units: generateUnits('math', 3) },
    ],
  })),
};

export const branches: Branch[] = [csBranch, mechBranch, eeBranch, civilBranch];

export function findBranch(id: string) { return branches.find(b => b.id === id); }
export function findSemester(id: string) {
  for (const b of branches) for (const s of b.semesters) if (s.id === id) return { semester: s, branch: b };
  return undefined;
}
export function findSubject(id: string) {
  for (const b of branches) for (const s of b.semesters) for (const sub of s.subjects) if (sub.id === id) return { subject: sub, semester: s, branch: b };
  return undefined;
}
export function findUnit(id: string) {
  for (const b of branches) for (const s of b.semesters) for (const sub of s.subjects) for (const u of sub.units) if (u.id === id) return { unit: u, subject: sub, semester: s, branch: b };
  return undefined;
}
export function findTopic(id: string) {
  for (const b of branches) for (const s of b.semesters) for (const sub of s.subjects) for (const u of sub.units) for (const t of u.topics) if (t.id === id) return { topic: t, unit: u, subject: sub, semester: s, branch: b };
  return undefined;
}
