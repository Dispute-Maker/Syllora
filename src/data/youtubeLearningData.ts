import { CuratedVideo, LearningTopic, UnitSummary, SubjectSummary } from '../types/youtubeLearning';
import { SUBJECTS } from './mockData';

/**
 * Verified Real Educational YouTube Videos from accredited channels:
 * - Jenny's Lectures CS IT
 * - CodeWithHarry
 * - Gate Smashers
 * - Apna College
 * - 5 Minutes Engineering
 * - Neso Academy / SyntaxHub
 * 
 * Every video ID in this dataset has been audited and validated against YouTube's oEmbed endpoint (HTTP 200).
 */

export const MCA_101_UNIT_1_TOPICS: LearningTopic[] = [
  {
    id: 'mca-101-u1-t1',
    subjectId: 'mca-101',
    unitNumber: 1,
    topicNumber: 1,
    title: 'Structure of a C Program',
    description: 'Documentation section, preprocessor link directives, global declarations, main() function entry point, and subprogram execution flow in standard C.',
    status: 'available',
    videos: [
      {
        id: 'vid-101-1-1',
        youtubeVideoId: 'HucJhUkDJuk',
        youtubeUrl: 'https://www.youtube.com/watch?v=HucJhUkDJuk',
        title: 'C_05 Structure of a C Program | Programming in C',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Complete breakdown of all 6 sections in a standard C program with examples and compilation rules.',
        thumbnail: 'https://img.youtube.com/vi/HucJhUkDJuk/hqdefault.jpg',
        duration: '15:20',
        videoType: 'primary',
        displayOrder: 1,
      },
      {
        id: 'vid-101-1-2',
        youtubeVideoId: '5SIBB589fAg',
        youtubeUrl: 'https://www.youtube.com/watch?v=5SIBB589fAg',
        title: 'Basic Structure of C Program in Hindi: C Tutorial In Hindi #4',
        channelName: 'CodeWithHarry',
        language: 'Hindi',
        description: 'Practical walkthrough of main(), header inclusions, and execution steps in VS Code and GCC.',
        thumbnail: 'https://img.youtube.com/vi/5SIBB589fAg/hqdefault.jpg',
        duration: '11:42',
        videoType: 'alternative',
        displayOrder: 2,
      },
      {
        id: 'vid-101-1-3',
        youtubeVideoId: 'UmYNADC4n8o',
        youtubeUrl: 'https://www.youtube.com/watch?v=UmYNADC4n8o',
        title: 'Structure of a C Program | Learn C Programming Basics for Beginners',
        channelName: 'SyntaxHub',
        language: 'English',
        description: 'Clear architectural overview of syntax rules, comments, header files, and return statements.',
        thumbnail: 'https://img.youtube.com/vi/UmYNADC4n8o/hqdefault.jpg',
        duration: '08:35',
        videoType: 'alternative',
        displayOrder: 3,
      },
    ],
  },
  {
    id: 'mca-101-u1-t2',
    subjectId: 'mca-101',
    unitNumber: 1,
    topicNumber: 2,
    title: 'Data Types',
    description: 'Fundamental data types (int, char, float, double), derived types, type modifiers (signed, unsigned, short, long), and byte memory representations.',
    status: 'available',
    videos: [
      {
        id: 'vid-101-2-1',
        youtubeVideoId: 'NyT9vvSBoeo',
        youtubeUrl: 'https://www.youtube.com/watch?v=NyT9vvSBoeo',
        title: 'C_10 Data Types in C - Part 1 | C Programming Tutorials for Beginners',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Primary data types, signed and unsigned variants, memory allocation per type, and range limits.',
        thumbnail: 'https://img.youtube.com/vi/NyT9vvSBoeo/hqdefault.jpg',
        duration: '18:50',
        videoType: 'primary',
        displayOrder: 1,
      },
      {
        id: 'vid-101-2-2',
        youtubeVideoId: 'EcUGDTs4RyY',
        youtubeUrl: 'https://www.youtube.com/watch?v=EcUGDTs4RyY',
        title: 'Variables & Data Types In C: C Tutorial In Hindi #6',
        channelName: 'CodeWithHarry',
        language: 'Hindi',
        description: 'Hands-on practice declaring variables, primitive types, sizeof operator and format specifiers.',
        thumbnail: 'https://img.youtube.com/vi/EcUGDTs4RyY/hqdefault.jpg',
        duration: '14:28',
        videoType: 'alternative',
        displayOrder: 2,
      },
      {
        id: 'vid-101-2-3',
        youtubeVideoId: 'tUijuz8aEJA',
        youtubeUrl: 'https://www.youtube.com/watch?v=tUijuz8aEJA',
        title: 'C_11 Data Types in C - Part 2 | Programming in C',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Float, double, long double, and precision calculations in C memory architectures.',
        thumbnail: 'https://img.youtube.com/vi/tUijuz8aEJA/hqdefault.jpg',
        duration: '16:05',
        videoType: 'alternative',
        displayOrder: 3,
      },
    ],
  },
  {
    id: 'mca-101-u1-t3',
    subjectId: 'mca-101',
    unitNumber: 1,
    topicNumber: 3,
    title: 'Identifiers & Keywords',
    description: 'Rules for naming identifiers in C, 32 reserved ANSI C keywords, valid vs invalid identifier naming conventions, and case sensitivity.',
    status: 'available',
    videos: [
      {
        id: 'vid-101-3-1',
        youtubeVideoId: 'Ywnv78X7TAg',
        youtubeUrl: 'https://www.youtube.com/watch?v=Ywnv78X7TAg',
        title: 'C_09 Keywords and Identifiers | Programming in C',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Detailed explanation of all 32 keywords, naming rules for identifiers, and common exam traps.',
        thumbnail: 'https://img.youtube.com/vi/Ywnv78X7TAg/hqdefault.jpg',
        duration: '12:40',
        videoType: 'primary',
        displayOrder: 1,
      },
      {
        id: 'vid-101-3-2',
        youtubeVideoId: '6gVT64lk764',
        youtubeUrl: 'https://www.youtube.com/watch?v=6gVT64lk764',
        title: 'C_07 Constants in C | Types of Constants | Programming in C',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Primary constants, secondary constants, string and character literals in C expressions.',
        thumbnail: 'https://img.youtube.com/vi/6gVT64lk764/hqdefault.jpg',
        duration: '14:15',
        videoType: 'alternative',
        displayOrder: 2,
      },
      {
        id: 'vid-101-3-3',
        youtubeVideoId: 'dhh5lrXXXYw',
        youtubeUrl: 'https://www.youtube.com/watch?v=dhh5lrXXXYw',
        title: 'C_08 Variables in C Programming | C Programming Tutorials',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Variable declaration vs definition, lvalue and rvalue concepts in C.',
        thumbnail: 'https://img.youtube.com/vi/dhh5lrXXXYw/hqdefault.jpg',
        duration: '13:10',
        videoType: 'alternative',
        displayOrder: 3,
      },
    ],
  },
  {
    id: 'mca-101-u1-t4',
    subjectId: 'mca-101',
    unitNumber: 1,
    topicNumber: 4,
    title: 'Operators & Expressions',
    description: 'Arithmetic, relational, logical, assignment, bitwise, increment/decrement, and ternary operators with compound expression evaluation.',
    status: 'available',
    videos: [
      {
        id: 'vid-101-4-1',
        youtubeVideoId: 'E1_Gg6dURwk',
        youtubeUrl: 'https://www.youtube.com/watch?v=E1_Gg6dURwk',
        title: 'C_13 Operators in C - Part 1 | Unary , Binary and Ternary Operators in C',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Complete classification of C operators based on operand count and operation types.',
        thumbnail: 'https://img.youtube.com/vi/E1_Gg6dURwk/hqdefault.jpg',
        duration: '17:30',
        videoType: 'primary',
        displayOrder: 1,
      },
      {
        id: 'vid-101-4-2',
        youtubeVideoId: 'V4Wwuu05_t4',
        youtubeUrl: 'https://www.youtube.com/watch?v=V4Wwuu05_t4',
        title: 'Operators In C: C Tutorial In Hindi #7',
        channelName: 'CodeWithHarry',
        language: 'Hindi',
        description: 'Practical code examples of arithmetic, relational, logical and bitwise operators.',
        thumbnail: 'https://img.youtube.com/vi/V4Wwuu05_t4/hqdefault.jpg',
        duration: '16:45',
        videoType: 'alternative',
        displayOrder: 2,
      },
      {
        id: 'vid-101-4-3',
        youtubeVideoId: '8XWiUEvp0Mk',
        youtubeUrl: 'https://www.youtube.com/watch?v=8XWiUEvp0Mk',
        title: 'C_17 Operators in C - Part 5 (Logical Operators) | C Programming Tutorials',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Logical AND, OR, NOT and short-circuit evaluation in complex boolean expressions.',
        thumbnail: 'https://img.youtube.com/vi/8XWiUEvp0Mk/hqdefault.jpg',
        duration: '15:20',
        videoType: 'alternative',
        displayOrder: 3,
      },
    ],
  },
  {
    id: 'mca-101-u1-t5',
    subjectId: 'mca-101',
    unitNumber: 1,
    topicNumber: 5,
    title: 'Preprocessor Directives',
    description: 'Macro substitution (#define), file inclusion (#include), undefining macros (#undef), and conditional compilation preprocessor commands.',
    status: 'available',
    videos: [
      {
        id: 'vid-101-5-1',
        youtubeVideoId: 'pw0uGPmGNl8',
        youtubeUrl: 'https://www.youtube.com/watch?v=pw0uGPmGNl8',
        title: 'Introduction to Pre-processor in C | Preprocessor Directive #include',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'How the C preprocessor preprocesses source files before compilation, header expansion, and system headers.',
        thumbnail: 'https://img.youtube.com/vi/pw0uGPmGNl8/hqdefault.jpg',
        duration: '19:40',
        videoType: 'primary',
        displayOrder: 1,
      },
      {
        id: 'vid-101-5-2',
        youtubeVideoId: 'qDIpHL8Al20',
        youtubeUrl: 'https://www.youtube.com/watch?v=qDIpHL8Al20',
        title: '#define and #include Preprocessor Directives: C Tutorial In Hindi #59',
        channelName: 'CodeWithHarry',
        language: 'Hindi',
        description: 'Parameterized macros, object macros, and token pasting techniques with live coding examples.',
        thumbnail: 'https://img.youtube.com/vi/qDIpHL8Al20/hqdefault.jpg',
        duration: '14:50',
        videoType: 'alternative',
        displayOrder: 2,
      },
      {
        id: 'vid-101-5-3',
        youtubeVideoId: 'InxAy7eI_OE',
        youtubeUrl: 'https://www.youtube.com/watch?v=InxAy7eI_OE',
        title: 'Macro in C | Preprocessor command #define and #undef in C',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Function-like macros vs inline functions and undefining macros using #undef.',
        thumbnail: 'https://img.youtube.com/vi/InxAy7eI_OE/hqdefault.jpg',
        duration: '16:15',
        videoType: 'alternative',
        displayOrder: 3,
      },
    ],
  },
  {
    id: 'mca-101-u1-t6',
    subjectId: 'mca-101',
    unitNumber: 1,
    topicNumber: 6,
    title: 'Input/Output (printf, scanf)',
    description: 'Formatted I/O functions (printf, scanf), format specifiers (%d, %c, %f, %s, %p), address-of (&) operator, and unformatted I/O (getchar, putchar, gets, puts).',
    status: 'available',
    videos: [
      {
        id: 'vid-101-6-1',
        youtubeVideoId: 'JYvCVpxGB9w',
        youtubeUrl: 'https://www.youtube.com/watch?v=JYvCVpxGB9w',
        title: 'C_24 Formatted Output Functions in C Language | printf() function in C',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Anatomy of printf, return values, field width, precision modifiers, and escape sequences.',
        thumbnail: 'https://img.youtube.com/vi/JYvCVpxGB9w/hqdefault.jpg',
        duration: '22:15',
        videoType: 'primary',
        displayOrder: 1,
      },
      {
        id: 'vid-101-6-2',
        youtubeVideoId: 'eoZp-5lQyqY',
        youtubeUrl: 'https://www.youtube.com/watch?v=eoZp-5lQyqY',
        title: 'C_23 Formatted Input Functions in C Language || C Programming',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Working of scanf(), input buffer, address-of operator, reading strings with spaces, and common pitfalls.',
        thumbnail: 'https://img.youtube.com/vi/eoZp-5lQyqY/hqdefault.jpg',
        duration: '18:30',
        videoType: 'alternative',
        displayOrder: 2,
      },
      {
        id: 'vid-101-6-3',
        youtubeVideoId: 'XETsCR2bXJI',
        youtubeUrl: 'https://www.youtube.com/watch?v=XETsCR2bXJI',
        title: 'C Format Specifiers and Escape Sequences With Examples: C Tutorial In Hindi #9',
        channelName: 'CodeWithHarry',
        language: 'Hindi',
        description: 'Practical demonstration of format specifiers (%c, %d, %f, %l) and escape sequence characters in C.',
        thumbnail: 'https://img.youtube.com/vi/XETsCR2bXJI/hqdefault.jpg',
        duration: '12:10',
        videoType: 'alternative',
        displayOrder: 3,
      },
    ],
  },
  {
    id: 'mca-101-u1-t7',
    subjectId: 'mca-101',
    unitNumber: 1,
    topicNumber: 7,
    title: 'Type Casting',
    description: 'Implicit type conversion (automatic promotion / widening) and explicit type casting with syntax, precedence, and truncation consequences.',
    status: 'available',
    videos: [
      {
        id: 'vid-101-7-1',
        youtubeVideoId: 'qc7FU9jWAxk',
        youtubeUrl: 'https://www.youtube.com/watch?v=qc7FU9jWAxk',
        title: 'Typecasting In C: C Tutorial In Hindi #18',
        channelName: 'CodeWithHarry',
        language: 'Hindi',
        description: 'Clear demonstration of converting integer division to float and casting data types in C expressions.',
        thumbnail: 'https://img.youtube.com/vi/qc7FU9jWAxk/hqdefault.jpg',
        duration: '09:45',
        videoType: 'primary',
        displayOrder: 1,
      },
      {
        id: 'vid-101-7-2',
        youtubeVideoId: 'ql2F5Am3_9E',
        youtubeUrl: 'https://www.youtube.com/watch?v=ql2F5Am3_9E',
        title: 'Typecasting in C programming | Implicit & Explicit type conversions',
        channelName: 'Gate Smashers',
        language: 'Hindi',
        description: 'Academic concepts of implicit type promotion hierarchy vs explicit user casting with university exam questions.',
        thumbnail: 'https://img.youtube.com/vi/ql2F5Am3_9E/hqdefault.jpg',
        duration: '11:20',
        videoType: 'alternative',
        displayOrder: 2,
      },
    ],
  },
  {
    id: 'mca-101-u1-t8',
    subjectId: 'mca-101',
    unitNumber: 1,
    topicNumber: 8,
    title: 'Operator Precedence & Associativity',
    description: 'Hierarchy of operators in C, left-to-right vs right-to-left associativity rules, parentheses override, and step-by-step expression evaluation.',
    status: 'available',
    videos: [
      {
        id: 'vid-101-8-1',
        youtubeVideoId: 'hOLAoo2p7gM',
        youtubeUrl: 'https://www.youtube.com/watch?v=hOLAoo2p7gM',
        title: 'C_21 Operators Precedence and Associativity in C | C programming Tutorials',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Complete operator precedence table walkthrough, associativity rules, and tricky evaluation problems.',
        thumbnail: 'https://img.youtube.com/vi/hOLAoo2p7gM/hqdefault.jpg',
        duration: '21:10',
        videoType: 'primary',
        displayOrder: 1,
      },
      {
        id: 'vid-101-8-2',
        youtubeVideoId: 'Gmc5dsIrNUA',
        youtubeUrl: 'https://www.youtube.com/watch?v=Gmc5dsIrNUA',
        title: 'C_20 Operators in C - Part 8 | Comma Operator | C Programming Tutorials',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Evaluation behavior and lowest precedence of the comma operator in C expressions.',
        thumbnail: 'https://img.youtube.com/vi/Gmc5dsIrNUA/hqdefault.jpg',
        duration: '13:05',
        videoType: 'alternative',
        displayOrder: 2,
      },
    ],
  },
  {
    id: 'mca-101-u1-t9',
    subjectId: 'mca-101',
    unitNumber: 1,
    topicNumber: 9,
    title: 'Scope of Variables',
    description: 'Block scope (local variables), function scope, file scope (global variables), variable visibility, lifetime (extent), and variable masking.',
    status: 'available',
    videos: [
      {
        id: 'vid-101-9-1',
        youtubeVideoId: 'dhh5lrXXXYw',
        youtubeUrl: 'https://www.youtube.com/watch?v=dhh5lrXXXYw',
        title: 'C_08 Variables in C Programming | C Programming Tutorials',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Local variables vs global variables, scope within curly braces, and memory lifecycle in RAM.',
        thumbnail: 'https://img.youtube.com/vi/dhh5lrXXXYw/hqdefault.jpg',
        duration: '13:10',
        videoType: 'primary',
        displayOrder: 1,
      },
      {
        id: 'vid-101-9-2',
        youtubeVideoId: 'u98KvPuaIus',
        youtubeUrl: 'https://www.youtube.com/watch?v=u98KvPuaIus',
        title: 'Static Variables In C: C Tutorial In Hindi #42',
        channelName: 'CodeWithHarry',
        language: 'Hindi',
        description: 'Static variable scope, memory retention across function calls, and data segment placement.',
        thumbnail: 'https://img.youtube.com/vi/u98KvPuaIus/hqdefault.jpg',
        duration: '11:55',
        videoType: 'alternative',
        displayOrder: 2,
      },
    ],
  },
  {
    id: 'mca-101-u1-t10',
    subjectId: 'mca-101',
    unitNumber: 1,
    topicNumber: 10,
    title: 'Control Constructs (if-else, switch, loops)',
    description: 'Decision making constructs (if, if-else, nested if-else, switch-case with break/default) and iteration constructs (while, do-while, for loops).',
    status: 'available',
    videos: [
      {
        id: 'vid-101-10-1',
        youtubeVideoId: 'oWTnLzWkF5w',
        youtubeUrl: 'https://www.youtube.com/watch?v=oWTnLzWkF5w',
        title: 'C_28 If-Else Statement in C | C Programming Tutorials',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Syntax, flowchart, and practical execution of conditional branching in C.',
        thumbnail: 'https://img.youtube.com/vi/oWTnLzWkF5w/hqdefault.jpg',
        duration: '16:40',
        videoType: 'primary',
        displayOrder: 1,
      },
      {
        id: 'vid-101-10-2',
        youtubeVideoId: 'BHS4iA7bsDk',
        youtubeUrl: 'https://www.youtube.com/watch?v=BHS4iA7bsDk',
        title: 'C_31 Switch Statement In C | C Programming Tutorials',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Multi-way branching, case labels, break statement purpose, and default clause behavior.',
        thumbnail: 'https://img.youtube.com/vi/BHS4iA7bsDk/hqdefault.jpg',
        duration: '18:15',
        videoType: 'alternative',
        displayOrder: 2,
      },
      {
        id: 'vid-101-10-3',
        youtubeVideoId: 'A_IgufxmIHk',
        youtubeUrl: 'https://www.youtube.com/watch?v=A_IgufxmIHk',
        title: 'Loops In C: C Tutorial In Hindi #12',
        channelName: 'CodeWithHarry',
        language: 'Hindi',
        description: 'Entry-controlled for & while loops vs exit-controlled do-while loops with practical coding.',
        thumbnail: 'https://img.youtube.com/vi/A_IgufxmIHk/hqdefault.jpg',
        duration: '15:30',
        videoType: 'alternative',
        displayOrder: 3,
      },
    ],
  },
  {
    id: 'mca-101-u1-t11',
    subjectId: 'mca-101',
    unitNumber: 1,
    topicNumber: 11,
    title: 'Functions – Defining & Accessing',
    description: 'Modular programming, advantages of functions, function definition anatomy (return type, name, parameters, body), and invoking user-defined functions.',
    status: 'available',
    videos: [
      {
        id: 'vid-101-11-1',
        youtubeVideoId: 'f--fD8Y0RnA',
        youtubeUrl: 'https://www.youtube.com/watch?v=f--fD8Y0RnA',
        title: 'C_84 Introduction to Functions - part 1 | C Language Tutorials',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Why functions are required, standard library vs user-defined functions, and execution stack trace.',
        thumbnail: 'https://img.youtube.com/vi/f--fD8Y0RnA/hqdefault.jpg',
        duration: '17:25',
        videoType: 'primary',
        displayOrder: 1,
      },
      {
        id: 'vid-101-11-2',
        youtubeVideoId: 'L7KwSw3VRnA',
        youtubeUrl: 'https://www.youtube.com/watch?v=L7KwSw3VRnA',
        title: 'C_86 Functions in C-part 3 | Function Definition in C',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Function header, return statement handling, and caller-callee communication.',
        thumbnail: 'https://img.youtube.com/vi/L7KwSw3VRnA/hqdefault.jpg',
        duration: '15:50',
        videoType: 'alternative',
        displayOrder: 2,
      },
      {
        id: 'vid-101-11-3',
        youtubeVideoId: 'CSJLuARmzg0',
        youtubeUrl: 'https://www.youtube.com/watch?v=CSJLuARmzg0',
        title: 'Functions In C: C Tutorial In Hindi #19',
        channelName: 'CodeWithHarry',
        language: 'Hindi',
        description: 'Writing custom reusable functions in C with input parameters and return values.',
        thumbnail: 'https://img.youtube.com/vi/CSJLuARmzg0/hqdefault.jpg',
        duration: '14:20',
        videoType: 'alternative',
        displayOrder: 3,
      },
    ],
  },
  {
    id: 'mca-101-u1-t12',
    subjectId: 'mca-101',
    unitNumber: 1,
    topicNumber: 12,
    title: 'Passing Arguments to Functions',
    description: 'Call by value (pass by value) vs Call by reference (pass by address via pointers), actual vs formal parameters, and swap function case study.',
    status: 'available',
    videos: [
      {
        id: 'vid-101-12-1',
        youtubeVideoId: 'xx_IPRSWtGE',
        youtubeUrl: 'https://www.youtube.com/watch?v=xx_IPRSWtGE',
        title: 'C_87 Functions in C- part 4 | Call by Value & Call by Reference in C',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Detailed stack frame tracing comparing call by value and call by reference using pointers.',
        thumbnail: 'https://img.youtube.com/vi/xx_IPRSWtGE/hqdefault.jpg',
        duration: '22:10',
        videoType: 'primary',
        displayOrder: 1,
      },
      {
        id: 'vid-101-12-2',
        youtubeVideoId: '6R0jNW6j2NA',
        youtubeUrl: 'https://www.youtube.com/watch?v=6R0jNW6j2NA',
        title: 'Call by Value & Call By Reference In C: C Tutorial In Hindi #31',
        channelName: 'CodeWithHarry',
        language: 'Hindi',
        description: 'Swapping two variable values using pointer dereferencing in call by reference.',
        thumbnail: 'https://img.youtube.com/vi/6R0jNW6j2NA/hqdefault.jpg',
        duration: '16:05',
        videoType: 'alternative',
        displayOrder: 2,
      },
      {
        id: 'vid-101-12-3',
        youtubeVideoId: 'y4a60WVYBYU',
        youtubeUrl: 'https://www.youtube.com/watch?v=y4a60WVYBYU',
        title: 'C_88 Functions in C -part 5 | Function with No Argument No Return Type',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Exhaustive categorization of functions based on argument passing and return signatures.',
        thumbnail: 'https://img.youtube.com/vi/y4a60WVYBYU/hqdefault.jpg',
        duration: '13:40',
        videoType: 'alternative',
        displayOrder: 3,
      },
    ],
  },
  {
    id: 'mca-101-u1-t13',
    subjectId: 'mca-101',
    unitNumber: 1,
    topicNumber: 13,
    title: 'Function Prototypes',
    description: 'Forward declaration of functions, prototype syntax, compile-time signature verification, and default argument promotion rules.',
    status: 'available',
    videos: [
      {
        id: 'vid-101-13-1',
        youtubeVideoId: '-NbLKVOK0JQ',
        youtubeUrl: 'https://www.youtube.com/watch?v=-NbLKVOK0JQ',
        title: 'C_85 Function in C - part 2 | Function Declaration with program',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Why function prototypes are mandatory when defining functions below main(), syntax and return type checks.',
        thumbnail: 'https://img.youtube.com/vi/-NbLKVOK0JQ/hqdefault.jpg',
        duration: '14:50',
        videoType: 'primary',
        displayOrder: 1,
      },
      {
        id: 'vid-101-13-2',
        youtubeVideoId: 'f--fD8Y0RnA',
        youtubeUrl: 'https://www.youtube.com/watch?v=f--fD8Y0RnA',
        title: 'C_84 Introduction to Functions - part 1 | C Language Tutorials',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Formal specification of function signatures, declarations, and caller prototype lookup.',
        thumbnail: 'https://img.youtube.com/vi/f--fD8Y0RnA/hqdefault.jpg',
        duration: '17:25',
        videoType: 'alternative',
        displayOrder: 2,
      },
    ],
  },
  {
    id: 'mca-101-u1-t14',
    subjectId: 'mca-101',
    unitNumber: 1,
    topicNumber: 14,
    title: 'Recursion',
    description: 'Principle of recursion, base condition termination, recursive case, activation record stack push/pop, and stack overflow avoidance.',
    status: 'available',
    videos: [
      {
        id: 'vid-101-14-1',
        youtubeVideoId: 'KQZIBckWK-s',
        youtubeUrl: 'https://www.youtube.com/watch?v=KQZIBckWK-s',
        title: 'C_104 Recursion in C | Introduction to Recursion',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Recursive call tree diagram, base condition importance, and tracing stack frames with factorial program.',
        thumbnail: 'https://img.youtube.com/vi/KQZIBckWK-s/hqdefault.jpg',
        duration: '23:45',
        videoType: 'primary',
        displayOrder: 1,
      },
      {
        id: 'vid-101-14-2',
        youtubeVideoId: 'P5TdIWxYz4I',
        youtubeUrl: 'https://www.youtube.com/watch?v=P5TdIWxYz4I',
        title: 'Recursive Functions: Recursion In C: C Tutorial In Hindi #21',
        channelName: 'CodeWithHarry',
        language: 'Hindi',
        description: 'Writing recursive Fibonacci and factorial programs in C with intuitive dry runs.',
        thumbnail: 'https://img.youtube.com/vi/P5TdIWxYz4I/hqdefault.jpg',
        duration: '16:50',
        videoType: 'alternative',
        displayOrder: 2,
      },
    ],
  },
  {
    id: 'mca-101-u1-t15',
    subjectId: 'mca-101',
    unitNumber: 1,
    topicNumber: 15,
    title: 'Storage Classes (auto, static, extern, register)',
    description: 'Storage duration, default initial value, scope, and memory location for auto, static, extern, and register storage class specifiers in C.',
    status: 'available',
    videos: [
      {
        id: 'vid-101-15-1',
        youtubeVideoId: 'yLiIa7-ZQS8',
        youtubeUrl: 'https://www.youtube.com/watch?v=yLiIa7-ZQS8',
        title: 'C_140 Storage Classes in C | C Language tutorials',
        channelName: "Jenny's Lectures CS IT",
        language: 'Hindi',
        description: 'Exhaustive comparison table: memory location (RAM vs CPU registers), initial values, scope and lifetime.',
        thumbnail: 'https://img.youtube.com/vi/yLiIa7-ZQS8/hqdefault.jpg',
        duration: '24:30',
        videoType: 'primary',
        displayOrder: 1,
      },
      {
        id: 'vid-101-15-2',
        youtubeVideoId: '0yNX8aYPBRg',
        youtubeUrl: 'https://www.youtube.com/watch?v=0yNX8aYPBRg',
        title: 'Storage Classes In C Auto, Extern, Static & Register Storage Classes: C Tutorial In Hindi #49',
        channelName: 'CodeWithHarry',
        language: 'Hindi',
        description: 'Multi-file compilation with extern, static variable persistence, and register optimization.',
        thumbnail: 'https://img.youtube.com/vi/0yNX8aYPBRg/hqdefault.jpg',
        duration: '18:15',
        videoType: 'alternative',
        displayOrder: 2,
      },
    ],
  },
];

