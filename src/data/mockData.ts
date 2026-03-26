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
    completed: false,
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
    { title: 'Unit 1: Matrices', topics: ['Types of Matrices', 'Rank of Matrix', 'Eigenvalues & Eigenvectors', 'Cayley-Hamilton Theorem', 'Diagonalization', 'System of Linear Equations'] },
    { title: 'Unit 2: Differential Calculus', topics: ['Successive Differentiation', 'Leibnitz Theorem', 'Taylor & Maclaurin Series', 'Partial Differentiation', 'Euler\'s Theorem', 'Maxima & Minima of Two Variables'] },
    { title: 'Unit 3: Integral Calculus', topics: ['Reduction Formulae', 'Beta & Gamma Functions', 'Double Integrals', 'Triple Integrals', 'Change of Order of Integration', 'Applications of Multiple Integrals'] },
    { title: 'Unit 4: Vector Calculus', topics: ['Gradient, Divergence & Curl', 'Directional Derivative', 'Line Integrals', 'Surface Integrals', 'Green\'s Theorem', 'Stokes & Gauss Divergence Theorems'] },
  ]),
  makeSubject(`${branchId}-s1-2`, 'Applied Physics – I', '⚛️', [
    { title: 'Unit 1: Optics', topics: ['Interference of Light', 'Newton\'s Rings', 'Diffraction - Fraunhofer & Fresnel', 'Polarization of Light', 'Lasers - Principles & Types', 'Fiber Optics'] },
    { title: 'Unit 2: Quantum Mechanics', topics: ['Wave-Particle Duality', 'de Broglie Hypothesis', 'Uncertainty Principle', 'Schrödinger Equation', 'Particle in a Box', 'Quantum Tunneling'] },
    { title: 'Unit 3: Electromagnetic Theory', topics: ['Maxwell\'s Equations', 'EM Wave Propagation', 'Poynting Vector', 'Electromagnetic Spectrum', 'Skin Depth', 'Waveguides'] },
  ]),
  makeSubject(`${branchId}-s1-3`, 'Applied Chemistry – I', '🧪', [
    { title: 'Unit 1: Water Treatment', topics: ['Water Specifications', 'Hardness Determination - EDTA Method', 'Water Softening - Lime Soda Process', 'Ion Exchange Method', 'Boiler Feed Water Treatment', 'Numerical Problems'] },
    { title: 'Unit 2: Fuels', topics: ['Classification of Fuels', 'Calorific Value - Bomb Calorimeter', 'Proximate & Ultimate Analysis of Coal', 'Petroleum Refining', 'Cracking - Thermal & Catalytic', 'Octane & Cetane Numbers'] },
    { title: 'Unit 3: Polymers & Corrosion', topics: ['Types of Polymerization', 'Thermoplastic vs Thermosetting', 'Conducting Polymers', 'Electrochemical Theory of Corrosion', 'Types of Corrosion', 'Corrosion Prevention Methods'] },
  ]),
  makeSubject(`${branchId}-s1-4`, 'Manufacturing Process', '🏭', [
    { title: 'Unit 1: Casting', topics: ['Pattern Making', 'Moulding Sand Properties', 'Gating System Design', 'Casting Defects', 'Special Casting Methods', 'Die Casting'] },
    { title: 'Unit 2: Forming Processes', topics: ['Forging - Types & Operations', 'Rolling Process', 'Extrusion', 'Wire Drawing', 'Sheet Metal Operations', 'Powder Metallurgy'] },
    { title: 'Unit 3: Welding', topics: ['Arc Welding', 'Gas Welding', 'Resistance Welding', 'TIG & MIG Welding', 'Soldering & Brazing', 'Welding Defects'] },
    { title: 'Unit 4: Machining', topics: ['Turning Operations', 'Drilling Operations', 'Milling Operations', 'Grinding', 'Non-Traditional Machining', 'CNC Basics'] },
  ]),
  makeSubject(`${branchId}-s1-5`, 'Introduction to Computers & AutoCAD', '💻', [
    { title: 'Unit 1: Computer Fundamentals', topics: ['Computer Architecture', 'Number Systems - Binary, Octal, Hex', 'Boolean Algebra', 'Operating Systems Basics', 'Input/Output Devices', 'Memory Organization'] },
    { title: 'Unit 2: AutoCAD Basics', topics: ['AutoCAD Interface', '2D Drawing Commands', 'Editing Commands', 'Dimensioning', 'Layers & Blocks', '3D Modeling Basics'] },
    { title: 'Unit 3: Office Automation', topics: ['MS Word - Document Formatting', 'MS Excel - Formulas & Charts', 'MS PowerPoint - Presentations', 'HTML Basics', 'Internet & Email', 'Web Browsers & Search Engines'] },
  ]),
  makeSubject(`${branchId}-s1-6`, 'Communication Skills – I', '📝', [
    { title: 'Unit 1: Remedial Grammar', topics: ['Parts of Speech', 'Tense & Concord', 'Gerunds, Participles & Infinitives', 'Complex & Compound Sentences', 'Conditional Clauses', 'Common Errors in English'] },
    { title: 'Unit 2: Vocabulary & Usage', topics: ['Synonyms & Antonyms', 'One Word Substitutions', 'Words Often Confused', 'Idioms & Idiomatic Expressions', 'Foreign Phrases', 'Word Formation'] },
    { title: 'Unit 3: Technical Writing', topics: ['Technical Description of Objects', 'Process Description', 'Scientific Principles Writing', 'Comprehension Passages', 'Dialogue Writing', 'Debate & Discussion'] },
  ]),
];

const sem2Subjects = (branchId: string): Subject[] => [
  makeSubject(`${branchId}-s2-1`, 'Applied Mathematics – II', '📐', [
    { title: 'Unit 1: Ordinary Differential Equations', topics: ['First Order ODE - Exact & Linear', 'Bernoulli Equation', 'Higher Order Linear ODE', 'Method of Variation of Parameters', 'Cauchy-Euler Equations', 'Simultaneous Differential Equations'] },
    { title: 'Unit 2: Series Solutions', topics: ['Power Series Method', 'Frobenius Method', 'Bessel Functions', 'Legendre Polynomials', 'Rodrigues Formula', 'Orthogonality of Special Functions'] },
    { title: 'Unit 3: Laplace Transforms', topics: ['Definition & Properties', 'Laplace Transform of Standard Functions', 'Inverse Laplace Transform', 'Convolution Theorem', 'Unit Step & Impulse Functions', 'Applications to ODE'] },
    { title: 'Unit 4: Fourier Series', topics: ['Fourier Coefficients', 'Dirichlet Conditions', 'Half Range Fourier Series', 'Parseval\'s Identity', 'Fourier Integral', 'Fourier Transform'] },
  ]),
  makeSubject(`${branchId}-s2-2`, 'Applied Physics – II', '⚛️', [
    { title: 'Unit 1: Crystal Structure', topics: ['Unit Cells & Lattice Parameters', 'Bravais Lattices', 'Miller Indices', 'X-ray Diffraction - Bragg\'s Law', 'Crystal Defects', 'Packing Fraction'] },
    { title: 'Unit 2: Semiconductor Physics', topics: ['Band Theory of Solids', 'Intrinsic & Extrinsic Semiconductors', 'p-n Junction Diode', 'Hall Effect', 'Transistors - BJT & FET', 'Semiconductor Devices'] },
    { title: 'Unit 3: Superconductivity & Nanomaterials', topics: ['Superconductivity - Meissner Effect', 'BCS Theory', 'Type I & Type II Superconductors', 'Nanomaterials - Properties', 'Carbon Nanotubes', 'Applications of Nanomaterials'] },
  ]),
  makeSubject(`${branchId}-s2-3`, 'Applied Chemistry – II', '🧪', [
    { title: 'Unit 1: Spectroscopy', topics: ['UV-Visible Spectroscopy', 'IR Spectroscopy', 'NMR Spectroscopy', 'Mass Spectrometry', 'Beer-Lambert Law', 'Applications in Analysis'] },
    { title: 'Unit 2: Engineering Materials', topics: ['Cement - Composition & Setting', 'Refractories', 'Lubricants', 'Adhesives', 'Composite Materials', 'Smart Materials'] },
    { title: 'Unit 3: Environmental Chemistry', topics: ['Air Pollution & Control', 'Water Pollution & Treatment', 'Soil Pollution', 'Green Chemistry Principles', 'Ozone Depletion', 'Global Warming'] },
  ]),
  makeSubject(`${branchId}-s2-4`, 'Introduction to Programming', '💻', [
    { title: 'Unit 1: C Programming Basics', topics: ['Variables & Data Types', 'Operators & Expressions', 'Input/Output Functions', 'Control Structures - if, switch', 'Loops - for, while, do-while', 'Nested Control Structures'] },
    { title: 'Unit 2: Functions & Arrays', topics: ['Function Declaration & Definition', 'Call by Value & Reference', 'Recursion', 'One-Dimensional Arrays', 'Two-Dimensional Arrays', 'String Handling Functions'] },
    { title: 'Unit 3: Pointers & Structures', topics: ['Pointer Basics & Arithmetic', 'Pointers & Arrays', 'Dynamic Memory Allocation', 'Structures & Unions', 'File Handling - fopen, fclose, fprintf', 'Command Line Arguments'] },
  ]),
  makeSubject(`${branchId}-s2-5`, 'Engineering Mechanics', '⚙️', [
    { title: 'Unit 1: Statics', topics: ['Force Systems - Concurrent & Non-Concurrent', 'Equilibrium of Rigid Bodies', 'Friction - Laws & Applications', 'Centroids of Areas', 'Moment of Inertia', 'Virtual Work Method'] },
    { title: 'Unit 2: Dynamics', topics: ['Kinematics of Particles', 'Kinetics - Newton\'s Laws', 'Work-Energy Principle', 'Impulse & Momentum', 'Projectile Motion', 'Circular Motion'] },
  ]),
  makeSubject(`${branchId}-s2-6`, 'Electrical Science', '⚡', [
    { title: 'Unit 1: DC Circuits', topics: ['Ohm\'s Law & Kirchhoff\'s Laws', 'Series & Parallel Circuits', 'Network Theorems - Thevenin, Norton', 'Superposition Theorem', 'Maximum Power Transfer', 'Transient Analysis - RL, RC Circuits'] },
    { title: 'Unit 2: AC Circuits', topics: ['Phasor Representation', 'Impedance & Admittance', 'Series & Parallel RLC Circuits', 'Resonance - Series & Parallel', 'Power Factor & Power Triangle', 'Three Phase Systems'] },
  ]),
  makeSubject(`${branchId}-s2-7`, 'Communication Skills – II', '📝', [
    { title: 'Unit 1: Advanced Writing', topics: ['Report Writing', 'Business Letters', 'Memo & Notices', 'Minutes of Meeting', 'Proposal Writing', 'Resume & Cover Letter'] },
    { title: 'Unit 2: Presentation Skills', topics: ['Oral Presentation Techniques', 'Group Discussion', 'Interview Skills', 'Body Language', 'Visual Aids in Presentation', 'Public Speaking'] },
  ]),
];

