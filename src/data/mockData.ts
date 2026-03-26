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

function generateTopics(names: string[]): Topic[] {
  return names.map((name, i) => ({
    id: `topic-${name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${i}`,
    title: name,
    duration: `${15 + Math.floor(Math.random() * 30)} min`,
    completed: Math.random() > 0.7,
  }));
}

function generateUnits(unitData: { title: string; topics: string[] }[]): Unit[] {
  return unitData.map((u, i) => ({
    id: `unit-${u.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${i}`,
    title: u.title,
    topics: generateTopics(u.topics),
  }));
}

function makeSubject(id: string, name: string, icon: string, unitData: { title: string; topics: string[] }[]): Subject {
  return { id, name, icon, units: generateUnits(unitData) };
}

// Default unit structure for subjects without detailed data
function defaultUnits(subjectKey: string): { title: string; topics: string[] }[] {
  return [
    { title: 'Unit 1: Introduction & Fundamentals', topics: ['Introduction', 'Basic Concepts', 'Historical Background', 'Applications'] },
    { title: 'Unit 2: Core Theory', topics: ['Theoretical Framework', 'Key Principles', 'Mathematical Foundations', 'Derivations'] },
    { title: 'Unit 3: Advanced Concepts', topics: ['Advanced Theory', 'Complex Problems', 'Case Studies', 'Numerical Problems'] },
    { title: 'Unit 4: Applications & Practice', topics: ['Real-world Applications', 'Problem Solving', 'Lab Exercises', 'Review & Summary'] },
  ];
}

// ===================== COMMON 1ST & 2ND SEMESTER (IPU) =====================
const sem1Subjects = (branchId: string): Subject[] => [
  makeSubject(`${branchId}-s1-1`, 'Applied Mathematics – I', '📐', [
    { title: 'Unit 1: Matrices', topics: ['Types of Matrices', 'Rank of Matrix', 'Eigenvalues & Eigenvectors', 'Cayley-Hamilton Theorem'] },
    { title: 'Unit 2: Differential Calculus', topics: ['Successive Differentiation', 'Leibnitz Theorem', 'Taylor & Maclaurin Series', 'Partial Differentiation'] },
    { title: 'Unit 3: Integral Calculus', topics: ['Reduction Formulae', 'Beta & Gamma Functions', 'Double & Triple Integrals', 'Applications of Integration'] },
    { title: 'Unit 4: Vector Calculus', topics: ['Gradient, Divergence & Curl', 'Line Integrals', 'Surface Integrals', 'Green, Stokes & Gauss Theorems'] },
  ]),
  makeSubject(`${branchId}-s1-2`, 'Applied Physics – I', '⚛️', [
    { title: 'Unit 1: Optics', topics: ['Interference', 'Diffraction', 'Polarization', 'Lasers'] },
    { title: 'Unit 2: Quantum Mechanics', topics: ['Wave-Particle Duality', 'Uncertainty Principle', 'Schrödinger Equation', 'Applications'] },
    { title: 'Unit 3: Electromagnetic Theory', topics: ['Maxwell Equations', 'EM Wave Propagation', 'Poynting Vector', 'Electromagnetic Spectrum'] },
  ]),
  makeSubject(`${branchId}-s1-3`, 'Applied Chemistry – I', '🧪', [
    { title: 'Unit 1: Atomic Structure & Bonding', topics: ['Atomic Models', 'Chemical Bonding', 'Molecular Orbital Theory', 'Hybridization'] },
    { title: 'Unit 2: Thermochemistry', topics: ['Laws of Thermodynamics', 'Enthalpy', 'Entropy', 'Free Energy'] },
    { title: 'Unit 3: Electrochemistry', topics: ['Electrode Potential', 'Electrochemical Cells', 'Batteries', 'Corrosion'] },
  ]),
  makeSubject(`${branchId}-s1-4`, 'Manufacturing Process', '🏭', defaultUnits('mfg')),
  makeSubject(`${branchId}-s1-5`, 'Introduction to Computers & AutoCAD', '💻', [
    { title: 'Unit 1: Computer Fundamentals', topics: ['Computer Architecture', 'Number Systems', 'Operating Systems Basics', 'Input/Output Devices'] },
    { title: 'Unit 2: AutoCAD Basics', topics: ['AutoCAD Interface', '2D Drawing Commands', 'Editing Commands', 'Dimensioning & Layers'] },
    { title: 'Unit 3: Web Design & Office Automation', topics: ['HTML Basics', 'MS Word & Excel', 'PowerPoint', 'Internet & Email'] },
  ]),
  makeSubject(`${branchId}-s1-6`, 'Communication Skills – I', '📝', defaultUnits('comm')),
];

