import { Course, Subject, Resource } from '../types';

export const COURSES: Course[] = [
  {
    id: 'mca',
    code: 'MCA',
    name: 'Master of Computer Applications',
    duration: '2 Years (4 Semesters)',
    status: 'active',
    description: 'Comprehensive graduate programme in computer applications, software engineering, and applied computing affiliated with Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV).',
    semesters: [
      {
        number: 1,
        title: 'Semester I',
        description: 'Programming in C with Data Structure, Statistical Mathematics, Operating System & Architecture, Information Technology, and Communication Skills',
        totalCredits: 24,
        syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-1_a0cc93e3.pdf'
      },
      {
        number: 2,
        title: 'Semester II',
        description: 'DBMS, Computer Networks, Software Engineering & UML, Algorithm Design, and Java & OOPS',
        totalCredits: 24,
        syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-2_7721c943.pdf'
      },
      {
        number: 3,
        title: 'Semester III',
        description: 'Python, Distributed System, Internet of Things (IoT), Artificial Intelligence, and Data Mining',
        totalCredits: 24,
        syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-3_8353c851.pdf'
      },
      {
        number: 4,
        title: 'Semester IV',
        description: 'Provisional Curriculum: Advanced Python, Advanced Distributed Systems, Advanced IoT, Advanced Artificial Intelligence, and Advanced Data Mining (Subject to confirmation)',
        totalCredits: 20,
        syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-4_05732143.pdf'
      },
    ]
  },
  {
    id: 'btech',
    code: 'B.Tech',
    name: 'Bachelor of Technology (CSE)',
    duration: '4 Years (8 Semesters)',
    status: 'coming_soon',
    description: 'Undergraduate engineering syllabus resources and core computer science curriculums are currently being compiled.',
    semesters: []
  },
  {
    id: 'mba',
    code: 'MBA',
    name: 'Master of Business Administration',
    duration: '2 Years (4 Semesters)',
    status: 'coming_soon',
    description: 'Postgraduate business management, marketing, finance, and organizational leadership curriculum under compilation.',
    semesters: []
  },
  {
    id: 'pharmacy',
    code: 'B.Pharm',
    name: 'Bachelor of Pharmacy',
    duration: '4 Years (8 Semesters)',
    status: 'coming_soon',
    description: 'Pharmaceutical sciences resources, medicinal chemistry, and pharmacology curriculums under curation.',
    semesters: []
  },
  {
    id: 'llb',
    code: 'LLB',
    name: 'Bachelor of Legislative Law',
    duration: '3 Years (6 Semesters)',
    status: 'coming_soon',
    description: 'Legal studies syllabus, jurisprudence, constitutional law, and court procedure repositories under academic verification.',
    semesters: []
  },
  {
    id: 'other',
    code: 'Etc.',
    name: 'Other Academic Programmes',
    duration: 'Various Disciplines',
    status: 'coming_soon',
    description: 'Additional university degree programmes and curriculums are being planned for upcoming releases.',
    semesters: []
  }
];