// ===================== CSE BRANCH (IPU Syllabus - All 8 Semesters) =====================
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
        { title: 'Unit 1: Complex Variables', topics: ['Analytic Functions', 'Cauchy-Riemann Equations', 'Harmonic Functions', 'Complex Integration', 'Cauchy Integral Theorem', 'Cauchy Integral Formula'] },
        { title: 'Unit 2: Complex Integration & Series', topics: ['Taylor Series', 'Laurent Series', 'Singularities & Poles', 'Residue Theorem', 'Applications of Residues', 'Evaluation of Real Integrals'] },
        { title: 'Unit 3: Probability & Statistics', topics: ['Random Variables', 'Probability Distributions - Binomial, Poisson', 'Normal Distribution', 'Hypothesis Testing', 'Chi-Square Test', 'Curve Fitting & Regression'] },
        { title: 'Unit 4: Z-Transforms', topics: ['Definition & Properties', 'Z-Transform of Standard Sequences', 'Inverse Z-Transform', 'Applications to Difference Equations', 'Stability Analysis', 'Region of Convergence'] },
      ]),
      makeSubject('cs-s3-2', 'Analog Electronics', '📡', [
        { title: 'Unit 1: Diodes & Rectifiers', topics: ['p-n Junction Diode', 'Diode Characteristics', 'Half-Wave Rectifier', 'Full-Wave Rectifier', 'Zener Diode & Voltage Regulator', 'Special Purpose Diodes'] },
        { title: 'Unit 2: Transistors', topics: ['BJT Construction & Working', 'BJT Configurations - CE, CB, CC', 'Biasing Circuits', 'FET & MOSFET', 'FET Biasing', 'Transistor as a Switch'] },
        { title: 'Unit 3: Amplifiers & Oscillators', topics: ['CE Amplifier Analysis', 'Feedback Amplifiers', 'Positive & Negative Feedback', 'Barkhausen Criterion', 'RC Phase Shift Oscillator', 'Operational Amplifiers - Basics'] },
        { title: 'Unit 4: Op-Amp Applications', topics: ['Inverting & Non-Inverting Amplifier', 'Summing Amplifier', 'Differentiator & Integrator', 'Comparators', 'Active Filters', 'Schmitt Trigger'] },
      ]),
      makeSubject('cs-s3-3', 'Circuits & Systems', '🔌', [
        { title: 'Unit 1: Network Analysis', topics: ['Network Topology', 'KVL & KCL Applications', 'Mesh & Nodal Analysis', 'Network Theorems', 'Two-Port Networks', 'Network Functions'] },
        { title: 'Unit 2: Signals & Systems', topics: ['Signal Classification', 'Elementary Signals', 'LTI Systems', 'Convolution - Continuous & Discrete', 'Fourier Transform Properties', 'Sampling Theorem'] },
      ]),
      makeSubject('cs-s3-4', 'Foundations of Computer Systems', '🖥️', [
        { title: 'Unit 1: Number Systems & Codes', topics: ['Binary, Octal, Hexadecimal Systems', 'BCD & Gray Code', 'Boolean Algebra Theorems', 'Logic Gates - AND, OR, NOT, NAND, NOR', 'K-Map Simplification - SOP & POS', 'Don\'t Care Conditions'] },
        { title: 'Unit 2: Combinational Circuits', topics: ['Half Adder & Full Adder', 'Subtractors', 'Multiplexers & Demultiplexers', 'Decoders & Encoders', 'Comparators', 'Parity Generator & Checker'] },
      ]),
      makeSubject('cs-s3-5', 'Object Oriented Programming (C++)', '💻', [
        { title: 'Unit 1: OOP Fundamentals', topics: ['Classes & Objects', 'Constructors & Destructors', 'Copy Constructor', 'Friend Functions & Classes', 'Static Members', 'this Pointer'] },
        { title: 'Unit 2: Inheritance & Polymorphism', topics: ['Types of Inheritance', 'Virtual Base Class', 'Function Overloading', 'Operator Overloading', 'Virtual Functions', 'Abstract Classes & Pure Virtual Functions'] },
        { title: 'Unit 3: Advanced C++', topics: ['Templates - Function & Class', 'Exception Handling - try, catch, throw', 'STL - Vectors, Lists, Maps', 'Iterators', 'File Handling - ifstream, ofstream', 'Namespaces'] },
      ]),
      makeSubject('cs-s3-6', 'Data Structures', '🗂️', [
        { title: 'Unit 1: Linear Data Structures', topics: ['Arrays - Operations & Applications', 'Linked Lists - Singly, Doubly, Circular', 'Stack - Implementation & Applications', 'Queue - Circular Queue, Priority Queue', 'Deque', 'Sparse Matrices'] },
        { title: 'Unit 2: Trees', topics: ['Binary Trees', 'Binary Search Trees', 'AVL Trees', 'B-Trees & B+ Trees', 'Heap - Min & Max', 'Tree Traversals - Inorder, Preorder, Postorder'] },
        { title: 'Unit 3: Graphs & Hashing', topics: ['Graph Representations', 'BFS & DFS Traversal', 'Topological Sorting', 'Shortest Path Algorithms', 'Minimum Spanning Tree', 'Hashing - Open & Closed Addressing'] },
        { title: 'Unit 4: Sorting & Searching', topics: ['Bubble Sort & Selection Sort', 'Insertion Sort', 'Quick Sort', 'Merge Sort', 'Heap Sort', 'Binary Search & Linear Search'] },
      ]),
    ]},
    { id: 'cs-sem-4', number: 4, subjects: [
      makeSubject('cs-s4-1', 'Software Engineering', '🛠️', [
        { title: 'Unit 1: Software Process Models', topics: ['Waterfall Model', 'Iterative Model', 'Spiral Model', 'Agile Methodology', 'RAD Model', 'V-Model'] },
        { title: 'Unit 2: Requirements & Design', topics: ['Software Requirements Specification', 'Data Flow Diagrams', 'UML Diagrams', 'Design Patterns', 'Coupling & Cohesion', 'Software Architecture'] },
        { title: 'Unit 3: Testing & Maintenance', topics: ['Black Box Testing', 'White Box Testing', 'Integration Testing', 'System & Acceptance Testing', 'Software Maintenance Types', 'Software Quality Assurance'] },
      ]),
      makeSubject('cs-s4-2', 'Algorithm Analysis & Design', '📊', [
        { title: 'Unit 1: Algorithm Analysis', topics: ['Time Complexity Analysis', 'Space Complexity', 'Asymptotic Notations - O, Ω, Θ', 'Recurrence Relations', 'Master Theorem', 'Amortized Analysis'] },
        { title: 'Unit 2: Algorithm Design Paradigms', topics: ['Divide & Conquer - Merge Sort, Quick Sort', 'Greedy Algorithms - Huffman Coding, Kruskal', 'Dynamic Programming - Knapsack, LCS', 'Backtracking - N-Queens, Subset Sum', 'Branch & Bound', 'String Matching Algorithms'] },
        { title: 'Unit 3: Graph Algorithms', topics: ['BFS & DFS Applications', 'Dijkstra\'s Algorithm', 'Bellman-Ford Algorithm', 'Floyd-Warshall Algorithm', 'Minimum Spanning Tree - Prim & Kruskal', 'NP-Completeness & Reducibility'] },
      ]),
      makeSubject('cs-s4-3', 'Digital Circuits & Systems', '🔧', [
        { title: 'Unit 1: Sequential Circuits', topics: ['SR Flip-Flop', 'JK Flip-Flop', 'D & T Flip-Flops', 'Counters - Synchronous & Asynchronous', 'Shift Registers', 'State Machine Design'] },
        { title: 'Unit 2: Memory & PLDs', topics: ['ROM - Types & Applications', 'RAM - SRAM & DRAM', 'PLA & PAL', 'FPGA Basics', 'Memory Organization', 'A/D & D/A Converters'] },
      ]),
      makeSubject('cs-s4-4', 'Communication Systems', '📡', [
        { title: 'Unit 1: Analog Communication', topics: ['Amplitude Modulation', 'Frequency Modulation', 'Phase Modulation', 'AM & FM Receivers', 'Noise in Communication', 'Signal-to-Noise Ratio'] },
        { title: 'Unit 2: Digital Communication', topics: ['Pulse Code Modulation', 'Delta Modulation', 'ASK, FSK, PSK', 'QPSK & QAM', 'Error Detection & Correction', 'Information Theory Basics'] },
      ]),
      makeSubject('cs-s4-5', 'Computer Graphics', '🎨', [
        { title: 'Unit 1: Graphics Primitives', topics: ['DDA Line Drawing Algorithm', 'Bresenham\'s Line Algorithm', 'Circle Drawing - Midpoint Algorithm', 'Polygon Filling Algorithms', 'Line Clipping - Cohen-Sutherland', 'Polygon Clipping - Sutherland-Hodgman'] },
        { title: 'Unit 2: Transformations & Viewing', topics: ['2D Transformations - Translation, Rotation, Scaling', '3D Transformations', 'Composite Transformations', 'Projections - Parallel & Perspective', 'Visible Surface Detection - Z-Buffer', 'Illumination Models'] },
      ]),
      makeSubject('cs-s4-6', 'Operating Systems', '🖥️', [
        { title: 'Unit 1: Process Management', topics: ['Process Concepts & States', 'Process Control Block', 'Threads - User & Kernel', 'CPU Scheduling - FCFS, SJF, RR, Priority', 'Process Synchronization - Semaphores', 'Deadlocks - Prevention, Avoidance, Detection'] },
        { title: 'Unit 2: Memory & File Systems', topics: ['Memory Management - Paging', 'Segmentation', 'Virtual Memory - Demand Paging', 'Page Replacement Algorithms', 'File System Implementation', 'Disk Scheduling Algorithms'] },
      ]),
    ]},
    { id: 'cs-sem-5', number: 5, subjects: [
      makeSubject('cs-s5-1', 'Theory of Computation', '🧮', [
        { title: 'Unit 1: Finite Automata', topics: ['Deterministic Finite Automata (DFA)', 'Non-deterministic Finite Automata (NFA)', 'NFA to DFA Conversion', 'Minimization of DFA', 'Regular Expressions', 'Pumping Lemma for Regular Languages'] },
        { title: 'Unit 2: Context-Free Languages', topics: ['Context-Free Grammars', 'Derivation Trees & Ambiguity', 'Simplification of CFG', 'Chomsky Normal Form', 'Greibach Normal Form', 'Pushdown Automata'] },
        { title: 'Unit 3: Turing Machines', topics: ['Turing Machine Definition', 'TM as Language Acceptor', 'Variants of Turing Machines', 'Recursive & Recursively Enumerable Languages', 'Undecidability - Halting Problem', 'Post Correspondence Problem'] },
        { title: 'Unit 4: Complexity Theory', topics: ['Time Complexity Classes', 'P vs NP Problem', 'NP-Complete Problems', 'Cook\'s Theorem', 'Reduction Techniques', 'Space Complexity'] },
      ]),
      makeSubject('cs-s5-2', 'Analog & Digital Communication', '📡', [
        { title: 'Unit 1: Analog Communication Systems', topics: ['Amplitude Modulation - DSB, SSB', 'Frequency Modulation - Narrowband & Wideband', 'Phase Locked Loop', 'Superheterodyne Receiver', 'Noise Performance of AM & FM', 'Multiplexing - FDM'] },
        { title: 'Unit 2: Digital Communication Systems', topics: ['Sampling & Quantization', 'PCM - Encoding & Decoding', 'DPCM & Adaptive DPCM', 'Digital Modulation - ASK, FSK, PSK, DPSK', 'Spread Spectrum Techniques', 'Error Control Coding - Hamming, CRC'] },
      ]),
      makeSubject('cs-s5-3', 'Computer Architecture', '🖥️', [
        { title: 'Unit 1: CPU Organization', topics: ['Instruction Set Architecture', 'Addressing Modes', 'ALU Design', 'Control Unit - Hardwired & Microprogrammed', 'Instruction Pipelining', 'Pipeline Hazards & Solutions'] },
        { title: 'Unit 2: Memory System', topics: ['Memory Hierarchy', 'Cache Memory - Mapping Techniques', 'Cache Replacement Policies', 'Virtual Memory Implementation', 'Main Memory Organization', 'Interleaved Memory'] },
        { title: 'Unit 3: I/O Organization', topics: ['I/O Interface', 'Programmed I/O & Interrupt-Driven I/O', 'DMA Transfer', 'I/O Processors', 'Bus Architecture', 'Multiprocessor Systems'] },
      ]),
      makeSubject('cs-s5-4', 'Digital Signal Processing', '📊', [
        { title: 'Unit 1: Discrete-Time Signals & Systems', topics: ['Discrete-Time Signals', 'LTI Systems & Convolution', 'Z-Transform & Properties', 'Inverse Z-Transform', 'System Function & Stability', 'Frequency Response'] },
        { title: 'Unit 2: DFT & FFT', topics: ['Discrete Fourier Transform', 'Properties of DFT', 'Linear & Circular Convolution', 'FFT - Decimation in Time', 'FFT - Decimation in Frequency', 'Applications of FFT'] },
        { title: 'Unit 3: Digital Filter Design', topics: ['FIR Filter Design - Window Method', 'FIR Filter - Frequency Sampling', 'IIR Filter - Impulse Invariance', 'IIR Filter - Bilinear Transformation', 'Butterworth & Chebyshev Filters', 'Filter Realization Structures'] },
      ]),
      makeSubject('cs-s5-5', 'Object Oriented Software Engineering', '🛠️', [
        { title: 'Unit 1: OO Analysis', topics: ['Object-Oriented Paradigm', 'UML Overview', 'Use Case Diagrams', 'Class Diagrams', 'Sequence Diagrams', 'Activity & State Diagrams'] },
        { title: 'Unit 2: OO Design & Patterns', topics: ['Design Principles - SOLID', 'Creational Patterns - Singleton, Factory', 'Structural Patterns - Adapter, Decorator', 'Behavioral Patterns - Observer, Strategy', 'Architectural Patterns - MVC, MVP', 'Component-Based Development'] },
      ]),
      makeSubject('cs-s5-6', 'Digital Design Using VHDL', '🔧', [
        { title: 'Unit 1: VHDL Basics', topics: ['VHDL Language Elements', 'Data Types & Objects', 'Concurrent Statements', 'Sequential Statements', 'Structural Modeling', 'Behavioral Modeling'] },
        { title: 'Unit 2: VHDL Applications', topics: ['Combinational Circuit Design in VHDL', 'Sequential Circuit Design in VHDL', 'Finite State Machines in VHDL', 'Test Bench Writing', 'Simulation & Synthesis', 'FPGA Implementation'] },
      ]),
    ]},
    { id: 'cs-sem-6', number: 6, subjects: [
      makeSubject('cs-s6-1', 'Microprocessors', '🔧', [
        { title: 'Unit 1: 8085 Microprocessor', topics: ['8085 Architecture', 'Pin Configuration', 'Instruction Set - Data Transfer, Arithmetic', 'Instruction Set - Logical, Branch, Machine Control', 'Addressing Modes', 'Assembly Language Programming'] },
        { title: 'Unit 2: 8086 Microprocessor', topics: ['8086 Architecture', 'Memory Segmentation', '8086 Instruction Set', 'Assembly Programming - 8086', 'Interrupts & Interrupt Service Routines', 'Interfacing - 8255 PPI, 8253 Timer'] },
        { title: 'Unit 3: Advanced Processors', topics: ['80386 Architecture Overview', '80486 Features', 'Pentium Architecture', 'Cache & Pipelining in x86', 'Protected Mode', 'Virtual 8086 Mode'] },
      ]),
      makeSubject('cs-s6-2', 'Computer Networks', '🌐', [
        { title: 'Unit 1: Network Fundamentals', topics: ['OSI Model & TCP/IP Model', 'Physical Layer - Transmission Media', 'Data Link Layer - Framing & Error Control', 'MAC Sublayer - Ethernet, Wi-Fi', 'Switching - Circuit, Packet, Message', 'Network Topologies'] },
        { title: 'Unit 2: Network Layer', topics: ['IP Addressing - IPv4 & IPv6', 'Subnetting & CIDR', 'Routing Algorithms - Distance Vector, Link State', 'Routing Protocols - RIP, OSPF, BGP', 'ICMP & ARP', 'NAT & DHCP'] },
        { title: 'Unit 3: Transport & Application Layer', topics: ['TCP - Connection Management, Flow Control', 'UDP - Features & Applications', 'Congestion Control Algorithms', 'DNS - Domain Name System', 'HTTP & HTTPS', 'Email Protocols - SMTP, POP3, IMAP'] },
      ]),
      makeSubject('cs-s6-3', 'Algorithm Analysis & Design – II', '📊', [
        { title: 'Unit 1: Advanced Algorithms', topics: ['Randomized Algorithms', 'Approximation Algorithms', 'Online Algorithms', 'Parallel Algorithms', 'Network Flow Algorithms', 'Linear Programming'] },
        { title: 'Unit 2: Computational Geometry', topics: ['Convex Hull Algorithms', 'Line Segment Intersection', 'Closest Pair of Points', 'Voronoi Diagrams', 'Computational Complexity Revisited', 'Advanced Graph Algorithms'] },
      ]),
      makeSubject('cs-s6-4', 'Compiler Design', '⚙️', [
        { title: 'Unit 1: Lexical & Syntax Analysis', topics: ['Compiler Phases Overview', 'Lexical Analysis - Regular Expressions & Finite Automata', 'LEX Tool', 'Syntax Analysis - Top-Down Parsing', 'LL(1) Parsing', 'Bottom-Up Parsing - SLR, CLR, LALR'] },
        { title: 'Unit 2: Semantic Analysis & Code Generation', topics: ['Syntax-Directed Translation', 'Type Checking', 'Intermediate Code Generation - Three Address Code', 'Code Optimization Techniques', 'Code Generation', 'Register Allocation'] },
      ]),
      makeSubject('cs-s6-5', 'Database Management Systems', '🗄️', [
        { title: 'Unit 1: Relational Model & SQL', topics: ['ER Model & ER Diagrams', 'Relational Algebra', 'SQL - DDL, DML, DCL', 'Joins & Subqueries', 'Views & Indexes', 'Normalization - 1NF, 2NF, 3NF, BCNF'] },
        { title: 'Unit 2: Transaction Management', topics: ['ACID Properties', 'Serializability', 'Concurrency Control - Lock-Based, Timestamp', 'Deadlock Handling', 'Recovery Techniques - Log-Based, Checkpointing', 'NoSQL Databases Overview'] },
      ]),
    ]},
    { id: 'cs-sem-7', number: 7, subjects: [
      makeSubject('cs-s7-1', 'Advanced Computer Networks', '🌐', [
        { title: 'Unit 1: Network Security', topics: ['Cryptography - Symmetric & Asymmetric', 'DES & AES Algorithms', 'RSA Algorithm', 'Digital Signatures', 'SSL/TLS Protocol', 'Firewall & VPN'] },
        { title: 'Unit 2: Wireless & Mobile Networks', topics: ['Wireless LAN - IEEE 802.11', 'Bluetooth & Zigbee', 'Mobile IP', 'Ad-hoc Networks', 'Cellular Networks - GSM, CDMA', 'IoT Networking Protocols'] },
      ]),
      makeSubject('cs-s7-2', 'Software Testing', '🧪', [
        { title: 'Unit 1: Testing Fundamentals', topics: ['Testing Principles & Strategies', 'Test Case Design', 'Boundary Value Analysis', 'Equivalence Partitioning', 'Decision Table Testing', 'State Transition Testing'] },
        { title: 'Unit 2: Advanced Testing', topics: ['Integration Testing Approaches', 'System Testing', 'Performance Testing', 'Security Testing', 'Test Automation - Selenium', 'Continuous Integration & Testing'] },
      ]),
      makeSubject('cs-s7-3', 'Artificial Intelligence', '🤖', [
        { title: 'Unit 1: AI Foundations', topics: ['Introduction to AI', 'Intelligent Agents', 'Search Strategies - BFS, DFS, A*', 'Heuristic Search', 'Constraint Satisfaction Problems', 'Adversarial Search - Minimax, Alpha-Beta'] },
        { title: 'Unit 2: Knowledge & Learning', topics: ['Knowledge Representation', 'Propositional & First-Order Logic', 'Inference Techniques', 'Machine Learning Basics', 'Decision Trees', 'Neural Networks Introduction'] },
      ]),
      makeSubject('cs-s7-4', 'Distributed Systems', '🔗', [
        { title: 'Unit 1: Distributed Computing', topics: ['Distributed System Models', 'Inter-Process Communication', 'Remote Procedure Calls', 'Clock Synchronization', 'Mutual Exclusion in Distributed Systems', 'Distributed Deadlock Detection'] },
        { title: 'Unit 2: Distributed Services', topics: ['Distributed File Systems', 'Name Services', 'Distributed Transactions', 'Replication & Consistency', 'Cloud Computing Models', 'Distributed Databases'] },
      ]),
      makeSubject('cs-s7-5', 'Digital Image Processing', '🖼️', [
        { title: 'Unit 1: Image Fundamentals', topics: ['Digital Image Fundamentals', 'Image Sampling & Quantization', 'Spatial Domain Filtering', 'Frequency Domain Filtering', 'Image Enhancement Techniques', 'Histogram Processing'] },
        { title: 'Unit 2: Image Segmentation & Compression', topics: ['Edge Detection Algorithms', 'Image Segmentation - Thresholding', 'Region-Based Segmentation', 'Morphological Processing', 'Image Compression - Lossy & Lossless', 'JPEG & MPEG Standards'] },
      ]),
    ]},
    { id: 'cs-sem-8', number: 8, subjects: [
      makeSubject('cs-s8-1', 'Technical Writing', '📝', [
        { title: 'Unit 1: Technical Documentation', topics: ['Technical Writing Principles', 'Document Planning & Structure', 'Writing Technical Reports', 'Research Paper Writing', 'IEEE Paper Format', 'Plagiarism & Ethics'] },
        { title: 'Unit 2: Professional Communication', topics: ['Presentation Skills', 'Project Documentation', 'User Manual Writing', 'API Documentation', 'Technical Blogging', 'Review & Editing'] },
      ]),
      makeSubject('cs-s8-2', 'Advanced Database Management Systems', '🗄️', [
        { title: 'Unit 1: Advanced Data Models', topics: ['Object-Oriented Databases', 'Object-Relational Mapping', 'XML Databases', 'Distributed Databases', 'Data Warehousing Concepts', 'OLAP & Data Mining'] },
        { title: 'Unit 2: Modern Databases', topics: ['NoSQL Databases - MongoDB, Cassandra', 'Key-Value Stores', 'Graph Databases', 'NewSQL Databases', 'Cloud Databases', 'Big Data Technologies'] },
      ]),
      makeSubject('cs-s8-3', 'Soft Computing', '🧠', [
        { title: 'Unit 1: Neural Networks', topics: ['Biological Neural Networks', 'Perceptron & Multi-Layer Perceptron', 'Backpropagation Algorithm', 'Radial Basis Function Networks', 'Self-Organizing Maps', 'Hopfield Networks'] },
        { title: 'Unit 2: Fuzzy Logic & Genetic Algorithms', topics: ['Fuzzy Sets & Membership Functions', 'Fuzzy Logic Operations', 'Fuzzy Inference Systems', 'Genetic Algorithm - Selection, Crossover, Mutation', 'Genetic Programming', 'Hybrid Systems - Neuro-Fuzzy'] },
      ]),
      makeSubject('cs-s8-4', 'Natural Language Processing', '💬', [
        { title: 'Unit 1: NLP Fundamentals', topics: ['Introduction to NLP', 'Morphological Analysis', 'Part-of-Speech Tagging', 'Syntactic Parsing', 'Semantic Analysis', 'Word Embeddings - Word2Vec, GloVe'] },
        { title: 'Unit 2: NLP Applications', topics: ['Text Classification', 'Sentiment Analysis', 'Named Entity Recognition', 'Machine Translation', 'Question Answering Systems', 'Chatbots & Dialogue Systems'] },
      ]),
      makeSubject('cs-s8-5', 'Advanced Computer Architecture', '🖥️', [
        { title: 'Unit 1: Parallel Processing', topics: ['Flynn\'s Classification', 'Pipelining - Instruction & Arithmetic', 'Vector Processing', 'Array Processors', 'Multiprocessor Architecture', 'Interconnection Networks'] },
        { title: 'Unit 2: Modern Architectures', topics: ['RISC vs CISC', 'Superscalar Architecture', 'VLIW Architecture', 'Multi-core Processors', 'GPU Architecture', 'Quantum Computing Basics'] },
      ]),
      makeSubject('cs-s8-6', 'Major Project', '🎓', [
        { title: 'Unit 1: Project Planning', topics: ['Problem Identification', 'Literature Survey', 'Feasibility Study', 'Project Proposal Writing', 'System Requirements Analysis', 'Project Timeline & Milestones'] },
        { title: 'Unit 2: Implementation & Documentation', topics: ['System Design & Architecture', 'Implementation & Coding', 'Testing & Validation', 'Results & Analysis', 'Project Report Writing', 'Presentation & Viva-Voce'] },
      ]),
    ]},
  ],
};