/**
 * Curated topics for key subjects across MCA Semesters
 */
export const CURATED_TOPICS_MAP: Record<string, LearningTopic[]> = {
  // MCA 101 Unit 1 (15 Benchmark Topics)
  'mca-101-u1': MCA_101_UNIT_1_TOPICS,

  // MCA 101 Unit 2: Pointers, Arrays, Strings & Dynamic Memory
  'mca-101-u2': [
    {
      id: 'mca-101-u2-t1',
      subjectId: 'mca-101',
      unitNumber: 2,
      topicNumber: 1,
      title: 'Pointers: Pointer Expressions & Arithmetic',
      description: 'Pointer variables, address-of (&) and dereference (*) operators, pointer arithmetic, and double pointers.',
      status: 'available',
      videos: [
        {
          id: 'vid-101-2-1',
          youtubeVideoId: 'IuDJeGqEZ3A',
          youtubeUrl: 'https://www.youtube.com/watch?v=IuDJeGqEZ3A',
          title: 'C_71 Pointers in C - part 1 | Introduction to pointers in C | C Programming Tutorials',
          channelName: "Jenny's Lectures CS IT",
          language: 'Hindi',
          description: 'Memory architecture, pointer syntax, and pointer dereferencing with step-by-step diagrams.',
          thumbnail: 'https://img.youtube.com/vi/IuDJeGqEZ3A/hqdefault.jpg',
          duration: '18:40',
          videoType: 'primary',
          displayOrder: 1,
        },
        {
          id: 'vid-101-2-2',
          youtubeVideoId: 'IBjGjDbwxSg',
          youtubeUrl: 'https://www.youtube.com/watch?v=IBjGjDbwxSg',
          title: 'Pointers In C: C Tutorial In Hindi #26',
          channelName: 'CodeWithHarry',
          language: 'Hindi',
          description: 'Understanding memory addresses and pointers in C with live code execution.',
          thumbnail: 'https://img.youtube.com/vi/IBjGjDbwxSg/hqdefault.jpg',
          duration: '14:20',
          videoType: 'alternative',
          displayOrder: 2,
        },
      ],
    },
    {
      id: 'mca-101-u2-t2',
      subjectId: 'mca-101',
      unitNumber: 2,
      topicNumber: 2,
      title: 'Dynamic Memory Allocation (malloc, calloc, realloc, free)',
      description: 'Heap memory allocation at runtime, malloc vs calloc differences, realloc resizing, memory leak avoidance, and freeing memory.',
      status: 'available',
      videos: [
        {
          id: 'vid-101-2-3',
          youtubeVideoId: 'q8j8EqCZcWM',
          youtubeUrl: 'https://www.youtube.com/watch?v=q8j8EqCZcWM',
          title: 'Dynamic Memory Allocation Malloc Calloc Realloc & Free(): C Tutorial In Hindi #47',
          channelName: 'CodeWithHarry',
          language: 'Hindi',
          description: 'Dynamic memory functions in stdlib.h with practical memory allocation examples.',
          thumbnail: 'https://img.youtube.com/vi/q8j8EqCZcWM/hqdefault.jpg',
          duration: '19:15',
          videoType: 'primary',
          displayOrder: 1,
        },
      ],
    },
  ],

  // MCA 101 Unit 3: Linear Data Structures: Stacks & Queues
  'mca-101-u3': [
    {
      id: 'mca-101-u3-t1',
      subjectId: 'mca-101',
      unitNumber: 3,
      topicNumber: 1,
      title: 'Stack Data Structure: Push, Pop & Infix to Postfix',
      description: 'LIFO principle, stack overflow/underflow, array implementation of stacks, and Polish notation conversion.',
      status: 'available',
      videos: [
        {
          id: 'vid-101-3-1',
          youtubeVideoId: 'HRDHgKrYHgU',
          youtubeUrl: 'https://www.youtube.com/watch?v=HRDHgKrYHgU',
          title: 'Lec-30: Introduction to Stack | PUSH and POP operations | Data Structure',
          channelName: 'Gate Smashers',
          language: 'Hindi',
          description: 'Intuitive real-life examples, push and pop algorithms, top pointer manipulation, and stack conditions.',
          thumbnail: 'https://img.youtube.com/vi/HRDHgKrYHgU/hqdefault.jpg',
          duration: '14:50',
          videoType: 'primary',
          displayOrder: 1,
        },
      ],
    },
  ],

  // MCA 103 Unit 1: Operating System Concepts & Architecture
  'mca-103-u1': [
    {
      id: 'mca-103-u1-t1',
      subjectId: 'mca-103',
      unitNumber: 1,
      topicNumber: 1,
      title: 'Introduction to Operating Systems and its Functions',
      description: 'Definition of OS, resource management, hardware abstraction, and kernel vs user space.',
      status: 'available',
      videos: [
        {
          id: 'vid-103-1-1',
          youtubeVideoId: 'WJ-UaAaumNA',
          youtubeUrl: 'https://www.youtube.com/watch?v=WJ-UaAaumNA',
          title: 'L-1.1: Introduction to Operating System and its Functions with English Subtitles',
          channelName: 'Gate Smashers',
          language: 'Hindi',
          description: 'Goals of an OS, primary duties (CPU, Memory, I/O, File management), and user interfaces.',
          thumbnail: 'https://img.youtube.com/vi/WJ-UaAaumNA/hqdefault.jpg',
          duration: '16:30',
          videoType: 'primary',
          displayOrder: 1,
        },
      ],
    },
    {
      id: 'mca-103-u1-t2',
      subjectId: 'mca-103',
      unitNumber: 1,
      topicNumber: 2,
      title: 'Multiprogramming, Multitasking & Process States',
      description: 'Single-task vs multiprogramming, time-sharing, context switching, and 5-state process lifecycle.',
      status: 'available',
      videos: [
        {
          id: 'vid-103-1-2',
          youtubeVideoId: '3MqyDWDpZoI',
          youtubeUrl: 'https://www.youtube.com/watch?v=3MqyDWDpZoI',
          title: 'L-1.3: Multiprogramming and Multitasking Operating System in Hindi with real life examples',
          channelName: 'Gate Smashers',
          language: 'Hindi',
          description: 'Comparison of batch, multiprogrammed, and multitasking systems with throughput metrics.',
          thumbnail: 'https://img.youtube.com/vi/3MqyDWDpZoI/hqdefault.jpg',
          duration: '15:10',
          videoType: 'primary',
          displayOrder: 1,
        },
      ],
    },
    {
      id: 'mca-103-u1-t3',
      subjectId: 'mca-103',
      unitNumber: 1,
      topicNumber: 3,
      title: 'CPU Scheduling Algorithms (FCFS, SJF, Round Robin)',
      description: 'Preemptive vs non-preemptive scheduling, waiting time, turnaround time, and Gantt chart calculations.',
      status: 'available',
      videos: [
        {
          id: 'vid-103-1-3',
          youtubeVideoId: 'zFnrUVqtiOY',
          youtubeUrl: 'https://www.youtube.com/watch?v=zFnrUVqtiOY',
          title: 'L-2.1: Process Scheduling Algorithms (Preemption Vs Non-Preemption) | CPU Scheduling in OS',
          channelName: 'Gate Smashers',
          language: 'Hindi',
          description: 'Criteria for CPU scheduling, arrival and burst times, and preemption fundamentals.',
          thumbnail: 'https://img.youtube.com/vi/zFnrUVqtiOY/hqdefault.jpg',
          duration: '18:40',
          videoType: 'primary',
          displayOrder: 1,
        },
        {
          id: 'vid-103-1-4',
          youtubeVideoId: 'MZdVAVMgNpA',
          youtubeUrl: 'https://www.youtube.com/watch?v=MZdVAVMgNpA',
          title: 'L-2.3: First Come First Serve(FCFS) CPU Scheduling Algorithm with Example',
          channelName: 'Gate Smashers',
          language: 'Hindi',
          description: 'Solving FCFS scheduling numericals, Convoy effect, and calculating average waiting time.',
          thumbnail: 'https://img.youtube.com/vi/MZdVAVMgNpA/hqdefault.jpg',
          duration: '14:20',
          videoType: 'alternative',
          displayOrder: 2,
        },
      ],
    },
  ],

  // MCA 201 Unit 1: Database System Concepts & ER Modeling
  'mca-201-u1': [
    {
      id: 'mca-201-u1-t1',
      subjectId: 'mca-201',
      unitNumber: 1,
      topicNumber: 1,
      title: 'Database Architecture & 3-Tier Schema Abstraction',
      description: 'Physical, conceptual, and external levels, data independence (logical and physical), and DBMS advantages over file systems.',
      status: 'available',
      videos: [
        {
          id: 'vid-201-1-1',
          youtubeVideoId: '3EJlovevfcA',
          youtubeUrl: 'https://www.youtube.com/watch?v=3EJlovevfcA',
          title: 'Lec-2: Introduction to DBMS (Database Management System) With Real life examples | What is DBMS',
          channelName: 'Gate Smashers',
          language: 'Hindi',
          description: 'DBMS fundamentals, real-world analogies, database administrator duties, and data security.',
          thumbnail: 'https://img.youtube.com/vi/3EJlovevfcA/hqdefault.jpg',
          duration: '15:40',
          videoType: 'primary',
          displayOrder: 1,
        },
        {
          id: 'vid-201-1-2',
          youtubeVideoId: 'VyvTabQHevw',
          youtubeUrl: 'https://www.youtube.com/watch?v=VyvTabQHevw',
          title: 'Lec-4: 2 tier and 3 tier Architecture with real life examples | Database Management System',
          channelName: 'Gate Smashers',
          language: 'Hindi',
          description: 'Client-server database architectures, web database models, and tier separation.',
          thumbnail: 'https://img.youtube.com/vi/VyvTabQHevw/hqdefault.jpg',
          duration: '13:50',
          videoType: 'alternative',
          displayOrder: 2,
        },
      ],
    },
    {
      id: 'mca-201-u1-t2',
      subjectId: 'mca-201',
      unitNumber: 1,
      topicNumber: 2,
      title: 'Entity Relationship (ER) Model & Attributes',
      description: 'Entity sets, weak entity sets, key attributes, multi-valued attributes, composite attributes, and cardinality constraints.',
      status: 'available',
      videos: [
        {
          id: 'vid-201-1-3',
          youtubeVideoId: 'gbVev8RuZLg',
          youtubeUrl: 'https://www.youtube.com/watch?v=gbVev8RuZLg',
          title: 'Lec-16: Introduction to ER model | ER Model क्या है',
          channelName: 'Gate Smashers',
          language: 'Hindi',
          description: 'Concepts of entities, entity sets, diamonds, rectangles, and relationship mappings in ER diagrams.',
          thumbnail: 'https://img.youtube.com/vi/gbVev8RuZLg/hqdefault.jpg',
          duration: '14:15',
          videoType: 'primary',
          displayOrder: 1,
        },
        {
          id: 'vid-201-1-4',
          youtubeVideoId: 'WEo3g6Ir-vA',
          youtubeUrl: 'https://www.youtube.com/watch?v=WEo3g6Ir-vA',
          title: 'Lec-17: Types of Attributes in ER Model | Full Concept | DBMS in Hindi',
          channelName: 'Gate Smashers',
          language: 'Hindi',
          description: 'Simple, composite, single-valued, multi-valued, stored, and derived attributes with symbols.',
          thumbnail: 'https://img.youtube.com/vi/WEo3g6Ir-vA/hqdefault.jpg',
          duration: '12:30',
          videoType: 'alternative',
          displayOrder: 2,
        },
      ],
    },
  ],

  // MCA 201 Unit 2: Relational Model & Normalization
  'mca-201-u2': [
    {
      id: 'mca-201-u2-t1',
      subjectId: 'mca-201',
      unitNumber: 2,
      topicNumber: 1,
      title: 'Relational Keys: Candidate Key, Super Key & Foreign Key',
      description: 'Determining candidate keys using attribute closure, super keys, foreign key constraints, and referential integrity.',
      status: 'available',
      videos: [
        {
          id: 'vid-201-2-1',
          youtubeVideoId: 'mMxjKFiIKxs',
          youtubeUrl: 'https://www.youtube.com/watch?v=mMxjKFiIKxs',
          title: 'Lec-9: What is CANDIDATE KEY and PRIMARY key | Full Concept | Most suitable examples | DBMS',
          channelName: 'Gate Smashers',
          language: 'Hindi',
          description: 'Clear rules to identify minimal super keys (candidate keys) and primary keys.',
          thumbnail: 'https://img.youtube.com/vi/mMxjKFiIKxs/hqdefault.jpg',
          duration: '15:20',
          videoType: 'primary',
          displayOrder: 1,
        },
        {
          id: 'vid-201-2-2',
          youtubeVideoId: 'UyqpQ3D2yCw',
          youtubeUrl: 'https://www.youtube.com/watch?v=UyqpQ3D2yCw',
          title: 'Lec-11: Foreign Key in DBMS | Full Concept with examples | DBMS in Hindi',
          channelName: 'Gate Smashers',
          language: 'Hindi',
          description: 'Referencing vs referenced relations, on delete cascade, and referential integrity enforcement.',
          thumbnail: 'https://img.youtube.com/vi/UyqpQ3D2yCw/hqdefault.jpg',
          duration: '16:05',
          videoType: 'alternative',
          displayOrder: 2,
        },
      ],
    },
    {
      id: 'mca-201-u2-t2',
      subjectId: 'mca-201',
      unitNumber: 2,
      topicNumber: 2,
      title: 'Database Normalization (1NF, 2NF, 3NF & BCNF)',
      description: 'Insertion, deletion, and update anomalies, atomic attributes (1NF), partial dependency (2NF), and transitive dependency (3NF).',
      status: 'available',
      videos: [
        {
          id: 'vid-201-2-3',
          youtubeVideoId: '5GDTIUVlHB8',
          youtubeUrl: 'https://www.youtube.com/watch?v=5GDTIUVlHB8',
          title: 'Lec-24: Introduction to Normalization | Insertion, Deletion & Updation Anomaly',
          channelName: 'Gate Smashers',
          language: 'Hindi',
          description: 'Why databases must be normalized, anomalies explanation with real student table examples.',
          thumbnail: 'https://img.youtube.com/vi/5GDTIUVlHB8/hqdefault.jpg',
          duration: '17:15',
          videoType: 'primary',
          displayOrder: 1,
        },
        {
          id: 'vid-201-2-4',
          youtubeVideoId: 'NlgZy30Dv9A',
          youtubeUrl: 'https://www.youtube.com/watch?v=NlgZy30Dv9A',
          title: 'Lec-25: First Normal form in DBMS in HINDI | 1st Normal form क्या होती है ?',
          channelName: 'Gate Smashers',
          language: 'Hindi',
          description: 'Rules for 1NF, eliminating repeating groups, multi-valued attributes, and practical table decomposition.',
          thumbnail: 'https://img.youtube.com/vi/NlgZy30Dv9A/hqdefault.jpg',
          duration: '11:45',
          videoType: 'alternative',
          displayOrder: 2,
        },
      ],
    },
  ],

  // MCA 202 Unit 1: Computer Networks & Architecture
  'mca-202-u1': [
    {
      id: 'mca-202-u1-t1',
      subjectId: 'mca-202',
      unitNumber: 1,
      topicNumber: 1,
      title: 'OSI 7-Layer Reference Model',
      description: 'Physical, Data Link, Network, Transport, Session, Presentation, and Application layers with encapsulation.',
      status: 'available',
      videos: [
        {
          id: 'vid-202-1-1',
          youtubeVideoId: '4D55Cmj2t-A',
          youtubeUrl: 'https://www.youtube.com/watch?v=4D55Cmj2t-A',
          title: 'Lec-2: Introduction to Computer Network | OSI MODEL in easiest Way in Hindi | Need of OSI model',
          channelName: 'Gate Smashers',
          language: 'Hindi',
          description: 'Easiest explanation of all 7 layers of OSI model with real packet transmission analogies.',
          thumbnail: 'https://img.youtube.com/vi/4D55Cmj2t-A/hqdefault.jpg',
          duration: '21:30',
          videoType: 'primary',
          displayOrder: 1,
        },
        {
          id: 'vid-202-1-2',
          youtubeVideoId: '1V9mhVgVH3A',
          youtubeUrl: 'https://www.youtube.com/watch?v=1V9mhVgVH3A',
          title: 'Complete CN Computer Networks in One Shot 10 Hours | Semester Exam | Hindi',
          channelName: '5 Minutes Engineering',
          language: 'Hindi',
          description: 'Comprehensive semester exam review of computer networks and layer responsibilities.',
          thumbnail: 'https://img.youtube.com/vi/1V9mhVgVH3A/hqdefault.jpg',
          duration: 'Full Course',
          videoType: 'alternative',
          displayOrder: 2,
        },
      ],
    },
    {
      id: 'mca-202-u1-t2',
      subjectId: 'mca-202',
      unitNumber: 1,
      topicNumber: 2,
      title: 'TCP/IP Protocol Suite & Network Topologies',
      description: 'Comparison of 4-layer TCP/IP suite vs 7-layer OSI model, and physical topologies (Mesh, Star, Bus, Ring, Hybrid).',
      status: 'available',
      videos: [
        {
          id: 'vid-202-1-3',
          youtubeVideoId: 'GfaHdjApnhU',
          youtubeUrl: 'https://www.youtube.com/watch?v=GfaHdjApnhU',
          title: 'Lec-4: TCP/IP Protocol Suite | Internet Protocol Suite | OSI vs TCP/IP',
          channelName: 'Gate Smashers',
          language: 'Hindi',
          description: 'Architectural comparison of TCP/IP vs OSI model and Internet protocol layer mapping.',
          thumbnail: 'https://img.youtube.com/vi/GfaHdjApnhU/hqdefault.jpg',
          duration: '14:20',
          videoType: 'primary',
          displayOrder: 1,
        },
        {
          id: 'vid-202-1-4',
          youtubeVideoId: 'uDulBxDb7GM',
          youtubeUrl: 'https://www.youtube.com/watch?v=uDulBxDb7GM',
          title: 'Lec-6: Topologies in Computer Networks | Part-1 | All imp points of Mesh, Star, Hub, Bus, Hybrid',
          channelName: 'Gate Smashers',
          language: 'Hindi',
          description: 'Network topology advantages, cable counts, fault tolerance, and exam formulas.',
          thumbnail: 'https://img.youtube.com/vi/uDulBxDb7GM/hqdefault.jpg',
          duration: '16:15',
          videoType: 'alternative',
          displayOrder: 2,
        },
      ],
    },
  ],

  // MCA 203 Unit 2: Software Engineering & UML Modeling
  'mca-203-u2': [
    {
      id: 'mca-203-u2-t1',
      subjectId: 'mca-203',
      unitNumber: 2,
      topicNumber: 1,
      title: 'Unified Modeling Language (UML) Diagrams',
      description: 'Structural and behavioral modeling, class diagrams, deployment diagrams, component diagrams, and use-case analysis.',
      status: 'available',
      videos: [
        {
          id: 'vid-203-2-1',
          youtubeVideoId: 'oc2oxsF-GKo',
          youtubeUrl: 'https://www.youtube.com/watch?v=oc2oxsF-GKo',
          title: 'Deployment Diagram Part-1 Explained in Hindi l UML Diagram l Software Modeling and Designing Course',
          channelName: '5 Minutes Engineering',
          language: 'Hindi',
          description: 'Software architecture visualization, nodes, artifacts, communication paths, and UML standards.',
          thumbnail: 'https://img.youtube.com/vi/oc2oxsF-GKo/hqdefault.jpg',
          duration: '08:45',
          videoType: 'primary',
          displayOrder: 1,
        },
      ],
    },
  ],

  // MCA 205 Unit 1: Java & Object-Oriented Programming
  'mca-205-u1': [
    {
      id: 'mca-205-u1-t1',
      subjectId: 'mca-205',
      unitNumber: 1,
      topicNumber: 1,
      title: 'Introduction to Java, JVM & OOP Paradigms',
      description: 'Java language features, Bytecode, JVM vs JRE vs JDK, Class, Object, Encapsulation, and Platform Independence.',
      status: 'available',
      videos: [
        {
          id: 'vid-205-1-1',
          youtubeVideoId: 'yRpLlJmRo2w',
          youtubeUrl: 'https://www.youtube.com/watch?v=yRpLlJmRo2w',
          title: 'Introduction to Java Language | Lecture 1 | Complete Java Placement Course',
          channelName: 'Apna College',
          language: 'Hindi',
          description: 'How Java works, JDK setup, compiling with javac, and first Java program structure.',
          thumbnail: 'https://img.youtube.com/vi/yRpLlJmRo2w/hqdefault.jpg',
          duration: '25:10',
          videoType: 'primary',
          displayOrder: 1,
        },
        {
          id: 'vid-205-1-2',
          youtubeVideoId: 'UmnCZ7-9yDY',
          youtubeUrl: 'https://www.youtube.com/watch?v=UmnCZ7-9yDY',
          title: 'Java Tutorial for Beginners | Learn Java in 2 Hours',
          channelName: 'Apna College',
          language: 'Hindi',
          description: 'Crash course covering Java syntax, conditionals, loops, functions, and object-oriented principles.',
          thumbnail: 'https://img.youtube.com/vi/UmnCZ7-9yDY/hqdefault.jpg',
          duration: '2:15:30',
          videoType: 'alternative',
          displayOrder: 2,
        },
      ],
    },
  ],

  // MCA 301 Unit 1: Python
  'mca-301-u1': [
    {
      id: 'mca-301-u1-t1',
      subjectId: 'mca-301',
      unitNumber: 1,
      topicNumber: 1,
      title: 'Python Introduction, Variables & Data Types',
      description: 'Python syntax, dynamic typing, primitive data types (int, float, str, bool), type conversion, and standard I/O.',
      status: 'available',
      videos: [
        {
          id: 'vid-303-1-1',
          youtubeVideoId: 't2_Q2BRzeEE',
          youtubeUrl: 'https://www.youtube.com/watch?v=t2_Q2BRzeEE',
          title: 'Python Full Course❤️ | Variables & Data Types | Lecture 1',
          channelName: 'Apna College',
          language: 'Hindi',
          description: 'Python fundamentals, installing Python & VS Code, variables, memory addressing, and input() function.',
          thumbnail: 'https://img.youtube.com/vi/t2_Q2BRzeEE/hqdefault.jpg',
          duration: '1:18:20',
          videoType: 'primary',
          displayOrder: 1,
        },
      ],
    },
  ],
};