export const SUBJECTS: Subject[] = [
  // ==========================================
  // SEMESTER 1 (Official RGPV Syllabus)
  // ==========================================
  {
    id: 'mca-101',
    code: 'MCA 101',
    name: 'Programming in C with Data Structure',
    semester: 1,
    isElective: false,
    description: 'Fundamentals of C programming, pointers, linear data structures, stacks, queues, lists, trees, graphs, heaps, and asymptotic algorithm complexity analysis.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-1_a0cc93e3.pdf',
    books: [
      'Kerninghan & Ritchie, "The C programming language", PHI',
      'Schildt, "C: The Complete reference", 4th ed TMH',
      'Kruse R.L., "Data Structures and Program Design in C", PHI'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Fundamentals of C Programming',
        topics: [
          'Structure of a C Program',
          'Data types, Identifiers and keywords',
          'Operators & expressions, Preprocessor directive',
          'Input output, Casting, Precedence, Scope of variables',
          'Control Constructs and Iteration Constructs',
          'Functions: Defining and accessing, passing arguments',
          'Function prototypes, Recursion, Storage classes'
        ]
      },
      {
        unitNumber: 2,
        title: 'Arrays, Strings, Pointers & File Handling',
        topics: [
          'Arrays: Defining and processing, passing arrays to a function, Multi-dimensional arrays',
          'Strings, operations on strings',
          'Pointers: Pointer expression, pointer arithmetic, Arrays of pointers',
          'Function returning pointers, Pointer to function',
          'Dynamic memory allocation: malloc(), calloc(), free()',
          'Structures, Unions, File handling and related functions'
        ]
      },
      {
        unitNumber: 3,
        title: 'Overview of Data Structure, Stacks & Queues',
        topics: [
          'Need for Data Structure, Execution Time, Algorithm Analysis',
          'Algorithm Complexity, Space Complexity, Time Complexity, Asymptotic Notations',
          'Stack: Contiguous implementation, operations, polish notations (infix, prefix, postfix)',
          'Conversion using stack, evaluation of postfix and prefix expressions',
          'Queue: Contiguous implementation, linear queue drawbacks, circular queue',
          'Enqueue & Dequeue operations, linked implementation of stack and queue, isfull(), isempty()'
        ]
      },
      {
        unitNumber: 4,
        title: 'General Lists & Linked Implementations',
        topics: [
          'General List and its contiguous implementation, drawbacks',
          'Singly linked list operations',
          'Doubly linked list operations',
          'Circular linked list',
          'Linked list using arrays'
        ]
      },
      {
        unitNumber: 5,
        title: 'Trees & Heaps',
        topics: [
          'Trees definitions: height, depth, order, degree, parent and child relationship',
          'Binary Trees: complete binary tree, almost complete binary tree, theorems',
          'Tree traversals: preorder, in order, post order (recursive and non-recursive)',
          'Expression tree evaluation, linked representation of binary tree',
          'Threaded binary trees, forests, conversion of forest into tree, Heap definition'
        ]
      }
    ]
  },
  {
    id: 'mca-102',
    code: 'MCA 102',
    name: 'Statistical Mathematics',
    semester: 1,
    isElective: false,
    description: 'Matrices and eigenvalue problems, calculus, testing of hypothesis, probability distributions, and discrete mathematics.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-1_a0cc93e3.pdf',
    books: [
      'B.S. Grewal, "Higher Engineering Mathematics", Khanna Publishers, 43rd Edition, 2015',
      'James Stewart, "Calculus", 7th edition',
      'Miller and M. Miller, "Mathematical Statistics", Pearson Education Inc., Asia 7th Edition',
      'Richard Johnson, "Miller and Freund\'s Probability and Statistics for Engineer", Prentice Hall, 8th Edition',
      'D.C. Agarwal, "Discrete Structure", 5th edition'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Matrices and Eigenvalue Problems',
        topics: [
          'Matrices: Rank of a Matrix',
          'Consistency of a system of linear equations',
          'Solution of matrix equation, Row-reduced Echelon Form',
          'Eigenvalues and Eigenvectors, Properties',
          'Cayley-Hamilton Theorem, Inverse of a matrix'
        ]
      },
      {
        unitNumber: 2,
        title: 'Calculus',
        topics: [
          'Functions of a single variable, limit, continuity, differentiability',
          'Mean value theorems, indeterminate forms, L\'Hospital\'s rule',
          'Maxima and minima, Product and chain rule',
          'Beta and gamma functions',
          'Functions of multiple variables, partial derivatives'
        ]
      },
      {
        unitNumber: 3,
        title: 'Testing of Hypothesis',
        topics: [
          'Sampling distributions',
          'Tests based on small and large samples',
          'Normal, Student\'s t, Chi-square and F distributions',
          'Testing of mean, variance and proportion',
          'Testing of difference of means, variances and proportions',
          'Tests for independence of attributes and goodness of fit'
        ]
      },
      {
        unitNumber: 4,
        title: 'Probability and Probability Distribution',
        topics: [
          'Axioms of Probability, Conditional Probability',
          'Addition and multiplication laws of Probability',
          'Probability mass function and Probability density functions',
          'Binomial distribution and properties',
          'Poisson distribution and properties',
          'Normal distribution and properties'
        ]
      },
      {
        unitNumber: 5,
        title: 'Discrete Math',
        topics: [
          'Sets, subsets, power sets, counting functions, countability',
          'Basic proof techniques: induction, proof by contradiction',
          'Basics of inductive, deductive, and propositional logic',
          'Basic data structures: stacks, queues, graphs, arrays, hash tables, trees',
          'Graph properties: connected components, degree, maximum flow/minimum cut, graph coloring'
        ]
      }
    ]
  },
  {
    id: 'mca-103',
    code: 'MCA 103',
    name: 'Operating system and Architecture',
    semester: 1,
    isElective: false,
    description: 'Register transfer language, computer organization, 8086 architecture, process scheduling, memory management, IPC, deadlocks, and file systems.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-1_a0cc93e3.pdf',
    books: [
      'Milenkovic, M., "Operating Systems - Concepts and Design", McGraw Hill, 1992',
      'Galvin P., J.L. Abraham Silberschatz, "Operating System Concepts", John Wiley & Sons, 1989',
      'Tanenbaum, A.S., "Modern Operating System", Prentice Hall, 1995',
      'William Stallings, "Operating Systems", Prentice Hall',
      'M. Morris Mano, "Computer System Architecture", PHI, 3rd edition, 1993',
      'Liu and Gibson, "8086/8088 Microprocessor Assembly Language"'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Register Transfer Language & 8086 Architecture',
        topics: [
          'Register Transfer Language and Micro-operations, Bus concepts',
          'Simple ALU & Control Unit design, timing in register transfer',
          'Architecture of a simple processor: instruction formats, addressing modes, instruction cycle',
          'Microinstructions, interrupt cycle, simple I/O organization',
          'Synchronous & Asynchronous data transfer, Program Controlled, Interrupt driven, DMA',
          'Pin Diagram of 8086, Architecture of 8086'
        ]
      },
      {
        unitNumber: 2,
        title: 'Operating System Introduction & Process Management',
        topics: [
          'Evolution of operating systems, Types of OS (Multitasking, Timesharing, Real-time)',
          'Operating system concepts and structure, Layered and Monolithic systems',
          'The Process concept, Process Control Block (PCB)',
          'CPU Scheduling algorithms: FCFS, Round Robin, Shortest Run Time Next, HRRN, Multilevel Feedback Queues',
          'Performance evaluation of scheduling algorithms'
        ]
      },
      {
        unitNumber: 3,
        title: 'Memory Management & Paging',
        topics: [
          'Memory management without swapping or paging, Swapping concepts',
          'Page replacement algorithms: LRU, Optimal, MRU, Clock, FIFO',
          'Belady\'s anomaly and Stack algorithms',
          'Modeling paging algorithms, Design issues for paging systems',
          'Segmentation, Segmented Paging, Paged Segmentation'
        ]
      },
      {
        unitNumber: 4,
        title: 'Inter-process Communication, Synchronization & Deadlocks',
        topics: [
          'Inter-process synchronization, Mutual exclusion',
          'Binary and counting semaphores, hardware support',
          'Classical concurrency problems: Dining Philosophers, Bounded Buffer, Sleeping Barber, Readers & Writers',
          'Critical section, critical region, conditional critical region, Monitors and messages',
          'Deadlocks: detection, prevention, avoidance, Banker\'s Algorithm'
        ]
      },
      {
        unitNumber: 5,
        title: 'File System & I/O Software',
        topics: [
          'File systems, directories, file system implementation, security protection',
          'Principles of I/O Hardware: devices, controllers, direct memory access',
          'Principles of I/O Software: goals, interrupt handlers, device drivers, device independent software',
          'Disks: disk hardware, disk scheduling (FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK)',
          'Error handling, track-at-a-time caching, RAM Disks, Clocks'
        ]
      }
    ]
  },
  {
    id: 'mca-104',
    code: 'MCA 104',
    name: 'Information Technology',
    semester: 1,
    isElective: false,
    description: 'Modern communication systems (5G, GIS), information security, artificial intelligence branches, IoT, virtual reality, and cloud computing architectures.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-1_a0cc93e3.pdf',
    books: [
      'Alex Leon & M. Leon, "Fundamental of Information Technology", Vikas Publications',
      'C.P. Pfleeger, D.N. Shah, "Security in Computing", 3rd Ed, Prentice Hall, 2002',
      'Rao M.N., "Cloud Computing", PHI',
      'Raj Kamal, "Internet of Things", McGrawHill',
      'ITL Education Solutions Ltd., "Introduction to Information Technology", Pearson Education'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Modern Communication Technologies & GIS',
        topics: [
          'CDMA, WLL, GSM, VOIP, Bluetooth, Wi-Fi',
          'Communication Generations: 2G, 3G, 4G, 5G',
          'Communication over radio, microwave, satellite, radar, fiber optics, ISDN',
          'Geographic Information System (GIS): Components (H/W, S/W, Data, People, Methods)',
          'Working and applications of GIS'
        ]
      },
      {
        unitNumber: 2,
        title: 'Information Security & Mobile Commerce',
        topics: [
          'Information Security introduction, malicious programs',
          'Cryptography, digital signatures, Firewalls',
          'User Identification and Authentication, Security awareness and policies',
          'Mobile Commerce: Introduction, Growth, M-commerce in India',
          'Digital Marketing concepts'
        ]
      },
      {
        unitNumber: 3,
        title: 'Artificial Intelligence Foundations',
        topics: [
          'Concept of Artificial Intelligence',
          'Branches of AI: Machine Learning, Neural Networks',
          'Robotics, Natural Language Processing (NLP)',
          'Expert Systems and Fuzzy Logic',
          'Applications and general domain use of AI'
        ]
      },
      {
        unitNumber: 4,
        title: 'Internet of Things (IoT) & Virtual Reality (VR)',
        topics: [
          'Characteristics, physical design, and logical design of IoT',
          'Functional blocks of IoT, Home Automation, Industry applications',
          'Surveillance and IoT use cases',
          'Virtual Reality (VR): Definition and applications',
          'Smart Systems and Embedded Systems'
        ]
      },
      {
        unitNumber: 5,
        title: 'Cloud Computing Infrastructure',
        topics: [
          'History of Centralized and Distributed Computing, Cluster & Grid computing',
          'Cloud Computing properties, characteristics, issues, and challenges',
          'Service models: IaaS, PaaS, SaaS',
          'Deployment models: Public, Private, Hybrid, Community',
          'Cloud resources: Network, API, Virtual/Physical computational resources, Data storage'
        ]
      }
    ]
  },
  {
    id: 'mca-105',
    code: 'MCA 105',
    name: 'Communication Skills',
    semester: 1,
    isElective: false,
    description: 'Listening and speaking techniques, technical reading and writing, interpersonal communication, group dynamics, leadership, and professional interview preparation.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-1_a0cc93e3.pdf',
    books: [
      'Sanghi, Seema, "Improve your communication skills", 2nd edition',
      'Burnard, Philip, "Interpersonal skills Training: A source book of activities", 2005',
      'Ashley, Roderic, "How to enhance your employability", 1998',
      'Dr. Alex, K., "Soft skills: know yourself & Know the world", 2010',
      'Aggarwal, Rohini, "Business communication and Organization & Management"'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Listening & Speaking Skills',
        topics: [
          'Barriers of Listening skill, Approaches to Listening',
          'Methods to improve Listening exercises',
          'Speaking: Paralanguage (sounds, stress, intonation)',
          'Art of conversation, Presentation skills',
          'Public speaking and expressing techniques'
        ]
      },
      {
        unitNumber: 2,
        title: 'Reading & Technical Writing',
        topics: [
          'Kinds of Reading, Causes of reading difficulties, Reading strategies',
          'Effective writing: Paragraph, Essay, Technical Reports',
          'Official letters, Articles, Notices',
          'Agenda and Minutes of meetings'
        ]
      },
      {
        unitNumber: 3,
        title: 'Interpersonal Communication & Etiquettes',
        topics: [
          'Modes of Communication, Communication Barriers',
          'Interpersonal skills and workplace dynamics',
          'Negotiation skills and conflict resolution',
          'Non-Verbal communication and Professional Etiquettes'
        ]
      },
      {
        unitNumber: 4,
        title: 'Group Dynamics & Leadership',
        topics: [
          'Group Discussion strategies and evaluation parameters',
          'Team building and effective teamwork',
          'Managerial vs leadership attributes',
          'Decision making and creative problem solving',
          'Time and Stress management skills'
        ]
      },
      {
        unitNumber: 5,
        title: 'Interview Preparation & Resume Engineering',
        topics: [
          'Types of Interviews (Panel, Technical, HR, Behavioral)',
          'Preparing for an interview and body language',
          'Preparing a professional CV and resume structuring',
          'Structuring interview responses, Mock interviews, Quick tips'
        ]
      }
    ]
  },

  // ==========================================
  // SEMESTER 2 (Official RGPV Syllabus)
  // ==========================================
  {
    id: 'mca-201',
    code: 'MCA 201',
    name: 'Data Base Management System',
    semester: 2,
    isElective: false,
    description: 'Relational data modeling, ER diagrams, relational algebra, SQL/PL-SQL, functional dependencies, 1NF to 5NF normalization, ACID transactions, and indexing.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-2_7721c943.pdf',
    books: [
      'A. Silberschatz, H.F Korth, Sudersan, "Database System Concepts", MGH',
      'C.J Date, "An introduction to Database Systems", 6th ed',
      'Elmasri & Navathe, "Fundamentals of Database systems", III ed',
      'B.C. Desai, "An introduction to Database systems", BPB',
      'Raghurama Krishnan, "Database Systems", TMH'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Introduction & ER Modeling',
        topics: [
          'Advantage of DBMS approach, views of data, data independence',
          'Schema and subschema, data models, database languages, transaction management',
          'DBA, users, data dictionary, overall system architecture',
          'ER model: basic concepts, mapping constraints, keys, ER diagrams',
          'Weak and strong entity sets, specialization and generalization, aggregation, inheritance',
          'Reduction of ER schema to tables'
        ]
      },
      {
        unitNumber: 2,
        title: 'Relational Algebra, SQL & PL/SQL',
        topics: [
          'Domains, relations, keys: candidate, primary, alternate, foreign keys',
          'Codd\'s rules, relational algebra with extended operations',
          'Relational calculus, basic structure of SQL, set operations, aggregate functions, null values',
          'Nested subqueries, derived relations, views, join relations, DDL in SQL',
          'PL/SQL programming: stored procedures, triggers, cursors',
          'Database integrity: domain, attribute, relation rules, assertions'
        ]
      },
      {
        unitNumber: 3,
        title: 'Functional Dependencies & Normalization',
        topics: [
          'Trivial and non-trivial dependencies, closure set of dependencies and attributes',
          'Irreducible set of dependencies, introduction to normalization',
          'Non-loss decomposition, FD diagrams',
          'First, Second, Third Normal forms (1NF, 2NF, 3NF)',
          'Dependency preservation, Boyce-Codd Normal Form (BCNF)',
          'Multivalued dependencies and Fourth Normal Form (4NF)',
          'Join dependency and Fifth Normal Form (5NF)'
        ]
      },
      {
        unitNumber: 4,
        title: 'Transaction, Concurrency & Recovery',
        topics: [
          'ACID properties, transaction states, atomicity and durability implementation',
          'Concurrent executions, serializability, concurrency control protocols',
          'Deadlock handling, failure classification, stable storage implementation',
          'Log-based recovery, deferred and immediate database modifications, checkpoints',
          'Distributed databases: distributed data storage, replication, fragmentation (horizontal, vertical, mixed)'
        ]
      },
      {
        unitNumber: 5,
        title: 'Emerging Fields & File Organizations',
        topics: [
          'Object-oriented databases: object structure, class, inheritance, object identity',
          'Data warehousing: terminology, definitions, characteristics',
          'Data mining overview, Databases on WWW, multimedia databases',
          'Physical storage media, magnetic disk optimization, RAID levels',
          'Indexing, ordered indices, B-Tree and B+-Tree organizations',
          'Network and hierarchical models: DBTG model, tree structure diagrams'
        ]
      }
    ]
  },
  {
    id: 'mca-202',
    code: 'MCA 202',
    name: 'Computer Network',
    semester: 2,
    isElective: false,
    description: 'ISO-OSI model, physical media, data link protocols, sliding window, LAN standards (802.3, 802.5), routing algorithms, TCP/UDP, and wireless broadband.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-2_7721c943.pdf',
    books: [
      'A.S. Tanenbaum, "Computer Network", 4th addition, PHI',
      'Forouzan, "Data Communication and Networking", 3ed, TMH',
      'D.E. Comer, "Internetworking with TCP/IP", Volume I & II, PHI',
      'William Stallings, "Data & Computer communications", Maxwell Macmillan',
      'Joh R. Vacca, "Wireless Broadband Networks Handbook", Tata McGraw-Hill, 2001'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Network Architectures & Physical Layer',
        topics: [
          'Computer Network, Layered Network Architecture, Review of ISO-OSI Model',
          'Transmission fundamentals, Conductive Metal (Wired Cable), Optical Fiber, Wireless, Satellite Links',
          'Communication Services & Devices: Telephone System, ISDN, Cellular Phone, ATM',
          'Network Security introduction, Virtual Terminal Protocol',
          'Overview of DNS, SNMP, email, WWW, Multimedia'
        ]
      },
      {
        unitNumber: 2,
        title: 'Data Link Layer & Error Control',
        topics: [
          'Data Security and Integrity: Parity Checking Code',
          'Cyclic Redundancy Checks (CRC), Hamming Code',
          'Protocol Concepts, Basic flow control',
          'Sliding Window protocols: Go-Back-N, Selective Repeat',
          'Protocol correctness: Finite state machines'
        ]
      },
      {
        unitNumber: 3,
        title: 'Local Area Networks & Inter-Networking',
        topics: [
          'Ethernet: IEEE 802.3 standard',
          'Token Ring: IEEE 802.5 standard, Token Bus: IEEE 802.4 standard',
          'FDDI Protocol, DQDB Protocol',
          'Layer 1 connections: Repeaters, Hubs',
          'Layer 2 connections: Bridges, Switches',
          'Layer 3 connections: Routers, Gateways'
        ]
      },
      {
        unitNumber: 4,
        title: 'Wide Area Networks & Transport Protocols',
        topics: [
          'Routing tables, Types of routing',
          'Dijkstra\'s Algorithm, Bellman-Ford Algorithm, Link State routing, OSPF',
          'Flooding, Broadcasting, Multicasting, Congestion & Dead Lock',
          'Internet Protocols: TCP/IP overview',
          'Transmission Control Protocol (TCP), User Datagram Protocol (UDP)'
        ]
      },
      {
        unitNumber: 5,
        title: 'Wireless Broadband Networks & Standards',
        topics: [
          'Wireless broadband fundamentals, Fixed Wireless Broadband Systems',
          'Enhanced Copper, Fibre Optic and HFC',
          '3G Cellular, Satellites, ATM and Relay Technologies',
          'HiperLAN2 Standard, Global 3G CDMA Standard',
          'CDMA Harmonization G3G Proposal for Protocol Layers'
        ]
      }
    ]
  },
  {
    id: 'mca-203',
    code: 'MCA 203',
    name: 'Software Engineering and UML',
    semester: 2,
    isElective: false,
    description: 'Software lifecycle models, requirements engineering, SRS, architectural design, software metrics, testing strategies, and UML diagrams.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-2_7721c943.pdf',
    books: [
      'Roger S. Pressman, "Software Engineering: A Practitioner\'s Approach", 8th Edition, 2015',
      'I. Sommerville, "Software Engineering", 6th Edition, Addison Wesley, 2004',
      'Pankaj Jalote, "An Integrated approach to Software Engineering", 2nd Edition, Springer, 1997',
      'Timothy C. Lethbridge & Robert Laganiere, "Object - Oriented Software Engineering using UML and Java", 2nd Edition, 2004'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Software Process Models & Requirements',
        topics: [
          'Software Engineering paradigms: Waterfall Life cycle model, Spiral Model, Prototype Model',
          'Software Requirements: Requirements Elicitation Techniques',
          'Initial Requirements Document, SRS Document',
          'Requirements Change Management, Project Management fundamentals'
        ]
      },
      {
        unitNumber: 2,
        title: 'Software Design & Modularity',
        topics: [
          'Abstraction, Modularity, Software Architecture',
          'Cohesion and Coupling concepts',
          'Design Concepts and notations, Detailed Design Document',
          'Dataflow Oriented design, Designing for reuse, Programming standards'
        ]
      },
      {
        unitNumber: 3,
        title: 'Software Metrics & Risk Management',
        topics: [
          'Scope and classification of metrics',
          'Measuring Process and Product attributes, Direct and Indirect measures',
          'Reliability, Software Quality Assurance (SQA), Standards',
          'Need of Software Estimation, Function Point analysis, Risk Management'
        ]
      },
      {
        unitNumber: 4,
        title: 'Software Testing & Maintenance',
        topics: [
          'Software Testing Fundamentals, Software testing strategies',
          'Black Box Testing, White Box Testing, System Testing',
          'Functional Testing, Structural Testing, Regression Testing',
          'Testing Tools, Test Case Management',
          'Challenges of Software Maintenance, Types of Maintenance, Maintenance Report'
        ]
      },
      {
        unitNumber: 5,
        title: 'Unified Modeling Language (UML)',
        topics: [
          'Introduction to UML: Use Case Approach',
          'Identification of Classes and Relationships, State and Behavior',
          'Use Case Diagrams, Class Diagrams',
          'State Diagrams, Sequence Diagrams',
          'Activity Diagrams, Deployment Diagrams, Case Study: LMS'
        ]
      }
    ]
  },
  {
    id: 'mca-204',
    code: 'MCA 204',
    name: 'Algorithm Design',
    semester: 2,
    isElective: false,
    description: 'Abstract data types, balanced trees, graph algorithms, divide-and-conquer, dynamic programming, backtracking, NP-completeness, and amortized analysis.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-2_7721c943.pdf',
    books: [
      'Ullman, "Analysis and Design of Algorithm", TMH',
      'Goodman, "Introduction to the Design & Analysis of Algorithms", TMH, 2002',
      'Aho, "Data Structure & Algorithms"'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Linear Data Structures & Applications',
        topics: [
          'Abstract Data Types (ADT)',
          'Stack, Queue, Circular Queue, Double Ended Queue',
          'Applications of stack: evaluating arithmetic expressions',
          'Applications of Queue',
          'Linked Lists: Singly, Circularly, Doubly Linked Lists',
          'Polynomial Manipulation'
        ]
      },
      {
        unitNumber: 2,
        title: 'Non-Linear Structures, Searching & Sorting',
        topics: [
          'Binary Tree, expression trees, tree traversals, Huffman Algorithm',
          'Binary Search Tree, Balanced Trees: AVL Tree, B-Tree, Splay Trees, Heaps',
          'Binomial Heaps, Fibonacci Heaps, Hash set',
          'Searching: Sequential, Binary, Indexed Sequential, Interpolation',
          'Hashing: collision resolution, chaining',
          'Sorting: Bubble, Selection, Insertion, Quick, Merge, Shell, Heap, Tree sort'
        ]
      },
      {
        unitNumber: 3,
        title: 'Graph Algorithms & Advanced Trees',
        topics: [
          'Representation of graphs, DFS and BFS traversals, Topological sort',
          'Shortest-path algorithms: Dijkstra\'s, Bellman-Ford, Floyd\'s Algorithm',
          'Minimum Spanning Trees: Prim\'s and Kruskal\'s algorithms',
          'AVL tree insertion & deletion',
          'B-tree order, degree, insertion & deletion, B+-Tree definitions & comparison'
        ]
      },
      {
        unitNumber: 4,
        title: 'Algorithm Design Paradigms',
        topics: [
          'Algorithm Analysis, Asymptotic Notations',
          'Divide and Conquer: Merge Sort, Quick Sort, Binary Search',
          'Greedy Algorithms: Knapsack Problem',
          'Dynamic Programming: Optimal Binary Search Tree',
          'Warshall\'s Algorithm for Finding Transitive Closure'
        ]
      },
      {
        unitNumber: 5,
        title: 'Advanced Complexity & NP-Completeness',
        topics: [
          'Backtracking: N-Queen\'s Problem',
          'Branch and Bound: Assignment Problem',
          'P & NP problems, NP-complete problems',
          'Approximation algorithms for NP-hard problems',
          'Traveling Salesman Problem, Amortized Analysis'
        ]
      }
    ]
  },
  {
    id: 'mca-205',
    code: 'MCA 205',
    name: 'Object oriented Programming with JAVA',
    semester: 2,
    isElective: false,
    description: 'Java OOP foundations, multithreading, exception handling, JDBC connectivity, Collections, AWT/Swings, Servlets, JSP, and Struts framework.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-2_7721c943.pdf',
    books: [
      'Naughton & Schildt, "The Complete Reference Java 2", Tata McGraw Hill',
      'Deitel, "Java- How to Program", Pearson Education',
      'Horstmann & Cornell, "Core Java 2" (Vol I & II), Sun Microsystems',
      'Ivan Bayross, "Java 2.0", BPB publications',
      'Ivor Horton, "Beginning Java 2, JDK 5 Ed.", Wiley India'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'OOP Concepts & Core Java Fundamentals',
        topics: [
          'Data abstraction, encapsulation, inheritance, polymorphism',
          'Java Environment: classpath, data types, operators, type conversion, control statements',
          'Classes, Objects, Packages, Scope, Access Modifiers, Constructors, this, finalize()',
          'Arrays, Memory allocation and garbage collection',
          'Inheritance basics, method overriding, dynamic method dispatch, abstract classes',
          'Interfaces: defining, implementing, variables in interfaces'
        ]
      },
      {
        unitNumber: 2,
        title: 'Multithreading & Exception Handling',
        topics: [
          'Multithreaded programming concepts, Lifecycle of a thread',
          'Creating threads: Thread class vs Runnable interface',
          'Thread synchronization, Thread scheduling, Producer-consumer relationship',
          'Daemon threads, Exception handling: try, catch, throw, throws, finally',
          'Applets: security restrictions, class hierarchy, life cycle, HTML tags'
        ]
      },
      {
        unitNumber: 3,
        title: 'Java I/O, JDBC & Collections Framework',
        topics: [
          'Exploring Java I/O, Directories, Byte stream vs Character streams',
          'Buffered reader/writer, Print writer, Object Serialization',
          'JDBC: JDBC-ODBC bridge, connectivity model, Driver manager',
          'Resultset navigation, java.sql Package, connecting to remote database',
          'Collections Framework: interfaces and implementation classes'
        ]
      },
      {
        unitNumber: 4,
        title: 'AWT Fundamentals & Swing GUI',
        topics: [
          'Window fundamentals, Frame, Layout managers (FlowLayout, BorderLayout, etc.)',
          'Java Event Delegation Model, Event class hierarchy, Adapter classes',
          'SWINGS: Hierarchy of swing components, Top level containers',
          'JFrame, JWindow, JDialog, JPanel, JButton, JToggleButton, JCheckBox, JRadioButton',
          'JLabel, JTextField, JTextArea, JList, JComboBox, JScrollPane'
        ]
      },
      {
        unitNumber: 5,
        title: 'Servlets, JSP & Struts Architecture',
        topics: [
          'HTML basics, Servlets Overview, Servlet Lifecycle (init, service, destroy)',
          'HttpServletRequest, HttpServletResponse, GET and POST handling',
          'JSP: architecture, JSP tags, expressions, lifecycle, MVC pattern',
          'JSP implicit objects, session and page scope, errorPage attributes',
          'Struts Framework: Architecture, ActionForward, ActionForm, ActionServlet, struts-config.xml'
        ]
      }
    ]
  },

  // ==========================================
  // SEMESTER 3 (Strict Core Theory Subjects)
  // ==========================================
  {
    id: 'mca-301',
    code: 'MCA 301',
    name: 'Python',
    semester: 3,
    isElective: false,
    description: 'Python fundamentals, control flow, functions, lists, tuples, dictionaries, object-oriented programming, classes, file I/O, and modules.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-3_8353c851.pdf',
    books: [
      'Reema Thareja, "Python Programming using Problem Solving Approach", Oxford University Press, 2017',
      'Allen B. Downey, "Think Python: How to Think Like a Computer Scientist", 2nd Ed, O\'Reilly',
      'Guido van Rossum, Fred L. Drake Jr., "An Introduction to Python", Network Theory Ltd.'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Introduction to Python',
        topics: [
          'Python interpreter and interactive mode',
          'Values and types: int, float, boolean, string, list',
          'Variables, expressions, statements, tuple assignment, precedence, comments',
          'Modules and functions, function definition and use, flow of execution',
          'Parameters and arguments, illustrative numerical programs'
        ]
      },
      {
        unitNumber: 2,
        title: 'Control Flow, Functions & Strings',
        topics: [
          'Conditionals: if, if-else, chained conditional (if-elif-else)',
          'Iteration: while, for, break, continue, pass',
          'Fruitful functions: return values, parameters, local/global scope, recursion',
          'Strings: slices, immutability, string functions and methods',
          'Lists as arrays, searching and sorting algorithms'
        ]
      },
      {
        unitNumber: 3,
        title: 'Lists, Tuples & Dictionaries',
        topics: [
          'List operations, slices, methods, loop, mutability, aliasing, cloning',
          'Tuples: assignment, tuple as return value',
          'Dictionaries: operations and methods',
          'Advanced list processing: list comprehensions',
          'Illustrative sorting and searching programs'
        ]
      },
      {
        unitNumber: 4,
        title: 'Classes and Inheritance (OOP)',
        topics: [
          'Object Oriented Programming concepts in Python',
          'Class Instances, Methods, Classes examples',
          'Hierarchies: Your Own Types, Building a Class',
          'Visualizing the Hierarchy, Adding another Class, Using Inherited Methods'
        ]
      },
      {
        unitNumber: 5,
        title: 'Files, Modules & Packages',
        topics: [
          'Files and exceptions: text files, reading and writing files, format operator',
          'Command line arguments',
          'Errors and exceptions handling, try-except blocks',
          'Modules, packages, illustrative file programs (word count, copy file)'
        ]
      }
    ]
  },
  {
    id: 'mca-302',
    code: 'MCA 302',
    name: 'Distributed System',
    semester: 3,
    isElective: false,
    description: 'Distributed systems architectures, RPC, clock synchronization, election algorithms, fault tolerance, replication, CORBA, and distributed shared memory.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-3_8353c851.pdf',
    books: [
      'Andrew S. Tanenbaum, Maarten Van Steen, "Distributed Systems Principles and Paradigms", Pearson',
      'George Coulouris, "Distributed Systems: Design and Concepts", Pearson Education',
      'Harry Singh, "Progressing to Distributed Multiprocessing", Prentice-Hall'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Introduction & Communication in Distributed Systems',
        topics: [
          'Goals of Distributed Systems, Hardware and Software concepts',
          'Client-server model',
          'Remote Procedure Call (RPC), Remote Object Invocation (RMI)',
          'Message-oriented communication, Stream-oriented communication'
        ]
      },
      {
        unitNumber: 2,
        title: 'Synchronization & Clock Synchronization',
        topics: [
          'Clock Synchronization: physical clocks, logical clocks (Lamport timestamps)',
          'Vector clocks',
          'Mutual Exclusion algorithms: centralized, distributed, token ring',
          'Election algorithms: Bully algorithm, Ring algorithm'
        ]
      },
      {
        unitNumber: 3,
        title: 'Fault Tolerance & Distributed Consensus',
        topics: [
          'Basic concepts of fault tolerance, failure models',
          'Process resilience, reliable client-server communication',
          'Reliable group communication, distributed commit protocols (Two-Phase Commit)',
          'Recovery mechanisms: checkpointing and message logging'
        ]
      },
      {
        unitNumber: 4,
        title: 'Distributed Shared Memory & Replication',
        topics: [
          'Consistency models: strict, sequential, causal, eventual consistency',
          'Replica management, consistency protocols',
          'Distributed Shared Memory (DSM) architecture, implementation issues',
          'Page-based distributed shared memory'
        ]
      },
      {
        unitNumber: 5,
        title: 'Case Studies: CORBA, Mach & Distributed File Systems',
        topics: [
          'CORBA architecture and Object Request Broker (ORB)',
          'Distributed File Systems: Sun Network File System (NFS), Coda',
          'Mach operating system case study',
          'Security in distributed systems: authentication, Kerberos, secure channels'
        ]
      }
    ]
  },
  {
    id: 'mca-303',
    code: 'MCA 303',
    name: 'Internet of Things (IoT)',
    semester: 3,
    isElective: false,
    description: 'IoT conceptual framework, M2M, web connectivity protocols (REST, WebSockets), sensor technology, RFID, Raspberry Pi, Arduino, and smart city implementations.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-3_8353c851.pdf',
    books: [
      'Rajkamal, "Internet of Things", Tata McGraw Hill',
      'Vijay Madisetti and Arshdeep Bahga, "Internet of Things (A Hands-on-Approach)", Universal Press',
      'Hakima Chaouchi, "The Internet of Things: Connecting Objects", Wiley'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'IoT Architecture & Design',
        topics: [
          'Definition and Characteristics of IoT',
          'IoT Conceptual framework, Architectural view',
          'Physical design of IoT, Logical design of IoT',
          'Applications of IoT across industries'
        ]
      },
      {
        unitNumber: 2,
        title: 'M2M, SDN & Cloud Services',
        topics: [
          'Machine-to-Machine (M2M) communication',
          'Software Defined Networking (SDN) and Network Function Virtualization (NFV) for IoT',
          'Data storage in IoT',
          'IoT Cloud-Based Services'
        ]
      },
      {
        unitNumber: 3,
        title: 'Web Connectivity Principles & Protocols',
        topics: [
          'Communication protocols for connected devices: SOAP, REST, HTTP',
          'Message Communication protocols: RESTful and WebSockets',
          'Internet connectivity principles, IP addressing in IoT',
          'Media Access Control in IoT'
        ]
      },
      {
        unitNumber: 4,
        title: 'Sensors, Actuators & Wireless Networks',
        topics: [
          'Sensor Technology, Participatory Sensing',
          'Industrial IoT and Automotive IoT, Actuators',
          'Sensor data Communication Protocols',
          'Radio Frequency Identification (RFID) Technology, Wireless Sensor Networks (WSN)'
        ]
      },
      {
        unitNumber: 5,
        title: 'Design Methodology & Embedded Devices',
        topics: [
          'Specification, process, model, service, and operational views',
          'IoT Privacy and security solutions',
          'Raspberry Pi and Arduino device integrations',
          'Case study: Smart city streetlights control and monitoring'
        ]
      }
    ]
  },
  {
    id: 'mca-304',
    code: 'MCA 304',
    name: 'Artificial Intelligence',
    semester: 3,
    isElective: false,
    description: 'AI problems, LISP programming, heuristic search (A*, AO*), knowledge representation, predicate calculus, NLP, Minimax game playing, and expert systems.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-3_8353c851.pdf',
    books: [
      'Elaine Rich and Kevin Knight, "Artificial Intelligence", Tata McGraw Hill',
      'Dan W. Patterson, "Introduction to Artificial Intelligence and Expert Systems", Prentice India',
      'Nils J. Nilsson, "Principles of Artificial Intelligence", Narosa Publishing House',
      'Clocksin & C.S. Mellish, "Programming in PROLOG", Narosa Publishing House'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Overview of AI & LISP Programming',
        topics: [
          'The AI problems, AI techniques, Characteristics of AI applications',
          'Introduction to LISP programming: Syntax and numeric functions',
          'Basic list manipulation functions, predicates and conditionals',
          'Input output and local variables, iteration and recursion',
          'Property lists and arrays'
        ]
      },
      {
        unitNumber: 2,
        title: 'Problem Solving & Heuristic Search Strategies',
        topics: [
          'General problem solving, production systems, forward and backward chaining',
          'Exhaustive searches: Depth First Search, Breadth First Search',
          'Heuristic Search Techniques: Hill Climbing, Branch and Bound',
          'Best First Search & A* algorithm, AND/OR graphs, AO* algorithm',
          'Constraint satisfaction problems'
        ]
      },
      {
        unitNumber: 3,
        title: 'Knowledge Representations',
        topics: [
          'First order predicate calculus, skolemization',
          'Resolution principle & unification, interface mechanisms',
          'Horn\'s clauses, semantic networks',
          'Frame systems and value inheritance, scripts, conceptual dependency'
        ]
      },
      {
        unitNumber: 4,
        title: 'Natural Language Processing & Game Playing',
        topics: [
          'Parsing techniques, context free grammars, recursive transition nets (RTN)',
          'Augmented transition nets (ATN), case and logic grammars, semantic analysis',
          'Game playing: Minimax search procedure, alpha-beta cutoffs',
          'Planning: Blocks world domain, components of planning systems',
          'Goal stack planning, non-linear planning'
        ]
      },
      {
        unitNumber: 5,
        title: 'Uncertainty, Expert Systems & Machine Learning',
        topics: [
          'Probabilistic Reasoning: Probability theory, Bayes theorem, Bayesian networks, Certainty factors',
          'Expert Systems: Introduction, applications, shells, knowledge acquisition',
          'Case study: MYCIN system',
          'Learning: Rote learning, learning by induction, explanation-based learning'
        ]
      }
    ]
  },
  {
    id: 'mca-305',
    code: 'MCA 305',
    name: 'Data Mining',
    semester: 3,
    isElective: false,
    description: 'Data warehousing, OLAP multidimensional data cubes, data preprocessing, Apriori association rule mining, classification, and cluster analysis.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-3_8353c851.pdf',
    books: [
      'J. Han and M. Kamber, "Data Mining: Concepts and Techniques", Morgan Kaufmann',
      'Berson, "Data warehousing, Data Mining & OLAP", TMH',
      'W.H. Inmon, "Building the Data warehouse", 3ed, Wiley India',
      'S.K. Pujari, "Data Mining Techniques", University Press'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Data Mining Motivation & Functionalities',
        topics: [
          'Motivation, importance, Data types for Data Mining',
          'Relational Databases, Data Warehouses, Transactional databases',
          'Data mining Functionalities: Concept/Class description, Association Analysis',
          'Classification & Prediction, Cluster Analysis, Outlier Analysis',
          'Classification of Data Mining Systems, Major Issues in Data Mining'
        ]
      },
      {
        unitNumber: 2,
        title: 'Data Warehouse & OLAP Technology',
        topics: [
          'Differences between Operational Database Systems and Data Warehouses',
          'Multidimensional Data Model, Data Warehouse Architecture',
          'Data Warehouse Implementation, Data Cube Technology',
          'OLAP operations: roll-up, drill-down, slice, dice, pivot'
        ]
      },
      {
        unitNumber: 3,
        title: 'Data Preprocessing & Primitives',
        topics: [
          'Data Cleaning, Data Integration and Transformation',
          'Data Reduction, Discretization and Concept Hierarchy Generation',
          'Data Mining Primitives, Languages, and System Architectures',
          'Concept Description: Characterization and Comparison, Analytical Characterization'
        ]
      },
      {
        unitNumber: 4,
        title: 'Mining Association Rules in Large Databases',
        topics: [
          'Association Rule Mining: Market Basket Analysis',
          'Mining Single-Dimensional Boolean Association Rules: Apriori algorithm',
          'Generating Association rules from Frequent items',
          'Improving the efficiency of Apriori',
          'Mining Multilevel and Multidimensional Association Rules',
          'Constraint-Based Association Mining'
        ]
      },
      {
        unitNumber: 5,
        title: 'Classification, Prediction & Cluster Analysis',
        topics: [
          'Issues regarding classification and prediction',
          'Different Classification Methods (Decision Trees, Bayesian, Rule-based)',
          'Prediction models, Cluster Analysis',
          'Major Clustering Methods: Partitioning, Hierarchical, Density-Based',
          'Applications & Trends in Data Mining, currently available tools'
        ]
      }
    ]
  },

  // ==========================================
  // SEMESTER 4 (Provisional Advanced Continuation Structure)
  // ==========================================
  {
    id: 'mca-401',
    code: 'MCA 401',
    name: 'Advanced Python',
    semester: 4,
    isElective: false,
    isProvisional: true,
    description: 'Provisional advanced learning track based on Python. Official university syllabus units and resources will be updated once confirmed by the university.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-4_05732143.pdf',
    books: ['Mark Lutz, "Programming Python", O\'Reilly'],
    units: []
  },
  {
    id: 'mca-402',
    code: 'MCA 402',
    name: 'Advanced Distributed Systems',
    semester: 4,
    isElective: false,
    isProvisional: true,
    description: 'Provisional advanced learning track based on Distributed Systems. Official university syllabus units and resources will be updated once confirmed by the university.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-4_05732143.pdf',
    books: ['Andrew S. Tanenbaum, "Distributed Systems: Principles and Paradigms", Pearson'],
    units: []
  },
  {
    id: 'mca-403',
    code: 'MCA 403',
    name: 'Advanced IoT',
    semester: 4,
    isElective: false,
    isProvisional: true,
    description: 'Provisional advanced learning track based on Internet of Things. Official university syllabus units and resources will be updated once confirmed by the university.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-4_05732143.pdf',
    books: ['Arshdeep Bahga and Vijay Madisetti, "Internet of Things: A Hands-On Approach"'],
    units: []
  },
  {
    id: 'mca-404',
    code: 'MCA 404',
    name: 'Advanced Artificial Intelligence',
    semester: 4,
    isElective: false,
    isProvisional: true,
    description: 'Provisional advanced learning track based on Artificial Intelligence. Official university syllabus units and resources will be updated once confirmed by the university.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-4_05732143.pdf',
    books: ['Stuart Russell and Peter Norvig, "Artificial Intelligence: A Modern Approach", Pearson'],
    units: []
  },
  {
    id: 'mca-405',
    code: 'MCA 405',
    name: 'Advanced Data Mining',
    semester: 4,
    isElective: false,
    isProvisional: true,
    description: 'Provisional advanced learning track based on Data Mining. Official university syllabus units and resources will be updated once confirmed by the university.',
    syllabusPdfUrl: '/Syllora/assets/aistudio/Sem-4_05732143.pdf',
    books: ['Jiawei Han, Micheline Kamber, Jian Pei, "Data Mining: Concepts and Techniques", Morgan Kaufmann'],
    units: []
  }
];