// ===================== IT BRANCH (IPU Syllabus - All 8 Semesters) =====================
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
        { title: 'Unit 1: Complex Variables', topics: ['Analytic Functions', 'Cauchy-Riemann Equations', 'Complex Integration', 'Cauchy\'s Theorem', 'Laurent Series', 'Residue Theorem'] },
        { title: 'Unit 2: Probability & Statistics', topics: ['Random Variables', 'Binomial & Poisson Distributions', 'Normal Distribution', 'Hypothesis Testing', 'Chi-Square Test', 'Regression & Correlation'] },
      ]),
      makeSubject('it-s3-2', 'Data Structures', '🗂️', [
        { title: 'Unit 1: Linear Data Structures', topics: ['Arrays & Operations', 'Singly Linked List', 'Doubly & Circular Linked Lists', 'Stacks - Array & Linked Implementation', 'Queue - Circular & Priority', 'Applications of Stacks & Queues'] },
        { title: 'Unit 2: Non-Linear Data Structures', topics: ['Binary Trees & Traversals', 'Binary Search Trees', 'AVL Trees', 'Graphs - Representations', 'BFS & DFS', 'Hashing Techniques'] },
      ]),
      makeSubject('it-s3-3', 'Analog Electronics', '📡', [
        { title: 'Unit 1: Semiconductor Devices', topics: ['p-n Junction Diode', 'Rectifiers & Filters', 'BJT - Construction & Working', 'FET & MOSFET', 'Biasing Circuits', 'Small Signal Analysis'] },
        { title: 'Unit 2: Amplifiers & Op-Amps', topics: ['CE Amplifier', 'Feedback Amplifiers', 'Oscillators - RC, LC', 'Op-Amp - Ideal & Practical', 'Op-Amp Applications', 'Power Amplifiers'] },
      ]),
      makeSubject('it-s3-4', 'Object Oriented Programming (C++)', '💻', [
        { title: 'Unit 1: OOP Concepts', topics: ['Classes & Objects', 'Constructors & Destructors', 'Inheritance - Types', 'Polymorphism - Compile & Runtime', 'Encapsulation & Abstraction', 'Friend Functions'] },
        { title: 'Unit 2: Advanced C++', topics: ['Templates - Function & Class', 'STL - Containers & Iterators', 'Exception Handling', 'File I/O', 'Operator Overloading', 'Namespaces'] },
      ]),
      makeSubject('it-s3-5', 'Digital Logic Design', '🔌', [
        { title: 'Unit 1: Combinational Logic', topics: ['Boolean Algebra', 'K-Map Simplification', 'Multiplexers & Demultiplexers', 'Decoders & Encoders', 'Adders & Subtractors', 'Comparators'] },
        { title: 'Unit 2: Sequential Logic', topics: ['SR, JK, D, T Flip-Flops', 'Counters - Ripple & Synchronous', 'Shift Registers', 'State Machine Design', 'Memory Devices', 'PLDs - PLA & PAL'] },
      ]),
      makeSubject('it-s3-6', 'Discrete Mathematics', '🔢', [
        { title: 'Unit 1: Logic & Proofs', topics: ['Propositional Logic', 'Predicate Logic', 'Proof Techniques', 'Mathematical Induction', 'Sets, Relations & Functions', 'Lattices & Boolean Algebra'] },
        { title: 'Unit 2: Graph Theory & Combinatorics', topics: ['Graph Types & Properties', 'Euler & Hamiltonian Paths', 'Trees & Spanning Trees', 'Counting Principles', 'Permutations & Combinations', 'Recurrence Relations'] },
      ]),
    ]},
    { id: 'it-sem-4', number: 4, subjects: [
      makeSubject('it-s4-1', 'Software Engineering', '🛠️', [
        { title: 'Unit 1: SDLC Models', topics: ['Waterfall Model', 'Agile & Scrum', 'Spiral Model', 'V-Model', 'Prototyping', 'DevOps Concepts'] },
        { title: 'Unit 2: Design & Testing', topics: ['UML Diagrams', 'Software Design Principles', 'Testing Strategies', 'Test Case Design', 'Software Maintenance', 'Quality Assurance'] },
      ]),
      makeSubject('it-s4-2', 'Algorithm Analysis & Design', '📊', [
        { title: 'Unit 1: Complexity Analysis', topics: ['Big O, Omega, Theta Notations', 'Recurrence Relations', 'Master Theorem', 'Amortized Analysis', 'Best, Worst, Average Case', 'Space-Time Tradeoffs'] },
        { title: 'Unit 2: Algorithm Paradigms', topics: ['Divide & Conquer', 'Greedy Algorithms', 'Dynamic Programming', 'Backtracking', 'Branch & Bound', 'Graph Algorithms'] },
      ]),
      makeSubject('it-s4-3', 'Operating Systems', '🖥️', [
        { title: 'Unit 1: Process Management', topics: ['Process States & PCB', 'Threads & Multithreading', 'CPU Scheduling Algorithms', 'Process Synchronization', 'Semaphores & Monitors', 'Deadlock Detection & Recovery'] },
        { title: 'Unit 2: Memory & Storage', topics: ['Paging & Segmentation', 'Virtual Memory', 'Page Replacement Algorithms', 'File System Implementation', 'Disk Scheduling', 'I/O Management'] },
      ]),
      makeSubject('it-s4-4', 'Database Management Systems', '🗄️', [
        { title: 'Unit 1: Relational Model', topics: ['ER Diagrams & Modeling', 'Relational Algebra', 'SQL - DDL & DML', 'Advanced SQL - Joins & Subqueries', 'Normalization - 1NF to BCNF', 'Views & Indexes'] },
        { title: 'Unit 2: Transactions & Recovery', topics: ['ACID Properties', 'Concurrency Control - Locking', 'Timestamp Ordering', 'Recovery Techniques', 'Indexing - B-Tree & Hashing', 'Distributed Databases'] },
      ]),
      makeSubject('it-s4-5', 'Computer Organization', '🔧', [
        { title: 'Unit 1: CPU Architecture', topics: ['Instruction Set Architecture', 'Addressing Modes', 'ALU Design', 'Control Unit Design', 'Microprogramming', 'RISC vs CISC'] },
        { title: 'Unit 2: Memory & I/O', topics: ['Memory Hierarchy', 'Cache Memory', 'I/O Organization', 'DMA', 'Pipelining', 'Multiprocessor Systems'] },
      ]),
      makeSubject('it-s4-6', 'Communication Systems', '📡', [
        { title: 'Unit 1: Analog & Digital Communication', topics: ['AM, FM, PM Modulation', 'Demodulation Techniques', 'Sampling Theorem', 'PCM & Delta Modulation', 'Digital Modulation - ASK, FSK, PSK', 'Noise & SNR'] },
        { title: 'Unit 2: Data Communication', topics: ['Transmission Media', 'Multiplexing - FDM, TDM', 'Error Detection - CRC, Checksum', 'Error Correction - Hamming Code', 'Data Link Protocols', 'Network Standards'] },
      ]),
    ]},
    { id: 'it-sem-5', number: 5, subjects: [
      makeSubject('it-s5-1', 'Computer Networks', '🌐', [
        { title: 'Unit 1: Network Models', topics: ['OSI Reference Model', 'TCP/IP Model', 'Physical Layer', 'Data Link Layer - Framing', 'Error Control', 'Flow Control'] },
        { title: 'Unit 2: Network & Transport Layer', topics: ['IP Addressing & Subnetting', 'Routing Algorithms', 'TCP & UDP', 'Congestion Control', 'Application Layer Protocols', 'Network Security Basics'] },
      ]),
      makeSubject('it-s5-2', 'Java Programming', '☕', [
        { title: 'Unit 1: Java Fundamentals', topics: ['Java Architecture & JVM', 'Data Types & Operators', 'Control Structures', 'Classes & Objects', 'Inheritance & Interfaces', 'Packages & Access Modifiers'] },
        { title: 'Unit 2: Advanced Java', topics: ['Exception Handling', 'Multithreading', 'Collection Framework', 'I/O Streams', 'JDBC - Database Connectivity', 'Applets & Swing'] },
      ]),
      makeSubject('it-s5-3', 'Web Technologies', '🌍', [
        { title: 'Unit 1: Frontend Technologies', topics: ['HTML5 & Semantic Elements', 'CSS3 & Responsive Design', 'JavaScript Fundamentals', 'DOM Manipulation', 'jQuery Basics', 'Bootstrap Framework'] },
        { title: 'Unit 2: Backend Technologies', topics: ['PHP Programming', 'Server-Side Scripting', 'XML & JSON', 'AJAX', 'Web Services - REST & SOAP', 'MVC Architecture'] },
      ]),
      makeSubject('it-s5-4', 'Theory of Computation', '🧮', [
        { title: 'Unit 1: Automata Theory', topics: ['DFA & NFA', 'Regular Expressions', 'Pumping Lemma', 'Context-Free Grammars', 'Pushdown Automata', 'CFG to PDA Conversion'] },
        { title: 'Unit 2: Computability', topics: ['Turing Machines', 'Recursive & RE Languages', 'Undecidability', 'Rice\'s Theorem', 'Complexity Classes - P, NP', 'NP-Complete Problems'] },
      ]),
      makeSubject('it-s5-5', 'Microprocessors', '🔧', [
        { title: 'Unit 1: 8085 Architecture', topics: ['8085 Pin Diagram', '8085 Instruction Set', 'Assembly Programming', 'Interrupts', 'Timing Diagrams', 'Memory Interfacing'] },
        { title: 'Unit 2: 8086 Architecture', topics: ['8086 Internal Architecture', 'Segmentation', '8086 Instruction Set', 'Interrupts in 8086', 'Peripheral Interfacing', 'DMA Controller'] },
      ]),
      makeSubject('it-s5-6', 'Multimedia Applications', '🎬', [
        { title: 'Unit 1: Multimedia Fundamentals', topics: ['Multimedia Components', 'Text & Typography', 'Digital Audio', 'Digital Images', 'Video Technology', 'Animation Basics'] },
        { title: 'Unit 2: Multimedia Systems', topics: ['Compression Techniques', 'JPEG & MPEG Standards', 'Multimedia Networking', 'Streaming Media', 'Multimedia Authoring Tools', 'Virtual Reality Basics'] },
      ]),
    ]},
    { id: 'it-sem-6', number: 6, subjects: [
      makeSubject('it-s6-1', 'Compiler Design', '⚙️', [
        { title: 'Unit 1: Lexical & Syntax Analysis', topics: ['Compiler Phases', 'Lexical Analysis', 'Regular Expressions & FA', 'Top-Down Parsing - LL(1)', 'Bottom-Up Parsing - SLR, LALR', 'YACC & LEX Tools'] },
        { title: 'Unit 2: Code Generation & Optimization', topics: ['Syntax-Directed Translation', 'Intermediate Code - TAC', 'Type Checking', 'Code Optimization', 'Register Allocation', 'Target Code Generation'] },
      ]),
      makeSubject('it-s6-2', 'Software Project Management', '📋', [
        { title: 'Unit 1: Project Planning', topics: ['Project Management Lifecycle', 'Project Estimation - COCOMO', 'Function Point Analysis', 'Risk Management', 'Project Scheduling - PERT, CPM', 'Resource Allocation'] },
        { title: 'Unit 2: Quality & Configuration', topics: ['Software Quality Metrics', 'Quality Assurance', 'Configuration Management', 'Change Management', 'Software Maintenance', 'Agile Project Management'] },
      ]),
      makeSubject('it-s6-3', 'Information Security', '🔒', [
        { title: 'Unit 1: Cryptography', topics: ['Classical Ciphers', 'DES & AES', 'RSA Algorithm', 'Diffie-Hellman Key Exchange', 'Hash Functions - MD5, SHA', 'Digital Signatures'] },
        { title: 'Unit 2: Network Security', topics: ['Firewalls & IDS', 'SSL/TLS Protocol', 'IPSec', 'Email Security - PGP', 'Web Security', 'Cyber Laws & Ethics'] },
      ]),
      makeSubject('it-s6-4', 'Data Warehousing & Mining', '⛏️', [
        { title: 'Unit 1: Data Warehousing', topics: ['Data Warehouse Architecture', 'Star & Snowflake Schema', 'ETL Process', 'OLAP Operations', 'Metadata Management', 'Data Marts'] },
        { title: 'Unit 2: Data Mining', topics: ['Association Rules - Apriori', 'Classification - Decision Trees, Naive Bayes', 'Clustering - K-Means, Hierarchical', 'Regression Analysis', 'Text Mining', 'Web Mining'] },
      ]),
      makeSubject('it-s6-5', 'Cloud Computing', '☁️', [
        { title: 'Unit 1: Cloud Fundamentals', topics: ['Cloud Computing Models - IaaS, PaaS, SaaS', 'Deployment Models', 'Virtualization Technology', 'Hypervisors', 'Cloud Storage', 'Load Balancing'] },
        { title: 'Unit 2: Cloud Services', topics: ['AWS Services Overview', 'Azure Services Overview', 'Google Cloud Platform', 'Cloud Security', 'Serverless Computing', 'Container Technologies - Docker, Kubernetes'] },
      ]),
    ]},
    { id: 'it-sem-7', number: 7, subjects: [
      makeSubject('it-s7-1', 'Machine Learning', '🤖', [
        { title: 'Unit 1: Supervised Learning', topics: ['Linear Regression', 'Logistic Regression', 'Decision Trees & Random Forest', 'Support Vector Machines', 'K-Nearest Neighbors', 'Model Evaluation - Cross Validation'] },
        { title: 'Unit 2: Unsupervised & Deep Learning', topics: ['K-Means Clustering', 'Hierarchical Clustering', 'PCA - Dimensionality Reduction', 'Neural Networks & Backpropagation', 'Convolutional Neural Networks', 'Recurrent Neural Networks'] },
      ]),
      makeSubject('it-s7-2', 'Mobile Application Development', '📱', [
        { title: 'Unit 1: Android Development', topics: ['Android Architecture', 'Activities & Intents', 'UI Components & Layouts', 'Data Storage - SQLite', 'Networking in Android', 'Services & Broadcast Receivers'] },
        { title: 'Unit 2: Advanced Mobile Development', topics: ['Fragments & Navigation', 'Content Providers', 'Firebase Integration', 'Push Notifications', 'Google Maps API', 'App Publishing'] },
      ]),
      makeSubject('it-s7-3', 'Big Data Analytics', '📊', [
        { title: 'Unit 1: Big Data Ecosystem', topics: ['Introduction to Big Data', 'Hadoop Architecture - HDFS & MapReduce', 'YARN & Cluster Management', 'Hive & HBase', 'Pig Latin', 'Apache Spark'] },
        { title: 'Unit 2: Analytics & Visualization', topics: ['Data Analytics Pipeline', 'Real-Time Analytics - Kafka, Storm', 'Graph Analytics', 'Data Visualization Tools', 'Business Intelligence', 'Case Studies'] },
      ]),
      makeSubject('it-s7-4', 'Internet of Things', '🔗', [
        { title: 'Unit 1: IoT Architecture', topics: ['IoT Overview & Applications', 'IoT Architecture & Protocols', 'Sensors & Actuators', 'Arduino & Raspberry Pi', 'MQTT & CoAP Protocols', 'IoT Communication Standards'] },
        { title: 'Unit 2: IoT Applications', topics: ['Smart Home Systems', 'Industrial IoT', 'Healthcare IoT', 'IoT Security & Privacy', 'Edge Computing', 'IoT Cloud Platforms'] },
      ]),
      makeSubject('it-s7-5', 'Minor Project', '🎯', [
        { title: 'Unit 1: Project Development', topics: ['Problem Statement & Objectives', 'Literature Review', 'System Design', 'Implementation', 'Testing & Results', 'Documentation & Presentation'] },
      ]),
    ]},
    { id: 'it-sem-8', number: 8, subjects: [
      makeSubject('it-s8-1', 'Blockchain Technology', '🔐', [
        { title: 'Unit 1: Blockchain Fundamentals', topics: ['Distributed Ledger Technology', 'Blockchain Architecture', 'Consensus Mechanisms - PoW, PoS', 'Cryptographic Hash Functions', 'Merkle Trees', 'Smart Contracts'] },
        { title: 'Unit 2: Blockchain Applications', topics: ['Ethereum & Solidity', 'Hyperledger Framework', 'DApps Development', 'Cryptocurrency & Tokens', 'Supply Chain Management', 'Blockchain Security'] },
      ]),
      makeSubject('it-s8-2', 'DevOps & CI/CD', '🔄', [
        { title: 'Unit 1: DevOps Practices', topics: ['DevOps Culture & Principles', 'Version Control - Git & GitHub', 'CI/CD Pipelines', 'Jenkins & GitHub Actions', 'Infrastructure as Code - Terraform', 'Configuration Management - Ansible'] },
        { title: 'Unit 2: Containerization & Monitoring', topics: ['Docker - Containers & Images', 'Docker Compose', 'Kubernetes Orchestration', 'Monitoring - Prometheus & Grafana', 'Log Management - ELK Stack', 'Site Reliability Engineering'] },
      ]),
      makeSubject('it-s8-3', 'Cyber Security', '🛡️', [
        { title: 'Unit 1: Security Fundamentals', topics: ['Threat Landscape', 'Vulnerability Assessment', 'Penetration Testing', 'Malware Analysis', 'Incident Response', 'Security Operations Center'] },
        { title: 'Unit 2: Advanced Security', topics: ['Web Application Security - OWASP', 'Network Forensics', 'Cloud Security', 'Mobile Security', 'Ethical Hacking', 'Compliance & Regulations'] },
      ]),
      makeSubject('it-s8-4', 'Major Project', '🎓', [
        { title: 'Unit 1: Project Planning', topics: ['Problem Identification', 'Literature Survey', 'Feasibility Study', 'System Requirements', 'Project Proposal', 'Timeline & Milestones'] },
        { title: 'Unit 2: Implementation & Delivery', topics: ['System Design', 'Coding & Implementation', 'Testing & Validation', 'Results Analysis', 'Project Report', 'Presentation & Viva-Voce'] },
      ]),
    ]},
  ],
};