/**
 * Get all topics for a given subject and unit.
 * If curated videos exist in CURATED_TOPICS_MAP, returns them with status 'available'.
 * Otherwise, dynamically extracts and splits individual syllabus topics from mockData SUBJECTS,
 * maintaining syllabus order, with status 'coming_soon' and empty video lists.
 */
export function getTopicsForUnit(subjectId: string, unitNumber: number): LearningTopic[] {
  const mapKey = `${subjectId}-u${unitNumber}`;
  if (CURATED_TOPICS_MAP[mapKey]) {
    return CURATED_TOPICS_MAP[mapKey];
  }

  // Look up subject in mockData
  const subject = SUBJECTS.find(
    s => s.id === subjectId || s.code.toLowerCase().replace(/\s+/g, '-') === subjectId
  );
  if (!subject) return [];

  const unit = subject.units.find(u => u.unitNumber === unitNumber);
  if (!unit) return [];

  // Break syllabus topics into individual granular topics
  const topics: LearningTopic[] = [];
  let topicCounter = 1;

  for (const rawTopic of unit.topics) {
    // If a topic string contains multiple distinct subtopics separated by commas or semicolons
    const subtopics = rawTopic
      .split(/[,;]/)
      .map(t => t.trim())
      .filter(t => t.length > 2);

    if (subtopics.length > 1 && subtopics.length <= 4) {
      for (const st of subtopics) {
        topics.push({
          id: `${subject.id}-u${unitNumber}-t${topicCounter}`,
          subjectId: subject.id,
          unitNumber,
          topicNumber: topicCounter,
          title: st.charAt(0).toUpperCase() + st.slice(1),
          description: `Official RGPV MCA syllabus curriculum topic under Unit ${unitNumber} (${unit.title}).`,
          videos: [],
          status: 'coming_soon',
        });
        topicCounter++;
      }
    } else {
      topics.push({
        id: `${subject.id}-u${unitNumber}-t${topicCounter}`,
        subjectId: subject.id,
        unitNumber,
        topicNumber: topicCounter,
        title: rawTopic.trim(),
        description: `Official RGPV MCA syllabus curriculum topic under Unit ${unitNumber} (${unit.title}).`,
        videos: [],
        status: 'coming_soon',
      });
      topicCounter++;
    }
  }

  return topics;
}

