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
        description: 'Programming in C with Data Structure, Statistical Mathematics, Operating System & Architecture, IT, Communication Skills & Practical Labs',
        totalCredits: 24,
        syllabusPdfUrl: '/assets/aistudio/Sem-1_a0cc93e3.pdf'
      },
      {
        number: 2,
        title: 'Semester II',
        description: 'DBMS, Computer Networks, Software Engineering & UML, Algorithm Design, Java & OOPS, with Hands-on Labs',
        totalCredits: 24,
        syllabusPdfUrl: '/assets/aistudio/Sem-2_7721c943.pdf'
      },
      {
        number: 3,
        title: 'Semester III',
        description: 'Data Mining, Artificial Intelligence, and Specialized Departmental Electives (Python, Web Tech, ML, IoT, Cloud, Ethics)',
        totalCredits: 24,
        syllabusPdfUrl: '/assets/aistudio/Sem-3_8353c851.pdf'
      },
      {
        number: 4,
        title: 'Semester IV',
        description: 'Major Project / Industrial Dissertation & Advanced Electives (Deep Learning, Cloud Computing, Big Data, Blockchain, InfoSec)',
        totalCredits: 20,
        syllabusPdfUrl: '/assets/aistudio/Sem-4_05732143.pdf'
      },
    ]
  },
  {
    id: 'btech',
    code: 'B.Tech',
    name: 'Bachelor of Technology (CSE)',
    duration: '4 Years (8 Semesters)',
    status: 'coming_soon',
    description: 'Undergraduate engineering syllabus resources are currently being compiled.',
    semesters: []
  },
  {
    id: 'llb',
    code: 'LL.B',
    name: 'Bachelor of Legislative Law',
    duration: '3 Years (6 Semesters)',
    status: 'coming_soon',
    description: 'Legal studies syllabus and case study repositories under verification.',
    semesters: []
  },
  {
    id: 'pharmacy',
    code: 'B.Pharm',
    name: 'Bachelor of Pharmacy',
    duration: '4 Years (8 Semesters)',
    status: 'coming_soon',
    description: 'Pharmaceutical sciences resources are currently in the curation pipeline.',
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
    syllabusPdfUrl: '/assets/aistudio/Sem-1_a0cc93e3.pdf',
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
    syllabusPdfUrl: '/assets/aistudio/Sem-1_a0cc93e3.pdf',
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
    syllabusPdfUrl: '/assets/aistudio/Sem-1_a0cc93e3.pdf',
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
    syllabusPdfUrl: '/assets/aistudio/Sem-1_a0cc93e3.pdf',
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
    syllabusPdfUrl: '/assets/aistudio/Sem-1_a0cc93e3.pdf',
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
  {
    id: 'mca-106',
    code: 'MCA 106',
    name: 'C and DS Lab',
    semester: 1,
    isElective: false,
    description: 'Practical laboratory implementation of C programming control structures, pointers, arrays, stacks, queues, linked lists, trees, and file operations.',
    syllabusPdfUrl: '/assets/aistudio/Sem-1_a0cc93e3.pdf',
    units: [],
    practicals: [
      'Program using control structures (if else, switch)',
      'Program using iterative structures (for, while, do-while)',
      'Array manipulation programs',
      'String manipulation programs',
      'Program using structures and unions',
      'Program for Stack contiguous operations',
      'Implement Stack using Linked lists to convert infix expression to postfix expression',
      'Program for Queue using pointers',
      'Linked List using Arrays',
      'Program for Linked list using pointers (Singly, Doubly)',
      'Program using dynamic allocation operators (malloc, calloc, free)',
      'File handling program (read, write, append)',
      'Program for Binary Tree creation and traversals'
    ]
  },
  {
    id: 'mca-107',
    code: 'MCA 107',
    name: 'Operating System Lab',
    semester: 1,
    isElective: false,
    description: 'Practical simulation experiments for CPU scheduling algorithms, file allocation strategies, memory allocation schemes, deadlocks, and disk scheduling.',
    syllabusPdfUrl: '/assets/aistudio/Sem-1_a0cc93e3.pdf',
    units: [],
    practicals: [
      'Program for CPU Scheduling Algorithms: FCFS, SJF, Round Robin (pre-emptive), Priority',
      'Program for File Allocation Strategies: Sequential, Indexed, Linked Memory',
      'Program to simulate contiguous memory allocation: Worst-fit, Best-fit, First-fit',
      'Program for Deadlock Management Techniques (Banker\'s Algorithm)',
      'Program to simulate disk scheduling algorithms: FCFS, SCAN, C-SCAN',
      'Program for Page Replacement Algorithms: FIFO, LRU, LFU',
      'Program to simulate producer-consumer problem using semaphores',
      'Program to simulate Dining-Philosophers synchronization problem'
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
    syllabusPdfUrl: '/assets/aistudio/Sem-2_7721c943.pdf',
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
    syllabusPdfUrl: '/assets/aistudio/Sem-2_7721c943.pdf',
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
    syllabusPdfUrl: '/assets/aistudio/Sem-2_7721c943.pdf',
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
    syllabusPdfUrl: '/assets/aistudio/Sem-2_7721c943.pdf',
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
    syllabusPdfUrl: '/assets/aistudio/Sem-2_7721c943.pdf',
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
  {
    id: 'mca-206',
    code: 'MCA 206',
    name: 'Java and OOPS lab',
    semester: 2,
    isElective: false,
    description: 'Hands-on practical programming in Java including control logic, constructors, inheritance, interfaces, arrays, strings, method overloading/overriding, and student stream calculations.',
    syllabusPdfUrl: '/assets/aistudio/Sem-2_7721c943.pdf',
    units: [],
    practicals: [
      'Write a Java program to determine maximum from given 100 numbers',
      'Write a Java program to calculate the factorial of a given number',
      'Java program to check whether a given character is alphabet or not',
      'Java program to find sum of all digits',
      'Write a Java program to add two binary numbers',
      'Write a Java program for switch statement',
      'Write a Java program to print perfect numbers',
      'Write a Java program to convert a decimal number to binary number',
      'Write a Java program for Parameterized Constructor',
      'Write a Java program using while loop, do while loop, for loop',
      'Write a Java program to check whether number is Armstrong or not',
      'Write a Java program for Hierarchical Inheritance',
      'Write a Java program for abstract class and for interface',
      'Write a Java program to declare, initialize and display contents of array of 5 integers and array length',
      'Write a program to accept a string and count total capital and small letters',
      'Write a Java program to generate sequential items (0,1,1,2,3...)',
      'Write a Java program for method overloading and method overriding',
      'Design a class Student with marks calculation and stream assignment (Computer, Electronics, Mechanical, Chemical, Civil)'
    ]
  },
  {
    id: 'mca-207',
    code: 'MCA 207',
    name: 'DBMS lab',
    semester: 2,
    isElective: false,
    description: 'Comprehensive 45 practical SQL queries and schema implementations covering Salesmen, Customers, Orders databases, DDL/DML, constraints, subqueries, and join operations.',
    syllabusPdfUrl: '/assets/aistudio/Sem-2_7721c943.pdf',
    units: [],
    practicals: [
      'Create and populate Salesmen, Customers, and Orders relational database tables with constraints',
      'Produce order number, amount and date for all orders',
      'Query all customer records assigned to salesman 1001',
      'Display city, salesman name, number, and commission sorted by city',
      'List ratings followed by customer name for specific cities (e.g. Surat)',
      'List distinct salesman numbers with active customer orders',
      'List all orders exceeding value threshold (Rs. 1000)',
      'Filter salesmen in London with commission above 10%',
      'Pattern matching queries using LIKE (\'C%\', \'[A-G]%\')',
      'Aggregate queries: count orders, calculate total amount, compute average commission',
      'Find pairs of customers sharing matching ratings without duplicates',
      'Subqueries and JOINs to correlate customers with salesmen across same cities',
      'Complex UNION queries with rating thresholds and custom computed labels (\'HIGH RATING\', \'LOW RATING\')'
    ]
  },

  // ==========================================
  // SEMESTER 3 (Official RGPV Syllabus)
  // ==========================================
  {
    id: 'mca-301',
    code: 'MCA 301',
    name: 'Data Mining',
    semester: 3,
    isElective: false,
    description: 'Data warehousing, OLAP multidimensional data cubes, data preprocessing, Apriori association rule mining, classification, and cluster analysis.',
    syllabusPdfUrl: '/assets/aistudio/Sem-3_8353c851.pdf',
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
  {
    id: 'mca-302',
    code: 'MCA 302',
    name: 'Artificial Intelligence',
    semester: 3,
    isElective: false,
    description: 'AI problems, LISP programming, heuristic search (A*, AO*), knowledge representation, predicate calculus, NLP, Minimax game playing, and expert systems.',
    syllabusPdfUrl: '/assets/aistudio/Sem-3_8353c851.pdf',
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
  // Elective – I Group (Sem 3)
  {
    id: 'mca-303-1',
    code: 'MCA 303 (1)',
    name: 'Python Programming',
    semester: 3,
    isElective: true,
    electiveGroup: 'Elective – I',
    description: 'Python fundamentals, control flow, functions, lists, tuples, dictionaries, object-oriented programming, classes, file I/O, and modules.',
    syllabusPdfUrl: '/assets/aistudio/Sem-3_8353c851.pdf',
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
    id: 'mca-303-2',
    code: 'MCA 303 (2)',
    name: 'Web Technology',
    semester: 3,
    isElective: true,
    electiveGroup: 'Elective – I',
    description: 'Client-server Internet architecture, HTML5, CSS positioning, JavaScript DOM manipulation, XML/XSLT transformations, AJAX, and Web Services.',
    syllabusPdfUrl: '/assets/aistudio/Sem-3_8353c851.pdf',
    books: [
      'Jeffrey C. Jackson, "Web Technologies - A Computer Science Perspective", Pearson Education',
      'Ralph Moseley and M. T. Savaliya, "Developing Web Applications", Wiley-India',
      'P.J. Deitel & H.M. Deitel, "Internet and World Wide Web How to program", Pearson'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Internet Concepts & Web Design Principles',
        topics: [
          'Client/Server model, Internet and WWW, IP, URL, ISP, DNS',
          'Principles of effective Web Design, Page layout and linking',
          'Designing effective navigation for websites',
          'Planning and publishing websites',
          'Responsive web design: Responsive vs adaptive design'
        ]
      },
      {
        unitNumber: 2,
        title: 'HTML & Cascading Style Sheets (CSS)',
        topics: [
          'Working with HTML: formatting, tags, hyperlinks, tables, images, forms, XHTML',
          'Style Sheets (CSS): introduction, basic syntax and structure',
          'Class, ID, background images, colors and properties',
          'Manipulating text, margins, positioning, box model'
        ]
      },
      {
        unitNumber: 3,
        title: 'Client-Side Scripting with JavaScript',
        topics: [
          'JavaScript data types and variables, expressions, operators',
          'Control statements, objects and arrays, functions, loops',
          'Classes, modules, Document Object Model (DOM)',
          'Form handling and client-side validation'
        ]
      },
      {
        unitNumber: 4,
        title: 'XML, DTD, Schema & XSLT',
        topics: [
          'XML: introduction, features, anatomy, declaration, key components',
          'DTD and Schema, markup elements and attributes, XML objects',
          'XML scripting, using XML with applications',
          'Transforming XML using XSL and XSLT, XPath template-based transformations'
        ]
      },
      {
        unitNumber: 5,
        title: 'AJAX & Web Services Architecture',
        topics: [
          'Introduction to AJAX, AJAX components, XMLHttpRequest object',
          'Using XSLT with AJAX',
          'Web Services architecture, introduction to web services',
          'Web Services vs other technologies, Web Services benefits (SOAP, WSDL)'
        ]
      }
    ]
  },
  {
    id: 'mca-303-3',
    code: 'MCA 303 (3)',
    name: 'Introduction to Data Science and Big Data',
    semester: 3,
    isElective: true,
    electiveGroup: 'Elective – I',
    description: 'Data science lifecycle, statistical inference, R data analysis, NoSQL databases (MongoDB, HBase), Hadoop ecosystem, MapReduce, and stream analytics.',
    syllabusPdfUrl: '/assets/aistudio/Sem-3_8353c851.pdf',
    books: [
      'Bill Franks, "Taming the Big Data Tidal Wave", John Wiley & Sons',
      'Rachel Schutt, Cathy O\'Neil, "Doing Data Science", O\'Reilly'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Introduction to Data Science & Big Data',
        topics: [
          'Data Science Process, Exploratory Data Analysis',
          'Big Data: Definition, Risks, Structure of Big Data',
          'Evolution of Analytic Scalability, Analytic Processes and Tools',
          'Core Analytics vs Advanced Analytics, Modern data analytic tools',
          'Statistical concepts: sampling distributions, re-sampling, statistical inference, data visualization'
        ]
      },
      {
        unitNumber: 2,
        title: 'Data Analysis Using R',
        topics: [
          'Univariate Analysis: Frequency, Mean, Median, Mode, Variance, SD, Skewness, Kurtosis',
          'Bivariate Analysis: Correlation, Regression Modeling (Linear and Logistic)',
          'Multivariate Analysis',
          'Graphical representations in R: Bar plot, Histogram, Box plot, Scatter plot, Lattice plot'
        ]
      },
      {
        unitNumber: 3,
        title: 'Data Modeling & NoSQL',
        topics: [
          'Bayesian Modeling, Support Vector and Kernel Methods, Neuro-Fuzzy Modeling',
          'Principal Component Analysis (PCA)',
          'Introduction to NoSQL: CAP Theorem',
          'MongoDB: RDBMS vs MongoDB, database model, data types and sharding',
          'Data modeling in HBase: defining schema, CRUD operations'
        ]
      },
      {
        unitNumber: 4,
        title: 'Data Analytical Frameworks & Hadoop',
        topics: [
          'Introduction to Hadoop: Hadoop Overview, RDBMS vs Hadoop',
          'HDFS: components and block replication',
          'Introduction to MapReduce, running algorithms using MapReduce',
          'HBase architecture: HLog and HFile, data replication',
          'Introduction to Hive, Spark, and Apache Sqoop'
        ]
      },
      {
        unitNumber: 5,
        title: 'Stream Analytics',
        topics: [
          'Introduction to Streams concepts, Stream Data Model and Architecture',
          'Stream Computing, sampling data in a stream, filtering streams',
          'Counting distinct elements in a stream, estimating moments',
          'Counting oneness in a window, decaying window algorithms'
        ]
      }
    ]
  },
  // Elective – II Group (Sem 3)
  {
    id: 'mca-304-1',
    code: 'MCA 304 (1)',
    name: 'Machine Learning',
    semester: 3,
    isElective: true,
    electiveGroup: 'Elective – II',
    description: 'Supervised and unsupervised learning, backpropagation, CNN architectures, RNN/LSTM, reinforcement learning (MDP, Q-learning), and Support Vector Machines.',
    syllabusPdfUrl: '/assets/aistudio/Sem-3_8353c851.pdf',
    books: [
      'Christopher M. Bishop, "Pattern Recognition and Machine Learning", Springer, 2011',
      'Tom M. Mitchell, "Machine Learning", McGraw Hill Education, 2017',
      'Ian Goodfellow, Yoshua Bengio, Aaron Courville, "Deep Learning", MIT Press, 2016'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Machine Learning Foundations',
        topics: [
          'Scope and limitations of machine learning',
          'Linear algebra, probability, statistics, convex optimization',
          'Hypothesis function and testing, data distributions, data augmentation',
          'Normalizing datasets, supervised and unsupervised learning overview'
        ]
      },
      {
        unitNumber: 2,
        title: 'Neural Networks & Optimization',
        topics: [
          'Linearity vs non-linearity, activation functions (Sigmoid, ReLU)',
          'Weights and bias, loss functions, gradient descent',
          'Multilayer network, backpropagation, weight initialization',
          'Batch normalization, dropout, L1 and L2 regularization, tuning hyperparameters'
        ]
      },
      {
        unitNumber: 3,
        title: 'Convolutional Neural Networks (CNN)',
        topics: [
          'Flattening, subsampling, padding, stride, convolution layers, pooling layers',
          '1x1 convolutions, Inception network, input channels',
          'Transfer learning, one shot learning, dimension reductions',
          'Implementation of CNN in TensorFlow and Keras'
        ]
      },
      {
        unitNumber: 4,
        title: 'Recurrent Networks & Reinforcement Learning',
        topics: [
          'Recurrent Neural Network (RNN), LSTM, Gated Recurrent Unit (GRU)',
          'Sequence modeling, attention models, BLEU score',
          'Reinforcement Learning framework, Markov Decision Processes (MDP)',
          'Bellman equations, Value & Policy Iteration, Q-learning, SARSA'
        ]
      },
      {
        unitNumber: 5,
        title: 'SVM, Bayesian Learning & Applications',
        topics: [
          'Support Vector Machines (SVM), kernel trick',
          'Bayesian learning',
          'Applications in computer vision, speech processing, and NLP',
          'Case study: ImageNet competition'
        ]
      }
    ]
  },
  {
    id: 'mca-304-2',
    code: 'MCA 304 (2)',
    name: 'Soft Computing',
    semester: 3,
    isElective: true,
    electiveGroup: 'Elective – II',
    description: 'Artificial neural networks, Perceptrons, backpropagation, Kohonen Self-Organizing Maps, Fuzzy Logic controllers, and Genetic Algorithms.',
    syllabusPdfUrl: '/assets/aistudio/Sem-3_8353c851.pdf',
    books: [
      'R. Rajasekaran and G. A. Vijayalakshmi Pai, "Neural Networks, Fuzzy Logic, and Genetic Algorithms", PHI',
      'D. E. Goldberg, "Genetic Algorithms in Search, Optimisation, and Machine Learning", Addison-Wesley'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Overview of Soft Computing & Early ANN',
        topics: [
          'Difference between Soft and Hard computing',
          'Components: AI systems, Neural networks, Fuzzy logic, Genetic algorithms',
          'Biological vs Artificial neural networks, ANN architecture, activation functions',
          'Early architectures: McCulloch-Pitts model, Perceptron, ADALINE, MADALINE'
        ]
      },
      {
        unitNumber: 2,
        title: 'Supervised Neural Network Learning',
        topics: [
          'Neuron as a computing element, Perceptron learning',
          'Backpropagation networks: architecture, learning rule, accelerated learning',
          'Hopfield network, Bidirectional Associative Memories (BAM)',
          'Radial Basis Function (RBF) Neural Networks'
        ]
      },
      {
        unitNumber: 3,
        title: 'Unsupervised Learning Networks',
        topics: [
          'Hebbian Learning, Generalized Hebbian learning algorithm',
          'Competitive learning',
          'Self-Organizing Computational Maps: Kohonen Network'
        ]
      },
      {
        unitNumber: 4,
        title: 'Fuzzy Logic & Controllers',
        topics: [
          'Crisp sets vs Fuzzy sets',
          'Fuzzy relations, fuzzy conditional statements, fuzzy rules',
          'Fuzzy algorithms, defuzzification methods',
          'Fuzzy logic controller design'
        ]
      },
      {
        unitNumber: 5,
        title: 'Genetic Algorithms (GA)',
        topics: [
          'Basic concepts, chromosome encoding, fitness functions',
          'Reproduction: Roulette wheel, Boltzmann, tournament, rank selection',
          'Crossover and mutation operators',
          'Convergence of GA, case study applications, genetic programming basics'
        ]
      }
    ]
  },
  {
    id: 'mca-304-3',
    code: 'MCA 304 (3)',
    name: 'Internet of Things',
    semester: 3,
    isElective: true,
    electiveGroup: 'Elective – II',
    description: 'IoT conceptual framework, M2M, web connectivity protocols (REST, WebSockets), sensor technology, RFID, Raspberry Pi, Arduino, and smart city implementations.',
    syllabusPdfUrl: '/assets/aistudio/Sem-3_8353c851.pdf',
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
  // Elective – III Group (Sem 3)
  {
    id: 'mca-305-1',
    code: 'MCA 305 (1)',
    name: 'Computer Ethics',
    semester: 3,
    isElective: true,
    electiveGroup: 'Elective – III',
    description: 'Ethics in IT organizations, computer crime, intellectual property, software product liability, privacy legislation, and social networking responsibilities.',
    syllabusPdfUrl: '/assets/aistudio/Sem-3_8353c851.pdf',
    books: [
      'George W. Reynolds, "Ethics in Information Technology", 3rd Edition, Cengage Learning',
      'Deborah Johnson, "Computer Ethics", 4th Edition',
      'Richard Spinello and Herman Tavani, "CyberEthics", 2nd Edition'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Overview of Ethics in Information Technology',
        topics: [
          'Definition of Ethics, Integrity, Difference between Morals, Ethics, and Laws',
          'Ethics in Business, Corporate ethics, Ethical work environment',
          'Ethics for IT Workers: professional codes of ethics, certification, licensing',
          'IT professional malpractice, Common ethical issues for IT users'
        ]
      },
      {
        unitNumber: 2,
        title: 'Computer Crime, Security & Information Privacy',
        topics: [
          'Types of computer exploits and perpetrators, Federal laws for cyber prosecution',
          'Implementing trustworthy computing, security policies, incident response',
          'Privacy protection and laws, Identity theft, Consumer profiling',
          'Workplace monitoring and surveillance technology'
        ]
      },
      {
        unitNumber: 3,
        title: 'Freedom of Expression & Intellectual Property',
        topics: [
          'First Amendment rights, defamation, corporate blogging, anonymous speech',
          'Intellectual property: Copyrights, Fair Use Doctrine, DMCA 1998, WIPO',
          'Patents: software patents, cross-licensing, patent trolls',
          'Trade Secrets, Plagiarism, Reverse engineering, Cybersquatting'
        ]
      },
      {
        unitNumber: 4,
        title: 'Software Development Liability & Impact of IT',
        topics: [
          'Strategies for engineering quality software, Software product liability',
          'CMMI levels, Safety-critical systems, Quality management standards',
          'Impact of IT on productivity and quality of life, Digital divide',
          'IT in Healthcare, Electronic health records, Telemedicine'
        ]
      },
      {
        unitNumber: 5,
        title: 'Social Networking & IT Organization Ethics',
        topics: [
          'Social networking business applications, Advertising, Hiring risks',
          'Cyberbullying, Cyberstalking, Virtual worlds',
          'Contingent workers, Outsourcing and offshore strategies',
          'Whistle-blowing protection, Green computing, ICT codes of conduct'
        ]
      }
    ]
  },
  {
    id: 'mca-305-2',
    code: 'MCA 305 (2)',
    name: 'Advanced DBMS',
    semester: 3,
    isElective: true,
    electiveGroup: 'Elective – III',
    description: 'Object-relational databases, deductive databases, parallel & distributed databases, multi-level transactions, active ECA rules, and multimedia spatial databases.',
    syllabusPdfUrl: '/assets/aistudio/Sem-3_8353c851.pdf',
    books: [
      'Elmasri, "Fundamentals of Database Systems", 4th Edition, Pearson',
      'R. Ramakrishnan, "Database Management Systems", McGraw Hill',
      'Elmagarmid A.K., "Database transaction models for advanced applications"'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Object Oriented & Object Relational Databases',
        topics: [
          'Modeling complex data semantics, Specialization, Generalization, Aggregation',
          'Objects, Object Identity, Clustering, Equality and Reference',
          'Architecture of Object-Oriented and Object-Relational databases',
          'Persistent programming languages, Cache coherence',
          'Case studies: Gemstone, O2, SQL3, Oracle xxi, DB2'
        ]
      },
      {
        unitNumber: 2,
        title: 'Deductive, Parallel & Distributed Databases',
        topics: [
          'Datalog and recursion, Evaluation of Datalog programs, Recursive queries',
          'Parallel architectures: shared nothing, shared disk, shared memory, pipelining',
          'Distributed Data Storage: Fragmentation, Replication, Transparency',
          'Distributed query optimization, Distributed transaction modeling & deadlocks, Commit protocols'
        ]
      },
      {
        unitNumber: 3,
        title: 'Advanced Transaction Processing',
        topics: [
          'Savepoints, Nested and Multilevel Transactions',
          'Compensating transactions and Sagas',
          'Long duration transactions, Weak levels of consistency',
          'Transaction workflows, Transaction Processing Monitors'
        ]
      },
      {
        unitNumber: 4,
        title: 'Active & Real-Time Databases',
        topics: [
          'Triggers in SQL, Event-Condition-Action (ECA) rules',
          'Query processing and concurrency control in active databases',
          'Recursive query processing, Compensation and Database recovery, Multi-level recovery'
        ]
      },
      {
        unitNumber: 5,
        title: 'Image, Multimedia & Web Databases',
        topics: [
          'Modeling and storage of Image and Multimedia data',
          'Spatial Data Structures: R-tree, k-d tree, Quad trees',
          'Content-Based Retrieval (CBIR): color histograms, textures, image features',
          'Audio and video data models, Geographic Information Systems (GIS)',
          'Web databases, XML databases, Commercial systems (Oracle, DB2)'
        ]
      }
    ]
  },
  {
    id: 'mca-305-3',
    code: 'MCA 305 (3)',
    name: 'Distributed Systems',
    semester: 3,
    isElective: true,
    electiveGroup: 'Elective – III',
    description: 'Distributed systems architectures, RPC, clock synchronization, election algorithms, fault tolerance, replication, CORBA, and distributed shared memory.',
    syllabusPdfUrl: '/assets/aistudio/Sem-3_8353c851.pdf',
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
          'Message and stream oriented communications'
        ]
      },
      {
        unitNumber: 2,
        title: 'Processes & Synchronization',
        topics: [
          'Threads, Clients, Servers, Code migration',
          'Clock synchronization algorithms (Lamport timestamps)',
          'Mutual exclusion in distributed systems',
          'Election algorithms: Bully and Ring algorithms',
          'Distributed transactions'
        ]
      },
      {
        unitNumber: 3,
        title: 'Consistency, Replication & Fault Tolerance',
        topics: [
          'Object replication, Data-centric consistency models',
          'Client-centric consistency models',
          'Fault tolerance, Process resilience, Distributed recovery',
          'Distributed security architecture, Kerberos, SSL/TLS, Cryptography'
        ]
      },
      {
        unitNumber: 4,
        title: 'Distributed Object-Based & File Systems',
        topics: [
          'CORBA, Distributed COM',
          'Goals and design issues of Distributed File Systems',
          'Types of distributed file systems',
          'Sun Network File System (NFS)'
        ]
      },
      {
        unitNumber: 5,
        title: 'Distributed Shared Memory & Coordination',
        topics: [
          'Distributed Shared Memory (DSM) servers, consistency models',
          'Distributed document-based systems: World Wide Web',
          'Coordination-based systems: JINI implementation, Java RMI',
          'ActiveX, Orbix, Object-oriented programming with SOM'
        ]
      }
    ]
  },

  // ==========================================
  // SEMESTER 4 (Official RGPV Syllabus)
  // ==========================================
  // Elective – IV Group (Sem 4)
  {
    id: 'mca-401-1',
    code: 'MCA 401 (1)',
    name: 'Advanced Python',
    semester: 4,
    isElective: true,
    electiveGroup: 'Elective – IV',
    description: 'Advanced Python OOP, iterators, generators, decorators, file streams, SQLite database access, Tkinter GUI, NumPy, Pandas, Matplotlib, and Scikit-Learn.',
    syllabusPdfUrl: '/assets/aistudio/Sem-4_05732143.pdf',
    books: [
      'Michael Urban and Joel Murach, "Python Programming", Shroff/Murach, 2016',
      'Mark Lutz, "Programming Python", O\'Reilly, 4th Edition, 2010'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Advanced Python Coding Foundations',
        topics: [
          'Introduction to Python, IDE development, coding skills',
          'Numeric, string, and list operations, Python functions',
          'Boolean expressions, selection & iteration structures',
          'Working with lists of lists, tuples, dates and times, dictionaries'
        ]
      },
      {
        unitNumber: 2,
        title: 'OOP, Custom Exceptions & Decorators',
        topics: [
          'Classes, objects, constructors, data hiding, instance methods',
          'Class variables, inheritance, polymorphism, type identification',
          'Custom Exception Classes, error propagation',
          'Iterators, Generators, and Decorators in Python'
        ]
      },
      {
        unitNumber: 3,
        title: 'I/O Streams & Directory Management',
        topics: [
          'Data streams, creating custom data streams, access modes',
          'File reading and writing, additional file methods',
          'Handling IO exceptions, exception hierarchy, handling multiple exceptions',
          'Working with Directories and OS file interfaces'
        ]
      },
      {
        unitNumber: 4,
        title: 'Relational Databases & GUI Development',
        topics: [
          'SQL statements for data manipulation in Python',
          'SQLite database programming, database cursors and commits',
          'Creating a GUI with event handling, component design (Tkinter)'
        ]
      },
      {
        unitNumber: 5,
        title: 'Data Science Libraries & Machine Learning',
        topics: [
          'NumPy for numerical multi-dimensional arrays',
          'Pandas for data structures, cleaning, and analysis',
          'Matplotlib and Seaborn for statistical plotting',
          'Interactive dynamic visualizations',
          'Scikit-Learn implementation of machine learning algorithms'
        ]
      }
    ]
  },
  {
    id: 'mca-401-2',
    code: 'MCA 401 (2)',
    name: 'Advanced Web Technology',
    semester: 4,
    isElective: true,
    electiveGroup: 'Elective – IV',
    description: 'Bootstrap responsive design, XML validation, XSLT, AJAX with PHP backend, RESTful web services consumption, jQuery DOM selectors, and event handling.',
    syllabusPdfUrl: '/assets/aistudio/Sem-4_05732143.pdf',
    books: [
      'Ivan Bayross and Sharanam Shah, "AJAX For Beginners", SPD',
      'Richard York, "Web Development with jQuery", Wrox',
      'Robin Nixon, "Learning PHP, MySQL & JavaScript with jQuery, CSS & HTML5", SPD',
      'Dave Crane, Eric Pascarello, "Ajax in Action"'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Responsive Design & Bootstrap Grid',
        topics: [
          'Responsive web design principles',
          'Introduction to Bootstrap framework',
          'Bootstrap 12-column grid system',
          'Bootstrap UI components and interactive plugins'
        ]
      },
      {
        unitNumber: 2,
        title: 'XML, DTD, Schema & XSLT Transformation',
        topics: [
          'XML compared with HTML, Structure of XML documents',
          'Declarations, Elements, Attributes, CDATA, XML Entity references',
          'Parsers, Document Type Definitions (DTD), XML Schema',
          'Using XSLT with XML: templates, apply-templates, import, include, value-of, sorting'
        ]
      },
      {
        unitNumber: 3,
        title: 'AJAX Web Application Model & PHP Integration',
        topics: [
          'AJAX web application model, XMLHttpRequest object lifecycle',
          'Synchronous vs Asynchronous data transfers',
          'Cross-browser AJAX implementations',
          'Integrating PHP and AJAX: sending and receiving data',
          'Field validation using AJAX and PHP'
        ]
      },
      {
        unitNumber: 4,
        title: 'XML Processing, Database Queries & Web Services',
        topics: [
          'Handling XML data using PHP and JavaScript DOM methods',
          'Extracting node values and attributes in XML',
          'Validating XML documents in AJAX applications',
          'Retrieving database records via PHP and AJAX',
          'Consuming Web Services using AJAX (SOAP, WSDL, UDDI, REST)'
        ]
      },
      {
        unitNumber: 5,
        title: 'jQuery Library, DOM Traversals & Effects',
        topics: [
          'JavaScript DOM objects: Window, History, Location, Document, Form',
          'jQuery fundamentals, loading and utilizing library files',
          'Callback functions, jQuery selectors, accessing HTML attributes',
          'DOM traversing, manipulators, events, effects, jQuery with AJAX'
        ]
      }
    ]
  },
  {
    id: 'mca-401-3',
    code: 'MCA 401 (3)',
    name: 'Big Data Analytics',
    semester: 4,
    isElective: true,
    electiveGroup: 'Elective – IV',
    description: 'HDFS, MapReduce, YARN, K-means clustering, Decision Trees, Apriori recommendation systems, real-time stream sentiment analytics, and NoSQL databases.',
    syllabusPdfUrl: '/assets/aistudio/Sem-4_05732143.pdf',
    books: [
      'Anand Rajaraman and Jeffrey David Ullman, "Mining of Massive Datasets", Cambridge University Press',
      'David Loshin, "Big Data Analytics", Morgan Kaufmann, 2013',
      'EMC Education Services, "Data Science and Big Data Analytics", Wiley, 2015'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Introduction to Big Data & HDFS Architecture',
        topics: [
          'Evolution and characteristics of Big Data (Volume, Velocity, Variety)',
          'Big Data use cases and business value quantification',
          'High-performance storage architecture',
          'Hadoop Distributed File System (HDFS), MapReduce and YARN programming model'
        ]
      },
      {
        unitNumber: 2,
        title: 'Clustering & Classification in R',
        topics: [
          'Clustering overview: K-means algorithm, choosing cluster count, diagnostics',
          'Classification: Decision Trees overview and algorithms',
          'Evaluating Decision Trees, implementing in R',
          'Naïve Bayes theorem and Naïve Bayes Classifier'
        ]
      },
      {
        unitNumber: 3,
        title: 'Association & Recommendation Systems',
        topics: [
          'Association Rules: Apriori algorithm, candidate rule evaluation',
          'Finding associations and similarity',
          'Recommendation Systems: Collaborative filtering, Content-based recommendations',
          'Knowledge-based recommendations, Hybrid recommendation approaches'
        ]
      },
      {
        unitNumber: 4,
        title: 'Stream Memory & Real-Time Analytics',
        topics: [
          'Stream Data Model, stream computing, sampling and filtering streams',
          'Counting distinct elements in a stream, Estimating moments',
          'Real Time Analytics Platform (RTAP), Sentiment analysis, Stock predictions',
          'Graph Analytics for Big Data'
        ]
      },
      {
        unitNumber: 5,
        title: 'NoSQL Data Management & Visualization',
        topics: [
          'NoSQL schema-less models: Key-Value, Document, Tabular, Object data stores',
          'Graph databases, Apache Hive, Sharding, HBase',
          'Analyzing Twitter and E-commerce data',
          'Review of data analytic methods using R'
        ]
      }
    ]
  },
  // Elective – V Group (Sem 4)
  {
    id: 'mca-402-1',
    code: 'MCA 402 (1)',
    name: 'Deep Learning',
    semester: 4,
    isElective: true,
    electiveGroup: 'Elective – V',
    description: 'Feed-forward perceptrons, backpropagation in TensorFlow, CNN architectures (LeNet, AlexNet, ResNet), deep network regularization, LSTM, and Deep Q Networks.',
    syllabusPdfUrl: '/assets/aistudio/Sem-4_05732143.pdf',
    books: [
      'Nikhil Buduma, Nicholas Locascio, "Fundamentals of Deep Learning", O\'Reilly, 2017',
      'Sudharsan Ravichandiran, "Hands on Deep Learning Algorithms with Python", Packt, 2019',
      'François Chollet, "Deep Learning with Python", Manning, 2017',
      'Ian Goodfellow, Yoshua Bengio, Aaron Courville, "Deep Learning", MIT Press, 2016'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Neural Networks & Perceptrons',
        topics: [
          'Building intelligent machines, Perceptrons as artificial neurons',
          'Feed-forward neural networks, activation functions',
          'Single layer vs multilayer perceptrons, Backpropagation algorithm',
          'XOR problem, limitations of backpropagation, TensorFlow implementations'
        ]
      },
      {
        unitNumber: 2,
        title: 'Convolutional Neural Networks (CNN)',
        topics: [
          'Filters, feature maps, max pooling, full CNN architecture',
          'Image preprocessing pipelines, accelerating training with batch normalization',
          'Visualizing learning in convolution layers, Transfer Learning with CNNs'
        ]
      },
      {
        unitNumber: 3,
        title: 'Deep Network Architectures & GANs',
        topics: [
          'Probabilistic theory of deep learning, VC dimension and neural nets',
          'Deep vs shallow networks, Generative Adversarial Networks (GANs)',
          'Semi-supervised learning'
        ]
      },
      {
        unitNumber: 4,
        title: 'Optimization & Recurrent Networks (RNN)',
        topics: [
          'Non-convex optimization, stochastic optimization, generalization',
          'Spatial Transformer Networks',
          'Recurrent Neural Networks (RNN), LSTM, language models, word-level RNNs'
        ]
      },
      {
        unitNumber: 5,
        title: 'Deep Reinforcement Learning',
        topics: [
          'Markov Decision Processes, Explore vs Exploit trade-offs',
          'Policy vs Value Learning, Pole-Cart with policy gradients',
          'Q-Learning and Deep Q Networks (DQN), advancing beyond DQN'
        ]
      }
    ]
  },
  {
    id: 'mca-402-2',
    code: 'MCA 402 (2)',
    name: 'Cloud Computing Technologies',
    semester: 4,
    isElective: true,
    electiveGroup: 'Elective – V',
    description: 'NIST cloud architecture, IaaS/PaaS/SaaS service models, hypervisors, server virtualization, AWS/Azure/GCP platforms, Hadoop MapReduce, and cloud security.',
    syllabusPdfUrl: '/assets/aistudio/Sem-4_05732143.pdf',
    books: [
      'Anthony T. Velte, Toby J. Velte, Robert Elsenpeter, "Cloud Computing: A Practical Approach", McGrawHill',
      'Kai Hwang, Geoffrey C. Fox, Jack G. Dongarra, "Distributed and Cloud Computing", Morgan Kaufmann',
      'Ronald L. Krutz, Russell Dean Vines, "Cloud Security", Wiley'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Cloud Computing Fundamentals & Architecture',
        topics: [
          'Definition of Cloud Computing, cloud types and service models',
          'Benefits and challenges of cloud computing, evolution of cloud computing',
          'NIST architecture of cloud computing, applications, business models',
          'Major players in cloud computing: Eucalyptus, Nimbus, OpenNebula, CloudSim, VMware'
        ]
      },
      {
        unitNumber: 2,
        title: 'Types of Computing & Cloud Deployment Models',
        topics: [
          'Cluster Computing, Grid Computing vs Cloud Computing',
          'Key characteristics and benefits of cloud models',
          'Public Cloud, Private Cloud, Hybrid Cloud, Community Cloud',
          'Shared Private Cloud, Dedicated Private Cloud, Dynamic Private Cloud'
        ]
      },
      {
        unitNumber: 3,
        title: 'Cloud Services & File Systems',
        topics: [
          'SaaS, PaaS, IaaS, Database as a Service (DaaS), Monitoring as a Service',
          'Communication as a Service',
          'Service providers: Google App Engine, Amazon EC2, Microsoft Azure, Salesforce'
        ]
      },
      {
        unitNumber: 4,
        title: 'Virtualization & Distributed Infrastructure',
        topics: [
          'Virtualization basics, types and implementation levels',
          'Virtualization of CPU, Memory, I/O devices, and OS',
          'Virtualization for data center automation',
          'Introduction to MapReduce, GFS, HDFS, Hadoop framework'
        ]
      },
      {
        unitNumber: 5,
        title: 'Cloud Security & Governance',
        topics: [
          'Security overview, challenges and risks in cloud computing',
          'SaaS security, security monitoring, security architecture design',
          'Data security, application security, virtual machine security',
          'Identity Management and Access Control (IAM), autonomic security'
        ]
      }
    ]
  },
  {
    id: 'mca-402-3',
    code: 'MCA 402 (3)',
    name: 'Digital Marketing',
    semester: 4,
    isElective: true,
    electiveGroup: 'Elective – V',
    description: 'Search Engine Optimization (SEO), on-page and off-page optimization, Google AdWords SEM campaigns, mobile marketing, social media marketing, and email analytics.',
    syllabusPdfUrl: '/assets/aistudio/Sem-4_05732143.pdf',
    books: [
      'Digital Firefly Marketing, "Big Book of Digital Marketing"',
      'Damian Ryan, Calvin Jones, "Understanding Digital Marketing", Kogan Page',
      'Alex Trengove Jones, Anna Malczyk, Justin Beneke, "Internet Marketing", GetSmarter'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Digital Marketing Introduction & SEO Basics',
        topics: [
          'What is Digital Marketing, Organic vs Paid digital marketing',
          'Digital Marketing era and forward roadmaps for professionals',
          'Search Engine Optimization (SEO): search engine ecosystem',
          'Kinds of web traffic, search engine crawling and indexing'
        ]
      },
      {
        unitNumber: 2,
        title: 'On-Page (OPO) & Off-Page Optimization',
        topics: [
          'On-page optimization: HTML, CSS, meta tags usage, graphic optimization',
          'Contextual interlinking, microformats, schema markup',
          'Off-page optimization: linking strategies, competitor analysis, link baiting',
          'Article exchanges, social bookmarking, directory submissions'
        ]
      },
      {
        unitNumber: 3,
        title: 'Search Engine Marketing (SEM) & Google AdWords',
        topics: [
          'Introduction to SEM and paid advertising platforms',
          'Google AdWords account structure, campaign creation, ad approval',
          'Search & Display networks, keyword match types, Keyword Planner',
          'Ad extensions, bidding strategies (Manual, Auto, CPC, CPA, CPM)'
        ]
      },
      {
        unitNumber: 4,
        title: 'Mobile, Video & Social Media Ads',
        topics: [
          'Mobile advertising: click-to-call campaigns, mobile ad optimization',
          'YouTube advertising: video campaigns, in-stream ads, video ad metrics',
          'Facebook Marketing: paid campaigns, custom audiences, Power Editor',
          'AdWords billing management, Content marketing strategies'
        ]
      },
      {
        unitNumber: 5,
        title: 'Remarketing & Social Media Analytics',
        topics: [
          'Remarketing campaigns: custom combinations, URL rules, remarketing tags',
          'AdWords Editor for bulk optimizations and account auditing',
          'Company social media readiness, scheduling, Tumblr/influencer marketing'
        ]
      }
    ]
  },
  // Elective – VI Group (Sem 4)
  {
    id: 'mca-403-1',
    code: 'MCA 403 (1)',
    name: 'Information Security',
    semester: 4,
    isElective: true,
    electiveGroup: 'Elective – VI',
    description: 'NSTISSC security model, security SDLC, threat investigations, access control matrix, risk assessment, ISO 17799/BS7799 standards, and IDS scanning tools.',
    syllabusPdfUrl: '/assets/aistudio/Sem-4_05732143.pdf',
    books: [
      'Michael E Whitman and Herbert J Mattord, "Principles of Information Security", Vikas, 2003',
      'Micki Krause, Harold F. Tipton, "Handbook of Information Security Management", CRC Press',
      'Stuart McClure, Joel Scrambray, George Kurtz, "Hacking Exposed", Tata McGraw-Hill'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Information Security Introduction & Security SDLC',
        topics: [
          'What is Information Security, Critical characteristics of information',
          'NSTISSC Security Model, Components of an Information System',
          'Securing components, balancing security and access',
          'Security Systems Development Life Cycle (SecSDLC)'
        ]
      },
      {
        unitNumber: 2,
        title: 'Security Investigation & Policies',
        topics: [
          'Need for security, business needs, threats and attacks',
          'Legal, ethical and professional issues in security',
          'Computer security overview, Access Control Matrix',
          'Security policies, integrity policies, and hybrid policies'
        ]
      },
      {
        unitNumber: 3,
        title: 'Security Analysis & Risk Management',
        topics: [
          'Risk management: identifying, assessing, and controlling risk',
          'Access control mechanisms',
          'Information flow and confinement problems'
        ]
      },
      {
        unitNumber: 4,
        title: 'Logical Security Design & Standards',
        topics: [
          'Blueprint for security, Information Security Policy',
          'Standards and practices: ISO 17799/BS7799, NIST models',
          'VISA International Security Model, Design of Security Architecture',
          'Planning for business continuity and disaster recovery'
        ]
      },
      {
        unitNumber: 5,
        title: 'Physical Design & Security Technologies',
        topics: [
          'Security technology: Intrusion Detection Systems (IDS/IPS)',
          'Scanning and vulnerability analysis tools',
          'Applied cryptography, access control devices, physical facility security',
          'Security personnel policies'
        ]
      }
    ]
  },
  {
    id: 'mca-403-2',
    code: 'MCA 403 (2)',
    name: 'Block Chain And Cryptocurrency',
    semester: 4,
    isElective: true,
    electiveGroup: 'Elective – VI',
    description: 'Blockchain distributed ledger, proof-of-work/stake consensus, Bitcoin transactions, Ethereum EVM, smart contracts in Solidity, Hyperledger, and decentralized apps.',
    syllabusPdfUrl: '/assets/aistudio/Sem-4_05732143.pdf',
    books: [
      'Josh Thompson, "Blockchain: The Blockchain for Beginnings", CreateSpace, 2017',
      'Arvind Narayanan et al., "Bitcoin and Cryptocurrency Technologies", Princeton University Press, 2016'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Overview of Blockchain & Consensus',
        topics: [
          'Structure and data structure of Blockchain, data distribution',
          'Block validation mechanisms',
          'Block Validators: Proof of Work (PoW), Proof of Stake (PoS)',
          'Proof of Activity, Proof of Elapsed Time, Proof of Burn'
        ]
      },
      {
        unitNumber: 2,
        title: 'Cryptocurrency, Bitcoin & Ethereum',
        topics: [
          'Bitcoin: working, transactions, mining, value, community and regulations',
          'Advantages and disadvantages of Bitcoin',
          'Ethereum: overview, decentralized applications (DApps)',
          'Components of Ethereum: smart contracts, Ether, EVM, Etherscripter'
        ]
      },
      {
        unitNumber: 3,
        title: 'Hyperledger, Wallets & Truffle Framework',
        topics: [
          'Digital tokens overview: ICO, OmiseGO, EOS, Tether',
          'MetaMask wallet, seed phrase, transactions, Mist wallet',
          'Truffle framework: development boxes, community truffle suite'
        ]
      },
      {
        unitNumber: 4,
        title: 'Smart Contracts with Solidity & Fabric',
        topics: [
          'Smart contracts, contract state, interfaces in Solidity',
          'Hyperledger Fabric: architecture, Fabric vs Ethereum',
          'Hyperledger Iroha and Hyperledger Sawtooth components'
        ]
      },
      {
        unitNumber: 5,
        title: 'Enterprise Blockchain Platforms',
        topics: [
          'MultiChain, HydraChain architecture',
          'Future blockchain networks: IOTA, Corda, Chain Core',
          'Blockchain frameworks: CoCo Framework, Tierion, BigchainDB'
        ]
      }
    ]
  },
  {
    id: 'mca-403-3',
    code: 'MCA 403 (3)',
    name: 'Mobile Computing',
    semester: 4,
    isElective: true,
    electiveGroup: 'Elective – VI',
    description: 'Wireless transmission multiplexing (SDMA, TDMA, CDMA), GSM architecture, Mobile IP, ad-hoc wireless routing (DSDV, DSR, AODV), MANETs, and mobile OS platforms.',
    syllabusPdfUrl: '/assets/aistudio/Sem-4_05732143.pdf',
    books: [
      'Jochen Schiller, "Mobile Communications", 2nd Edition, Pearson Education, 2003',
      'William Stallings, "Wireless Communications and Networks", 2nd Edition, Pearson'
    ],
    units: [
      {
        unitNumber: 1,
        title: 'Wireless Communication Fundamentals',
        topics: [
          'Mobile Computing vs Wireless Computing, characteristics and applications',
          'Generations of mobile communication technologies',
          'Multiplexing techniques, Spread Spectrum principles',
          'MAC protocols: SDMA, TDMA, FDMA, CDMA'
        ]
      },
      {
        unitNumber: 2,
        title: 'Telecommunication Systems & GSM',
        topics: [
          'Introduction to Cellular Systems, GSM System Architecture',
          'Connection establishment, frequency allocation, routing',
          'Mobility management, GSM security, GPRS architecture, handovers'
        ]
      },
      {
        unitNumber: 3,
        title: 'Mobile Network Layer & Routing Protocols',
        topics: [
          'Mobile IP, DHCP operations',
          'Proactive protocols: DSDV; Reactive protocols: DSR, AODV; Hybrid routing: ZRP',
          'Wireless LAN: IEEE 802.11 standards, architecture, services',
          'HIPERLAN, Ad-hoc networks, Bluetooth'
        ]
      },
      {
        unitNumber: 4,
        title: 'Mobile Ad-Hoc Networks (MANET) & VANET',
        topics: [
          'MANET basic concepts, characteristics, design issues, routing essentials',
          'Popular routing protocols in ad-hoc networks',
          'Vehicular Ad-Hoc Networks (VANET), MANET vs VANET',
          'Ad-hoc network security challenges'
        ]
      },
      {
        unitNumber: 5,
        title: 'Mobile Platforms, Applications & Security',
        topics: [
          'Mobile device operating systems, special constraints & requirements',
          'Commercial operating systems and SDKs: iOS, Android, Windows Phone',
          'M-Commerce structure, pros and cons, mobile payment systems, mobile security issues'
        ]
      }
    ]
  },
  {
    id: 'mca-404',
    code: 'MCA 404',
    name: 'Major Project / Industrial Dissertation',
    semester: 4,
    isElective: false,
    description: 'Full-term comprehensive capstone project with industry or university lab documentation, technical defense, and IEEE/UGC compliant dissertation submission.',
    syllabusPdfUrl: '/assets/aistudio/Sem-4_05732143.pdf',
    units: [
      {
        unitNumber: 1,
        title: 'Problem Formulation & Literature Review',
        topics: [
          'Domain identification, Literature survey synthesis',
          'System feasibility analysis, Problem scope definition',
          'Software Requirement Specification (SRS) documentation'
        ]
      },
      {
        unitNumber: 2,
        title: 'System Design & Architectural Modeling',
        topics: [
          'High-level architectural design',
          'UML class, use-case, sequence, and component diagrams',
          'Database schema and normalized table designs',
          'API contracts and module interface definitions'
        ]
      },
      {
        unitNumber: 3,
        title: 'Implementation & Module Integration',
        topics: [
          'Source code structuring and adherence to industry coding standards',
          'Version control management and pull request reviews',
          'Module integration testing and error isolation',
          'Security, authentication, and permission validation'
        ]
      },
      {
        unitNumber: 4,
        title: 'Testing, Benchmarking & Results Analysis',
        topics: [
          'Unit, integration, and user acceptance testing (UAT)',
          'Performance benchmarking and stress analysis',
          'Experimental result evaluation and comparative performance metrics'
        ]
      },
      {
        unitNumber: 5,
        title: 'Dissertation Thesis & Viva Defense',
        topics: [
          'Dissertation report writing adhering to university / IEEE format',
          'Code repository archival and deployment verification',
          'Technical presentation slide preparation',
          'Comprehensive viva voce defense'
        ]
      }
    ]
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
    subjectId: 'mca-304-1',
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