// ===================== MECHANICAL BRANCH (IPU MAE Syllabus - All 8 Semesters) =====================
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
        { title: 'Unit 1: Numerical Methods', topics: ['Root Finding - Bisection, Newton-Raphson', 'Regula Falsi Method', 'Interpolation - Newton\'s Forward & Backward', 'Lagrange Interpolation', 'Numerical Integration - Trapezoidal & Simpson\'s Rule', 'Numerical Solution of ODE - Euler & Runge-Kutta'] },
        { title: 'Unit 2: Programming', topics: ['MATLAB Introduction', 'Matrix Operations in MATLAB', 'Curve Fitting - Least Squares', 'Error Analysis', 'MATLAB Programming Techniques', 'Numerical Method Implementation'] },
      ]),
      makeSubject('mech-s3-2', 'Electronics', '📡', [
        { title: 'Unit 1: Semiconductor Devices', topics: ['Diode Characteristics', 'Rectifiers & Filters', 'Transistor - BJT Configuration', 'FET & MOSFET', 'Biasing Circuits', 'Transistor Amplifiers'] },
        { title: 'Unit 2: Digital Electronics', topics: ['Logic Gates & Boolean Algebra', 'K-Map Simplification', 'Combinational Circuits', 'Sequential Circuits - Flip-Flops', 'Counters & Registers', 'A/D & D/A Converters'] },
      ]),
      makeSubject('mech-s3-3', 'Thermal Science', '🌡️', [
        { title: 'Unit 1: Thermodynamics', topics: ['Zeroth & First Law', 'Second Law - Entropy', 'Availability & Irreversibility', 'Gas Power Cycles - Carnot, Otto, Diesel', 'Vapour Power Cycles - Rankine', 'Refrigeration Cycles'] },
        { title: 'Unit 2: Heat Transfer', topics: ['Conduction - Fourier Law', 'Convection - Forced & Natural', 'Radiation - Stefan-Boltzmann Law', 'Heat Exchangers - LMTD & NTU', 'Fins & Extended Surfaces', 'Boiling & Condensation'] },
      ]),
      makeSubject('mech-s3-4', 'Mechanics of Solids', '🔩', [
        { title: 'Unit 1: Stress & Strain', topics: ['Simple Stress & Strain', 'Stress-Strain Diagram', 'Mohr\'s Circle', 'Principal Stresses', 'Bending Moment Diagrams', 'Shear Force Diagrams'] },
        { title: 'Unit 2: Deflection & Columns', topics: ['Deflection of Beams - Double Integration', 'Macaulay\'s Method', 'Torsion of Circular Shafts', 'Thin & Thick Cylinders', 'Columns - Euler\'s Formula', 'Rankine\'s Formula'] },
      ]),
      makeSubject('mech-s3-5', 'Production Technology', '🏭', [
        { title: 'Unit 1: Casting & Forming', topics: ['Casting Processes', 'Special Casting - Investment, Die Casting', 'Forging - Open & Closed Die', 'Rolling - Flat & Shape', 'Extrusion & Drawing', 'Powder Metallurgy'] },
        { title: 'Unit 2: Welding & Machining', topics: ['Arc Welding - SMAW, GMAW', 'Gas Welding - Oxy-Acetylene', 'Resistance Welding', 'Turning Operations', 'Milling & Drilling', 'Grinding & Finishing'] },
      ]),
      makeSubject('mech-s3-6', 'Mechanics of Fluids', '💧', [
        { title: 'Unit 1: Fluid Statics', topics: ['Fluid Properties', 'Pressure Measurement - Manometers', 'Buoyancy & Stability', 'Hydrostatic Forces on Surfaces', 'Meta-centric Height', 'Fluid Kinematics'] },
        { title: 'Unit 2: Fluid Dynamics', topics: ['Continuity Equation', 'Bernoulli\'s Equation', 'Momentum Equation', 'Pipe Flow - Laminar & Turbulent', 'Boundary Layer Theory', 'Drag & Lift'] },
      ]),
    ]},
    { id: 'mech-sem-4', number: 4, subjects: [
      makeSubject('mech-s4-1', 'Kinematics & Dynamics of Machines', '⚙️', [
        { title: 'Unit 1: Kinematics', topics: ['Mechanisms & Inversions', 'Velocity Analysis - Instantaneous Centre', 'Acceleration Analysis', 'Cam Profiles & Followers', 'Gear Trains - Simple & Compound', 'Epicyclic Gear Trains'] },
        { title: 'Unit 2: Dynamics', topics: ['Flywheel Design', 'Governors - Porter, Proell, Hartnell', 'Static & Dynamic Balancing', 'Balancing of Rotating Masses', 'Free & Forced Vibrations', 'Damped Vibrations'] },
      ]),
      makeSubject('mech-s4-2', 'Heat Transfer', '🌡️', [
        { title: 'Unit 1: Conduction & Convection', topics: ['Steady State Conduction - Plane Wall, Cylinder', 'Fins - Effectiveness & Efficiency', 'Transient Conduction', 'Forced Convection Correlations', 'Natural Convection', 'Combined Heat Transfer'] },
        { title: 'Unit 2: Radiation & Heat Exchangers', topics: ['Radiation Laws', 'View Factors', 'Radiation Exchange', 'LMTD Method for Heat Exchangers', 'NTU-Effectiveness Method', 'Types of Heat Exchangers'] },
      ]),
      makeSubject('mech-s4-3', 'Manufacturing Machines', '🏭', [
        { title: 'Unit 1: Machine Tools', topics: ['Lathe - Types & Operations', 'Milling Machine - Types & Indexing', 'Drilling Machine', 'Shaping & Planing', 'Boring Machine', 'Broaching'] },
        { title: 'Unit 2: CNC & Automation', topics: ['CNC Programming - G & M Codes', 'CNC Turning Centre', 'CNC Machining Centre', 'Jigs & Fixtures Design', 'Tool Design Principles', 'Flexible Manufacturing Systems'] },
      ]),
      makeSubject('mech-s4-4', 'Electrical Machines', '⚡', [
        { title: 'Unit 1: DC Machines', topics: ['DC Generator Construction', 'EMF Equation', 'DC Motor Types', 'Speed Control Methods', 'Losses & Efficiency', 'Testing of DC Machines'] },
        { title: 'Unit 2: AC Machines', topics: ['Transformers - Construction & EMF Equation', 'Transformer Testing', 'Induction Motor - Working Principle', 'Torque-Speed Characteristics', 'Synchronous Machines', 'Special Motors'] },
      ]),
      makeSubject('mech-s4-5', 'Operation Research', '📊', [
        { title: 'Unit 1: Linear Programming', topics: ['LP Formulation', 'Graphical Method', 'Simplex Method', 'Big M & Two Phase Method', 'Duality Theory', 'Transportation & Assignment Problem'] },
        { title: 'Unit 2: Queueing & Decision Theory', topics: ['Queueing Models - M/M/1, M/M/c', 'Game Theory - Minimax', 'Simulation Techniques', 'Decision Analysis', 'Sequencing Problems', 'Replacement Models'] },
      ]),
      makeSubject('mech-s4-6', 'LAN & Networking', '🌐', [
        { title: 'Unit 1: Network Fundamentals', topics: ['Network Types - LAN, MAN, WAN', 'OSI Model', 'TCP/IP Protocol Suite', 'Ethernet & IEEE 802.3', 'Network Devices', 'IP Addressing & Subnetting'] },
        { title: 'Unit 2: Network Applications', topics: ['DNS & DHCP', 'HTTP & FTP', 'Email Protocols', 'Network Security Basics', 'Wireless Networks', 'Network Administration'] },
      ]),
    ]},
    { id: 'mech-sem-5', number: 5, subjects: [
      makeSubject('mech-s5-1', 'Microprocessors & Applications', '🔧', [
        { title: 'Unit 1: 8085 Microprocessor', topics: ['8085 Architecture', 'Instruction Set', 'Assembly Programming', 'Timing & Control', 'Interrupts', 'Memory Interfacing'] },
        { title: 'Unit 2: 8086 & Interfacing', topics: ['8086 Architecture', '8086 Instruction Set', '8255 PPI Interfacing', '8253 Timer Interfacing', 'A/D & D/A Converter Interfacing', 'Keyboard & Display Interfacing'] },
      ]),
      makeSubject('mech-s5-2', 'Machine Design – I', '⚙️', [
        { title: 'Unit 1: Design Fundamentals', topics: ['Engineering Materials & Properties', 'Design Against Static Failure', 'Factor of Safety', 'Stress Concentration', 'Design Against Fatigue Failure', 'Endurance Limit Modifications'] },
        { title: 'Unit 2: Machine Element Design', topics: ['Shaft Design - Solid & Hollow', 'Key Design', 'Coupling Design', 'Spring Design - Helical & Leaf', 'Bolt & Nut Design', 'Welded Joint Design'] },
      ]),
      makeSubject('mech-s5-3', 'Material Science & Metallurgy', '🔬', [
        { title: 'Unit 1: Material Structure', topics: ['Crystal Structure of Metals', 'Imperfections in Solids', 'Phase Diagrams - Iron-Carbon', 'Heat Treatment Processes', 'TTT Diagrams', 'Case Hardening'] },
        { title: 'Unit 2: Engineering Materials', topics: ['Alloy Steels', 'Cast Iron - Types & Properties', 'Non-Ferrous Alloys', 'Ceramics & Composites', 'Polymers in Engineering', 'Smart Materials'] },
      ]),
      makeSubject('mech-s5-4', 'Measurements & Controls', '📏', [
        { title: 'Unit 1: Measurement Systems', topics: ['Measurement Standards & Errors', 'Transducers - Types & Characteristics', 'Strain Gauges', 'Temperature Measurement', 'Pressure & Flow Measurement', 'Data Acquisition Systems'] },
        { title: 'Unit 2: Control Systems', topics: ['Open & Closed Loop Systems', 'Transfer Functions', 'Block Diagram Reduction', 'Time Response Analysis', 'Stability Analysis - Routh, Bode', 'PID Controller'] },
      ]),
      makeSubject('mech-s5-5', 'Database Management Systems', '🗄️', [
        { title: 'Unit 1: Database Concepts', topics: ['ER Model & ER Diagrams', 'Relational Model', 'SQL - DDL & DML', 'Normalization', 'Indexing', 'Transaction Management'] },
        { title: 'Unit 2: Advanced Topics', topics: ['Concurrency Control', 'Recovery Techniques', 'NoSQL Databases', 'Data Warehousing', 'Distributed Databases', 'Database Security'] },
      ]),
    ]},
    { id: 'mech-sem-6', number: 6, subjects: [
      makeSubject('mech-s6-1', 'Management of Manufacturing Systems', '🏭', [
        { title: 'Unit 1: Production Planning', topics: ['Production Systems', 'Facility Layout', 'Line Balancing', 'Inventory Management - EOQ', 'MRP & MRP II', 'Just-In-Time Manufacturing'] },
        { title: 'Unit 2: Quality & Lean', topics: ['Total Quality Management', 'Statistical Process Control', 'Six Sigma', 'Lean Manufacturing', 'Kaizen & 5S', 'Supply Chain Management'] },
      ]),
      makeSubject('mech-s6-2', 'Machine Design – II', '⚙️', [
        { title: 'Unit 1: Transmission Elements', topics: ['Belt Drives - Flat & V Belt', 'Chain Drives', 'Spur Gear Design', 'Helical Gear Design', 'Bevel Gear Design', 'Worm Gear Design'] },
        { title: 'Unit 2: Bearing & Clutch Design', topics: ['Journal Bearings', 'Rolling Element Bearings', 'Bearing Selection', 'Clutch Design - Single & Multi Plate', 'Brake Design', 'Flywheel Design'] },
      ]),
      makeSubject('mech-s6-3', 'Metrology', '📏', [
        { title: 'Unit 1: Linear & Angular Measurement', topics: ['Standards of Measurement', 'Vernier & Micrometer', 'Comparators', 'Angular Measurement - Bevel Protractor', 'Sine Bar', 'Autocollimator'] },
        { title: 'Unit 2: Surface & Thread Measurement', topics: ['Surface Finish Measurement', 'Gear Measurement', 'Thread Measurement', 'Coordinate Measuring Machine', 'Laser Interferometry', 'Machine Tool Testing'] },
      ]),
      makeSubject('mech-s6-4', 'Fluid Systems', '💧', [
        { title: 'Unit 1: Hydraulic Systems', topics: ['Hydraulic Pumps - Types', 'Hydraulic Motors', 'Hydraulic Cylinders', 'Control Valves', 'Hydraulic Circuits', 'Hydraulic System Design'] },
        { title: 'Unit 2: Pneumatic Systems', topics: ['Compressors - Types', 'Air Treatment', 'Pneumatic Actuators', 'Pneumatic Valves', 'Pneumatic Circuits', 'Electro-Pneumatic Systems'] },
      ]),
      makeSubject('mech-s6-5', 'Metal Cutting & Tool Design', '🔨', [
        { title: 'Unit 1: Metal Cutting Theory', topics: ['Mechanics of Metal Cutting', 'Chip Formation', 'Tool Geometry', 'Tool Life - Taylor\'s Equation', 'Cutting Fluids', 'Machinability'] },
        { title: 'Unit 2: Tool Design', topics: ['Single Point Tool Design', 'Multi-Point Tool Design', 'Tool Materials', 'Jig Design', 'Fixture Design', 'Press Tool Design'] },
      ]),
    ]},
    { id: 'mech-sem-7', number: 7, subjects: [
      makeSubject('mech-s7-1', 'Computer Aided Manufacturing', '🖥️', [
        { title: 'Unit 1: CAM Fundamentals', topics: ['Introduction to CAM', 'CNC Part Programming', 'APT Language', 'Computer Aided Process Planning', 'Group Technology', 'Cellular Manufacturing'] },
        { title: 'Unit 2: FMS & CIM', topics: ['Flexible Manufacturing Systems', 'Automated Material Handling', 'Automated Storage & Retrieval', 'Computer Integrated Manufacturing', 'Industrial Robots', 'Factory of the Future'] },
      ]),
      makeSubject('mech-s7-2', 'Mechatronics', '🤖', [
        { title: 'Unit 1: Mechatronics Systems', topics: ['Introduction to Mechatronics', 'Sensors & Transducers', 'Signal Conditioning', 'Data Acquisition', 'Microcontrollers - 8051', 'PLC Programming'] },
        { title: 'Unit 2: System Integration', topics: ['Actuators - Electric, Hydraulic, Pneumatic', 'System Modeling', 'Control System Design', 'Real-Time Systems', 'Mechatronic System Design', 'Case Studies'] },
      ]),
      makeSubject('mech-s7-3', 'Refrigeration & Air Conditioning', '❄️', [
        { title: 'Unit 1: Refrigeration', topics: ['Vapour Compression Refrigeration', 'Vapour Absorption Refrigeration', 'Refrigerants - Properties & Selection', 'Compressor Design', 'Evaporator & Condenser Design', 'Refrigeration Applications'] },
        { title: 'Unit 2: Air Conditioning', topics: ['Psychrometry', 'Comfort Conditions', 'Cooling Load Estimation', 'Air Distribution Systems', 'Duct Design', 'Central & Unitary AC Systems'] },
      ]),
      makeSubject('mech-s7-4', 'Automotive Engineering', '🚗', [
        { title: 'Unit 1: Automotive Systems', topics: ['IC Engine Design', 'Fuel Systems', 'Ignition Systems', 'Cooling & Lubrication', 'Emission Control', 'Electric & Hybrid Vehicles'] },
        { title: 'Unit 2: Vehicle Dynamics', topics: ['Transmission Systems', 'Clutch & Braking Systems', 'Suspension Systems', 'Steering Mechanisms', 'Vehicle Aerodynamics', 'Autonomous Vehicles'] },
      ]),
      makeSubject('mech-s7-5', 'Minor Project', '🎯', [
        { title: 'Unit 1: Project Work', topics: ['Problem Identification', 'Literature Survey', 'Design & Analysis', 'Fabrication & Testing', 'Results & Documentation', 'Presentation'] },
      ]),
    ]},
    { id: 'mech-sem-8', number: 8, subjects: [
      makeSubject('mech-s8-1', 'Quality Control & Quality Assurance', '✅', [
        { title: 'Unit 1: Quality Control', topics: ['Quality Concepts & Standards', 'Statistical Quality Control', 'Control Charts - X̄, R, p, c', 'Acceptance Sampling', 'Process Capability', 'Taguchi Methods'] },
        { title: 'Unit 2: Quality Assurance', topics: ['ISO 9000 Standards', 'Quality Auditing', 'Total Quality Management', 'Quality Function Deployment', 'Failure Mode & Effect Analysis', 'Reliability Engineering'] },
      ]),
      makeSubject('mech-s8-2', 'Robotics', '🤖', [
        { title: 'Unit 1: Robot Fundamentals', topics: ['Robot Classification', 'Robot Anatomy', 'Forward & Inverse Kinematics', 'D-H Parameters', 'Workspace Analysis', 'Trajectory Planning'] },
        { title: 'Unit 2: Robot Control & Applications', topics: ['Robot Dynamics', 'Joint Control', 'Robot Vision Systems', 'Robot Sensors', 'Robot Programming', 'Industrial Robot Applications'] },
      ]),
      makeSubject('mech-s8-3', 'Finite Element Methods', '🧮', [
        { title: 'Unit 1: FEM Fundamentals', topics: ['Introduction to FEM', 'Variational Methods', 'Weighted Residual Methods', '1D Element Formulation', 'Shape Functions', 'Assembly & Boundary Conditions'] },
        { title: 'Unit 2: FEM Applications', topics: ['2D Elements - CST, LST', 'Isoparametric Formulation', 'FEM for Heat Transfer', 'FEM for Fluid Flow', 'Dynamic Analysis', 'FEM Software - ANSYS'] },
      ]),
      makeSubject('mech-s8-4', 'IC Engines & Emission Control', '🔥', [
        { title: 'Unit 1: IC Engines', topics: ['Engine Classification', 'Thermodynamic Cycles', 'Combustion in SI Engines', 'Combustion in CI Engines', 'Fuel Injection Systems', 'Engine Performance Testing'] },
        { title: 'Unit 2: Emission & Alternative Fuels', topics: ['Engine Emissions - HC, CO, NOx', 'Catalytic Converters', 'Emission Standards - BS VI', 'Alternative Fuels - CNG, LPG, Hydrogen', 'Biofuels', 'Electric Vehicle Technology'] },
      ]),
      makeSubject('mech-s8-5', 'Major Project', '🎓', [
        { title: 'Unit 1: Project Work', topics: ['Problem Definition', 'Design & Analysis', 'Fabrication / Simulation', 'Testing & Validation', 'Project Report', 'Presentation & Viva-Voce'] },
      ]),
    ]},
  ],
};