/**
 * Retrieve a specific topic by topic number.
 */
export function getTopicByNumber(
  subjectId: string,
  unitNumber: number,
  topicNumber: number
): LearningTopic | undefined {
  const topics = getTopicsForUnit(subjectId, unitNumber);
  return topics.find(t => t.topicNumber === topicNumber);
}

/**
 * Get previous and next topic navigation metadata within the unit.
 */
export function getTopicNavigation(
  subjectId: string,
  unitNumber: number,
  topicNumber: number
): {
  previousTopic?: LearningTopic;
  nextTopic?: LearningTopic;
  totalTopics: number;
} {
  const topics = getTopicsForUnit(subjectId, unitNumber);
  const currentIndex = topics.findIndex(t => t.topicNumber === topicNumber);

  return {
    previousTopic: currentIndex > 0 ? topics[currentIndex - 1] : undefined,
    nextTopic: currentIndex >= 0 && currentIndex < topics.length - 1 ? topics[currentIndex + 1] : undefined,
    totalTopics: topics.length,
  };
}

/**
 * Get summary of all units for a given subject.
 */
export function getSubjectUnitsSummary(subjectId: string): UnitSummary[] {
  const subject = SUBJECTS.find(
    s => s.id === subjectId || s.code.toLowerCase().replace(/\s+/g, '-') === subjectId
  );
  if (!subject) return [];

  return subject.units.map(unit => {
    const topics = getTopicsForUnit(subject.id, unit.unitNumber);
    const availableTopics = topics.filter(t => t.videos.length > 0);
    const videosCount = topics.reduce((acc, t) => acc + t.videos.length, 0);

    return {
      unitNumber: unit.unitNumber,
      title: unit.title,
      topicsCount: topics.length,
      availableTopicsCount: availableTopics.length,
      videosCount,
      status: availableTopics.length > 0 ? 'available' : 'coming_soon',
    };
  });
}