const sem2Subjects = (branchId: string): Subject[] => [
  makeSubject(`${branchId}-s2-1`, 'Applied Mathematics – II', '📐', [
    { title: 'Unit 1: Ordinary Differential Equations', topics: ['First Order ODE', 'Higher Order ODE', 'Method of Variation of Parameters', 'Cauchy-Euler Equations'] },
    { title: 'Unit 2: Series Solutions', topics: ['Power Series Method', 'Frobenius Method', 'Bessel Functions', 'Legendre Polynomials'] },
    { title: 'Unit 3: Laplace Transforms', topics: ['Definition & Properties', 'Inverse Laplace', 'Convolution Theorem', 'Applications to ODE'] },
    { title: 'Unit 4: Fourier Series', topics: ['Fourier Coefficients', 'Half Range Series', 'Parseval Identity', 'Applications'] },
  ]),
  makeSubject(`${branchId}-s2-2`, 'Applied Physics – II', '⚛️', [
    { title: 'Unit 1: Crystal Structure', topics: ['Unit Cells', 'Bravais Lattices', 'Miller Indices', 'X-ray Diffraction'] },
    { title: 'Unit 2: Semiconductor Physics', topics: ['Band Theory', 'Intrinsic & Extrinsic Semiconductors', 'p-n Junction', 'Transistors'] },
    { title: 'Unit 3: Superconductivity & Nanomaterials', topics: ['Superconductivity', 'BCS Theory', 'Nanomaterials', 'Applications'] },
  ]),
  makeSubject(`${branchId}-s2-3`, 'Applied Chemistry – II', '🧪', defaultUnits('chem2')),
  makeSubject(`${branchId}-s2-4`, 'Introduction to Programming', '💻', [
    { title: 'Unit 1: C Programming Basics', topics: ['Variables & Data Types', 'Operators', 'Control Structures', 'Loops'] },
    { title: 'Unit 2: Functions & Arrays', topics: ['Functions', 'Recursion', 'Arrays', 'Strings'] },
    { title: 'Unit 3: Pointers & Structures', topics: ['Pointers', 'Dynamic Memory', 'Structures & Unions', 'File Handling'] },
  ]),
  makeSubject(`${branchId}-s2-5`, 'Engineering Mechanics', '⚙️', [
    { title: 'Unit 1: Statics', topics: ['Force Systems', 'Equilibrium', 'Friction', 'Centroids & Moment of Inertia'] },
    { title: 'Unit 2: Dynamics', topics: ['Kinematics', 'Kinetics', "Newton's Laws", 'Work-Energy Principle'] },
  ]),
  makeSubject(`${branchId}-s2-6`, 'Electrical Science', '⚡', [
    { title: 'Unit 1: DC Circuits', topics: ['Ohm\'s Law', 'Kirchhoff\'s Laws', 'Network Theorems', 'Transient Analysis'] },
    { title: 'Unit 2: AC Circuits', topics: ['Phasors', 'Impedance', 'Resonance', 'Three Phase Systems'] },
  ]),
  makeSubject(`${branchId}-s2-7`, 'Communication Skills – II', '📝', defaultUnits('comm2')),
];