// ===================== ELECTRICAL BRANCH (IPU Syllabus - All 8 Semesters) =====================
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
        { title: 'Unit 1: Complex Analysis', topics: ['Analytic Functions', 'Cauchy-Riemann Equations', 'Cauchy\'s Theorem', 'Laurent Series', 'Residues & Poles', 'Contour Integration'] },
        { title: 'Unit 2: Transforms', topics: ['Laplace Transform & Applications', 'Inverse Laplace Transform', 'Fourier Series', 'Fourier Transform', 'Z-Transform', 'Applications to Circuits'] },
      ]),
      makeSubject('ee-s3-2', 'Network Analysis', '🔌', [
        { title: 'Unit 1: Circuit Analysis', topics: ['Network Topology', 'Graph Theory in Networks', 'Network Theorems - Thevenin, Norton', 'Coupled Circuits', 'Two-Port Network Parameters', 'Network Functions & Transfer Functions'] },
        { title: 'Unit 2: Transient & Frequency Analysis', topics: ['Transient Response - RL, RC, RLC', 'Sinusoidal Steady State Analysis', 'Resonance - Series & Parallel', 'Filters - Low Pass, High Pass, Band Pass', 'Foster & Cauer Network Synthesis', 'Positive Real Functions'] },
      ]),
      makeSubject('ee-s3-3', 'Analog Electronics', '📡', [
        { title: 'Unit 1: Semiconductor Devices', topics: ['p-n Junction Diode', 'Rectifiers & Regulators', 'BJT - Characteristics & Biasing', 'FET & MOSFET', 'Thyristors - SCR, TRIAC, DIAC', 'Power Electronics Devices'] },
        { title: 'Unit 2: Amplifiers & Oscillators', topics: ['Single Stage CE/CB/CC Amplifiers', 'Multi-Stage Amplifiers', 'Feedback Amplifiers', 'Op-Amp - Ideal Characteristics', 'Op-Amp Applications', 'Oscillators - RC, LC, Crystal'] },
      ]),
      makeSubject('ee-s3-4', 'Electromagnetic Field Theory', '🧲', [
        { title: 'Unit 1: Electrostatics', topics: ['Coulomb\'s Law & Electric Field', 'Gauss\'s Law & Applications', 'Electric Potential', 'Laplace & Poisson Equations', 'Boundary Value Problems', 'Capacitance Calculations'] },
        { title: 'Unit 2: Magnetostatics & EM Waves', topics: ['Biot-Savart Law', 'Ampere\'s Law', 'Magnetic Vector Potential', 'Maxwell\'s Equations', 'EM Wave Propagation', 'Poynting Theorem'] },
      ]),
      makeSubject('ee-s3-5', 'Electrical Machines – I', '⚡', [
        { title: 'Unit 1: DC Machines', topics: ['DC Generator - Construction & EMF Equation', 'Armature Reaction', 'Commutation', 'DC Motor - Types & Characteristics', 'Speed Control - Armature & Field Control', 'Testing & Efficiency'] },
        { title: 'Unit 2: Transformers', topics: ['Construction & Working Principle', 'EMF Equation & Turns Ratio', 'Equivalent Circuit', 'Voltage Regulation', 'OC & SC Tests', 'Three-Phase Transformers'] },
      ]),
      makeSubject('ee-s3-6', 'Measurements & Instrumentation', '📏', [
        { title: 'Unit 1: Measuring Instruments', topics: ['PMMC Instruments', 'Moving Iron Instruments', 'Dynamometer Type Instruments', 'Induction Type Instruments', 'Bridges - Wheatstone, Maxwell, Schering', 'Potentiometers'] },
        { title: 'Unit 2: Electronic Instruments', topics: ['CRO - Construction & Working', 'Digital Multimeter', 'Signal Generators', 'Frequency Counter', 'Transducers - Types & Applications', 'Data Acquisition Systems'] },
      ]),
    ]},
    { id: 'ee-sem-4', number: 4, subjects: [
      makeSubject('ee-s4-1', 'Signals & Systems', '📡', [
        { title: 'Unit 1: Continuous-Time Signals', topics: ['Signal Classification', 'Fourier Series Representation', 'Fourier Transform & Properties', 'Laplace Transform & Applications', 'LTI Systems & Convolution', 'System Stability'] },
        { title: 'Unit 2: Discrete-Time Signals', topics: ['Discrete-Time Signals & Systems', 'Z-Transform & Properties', 'DFT & FFT', 'Sampling Theorem', 'Digital Filter Basics', 'State-Space Analysis'] },
      ]),
      makeSubject('ee-s4-2', 'Digital Electronics', '🔧', [
        { title: 'Unit 1: Combinational Logic', topics: ['Boolean Algebra & Simplification', 'K-Map Method', 'Quine-McCluskey Method', 'Multiplexers & Demultiplexers', 'Decoders & Encoders', 'Adders & Comparators'] },
        { title: 'Unit 2: Sequential Logic', topics: ['SR, JK, D, T Flip-Flops', 'Registers & Shift Registers', 'Counters - Synchronous & Asynchronous', 'Memory Devices - ROM, RAM', 'PLDs & FPGAs', 'A/D & D/A Converters'] },
      ]),
      makeSubject('ee-s4-3', 'Electrical Machines – II', '⚡', [
        { title: 'Unit 1: Induction Machines', topics: ['Three-Phase Induction Motor Construction', 'Rotating Magnetic Field', 'Equivalent Circuit', 'Torque-Speed Characteristics', 'Speed Control Methods', 'Starting Methods'] },
        { title: 'Unit 2: Synchronous Machines', topics: ['Synchronous Generator Construction', 'EMF Equation', 'Armature Reaction', 'Voltage Regulation - EMF, MMF, ZPF Methods', 'Synchronous Motor - V-Curves', 'Power Flow & Stability'] },
      ]),
      makeSubject('ee-s4-4', 'Control Systems', '🎛️', [
        { title: 'Unit 1: Time Domain Analysis', topics: ['Open & Closed Loop Systems', 'Transfer Function Modeling', 'Block Diagram Reduction', 'Signal Flow Graphs - Mason\'s Rule', 'Time Response Analysis', 'Routh-Hurwitz Stability Criterion'] },
        { title: 'Unit 2: Frequency Domain Analysis', topics: ['Bode Plot - Gain & Phase Margin', 'Nyquist Stability Criterion', 'Root Locus Technique', 'Lead, Lag, Lead-Lag Compensators', 'PID Controller Design', 'State-Space Representation'] },
      ]),
      makeSubject('ee-s4-5', 'Power Systems – I', '🔋', [
        { title: 'Unit 1: Power Generation', topics: ['Thermal Power Plant', 'Hydro Power Plant', 'Nuclear Power Plant', 'Gas Turbine Power Plant', 'Solar & Wind Energy', 'Power Plant Economics'] },
        { title: 'Unit 2: Transmission & Distribution', topics: ['Transmission Line Parameters', 'Short, Medium, Long Line Models', 'ABCD Parameters', 'Corona & Insulators', 'Distribution Systems', 'HVDC Transmission'] },
      ]),
      makeSubject('ee-s4-6', 'Numerical Methods & Programming', '💻', [
        { title: 'Unit 1: Numerical Methods', topics: ['Root Finding Methods', 'Interpolation Techniques', 'Numerical Differentiation', 'Numerical Integration', 'Solution of ODE', 'Curve Fitting'] },
        { title: 'Unit 2: Programming', topics: ['C Programming for Engineers', 'MATLAB Programming', 'Matrix Operations', 'Plotting & Visualization', 'Numerical Method Implementation', 'Engineering Applications'] },
      ]),
    ]},
    { id: 'ee-sem-5', number: 5, subjects: [
      makeSubject('ee-s5-1', 'Power Electronics', '⚡', [
        { title: 'Unit 1: Power Semiconductor Devices', topics: ['SCR - Construction & Characteristics', 'SCR Commutation Techniques', 'TRIAC & DIAC', 'Power MOSFET & IGBT', 'Gate Drive Circuits', 'Snubber Circuits'] },
        { title: 'Unit 2: Converters', topics: ['Single Phase Rectifiers - Controlled', 'Three Phase Rectifiers', 'DC-DC Converters - Buck, Boost, Buck-Boost', 'Inverters - Single & Three Phase', 'PWM Techniques', 'AC Voltage Controllers'] },
      ]),
      makeSubject('ee-s5-2', 'Microprocessors & Microcontrollers', '🔧', [
        { title: 'Unit 1: 8085 & 8086', topics: ['8085 Architecture & Instruction Set', '8085 Assembly Programming', '8086 Architecture', '8086 Instruction Set', 'Memory Interfacing', 'I/O Interfacing'] },
        { title: 'Unit 2: 8051 Microcontroller', topics: ['8051 Architecture', 'I/O Ports & Timers', 'Serial Communication', 'Interrupt System', 'Interfacing - LCD, ADC, DAC', 'Embedded C Programming'] },
      ]),
      makeSubject('ee-s5-3', 'Power Systems – II', '🔋', [
        { title: 'Unit 1: Power System Analysis', topics: ['Per Unit System', 'Symmetrical Fault Analysis', 'Symmetrical Components', 'Unsymmetrical Fault Analysis', 'Bus Impedance & Admittance Matrix', 'Load Flow Analysis - Gauss-Seidel, NR'] },
        { title: 'Unit 2: Power System Protection', topics: ['Protective Relays - Types', 'Overcurrent Protection', 'Distance Protection', 'Differential Protection', 'Circuit Breakers', 'Power System Stability'] },
      ]),
      makeSubject('ee-s5-4', 'Digital Signal Processing', '📊', [
        { title: 'Unit 1: Discrete Signals & DFT', topics: ['Discrete-Time Signals', 'LTI Systems', 'Z-Transform', 'DFT & Properties', 'FFT Algorithm', 'Circular Convolution'] },
        { title: 'Unit 2: Digital Filter Design', topics: ['FIR Filter Design', 'IIR Filter Design', 'Butterworth & Chebyshev', 'Window Techniques', 'Filter Structures', 'DSP Applications in Power Systems'] },
      ]),
      makeSubject('ee-s5-5', 'Switchgear & Protection', '🔌', [
        { title: 'Unit 1: Switchgear', topics: ['Circuit Breakers - Oil, Air, SF6, Vacuum', 'Arc Interruption', 'Current Limiting Fuses', 'Isolators & Switches', 'Lightning Arresters', 'Earthing Systems'] },
        { title: 'Unit 2: Protection Systems', topics: ['Generator Protection', 'Transformer Protection', 'Busbar Protection', 'Motor Protection', 'Feeder Protection', 'Numerical Relays'] },
      ]),
    ]},
    { id: 'ee-sem-6', number: 6, subjects: [
      makeSubject('ee-s6-1', 'Electric Drives', '⚡', [
        { title: 'Unit 1: DC Drives', topics: ['Fundamentals of Electric Drives', 'DC Motor Drive - Single Phase', 'DC Motor Drive - Three Phase', 'Chopper Fed DC Drives', 'Four Quadrant Operation', 'Closed Loop Speed Control'] },
        { title: 'Unit 2: AC Drives', topics: ['Induction Motor Drives', 'V/f Control', 'Vector Control', 'Slip Power Recovery', 'Synchronous Motor Drives', 'Stepper & Servo Motor Drives'] },
      ]),
      makeSubject('ee-s6-2', 'Communication Engineering', '📡', [
        { title: 'Unit 1: Analog Communication', topics: ['Amplitude Modulation - AM, DSB-SC, SSB', 'Frequency Modulation', 'Noise in Communication Systems', 'Receivers - Superheterodyne', 'Multiplexing - FDM, TDM', 'Pulse Modulation - PAM, PWM, PPM'] },
        { title: 'Unit 2: Digital Communication', topics: ['PCM & DPCM', 'Digital Modulation - ASK, FSK, PSK', 'Spread Spectrum', 'Error Control Coding', 'Information Theory', 'Optical Fiber Communication'] },
      ]),
      makeSubject('ee-s6-3', 'Computer Networks', '🌐', [
        { title: 'Unit 1: Network Architecture', topics: ['OSI & TCP/IP Models', 'Physical Layer', 'Data Link Layer', 'Network Layer - Routing', 'Transport Layer - TCP & UDP', 'Application Layer Protocols'] },
        { title: 'Unit 2: Network Security', topics: ['Cryptography Basics', 'Network Security Protocols', 'Firewall & VPN', 'Wireless Networks', 'IoT Networking', 'Cloud Computing'] },
      ]),
      makeSubject('ee-s6-4', 'Renewable Energy Sources', '☀️', [
        { title: 'Unit 1: Solar Energy', topics: ['Solar Radiation', 'Photovoltaic Cells', 'Solar PV System Design', 'Maximum Power Point Tracking', 'Solar Thermal Systems', 'Grid-Connected PV Systems'] },
        { title: 'Unit 2: Wind & Other Sources', topics: ['Wind Energy Fundamentals', 'Wind Turbine Design', 'Biomass Energy', 'Fuel Cells', 'Geothermal Energy', 'Energy Storage Systems'] },
      ]),
      makeSubject('ee-s6-5', 'Utilization of Electrical Energy', '💡', [
        { title: 'Unit 1: Electric Heating & Welding', topics: ['Resistance Heating', 'Induction Heating', 'Dielectric Heating', 'Arc Furnaces', 'Resistance Welding', 'Arc Welding'] },
        { title: 'Unit 2: Electric Traction & Illumination', topics: ['Electric Traction Systems', 'Speed-Time Curves', 'Traction Motors', 'Illumination - Laws & Principles', 'Lighting Design', 'LED & Energy Efficient Lighting'] },
      ]),
    ]},
    { id: 'ee-sem-7', number: 7, subjects: [
      makeSubject('ee-s7-1', 'Advanced Control Systems', '🎛️', [
        { title: 'Unit 1: Modern Control', topics: ['State Space Analysis', 'Controllability & Observability', 'State Feedback Design', 'Observer Design', 'Optimal Control - LQR', 'Lyapunov Stability'] },
        { title: 'Unit 2: Digital & Nonlinear Control', topics: ['Sampled Data Systems', 'Z-Domain Analysis', 'Digital Controller Design', 'Nonlinear Systems', 'Describing Function', 'Phase Plane Analysis'] },
      ]),
      makeSubject('ee-s7-2', 'Power System Operation & Control', '🔋', [
        { title: 'Unit 1: Economic Operation', topics: ['Economic Load Dispatch', 'Optimal Power Flow', 'Unit Commitment', 'Hydro-Thermal Scheduling', 'Load Frequency Control', 'AGC - Automatic Generation Control'] },
        { title: 'Unit 2: Power System Dynamics', topics: ['Transient Stability Analysis', 'Equal Area Criterion', 'Multi-Machine Stability', 'FACTS Devices', 'Power System Optimization', 'Smart Grid Concepts'] },
      ]),
      makeSubject('ee-s7-3', 'High Voltage Engineering', '⚡', [
        { title: 'Unit 1: Insulation & Breakdown', topics: ['Breakdown in Gases', 'Breakdown in Solid & Liquid', 'Generation of High Voltages', 'Measurement of High Voltages', 'Insulation Coordination', 'Testing of Materials'] },
        { title: 'Unit 2: Overvoltage Protection', topics: ['Lightning & Switching Overvoltages', 'Protection Against Overvoltages', 'Surge Arresters', 'Insulation Testing', 'High Voltage Testing Standards', 'EHV AC & UHVDC'] },
      ]),
      makeSubject('ee-s7-4', 'Artificial Intelligence', '🤖', [
        { title: 'Unit 1: AI Fundamentals', topics: ['Introduction to AI', 'Search Algorithms', 'Knowledge Representation', 'Expert Systems', 'Fuzzy Logic Systems', 'Neural Networks'] },
        { title: 'Unit 2: AI in Power Systems', topics: ['ANN for Load Forecasting', 'Fuzzy Logic in Control', 'Genetic Algorithms', 'Particle Swarm Optimization', 'Machine Learning for Fault Detection', 'Deep Learning Applications'] },
      ]),
      makeSubject('ee-s7-5', 'Minor Project', '🎯', [
        { title: 'Unit 1: Project Work', topics: ['Problem Definition', 'Literature Review', 'Design & Simulation', 'Hardware Implementation', 'Results & Analysis', 'Documentation'] },
      ]),
    ]},
    { id: 'ee-sem-8', number: 8, subjects: [
      makeSubject('ee-s8-1', 'Power Quality', '⚡', [
        { title: 'Unit 1: Power Quality Issues', topics: ['Voltage Sags & Swells', 'Harmonics - Sources & Effects', 'Power Factor Correction', 'Flicker & Transients', 'Power Quality Standards', 'Monitoring & Measurement'] },
        { title: 'Unit 2: Mitigation', topics: ['Passive Filters', 'Active Power Filters', 'STATCOM', 'DVR - Dynamic Voltage Restorer', 'UPQC', 'Custom Power Devices'] },
      ]),
      makeSubject('ee-s8-2', 'Smart Grid', '🔗', [
        { title: 'Unit 1: Smart Grid Architecture', topics: ['Smart Grid Concepts', 'Advanced Metering Infrastructure', 'Smart Meters', 'Communication Technologies', 'SCADA & EMS', 'Distribution Automation'] },
        { title: 'Unit 2: Smart Grid Applications', topics: ['Demand Response', 'Distributed Generation', 'Microgrid - Design & Operation', 'Electric Vehicle Integration', 'Energy Management Systems', 'Cyber Security in Smart Grid'] },
      ]),
      makeSubject('ee-s8-3', 'VLSI Design', '🔧', [
        { title: 'Unit 1: VLSI Fundamentals', topics: ['MOS Transistor Theory', 'CMOS Logic Design', 'Static CMOS Design', 'Dynamic CMOS Design', 'Layout Design Rules', 'VLSI Fabrication Process'] },
        { title: 'Unit 2: VLSI Systems', topics: ['Combinational VLSI Design', 'Sequential VLSI Design', 'Memory Design', 'FPGA Architecture', 'ASIC Design Flow', 'Low Power VLSI Design'] },
      ]),
      makeSubject('ee-s8-4', 'Major Project', '🎓', [
        { title: 'Unit 1: Project Work', topics: ['Problem Identification', 'System Design', 'Simulation & Implementation', 'Testing & Validation', 'Report Writing', 'Presentation & Viva-Voce'] },
      ]),
    ]},
  ],
};