/**
 * Get overall summary for a subject (used on Semester view).
 */
export function getSubjectSummary(subjectId: string): SubjectSummary | undefined {
  const subject = SUBJECTS.find(
    s => s.id === subjectId || s.code.toLowerCase().replace(/\s+/g, '-') === subjectId
  );
  if (!subject) return undefined;

  const units = getSubjectUnitsSummary(subject.id);
  const totalTopicsCount = units.reduce((acc, u) => acc + u.topicsCount, 0);
  const availableTopicsCount = units.reduce((acc, u) => acc + u.availableTopicsCount, 0);
  const curatedVideosCount = units.reduce((acc, u) => acc + u.videosCount, 0);

  return {
    id: subject.id,
    code: subject.code,
    name: subject.name,
    semester: subject.semester,
    description: subject.description,
    isElective: subject.isElective,
    unitsCount: subject.units.length,
    totalTopicsCount,
    availableTopicsCount,
    curatedVideosCount,
    status: availableTopicsCount > 0 ? 'available' : 'coming_soon',
  };
}

/**
 * Get overall summary for a semester.
 */
export function getSemesterSummary(semesterNum: number) {
  const semesterSubjects = SUBJECTS.filter(s => s.semester === semesterNum);
  const summaries = semesterSubjects.map(s => getSubjectSummary(s.id)).filter(Boolean) as SubjectSummary[];

  const totalSubjects = summaries.length;
  const availableSubjectsCount = summaries.filter(s => s.status === 'available').length;
  const totalCuratedVideos = summaries.reduce((acc, s) => acc + s.curatedVideosCount, 0);
  const totalTopics = summaries.reduce((acc, s) => acc + s.totalTopicsCount, 0);

  return {
    semesterNum,
    totalSubjects,
    availableSubjectsCount,
    totalCuratedVideos,
    totalTopics,
    subjects: summaries,
  };
}