// ===================== CSE BRANCH (IPU Syllabus) =====================
const csBranch: Branch = {
  id: 'cs',
  name: 'Computer Science & Engineering',
  description: 'Master algorithms, data structures, AI, and modern software engineering with IPU syllabus.',
  image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
  color: 'blue',
  semesters: [
    { id: 'cs-sem-1', number: 1, subjects: sem1Subjects('cs') },
    { id: 'cs-sem-2', number: 2, subjects: sem2Subjects('cs') },
    { id: 'cs-sem-3', number: 3, subjects: [
      makeSubject('cs-s3-1', 'Applied Mathematics – III', '📐', [
        { title: 'Unit 1: Complex Variables', topics: ['Analytic Functions', 'Cauchy-Riemann Equations', 'Complex Integration', 'Cauchy Integral Theorem'] },
        { title: 'Unit 2: Probability & Statistics', topics: ['Random Variables', 'Probability Distributions', 'Hypothesis Testing', 'Curve Fitting'] },
        { title: 'Unit 3: Z-Transforms', topics: ['Definition & Properties', 'Inverse Z-Transform', 'Applications to Difference Equations', 'Stability Analysis'] },
      ]),
      makeSubject('cs-s3-2', 'Analog Electronics', '📡', [
        { title: 'Unit 1: Diodes & Transistors', topics: ['p-n Junction Diode', 'BJT', 'FET & MOSFET', 'Biasing Circuits'] },
        { title: 'Unit 2: Amplifiers', topics: ['CE/CB/CC Amplifiers', 'Feedback Amplifiers', 'Oscillators', 'Operational Amplifiers'] },
      ]),
      makeSubject('cs-s3-3', 'Circuits & Systems', '🔌', [
        { title: 'Unit 1: Network Analysis', topics: ['Network Topology', 'KVL & KCL', 'Network Theorems', 'Two-Port Networks'] },
        { title: 'Unit 2: Signals & Systems', topics: ['Signal Classification', 'LTI Systems', 'Convolution', 'Fourier Transform'] },
      ]),
      makeSubject('cs-s3-4', 'Foundations of Computer Systems', '🖥️', [
        { title: 'Unit 1: Number Systems & Codes', topics: ['Binary, Octal, Hex', 'BCD & Gray Code', 'Boolean Algebra', 'Logic Gates'] },
        { title: 'Unit 2: Combinational Circuits', topics: ['Multiplexers', 'Decoders', 'Adders', 'Comparators'] },
      ]),
      makeSubject('cs-s3-5', 'Object Oriented Programming (C++)', '💻', [
        { title: 'Unit 1: OOP Concepts', topics: ['Classes & Objects', 'Constructors & Destructors', 'Inheritance', 'Polymorphism'] },
        { title: 'Unit 2: Advanced C++', topics: ['Templates', 'Exception Handling', 'STL', 'File Handling in C++'] },
      ]),
      makeSubject('cs-s3-6', 'Data Structures', '🗂️', [
        { title: 'Unit 1: Linear Data Structures', topics: ['Arrays', 'Linked Lists', 'Stacks', 'Queues'] },
        { title: 'Unit 2: Non-Linear Data Structures', topics: ['Trees', 'Binary Search Trees', 'Graphs', 'Hashing'] },
        { title: 'Unit 3: Sorting & Searching', topics: ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Binary Search'] },
      ]),
    ]},
    { id: 'cs-sem-4', number: 4, subjects: [
      makeSubject('cs-s4-1', 'Software Engineering', '🛠️', [
        { title: 'Unit 1: Software Process Models', topics: ['Waterfall Model', 'Agile', 'Spiral Model', 'RAD'] },
        { title: 'Unit 2: Requirements & Design', topics: ['SRS', 'DFD', 'UML Diagrams', 'Design Patterns'] },
        { title: 'Unit 3: Testing & Maintenance', topics: ['Black Box Testing', 'White Box Testing', 'Integration Testing', 'Software Maintenance'] },
      ]),
      makeSubject('cs-s4-2', 'Algorithm Analysis & Design', '📊', [
        { title: 'Unit 1: Algorithm Analysis', topics: ['Time Complexity', 'Space Complexity', 'Asymptotic Notations', 'Recurrence Relations'] },
        { title: 'Unit 2: Algorithm Design', topics: ['Divide & Conquer', 'Greedy Algorithms', 'Dynamic Programming', 'Backtracking'] },
        { title: 'Unit 3: Graph Algorithms', topics: ['BFS & DFS', 'Shortest Path', 'Minimum Spanning Tree', 'NP-Completeness'] },
      ]),
      makeSubject('cs-s4-3', 'Digital Circuits & Systems – I', '🔧', [
        { title: 'Unit 1: Sequential Circuits', topics: ['Flip-Flops', 'Counters', 'Registers', 'State Machines'] },
        { title: 'Unit 2: Memory & PLDs', topics: ['ROM', 'RAM', 'PLA', 'FPGA Basics'] },
      ]),
      makeSubject('cs-s4-4', 'Communication Systems', '📡', [
        { title: 'Unit 1: Analog Communication', topics: ['AM Modulation', 'FM Modulation', 'Noise', 'Receivers'] },
        { title: 'Unit 2: Digital Communication', topics: ['PCM', 'Delta Modulation', 'Digital Modulation Techniques', 'Error Detection & Correction'] },
      ]),
      makeSubject('cs-s4-5', 'Computer Graphics', '🎨', [
        { title: 'Unit 1: Graphics Primitives', topics: ['Line Drawing Algorithms', 'Circle Drawing', 'Polygon Filling', 'Clipping'] },
        { title: 'Unit 2: Transformations', topics: ['2D Transformations', '3D Transformations', 'Projections', 'Visible Surface Detection'] },
      ]),
      makeSubject('cs-s4-6', 'Operating Systems', '🖥️', [
        { title: 'Unit 1: Process Management', topics: ['Process Concepts', 'Threads', 'CPU Scheduling', 'Process Synchronization'] },
        { title: 'Unit 2: Memory & File Systems', topics: ['Memory Management', 'Virtual Memory', 'File Systems', 'Deadlocks'] },
      ]),
    ]},
  ],
};

// ===================== IT BRANCH (IPU Syllabus) =====================
const itBranch: Branch = {
  id: 'it',
  name: 'Information Technology',
  description: 'Study software development, networking, databases, and emerging IT technologies with IPU syllabus.',
  image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop',
  color: 'blue',
  semesters: [
    { id: 'it-sem-1', number: 1, subjects: sem1Subjects('it') },
    { id: 'it-sem-2', number: 2, subjects: sem2Subjects('it') },
    { id: 'it-sem-3', number: 3, subjects: [
      makeSubject('it-s3-1', 'Applied Mathematics – III', '📐', [
        { title: 'Unit 1: Complex Variables', topics: ['Analytic Functions', 'Complex Integration', 'Laurent Series', 'Residue Theorem'] },
        { title: 'Unit 2: Probability & Statistics', topics: ['Random Variables', 'Distributions', 'Hypothesis Testing', 'Regression'] },
      ]),
      makeSubject('it-s3-2', 'Data Structures', '🗂️', [
        { title: 'Unit 1: Linear Data Structures', topics: ['Arrays', 'Linked Lists', 'Stacks', 'Queues'] },
        { title: 'Unit 2: Non-Linear Data Structures', topics: ['Trees', 'Graphs', 'Hashing', 'Heaps'] },
      ]),
      makeSubject('it-s3-3', 'Analog Electronics', '📡', [
        { title: 'Unit 1: Semiconductor Devices', topics: ['Diodes', 'BJT', 'FET', 'Op-Amps'] },
        { title: 'Unit 2: Amplifiers & Oscillators', topics: ['CE Amplifier', 'Feedback', 'Oscillators', 'Power Amplifiers'] },
      ]),
      makeSubject('it-s3-4', 'Object Oriented Programming (C++)', '💻', [
        { title: 'Unit 1: OOP Concepts', topics: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Encapsulation'] },
        { title: 'Unit 2: Advanced C++', topics: ['Templates', 'STL', 'Exception Handling', 'File I/O'] },
      ]),
      makeSubject('it-s3-5', 'Digital Logic Design', '🔌', [
        { title: 'Unit 1: Combinational Logic', topics: ['Boolean Algebra', 'K-Maps', 'Multiplexers', 'Decoders'] },
        { title: 'Unit 2: Sequential Logic', topics: ['Flip-Flops', 'Counters', 'Registers', 'State Machines'] },
      ]),
      makeSubject('it-s3-6', 'Discrete Mathematics', '🔢', [
        { title: 'Unit 1: Logic & Proofs', topics: ['Propositional Logic', 'Predicate Logic', 'Proof Techniques', 'Mathematical Induction'] },
        { title: 'Unit 2: Graph Theory & Combinatorics', topics: ['Graph Types', 'Trees', 'Counting Principles', 'Recurrence Relations'] },
      ]),
    ]},
    { id: 'it-sem-4', number: 4, subjects: [
      makeSubject('it-s4-1', 'Software Engineering', '🛠️', [
        { title: 'Unit 1: SDLC Models', topics: ['Waterfall', 'Agile', 'Spiral', 'V-Model'] },
        { title: 'Unit 2: Design & Testing', topics: ['UML', 'Software Design', 'Testing Strategies', 'Maintenance'] },
      ]),
      makeSubject('it-s4-2', 'Algorithm Analysis & Design', '📊', [
        { title: 'Unit 1: Complexity Analysis', topics: ['Big O Notation', 'Recurrences', 'Master Theorem', 'Amortized Analysis'] },
        { title: 'Unit 2: Algorithm Paradigms', topics: ['Divide & Conquer', 'Greedy', 'Dynamic Programming', 'Backtracking'] },
      ]),
      makeSubject('it-s4-3', 'Operating Systems', '🖥️', [
        { title: 'Unit 1: Process Management', topics: ['Processes', 'Threads', 'Scheduling', 'Synchronization'] },
        { title: 'Unit 2: Memory & Storage', topics: ['Paging', 'Segmentation', 'Virtual Memory', 'File Systems'] },
      ]),
      makeSubject('it-s4-4', 'Database Management Systems', '🗄️', [
        { title: 'Unit 1: Relational Model', topics: ['ER Diagrams', 'Relational Algebra', 'SQL', 'Normalization'] },
        { title: 'Unit 2: Transactions & Recovery', topics: ['ACID Properties', 'Concurrency Control', 'Recovery', 'Indexing'] },
      ]),
      makeSubject('it-s4-5', 'Computer Organization', '🔧', [
        { title: 'Unit 1: CPU Architecture', topics: ['Instruction Set', 'Addressing Modes', 'ALU Design', 'Control Unit'] },
        { title: 'Unit 2: Memory & I/O', topics: ['Memory Hierarchy', 'Cache', 'I/O Organization', 'Pipelining'] },
      ]),
      makeSubject('it-s4-6', 'Communication Systems', '📡', [
        { title: 'Unit 1: Analog & Digital Communication', topics: ['Modulation', 'Demodulation', 'Sampling Theorem', 'PCM & DM'] },
        { title: 'Unit 2: Data Communication', topics: ['Transmission Media', 'Multiplexing', 'Error Detection', 'Protocols'] },
      ]),
    ]},
  ],
};

// ===================== MECHANICAL BRANCH (IPU Syllabus) =====================
const mechBranch: Branch = {
  id: 'mech',
  name: 'Mechanical & Automation Engineering',
  description: 'Explore thermodynamics, fluid mechanics, manufacturing, and robotics with IPU syllabus.',
  image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
  color: 'emerald',
  semesters: [
    { id: 'mech-sem-1', number: 1, subjects: sem1Subjects('mech') },
    { id: 'mech-sem-2', number: 2, subjects: sem2Subjects('mech') },
    { id: 'mech-sem-3', number: 3, subjects: [
      makeSubject('mech-s3-1', 'Numerical Analysis & Programming', '📐', [
        { title: 'Unit 1: Numerical Methods', topics: ['Root Finding', 'Interpolation', 'Numerical Integration', 'ODE Solutions'] },
        { title: 'Unit 2: Programming', topics: ['MATLAB Basics', 'Programming Techniques', 'Curve Fitting', 'Error Analysis'] },
      ]),
      makeSubject('mech-s3-2', 'Electronics', '📡', defaultUnits('elec')),
      makeSubject('mech-s3-3', 'Thermal Science', '🌡️', [
        { title: 'Unit 1: Thermodynamics', topics: ['Laws of Thermodynamics', 'Entropy', 'Availability', 'Gas Power Cycles'] },
        { title: 'Unit 2: Heat Transfer', topics: ['Conduction', 'Convection', 'Radiation', 'Heat Exchangers'] },
      ]),
      makeSubject('mech-s3-4', 'Mechanics of Solids', '🔩', [
        { title: 'Unit 1: Stress & Strain', topics: ['Simple Stresses', 'Mohr\'s Circle', 'Bending Moment', 'Shear Force'] },
        { title: 'Unit 2: Deflection & Columns', topics: ['Deflection of Beams', 'Torsion', 'Columns & Struts', 'Thin Cylinders'] },
      ]),
      makeSubject('mech-s3-5', 'Production Technology', '🏭', [
        { title: 'Unit 1: Casting & Forming', topics: ['Casting Processes', 'Forging', 'Rolling', 'Extrusion & Drawing'] },
        { title: 'Unit 2: Welding & Machining', topics: ['Arc Welding', 'Gas Welding', 'Turning & Milling', 'Drilling'] },
      ]),
      makeSubject('mech-s3-6', 'Mechanics of Fluids', '💧', [
        { title: 'Unit 1: Fluid Statics', topics: ['Fluid Properties', 'Pressure Measurement', 'Buoyancy', 'Stability'] },
        { title: 'Unit 2: Fluid Dynamics', topics: ['Continuity Equation', 'Bernoulli\'s Equation', 'Pipe Flow', 'Boundary Layer'] },
      ]),
    ]},
    { id: 'mech-sem-4', number: 4, subjects: [
      makeSubject('mech-s4-1', 'Kinematics & Dynamics of Machines', '⚙️', [
        { title: 'Unit 1: Kinematics', topics: ['Mechanisms', 'Velocity & Acceleration', 'Cams', 'Gears'] },
        { title: 'Unit 2: Dynamics', topics: ['Flywheel', 'Governors', 'Balancing', 'Vibrations'] },
      ]),
      makeSubject('mech-s4-2', 'Heat Transfer', '🌡️', [
        { title: 'Unit 1: Conduction & Convection', topics: ['Steady State Conduction', 'Fins', 'Forced Convection', 'Natural Convection'] },
        { title: 'Unit 2: Radiation & Heat Exchangers', topics: ['Radiation Laws', 'View Factors', 'LMTD Method', 'NTU Method'] },
      ]),
      makeSubject('mech-s4-3', 'Manufacturing Machines', '🏭', [
        { title: 'Unit 1: Machine Tools', topics: ['Lathe', 'Milling Machine', 'Drilling Machine', 'Shaping & Planing'] },
        { title: 'Unit 2: CNC & Automation', topics: ['CNC Programming', 'CNC Machines', 'Jigs & Fixtures', 'Tool Design'] },
      ]),
      makeSubject('mech-s4-4', 'Electrical Machines', '⚡', [
        { title: 'Unit 1: DC Machines', topics: ['DC Generators', 'DC Motors', 'Speed Control', 'Testing'] },
        { title: 'Unit 2: AC Machines', topics: ['Transformers', 'Induction Motors', 'Synchronous Machines', 'Special Machines'] },
      ]),
      makeSubject('mech-s4-5', 'Operation Research', '📊', [
        { title: 'Unit 1: Linear Programming', topics: ['Graphical Method', 'Simplex Method', 'Duality', 'Transportation Problem'] },
        { title: 'Unit 2: Queueing & Game Theory', topics: ['Queueing Models', 'Game Theory', 'Simulation', 'Decision Analysis'] },
      ]),
      makeSubject('mech-s4-6', 'LAN & Networking', '🌐', defaultUnits('lan')),
    ]},
  ],
};

// ===================== ELECTRICAL BRANCH (IPU Syllabus) =====================
const eeBranch: Branch = {
  id: 'ee',
  name: 'Electrical Engineering',
  description: 'Study circuits, power systems, electronics, and signal processing with IPU syllabus.',
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
  color: 'purple',
  semesters: [
    { id: 'ee-sem-1', number: 1, subjects: sem1Subjects('ee') },
    { id: 'ee-sem-2', number: 2, subjects: sem2Subjects('ee') },
    { id: 'ee-sem-3', number: 3, subjects: [
      makeSubject('ee-s3-1', 'Applied Mathematics – III', '📐', [
        { title: 'Unit 1: Complex Analysis', topics: ['Analytic Functions', 'Cauchy Theorem', 'Laurent Series', 'Residues'] },
        { title: 'Unit 2: Transforms', topics: ['Laplace Transform', 'Fourier Transform', 'Z-Transform', 'Applications'] },
      ]),
      makeSubject('ee-s3-2', 'Network Analysis', '🔌', [
        { title: 'Unit 1: Circuit Analysis', topics: ['Network Topology', 'Network Theorems', 'Coupled Circuits', 'Two-Port Networks'] },
        { title: 'Unit 2: Transient & AC Analysis', topics: ['Transient Response', 'Sinusoidal Steady State', 'Resonance', 'Filters'] },
      ]),
      makeSubject('ee-s3-3', 'Analog Electronics', '📡', [
        { title: 'Unit 1: Semiconductor Devices', topics: ['Diodes', 'BJT', 'FET', 'Thyristors'] },
        { title: 'Unit 2: Amplifiers', topics: ['CE/CB/CC Amplifiers', 'Op-Amps', 'Oscillators', 'Power Amplifiers'] },
      ]),
      makeSubject('ee-s3-4', 'Electromagnetic Field Theory', '🧲', [
        { title: 'Unit 1: Electrostatics', topics: ['Coulomb\'s Law', 'Gauss Law', 'Laplace & Poisson Equations', 'Capacitance'] },
        { title: 'Unit 2: Magnetostatics & EM Waves', topics: ['Biot-Savart Law', 'Ampere\'s Law', 'Maxwell Equations', 'Wave Propagation'] },
      ]),
      makeSubject('ee-s3-5', 'Electrical Machines – I', '⚡', [
        { title: 'Unit 1: DC Machines', topics: ['Construction', 'EMF Equation', 'Characteristics', 'Speed Control'] },
        { title: 'Unit 2: Transformers', topics: ['Construction', 'Equivalent Circuit', 'Voltage Regulation', 'Testing'] },
      ]),
      makeSubject('ee-s3-6', 'Measurements & Instrumentation', '📏', [
        { title: 'Unit 1: Measuring Instruments', topics: ['PMMC', 'Moving Iron', 'Dynamometer', 'Bridges'] },
        { title: 'Unit 2: Digital Instruments', topics: ['CRO', 'Digital Multimeter', 'Signal Generators', 'Transducers'] },
      ]),
    ]},
    { id: 'ee-sem-4', number: 4, subjects: [
      makeSubject('ee-s4-1', 'Signals & Systems', '📡', [
        { title: 'Unit 1: Continuous-Time Signals', topics: ['Signal Classification', 'Fourier Series', 'Fourier Transform', 'Laplace Transform'] },
        { title: 'Unit 2: Discrete-Time Signals', topics: ['Z-Transform', 'DFT', 'Sampling Theorem', 'LTI Systems'] },
      ]),
      makeSubject('ee-s4-2', 'Digital Electronics', '🔧', [
        { title: 'Unit 1: Combinational Logic', topics: ['Boolean Algebra', 'K-Maps', 'Multiplexers', 'Decoders'] },
        { title: 'Unit 2: Sequential Logic', topics: ['Flip-Flops', 'Counters', 'Registers', 'Memory'] },
      ]),
      makeSubject('ee-s4-3', 'Electrical Machines – II', '⚡', [
        { title: 'Unit 1: Induction Machines', topics: ['Construction', 'Equivalent Circuit', 'Torque-Speed', 'Speed Control'] },
        { title: 'Unit 2: Synchronous Machines', topics: ['Construction', 'EMF Equation', 'Synchronization', 'Power Flow'] },
      ]),
      makeSubject('ee-s4-4', 'Control Systems', '🎛️', [
        { title: 'Unit 1: Time Domain Analysis', topics: ['Transfer Function', 'Block Diagrams', 'Time Response', 'Stability'] },
        { title: 'Unit 2: Frequency Domain', topics: ['Bode Plot', 'Nyquist Plot', 'Root Locus', 'Compensators'] },
      ]),
      makeSubject('ee-s4-5', 'Power Systems – I', '🔋', [
        { title: 'Unit 1: Generation', topics: ['Thermal Power', 'Hydro Power', 'Nuclear Power', 'Renewable Energy'] },
        { title: 'Unit 2: Transmission', topics: ['Transmission Lines', 'Parameters', 'Performance', 'HVDC'] },
      ]),
      makeSubject('ee-s4-6', 'Numerical Methods & Programming', '💻', defaultUnits('nmp')),
    ]},
  ],
};

// ===================== CIVIL BRANCH (IPU Syllabus) =====================
const civilBranch: Branch = {
  id: 'civil',
  name: 'Civil Engineering',
  description: 'Learn structural analysis, construction, surveying, and urban planning with IPU syllabus.',
  image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
  color: 'blue',
  semesters: [
    { id: 'civil-sem-1', number: 1, subjects: sem1Subjects('civil') },
    { id: 'civil-sem-2', number: 2, subjects: sem2Subjects('civil') },
    { id: 'civil-sem-3', number: 3, subjects: [
      makeSubject('civil-s3-1', 'Applied Mathematics – III', '📐', [
        { title: 'Unit 1: Partial Differential Equations', topics: ['Formation of PDE', 'Method of Separation', 'Wave Equation', 'Heat Equation'] },
        { title: 'Unit 2: Complex Analysis & Transforms', topics: ['Analytic Functions', 'Conformal Mapping', 'Laplace Transforms', 'Z-Transforms'] },
      ]),
      makeSubject('civil-s3-2', 'Strength of Materials', '🔩', [
        { title: 'Unit 1: Stress Analysis', topics: ['Simple Stress & Strain', 'Compound Stress', 'Mohr\'s Circle', 'Strain Energy'] },
        { title: 'Unit 2: Beams & Columns', topics: ['Bending Moment', 'Shear Force', 'Deflection', 'Columns'] },
      ]),
      makeSubject('civil-s3-3', 'Surveying', '📏', [
        { title: 'Unit 1: Chain & Compass Surveying', topics: ['Chain Surveying', 'Compass Surveying', 'Plane Table', 'Levelling'] },
        { title: 'Unit 2: Advanced Surveying', topics: ['Theodolite', 'Tacheometry', 'Curves', 'Remote Sensing'] },
      ]),
      makeSubject('civil-s3-4', 'Fluid Mechanics', '💧', [
        { title: 'Unit 1: Fluid Statics', topics: ['Fluid Properties', 'Pressure', 'Buoyancy', 'Hydrostatic Forces'] },
        { title: 'Unit 2: Fluid Dynamics', topics: ['Bernoulli Equation', 'Pipe Flow', 'Open Channel Flow', 'Boundary Layer'] },
      ]),
      makeSubject('civil-s3-5', 'Building Materials & Construction', '🏗️', [
        { title: 'Unit 1: Building Materials', topics: ['Cement', 'Concrete', 'Steel', 'Timber & Bricks'] },
        { title: 'Unit 2: Construction Technology', topics: ['Foundations', 'Masonry', 'Roofing', 'Flooring'] },
      ]),
      makeSubject('civil-s3-6', 'Engineering Geology', '🪨', [
        { title: 'Unit 1: Physical Geology', topics: ['Minerals', 'Rocks', 'Weathering', 'Geological Structures'] },
        { title: 'Unit 2: Applied Geology', topics: ['Dams', 'Tunnels', 'Groundwater', 'Landslides'] },
      ]),
    ]},
    { id: 'civil-sem-4', number: 4, subjects: [
      makeSubject('civil-s4-1', 'Structural Analysis – I', '🏗️', [
        { title: 'Unit 1: Determinate Structures', topics: ['Support Reactions', 'Trusses', 'Influence Lines', 'Three-Hinged Arches'] },
        { title: 'Unit 2: Indeterminate Structures', topics: ['Slope Deflection', 'Moment Distribution', 'Consistent Deformation', 'Matrix Methods'] },
      ]),
      makeSubject('civil-s4-2', 'Geotechnical Engineering', '🪨', [
        { title: 'Unit 1: Soil Properties', topics: ['Soil Classification', 'Index Properties', 'Compaction', 'Permeability'] },
        { title: 'Unit 2: Soil Mechanics', topics: ['Seepage', 'Consolidation', 'Shear Strength', 'Earth Pressure'] },
      ]),
      makeSubject('civil-s4-3', 'Hydraulics & Hydraulic Machines', '💧', [
        { title: 'Unit 1: Hydraulics', topics: ['Open Channel Flow', 'Hydraulic Jump', 'Gradually Varied Flow', 'Flow Measurement'] },
        { title: 'Unit 2: Hydraulic Machines', topics: ['Turbines', 'Pumps', 'Cavitation', 'Draft Tubes'] },
      ]),
      makeSubject('civil-s4-4', 'Concrete Technology', '🧱', [
        { title: 'Unit 1: Cement & Aggregates', topics: ['Types of Cement', 'Aggregate Properties', 'Mix Design', 'Admixtures'] },
        { title: 'Unit 2: Concrete Properties', topics: ['Workability', 'Strength', 'Durability', 'Special Concretes'] },
      ]),
      makeSubject('civil-s4-5', 'Environmental Engineering – I', '🌱', [
        { title: 'Unit 1: Water Supply', topics: ['Water Demand', 'Sources', 'Treatment', 'Distribution'] },
        { title: 'Unit 2: Wastewater', topics: ['Sewerage Systems', 'Treatment Methods', 'Disposal', 'Air Pollution'] },
      ]),
      makeSubject('civil-s4-6', 'Transportation Engineering – I', '🚗', [
        { title: 'Unit 1: Highway Engineering', topics: ['Highway Planning', 'Geometric Design', 'Pavement Design', 'Traffic Engineering'] },
        { title: 'Unit 2: Railway Engineering', topics: ['Track Components', 'Geometric Design', 'Signalling', 'Stations & Yards'] },
      ]),
    ]},
  ],
};

export const branches: Branch[] = [csBranch, itBranch, mechBranch, eeBranch, civilBranch];

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