export const MOCK_RESOURCES: Resource[] = [
  // --- REAL MOCK STUDY NOTES ---
  {
    id: 'res-101',
    title: 'Unit V: Non-Linear Data Structures & Binary Search Trees',
    type: 'notes',
    description: 'Comprehensive, illustrated lecture notes covering BST property, insertion, deletion, and tree traversals with C code implementations.',
    courseId: 'mca',
    semesterId: 1,
    subjectId: 'mca-101',
    unitId: 5,
    fileUrl: '/mock-files/MCA101_Unit5_Trees.pdf',
    dateAdded: '2025-01-15',
    keywords: ['BST', 'Trees', 'Binary Search Tree', 'Data Structures', 'Traversals', 'AVL'],
    fileSize: '3.4 MB',
    pages: 42,
    authorOrSource: 'Department of Computer Applications'
  },
  {
    id: 'res-102',
    title: 'Unit III: Relational Algebra & Normalization Complete Notes',
    type: 'notes',
    description: 'Step-by-step mathematical decomposition, functional dependencies, 1NF to 5NF, and dependency preserving decomposition with university examples.',
    courseId: 'mca',
    semesterId: 2,
    subjectId: 'mca-201',
    unitId: 3,
    fileUrl: '/mock-files/MCA201_Unit3_Normalization.pdf',
    dateAdded: '2025-02-04',
    keywords: ['DBMS Normalization', '1NF', '2NF', '3NF', 'BCNF', 'Functional Dependency', 'Relational Algebra'],
    fileSize: '4.1 MB',
    pages: 56,
    authorOrSource: 'Prof. R. Verma (Senior Faculty)'
  },
  {
    id: 'res-103',
    title: 'Unit IV: Deadlocks & Banker\'s Algorithm Illustrated Guide',
    type: 'notes',
    description: 'Detailed analysis of Coffman conditions, Resource Allocation Graphs, and step-by-step Banker\'s safety and resource-request algorithms.',
    courseId: 'mca',
    semesterId: 1,
    subjectId: 'mca-103',
    unitId: 4,
    fileUrl: '/mock-files/MCA103_Unit4_Deadlocks.pdf',
    dateAdded: '2025-01-20',
    keywords: ['Deadlock', 'Banker Algorithm', 'Resource Allocation Graph', 'Operating Systems', 'Safety Algorithm'],
    fileSize: '2.8 MB',
    pages: 28,
    authorOrSource: 'Academic Resource Committee'
  },
  {
    id: 'res-104',
    title: 'Unit IV: Network Routing, IP Addressing & TCP/UDP Protocols',
    type: 'notes',
    description: 'Dijkstra\'s algorithm, Bellman-Ford, Link State routing, OSPF, and transport protocol packet formats.',
    courseId: 'mca',
    semesterId: 2,
    subjectId: 'mca-202',
    unitId: 4,
    fileUrl: '/mock-files/MCA202_Unit4_NetworkRouting.pdf',
    dateAdded: '2025-02-12',
    keywords: ['Computer Networks', 'Dijkstra', 'Routing', 'OSPF', 'TCP/IP', 'Transport Protocols'],
    fileSize: '3.9 MB',
    pages: 48,
    authorOrSource: 'Network Research Group'
  },
  {
    id: 'res-105',
    title: 'Unit II: Supervised Learning & Regression Models',
    type: 'notes',
    description: 'Mathematical intuition for Ordinary Least Squares, cost functions, gradient descent algorithms, and overfitting regularization.',
    courseId: 'mca',
    semesterId: 3,
    subjectId: 'mca-304',
    unitId: 2,
    fileUrl: '/mock-files/MCA304_Unit2_Regression.pdf',
    dateAdded: '2025-02-18',
    keywords: ['Machine Learning', 'Linear Regression', 'Gradient Descent', 'Cost Function', 'Python'],
    fileSize: '5.2 MB',
    pages: 64,
    authorOrSource: 'AI Study Cell'
  },

  // --- PREVIOUS YEAR QUESTION PAPERS (PYQ) ---
  {
    id: 'res-201',
    title: 'MCA-101 End Semester Examination Paper (Nov-Dec 2024)',
    type: 'pyq',
    description: 'Official semester-end theory examination question paper for Programming in C with Data Structure, featuring full 70 marks distribution.',
    courseId: 'mca',
    semesterId: 1,
    subjectId: 'mca-101',
    fileUrl: '/mock-files/MCA101_PYQ_2024.pdf',
    examYear: '2024',
    examSession: 'Nov-Dec',
    relatedResourceIds: ['res-301'],
    dateAdded: '2025-01-10',
    keywords: ['MCA 101 Question Paper', '2024 Exam', 'Data Structure PYQ', 'C Programming Paper'],
    fileSize: '1.2 MB',
    pages: 4,
    authorOrSource: 'University Examination Cell'
  },
  {
    id: 'res-202',
    title: 'MCA-201 Data Base Management System Examination Paper (May-June 2024)',
    type: 'pyq',
    description: 'Semester II examination paper with questions on BCNF decomposition, concurrency conflict serializability, and B+ Trees.',
    courseId: 'mca',
    semesterId: 2,
    subjectId: 'mca-201',
    fileUrl: '/mock-files/MCA201_PYQ_2024.pdf',
    examYear: '2024',
    examSession: 'May-June',
    relatedResourceIds: ['res-302'],
    dateAdded: '2025-01-12',
    keywords: ['MCA 201 Question Paper', 'DBMS PYQ', '2024 Exam', 'Database Paper'],
    fileSize: '1.4 MB',
    pages: 4,
    authorOrSource: 'University Examination Cell'
  },
  {
    id: 'res-203',
    title: 'MCA-103 Operating system and Architecture Examination Paper (Nov-Dec 2023)',
    type: 'pyq',
    description: 'Previous year paper testing CPU scheduling numericals, virtual memory replacement calculations, and semaphore implementations.',
    courseId: 'mca',
    semesterId: 1,
    subjectId: 'mca-103',
    fileUrl: '/mock-files/MCA103_PYQ_2023.pdf',
    examYear: '2023',
    examSession: 'Nov-Dec',
    dateAdded: '2024-12-15',
    keywords: ['OS PYQ', 'Operating Systems 2023 Paper', 'MCA 103 Previous Paper'],
    fileSize: '1.1 MB',
    pages: 4,
    authorOrSource: 'University Examination Cell'
  },

  // --- SOLUTIONS ---
  {
    id: 'res-301',
    title: 'Model Solutions: MCA-101 Data Structures (Nov-Dec 2024 Paper)',
    type: 'solution',
    description: 'Step-by-step solved answers with C code snippets, algorithmic dry runs, and diagrammatic derivations for the 2024 examination paper.',
    courseId: 'mca',
    semesterId: 1,
    subjectId: 'mca-101',
    fileUrl: '/mock-files/MCA101_Solutions_2024.pdf',
    relatedResourceIds: ['res-201'],
    dateAdded: '2025-01-18',
    keywords: ['MCA 101 Solutions', 'Solved Paper', 'Data Structure Answers', 'Model Answer Key'],
    fileSize: '4.8 MB',
    pages: 24,
    authorOrSource: 'Academic Peer Mentors Group'
  },
  {
    id: 'res-302',
    title: 'Solved Key: MCA-201 Data Base Management System (May-June 2024)',
    type: 'solution',
    description: 'Verified solutions for BCNF decomposition proofs, transaction conflict serializability graphs, and SQL join queries.',
    courseId: 'mca',
    semesterId: 2,
    subjectId: 'mca-201',
    fileUrl: '/mock-files/MCA201_Solutions_2024.pdf',
    relatedResourceIds: ['res-202'],
    dateAdded: '2025-01-22',
    keywords: ['DBMS Solutions', 'Solved Paper 2024', 'MCA 201 Answer Key', 'Normalization Solution'],
    fileSize: '3.6 MB',
    pages: 18,
    authorOrSource: 'Faculty Review Committee'
  },

  // --- VIDEO LESSONS ---
  {
    id: 'res-401',
    title: 'Complete Video Lecture: AVL Tree Rotations & Balancing (Unit V)',
    type: 'video',
    description: 'Clear visual demonstration of LL, RR, LR, and RL rotations with animated node balancing and time complexity proofs.',
    courseId: 'mca',
    semesterId: 1,
    subjectId: 'mca-101',
    unitId: 5,
    videoUrl: 'https://www.youtube.com/embed/vRwi_UcZGjU',
    dateAdded: '2025-02-01',
    keywords: ['AVL Trees', 'Tree Rotations', 'Data Structures Video', 'Binary Tree Lecture'],
    authorOrSource: 'Curated University Open Courseware'
  },
  {
    id: 'res-402',
    title: 'Database Normalization Masterclass: 1NF to 5NF (Unit III)',
    type: 'video',
    description: 'Comprehensive 45-minute breakdown of functional dependency preservation, candidate key finding, and real-world database tables decomposition.',
    courseId: 'mca',
    semesterId: 2,
    subjectId: 'mca-201',
    unitId: 3,
    videoUrl: 'https://www.youtube.com/embed/GFQaEYEc8_8',
    dateAdded: '2025-02-05',
    keywords: ['DBMS Normalization Video', '1NF 2NF 3NF BCNF', 'Database Lecture', 'Candidate Keys'],
    authorOrSource: 'Tech Academic Series'
  },
  {
    id: 'res-403',
    title: 'Operating Systems: Banker\'s Algorithm & Deadlock Avoidance Walkthrough',
    type: 'video',
    description: 'Detailed numerical solving on whiteboard showing allocation, max, need matrices, and safe sequence determination.',
    courseId: 'mca',
    semesterId: 1,
    subjectId: 'mca-103',
    unitId: 4,
    videoUrl: 'https://www.youtube.com/embed/T0FXvTHcYi4',
    dateAdded: '2025-02-10',
    keywords: ['Banker Algorithm Video', 'Deadlock Avoidance', 'Operating Systems Video Lecture'],
    authorOrSource: 'Computer Science Channel'
  }
];