// ===================== CIVIL BRANCH (IPU Syllabus - All 8 Semesters) =====================
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
        { title: 'Unit 1: Partial Differential Equations', topics: ['Formation of PDE', 'Solution by Direct Integration', 'Method of Separation of Variables', 'Wave Equation', 'Heat Equation', 'Laplace Equation'] },
        { title: 'Unit 2: Complex Analysis & Transforms', topics: ['Analytic Functions', 'Conformal Mapping', 'Complex Integration', 'Laplace Transforms', 'Z-Transforms', 'Fourier Transforms'] },
      ]),
      makeSubject('civil-s3-2', 'Strength of Materials', '🔩', [
        { title: 'Unit 1: Stress Analysis', topics: ['Simple Stress & Strain', 'Elastic Constants & Relations', 'Compound Stress - Mohr\'s Circle', 'Strain Energy', 'Bending Moment Diagrams', 'Shear Force Diagrams'] },
        { title: 'Unit 2: Beams & Columns', topics: ['Theory of Simple Bending', 'Shear Stress Distribution', 'Deflection of Beams', 'Torsion of Circular Shafts', 'Columns - Euler\'s & Rankine\'s', 'Thin Cylinders & Spheres'] },
      ]),
      makeSubject('civil-s3-3', 'Surveying', '📏', [
        { title: 'Unit 1: Basic Surveying', topics: ['Chain Surveying', 'Compass Surveying', 'Plane Table Surveying', 'Levelling - Differential & Profile', 'Contouring', 'Area & Volume Calculation'] },
        { title: 'Unit 2: Advanced Surveying', topics: ['Theodolite Surveying', 'Tacheometry', 'Curve Setting - Simple & Compound', 'Triangulation', 'Remote Sensing & GIS', 'GPS Surveying'] },
      ]),
      makeSubject('civil-s3-4', 'Fluid Mechanics', '💧', [
        { title: 'Unit 1: Fluid Statics', topics: ['Fluid Properties - Viscosity, Surface Tension', 'Pressure Measurement', 'Hydrostatic Forces on Surfaces', 'Buoyancy & Stability', 'Fluid Kinematics', 'Velocity & Acceleration'] },
        { title: 'Unit 2: Fluid Dynamics', topics: ['Bernoulli\'s Equation & Applications', 'Venturimeter & Orifice Meter', 'Pipe Flow - Darcy-Weisbach', 'Minor Losses in Pipes', 'Open Channel Flow Basics', 'Boundary Layer Theory'] },
      ]),
      makeSubject('civil-s3-5', 'Building Materials & Construction', '🏗️', [
        { title: 'Unit 1: Building Materials', topics: ['Cement - Types & Properties', 'Aggregates - Properties & Testing', 'Concrete - Mix Design', 'Steel - Types & Properties', 'Timber - Properties & Seasoning', 'Bricks & Stones'] },
        { title: 'Unit 2: Construction Technology', topics: ['Foundation Types', 'Masonry - Brick & Stone', 'Roofing Systems', 'Flooring & Plastering', 'Doors & Windows', 'Damp Proofing & Waterproofing'] },
      ]),
      makeSubject('civil-s3-6', 'Engineering Geology', '🪨', [
        { title: 'Unit 1: Physical Geology', topics: ['Mineralogy - Identification & Properties', 'Petrology - Igneous, Sedimentary, Metamorphic', 'Weathering & Erosion', 'Geological Structures - Faults, Folds', 'Earthquakes & Seismology', 'Plate Tectonics'] },
        { title: 'Unit 2: Applied Geology', topics: ['Geology of Dams & Reservoirs', 'Geology of Tunnels', 'Groundwater Geology', 'Landslide Assessment', 'Rock Mechanics', 'Geological Site Investigation'] },
      ]),
    ]},
    { id: 'civil-sem-4', number: 4, subjects: [
      makeSubject('civil-s4-1', 'Structural Analysis – I', '🏗️', [
        { title: 'Unit 1: Determinate Structures', topics: ['Types of Structures & Loads', 'Support Reactions', 'Analysis of Trusses', 'Influence Line Diagrams', 'Three-Hinged Arches', 'Cables & Suspension Bridges'] },
        { title: 'Unit 2: Indeterminate Structures', topics: ['Slope Deflection Method', 'Moment Distribution Method', 'Consistent Deformation Method', 'Strain Energy Methods', 'Castigliano\'s Theorem', 'Introduction to Matrix Methods'] },
      ]),
      makeSubject('civil-s4-2', 'Geotechnical Engineering', '🪨', [
        { title: 'Unit 1: Soil Properties', topics: ['Soil Classification - IS & USCS', 'Index Properties', 'Soil Compaction', 'Permeability & Seepage', 'Flow Nets', 'Effective Stress Concept'] },
        { title: 'Unit 2: Soil Mechanics', topics: ['Consolidation - Terzaghi Theory', 'Settlement Calculation', 'Shear Strength - Mohr-Coulomb', 'Earth Pressure - Rankine & Coulomb', 'Bearing Capacity', 'Slope Stability'] },
      ]),
      makeSubject('civil-s4-3', 'Hydraulics & Hydraulic Machines', '💧', [
        { title: 'Unit 1: Hydraulics', topics: ['Open Channel Flow - Chezy & Manning', 'Hydraulic Jump', 'Gradually Varied Flow', 'Flow Measurement - Weirs & Notches', 'Pipe Network Analysis', 'Water Hammer'] },
        { title: 'Unit 2: Hydraulic Machines', topics: ['Pelton Turbine', 'Francis Turbine', 'Kaplan Turbine', 'Centrifugal Pumps', 'Reciprocating Pumps', 'Cavitation & Draft Tubes'] },
      ]),
      makeSubject('civil-s4-4', 'Concrete Technology', '🧱', [
        { title: 'Unit 1: Cement & Aggregates', topics: ['Types of Cement', 'Aggregate Properties & Testing', 'Mix Design - IS & ACI Methods', 'Admixtures - Types & Uses', 'Fresh Concrete Properties', 'Workability Tests'] },
        { title: 'Unit 2: Concrete Properties', topics: ['Strength of Concrete', 'Durability of Concrete', 'Non-Destructive Testing', 'Special Concretes - SCC, HPC, FRC', 'Creep & Shrinkage', 'Quality Control of Concrete'] },
      ]),
      makeSubject('civil-s4-5', 'Environmental Engineering – I', '🌱', [
        { title: 'Unit 1: Water Supply', topics: ['Water Demand & Sources', 'Intake Structures', 'Water Treatment - Sedimentation, Filtration', 'Disinfection Methods', 'Water Distribution Systems', 'Pipe Materials & Design'] },
        { title: 'Unit 2: Wastewater Engineering', topics: ['Sewerage Systems', 'Characteristics of Wastewater', 'Primary & Secondary Treatment', 'Activated Sludge Process', 'Trickling Filters', 'Sludge Treatment & Disposal'] },
      ]),
      makeSubject('civil-s4-6', 'Transportation Engineering – I', '🚗', [
        { title: 'Unit 1: Highway Engineering', topics: ['Highway Planning & Classification', 'Geometric Design of Highways', 'Pavement Design - Flexible & Rigid', 'Bituminous Materials', 'Traffic Engineering', 'Highway Drainage'] },
        { title: 'Unit 2: Railway Engineering', topics: ['Track Components', 'Geometric Design of Track', 'Points & Crossings', 'Signalling Systems', 'Railway Stations & Yards', 'Modern Railway Technologies'] },
      ]),
    ]},
    { id: 'civil-sem-5', number: 5, subjects: [
      makeSubject('civil-s5-1', 'Structural Analysis – II', '🏗️', [
        { title: 'Unit 1: Matrix Methods', topics: ['Stiffness Method', 'Flexibility Method', 'Direct Stiffness Method', 'Analysis of Continuous Beams', 'Analysis of Portal Frames', 'Computer-Aided Structural Analysis'] },
        { title: 'Unit 2: Plastic Analysis', topics: ['Plastic Hinge Concept', 'Plastic Moment of Resistance', 'Upper & Lower Bound Theorems', 'Collapse Load of Beams', 'Collapse Load of Frames', 'Plastic Design Methods'] },
      ]),
      makeSubject('civil-s5-2', 'Design of Steel Structures', '🔩', [
        { title: 'Unit 1: Steel Design Basics', topics: ['Properties of Structural Steel', 'Bolted Connections', 'Welded Connections', 'Design of Tension Members', 'Design of Compression Members', 'Column Bases'] },
        { title: 'Unit 2: Steel Structure Design', topics: ['Design of Beams', 'Plate Girders', 'Gantry Girders', 'Roof Trusses', 'Industrial Buildings', 'IS 800 Provisions'] },
      ]),
      makeSubject('civil-s5-3', 'Foundation Engineering', '🏗️', [
        { title: 'Unit 1: Shallow Foundations', topics: ['Types of Foundations', 'Bearing Capacity Theories', 'Foundation Settlement', 'Isolated & Combined Footings', 'Raft Foundations', 'Machine Foundations'] },
        { title: 'Unit 2: Deep Foundations', topics: ['Pile Foundations - Types', 'Load Carrying Capacity of Piles', 'Pile Group Design', 'Well Foundations', 'Sheet Piles', 'Retaining Walls Design'] },
      ]),
      makeSubject('civil-s5-4', 'Environmental Engineering – II', '🌱', [
        { title: 'Unit 1: Air Pollution', topics: ['Air Pollutants & Sources', 'Effects of Air Pollution', 'Air Quality Standards', 'Air Pollution Control Devices', 'Vehicular Pollution', 'Indoor Air Quality'] },
        { title: 'Unit 2: Solid Waste & Noise', topics: ['Solid Waste Management', 'Collection & Transportation', 'Disposal Methods - Landfill, Incineration', 'Recycling & Composting', 'Hazardous Waste Management', 'Noise Pollution & Control'] },
      ]),
      makeSubject('civil-s5-5', 'Estimation & Costing', '💰', [
        { title: 'Unit 1: Estimation', topics: ['Types of Estimates', 'Methods of Estimation', 'Detailed Estimate of Buildings', 'Estimate of Roads', 'Estimate of Bridges', 'Rate Analysis'] },
        { title: 'Unit 2: Valuation & Contracts', topics: ['Valuation of Buildings', 'Depreciation Methods', 'Contract Types & Management', 'Specifications', 'Bill of Quantities', 'Tender & Contract Documents'] },
      ]),
      makeSubject('civil-s5-6', 'Hydrology & Irrigation', '💧', [
        { title: 'Unit 1: Hydrology', topics: ['Hydrological Cycle', 'Precipitation - Types & Measurement', 'Runoff Estimation', 'Hydrograph Analysis', 'Flood Routing', 'Groundwater Hydrology'] },
        { title: 'Unit 2: Irrigation Engineering', topics: ['Water Requirement of Crops', 'Irrigation Methods', 'Canal Design - Kennedy & Lacey', 'Canal Headworks', 'Cross Drainage Works', 'Dam Types & Design'] },
      ]),
    ]},
    { id: 'civil-sem-6', number: 6, subjects: [
      makeSubject('civil-s6-1', 'Design of RCC Structures', '🏗️', [
        { title: 'Unit 1: RCC Design Basics', topics: ['Working Stress Method', 'Limit State Method', 'Design of Slabs - One Way & Two Way', 'Design of Beams - Singly & Doubly', 'Design of T-Beams', 'IS 456 Provisions'] },
        { title: 'Unit 2: RCC Structural Design', topics: ['Design of Columns - Short & Long', 'Design of Footings', 'Design of Staircases', 'Design of Retaining Walls', 'Design of Water Tanks', 'Prestressed Concrete Basics'] },
      ]),
      makeSubject('civil-s6-2', 'Transportation Engineering – II', '🚗', [
        { title: 'Unit 1: Airport Engineering', topics: ['Airport Planning', 'Airport Layout', 'Runway Design', 'Taxiway & Apron', 'Terminal Building', 'Airport Drainage & Lighting'] },
        { title: 'Unit 2: Harbor & Tunnel Engineering', topics: ['Harbor - Types & Layout', 'Breakwaters', 'Docks & Jetties', 'Tunnel - Types & Construction', 'Tunnel Ventilation', 'Bridge Engineering Basics'] },
      ]),
      makeSubject('civil-s6-3', 'Construction Management', '📋', [
        { title: 'Unit 1: Project Management', topics: ['Project Planning & Scheduling', 'CPM & PERT', 'Resource Allocation', 'Project Monitoring & Control', 'Construction Equipment', 'Safety in Construction'] },
        { title: 'Unit 2: Contract Management', topics: ['Contract Administration', 'Quality Management', 'Cost Control', 'Legal Aspects', 'Arbitration & Dispute Resolution', 'BIM - Building Information Modeling'] },
      ]),
      makeSubject('civil-s6-4', 'Remote Sensing & GIS', '🛰️', [
        { title: 'Unit 1: Remote Sensing', topics: ['Electromagnetic Spectrum', 'Satellite Systems', 'Image Interpretation', 'Digital Image Processing', 'LiDAR Technology', 'Applications in Civil Engineering'] },
        { title: 'Unit 2: GIS', topics: ['GIS Components & Data Models', 'Spatial Data Analysis', 'Map Projection & Coordinate Systems', 'Overlay Analysis', 'Network Analysis', 'GIS Applications in Infrastructure'] },
      ]),
      makeSubject('civil-s6-5', 'Earthquake Engineering', '🌍', [
        { title: 'Unit 1: Seismology', topics: ['Earthquake Causes & Types', 'Seismic Waves', 'Earthquake Parameters', 'Seismic Hazard Analysis', 'IS 1893 Provisions', 'Response Spectrum Method'] },
        { title: 'Unit 2: Earthquake Resistant Design', topics: ['Ductile Detailing', 'Seismic Design of Buildings', 'Base Isolation', 'Retrofitting Techniques', 'Liquefaction', 'Seismic Analysis of Structures'] },
      ]),
    ]},
    { id: 'civil-sem-7', number: 7, subjects: [
      makeSubject('civil-s7-1', 'Prestressed Concrete', '🏗️', [
        { title: 'Unit 1: Prestressing Principles', topics: ['Concept of Prestressing', 'Methods - Pre-tensioning & Post-tensioning', 'Losses in Prestress', 'Analysis of Prestressed Sections', 'Flexural Strength', 'Shear Strength'] },
        { title: 'Unit 2: Design of Prestressed Elements', topics: ['Design of Beams', 'Design of Slabs', 'End Block Design', 'Composite Construction', 'Circular Prestressing', 'Bridge Design Basics'] },
      ]),
      makeSubject('civil-s7-2', 'Urban Planning', '🏙️', [
        { title: 'Unit 1: Town Planning', topics: ['History of Town Planning', 'Planning Standards & Regulations', 'Land Use Planning', 'Zoning Regulations', 'Building Bye-Laws', 'Master Plan Preparation'] },
        { title: 'Unit 2: Infrastructure Planning', topics: ['Transportation Planning', 'Water Supply Planning', 'Sewerage Planning', 'Green Building Concepts', 'Smart City Planning', 'Sustainable Development'] },
      ]),
      makeSubject('civil-s7-3', 'Advanced Structural Design', '🔩', [
        { title: 'Unit 1: Advanced RCC', topics: ['Flat Slabs Design', 'Grid Floor Design', 'Shear Walls', 'Deep Beams', 'Tall Building Design Concepts', 'Wind Load Analysis'] },
        { title: 'Unit 2: Bridge Engineering', topics: ['Types of Bridges', 'Bridge Loading - IRC Standards', 'RCC Bridge Design', 'Steel Bridge Design', 'Foundation for Bridges', 'Bridge Bearings'] },
      ]),
      makeSubject('civil-s7-4', 'Pavement Design', '🛣️', [
        { title: 'Unit 1: Flexible Pavements', topics: ['Subgrade Evaluation', 'Pavement Materials', 'Flexible Pavement Design - IRC Method', 'Bituminous Mix Design', 'Pavement Evaluation', 'Pavement Distress & Maintenance'] },
        { title: 'Unit 2: Rigid Pavements', topics: ['Rigid Pavement Design', 'Joints in Concrete Pavements', 'Cement Concrete Mix Design', 'White-topping', 'Pavement Management System', 'Highway Materials Testing'] },
      ]),
      makeSubject('civil-s7-5', 'Minor Project', '🎯', [
        { title: 'Unit 1: Project Work', topics: ['Problem Identification', 'Literature Survey', 'Methodology', 'Analysis & Design', 'Results & Discussion', 'Documentation'] },
      ]),
    ]},
    { id: 'civil-sem-8', number: 8, subjects: [
      makeSubject('civil-s8-1', 'Environmental Impact Assessment', '🌱', [
        { title: 'Unit 1: EIA Framework', topics: ['EIA Concepts & Objectives', 'EIA Methodology', 'Environmental Baseline Data', 'Impact Prediction & Assessment', 'EIA Report Preparation', 'Environmental Clearance Process'] },
        { title: 'Unit 2: Environmental Management', topics: ['Environmental Management Plan', 'Environmental Monitoring', 'Environmental Audit', 'Life Cycle Assessment', 'Corporate Environmental Responsibility', 'Sustainable Construction'] },
      ]),
      makeSubject('civil-s8-2', 'Advanced Foundation Engineering', '🏗️', [
        { title: 'Unit 1: Ground Improvement', topics: ['Soil Stabilization Methods', 'Ground Improvement Techniques', 'Geosynthetics', 'Stone Columns', 'Grouting Techniques', 'Dewatering Methods'] },
        { title: 'Unit 2: Special Foundations', topics: ['Raft Foundation Design', 'Pile Raft Foundation', 'Under-reamed Piles', 'Caisson Foundations', 'Foundation on Expansive Soils', 'Foundations in Seismic Zones'] },
      ]),
      makeSubject('civil-s8-3', 'Water Resources Engineering', '💧', [
        { title: 'Unit 1: Water Resources Planning', topics: ['Water Resources Development', 'River Basin Planning', 'Reservoir Planning', 'Inter-Basin Water Transfer', 'Flood Control Measures', 'Drought Management'] },
        { title: 'Unit 2: Advanced Hydraulics', topics: ['Unsteady Flow', 'Sediment Transport', 'River Engineering', 'Coastal Engineering', 'Computational Hydraulics', 'Climate Change & Water Resources'] },
      ]),
      makeSubject('civil-s8-4', 'Major Project', '🎓', [
        { title: 'Unit 1: Project Work', topics: ['Problem Definition', 'Design & Analysis', 'Experimental/Analytical Work', 'Results & Interpretation', 'Report Writing', 'Presentation & Viva-Voce'] },
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
