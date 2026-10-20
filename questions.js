// CAPM Practice Exam - 147 Authentic Questions
const QUESTIONS_DATA = [
  {
    "id": 1,
    "question": "The development team has selected three user stories to be implemented during the upcoming Sprint. They are confident in their velocity to accomplish all the work. Which iteration planning step does the team need to accomplish before it can begin with the actual development?",
    "options": [
      "Create a product backlog",
      "Perform relative estimation",
      "Gain sponsor approval",
      "Create a Sprint backlog"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "During Sprint Planning, after selecting user stories from the Product Backlog, the development team breaks them down into specific tasks to create the Sprint Backlog before actual development begins.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 2,
    "question": "A project team is discussing the difference between business analysis and project management. Which statements are correct? (Choose 2)",
    "options": [
      "Project management focuses on solution delivery",
      "Business analysis focuses on solution delivery",
      "Business analysis focuses on requirements",
      "Project management focuses on requirements"
    ],
    "type": "multiple",
    "answer": [
      0,
      2
    ],
    "explanation": "Project management focuses on overall solution delivery (scope, schedule, budget, quality), while business analysis focuses on eliciting, analyzing, and managing requirements.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 3,
    "question": "Which term matches the following definition? \"Supports the delivery of solutions that align with business objectives.\"",
    "options": [
      "Portfolio Management",
      "Program Management",
      "Project Management",
      "Business Analysis"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "Business Analysis is defined as the discipline of identifying business needs, determining solutions, and supporting delivery of solutions aligned to business objectives.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 4,
    "question": "Which term matches the following definition? \"Application of knowledge, skills, tools, and techniques to deliver solutions\"",
    "options": [
      "Business Analysis",
      "Project Management",
      "Portfolio Management",
      "Program Management"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "Project Management is the application of knowledge, skills, tools, and techniques to project activities to deliver solutions and meet project requirements.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 5,
    "question": "Which term matches the following definition? \"Deliver solutions and obtain benefits and control not available by managing individual components.\"",
    "options": [
      "Project Management",
      "Program Management",
      "Portfolio Management",
      "Business Analysis"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "Program Management coordinates related projects and program activities to obtain benefits and control not available from managing them individually.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 6,
    "question": "Which term matches the following definition? \"Centralized management to achieve organizational strategic objectives\"",
    "options": [
      "Project Management",
      "Program Management",
      "Business Analysis",
      "Portfolio Management"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "Portfolio Management is the centralized management of one or more portfolios to achieve strategic organizational objectives.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 7,
    "question": "The project will create a new marketing business application. Marketing is providing funds to cover training needs for the project. These costs will not be deducted from the project budget. What types of funds are being provided?",
    "options": [
      "Direct costs",
      "Donated costs",
      "Indirect costs",
      "Contingency reserves"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "Funds or resources provided by a functional department or external source that do not count against the project budget are classified as donated costs.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 8,
    "question": "A high-priority construction project is already in the planning phase. The project team is developing a graphic representation of the logical relationships among the project schedule activities. What is being developed?",
    "options": [
      "Schedule diagrams",
      "Work breakdown structure (WBS)",
      "Gantt chart",
      "Network diagram"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "A Schedule Network Diagram is a graphical representation of the logical relationships and dependencies among project schedule activities.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 9,
    "question": "Refer to the illustration below. Calculate the Critical Path.",
    "diagram": "assets/diagram_q9.png",
    "options": [
      "25",
      "38",
      "27",
      "28"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "The paths are: A-C-D-E = 7+9+5+4 = 25; A-C-D-F = 7+9+5+7 = 28; B-C-D-E = 6+9+5+4 = 24; B-C-D-F = 6+9+5+7 = 27. The critical (longest) path is 28 days (A-C-D-F).",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 10,
    "question": "A project manager works in an organization where they share power with a functional manager. This project manager has reasonable authority, manages a part-time project team, serves full-time as a project manager, and has part-time administrative staff to help expedite the project. What type of organization is this project manager working in?",
    "options": [
      "Weak matrix",
      "Strong matrix",
      "Balanced matrix",
      "Project Management Office"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "In a Balanced Matrix structure, authority and power are shared equally between the project manager and the functional manager.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 11,
    "question": "Which key role is responsible for developing a product roadmap? Review the Product Roadmap illustration to respond to Questions 11-14.",
    "diagram": "assets/diagram_roadmap.png",
    "options": [
      "Business Analyst",
      "Sponsor",
      "Product Owner",
      "Project Manager"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "The Product Owner is responsible for establishing the product vision, creating the product roadmap, and managing the backlog to optimize customer value.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 12,
    "question": "The product roadmap is dependent upon two key inputs. Which of the following are the two inputs? Choose two. Review the Product Roadmap illustration to respond to Questions 11-14.",
    "diagram": "assets/diagram_roadmap.png",
    "options": [
      "Project charter",
      "Business case",
      "Required capabilities and features",
      "Business goals and objectives"
    ],
    "type": "multiple",
    "answer": [
      2,
      3
    ],
    "explanation": "Product roadmaps align the organization by mapping business goals and objectives against the required capabilities and features delivered across incremental releases.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 13,
    "question": "Product roadmaps are tailored to support the lifecycle selected for project implementation. Review the Product Roadmap illustration. Which of the following product development approaches does this product roadmap support?",
    "diagram": "assets/diagram_roadmap.png",
    "options": [
      "Waterfall",
      "Adaptive",
      "Six Sigma",
      "Predictive"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "The roadmap partitions deliverables into progressive 30-day releases delivering customer value, representing an Adaptive (Agile) approach.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 14,
    "question": "How will the commuter application reflected in the product roadmap be potentially developed? Choose two. Review the Product Roadmap illustration to respond to Questions 11-14.",
    "diagram": "assets/diagram_roadmap.png",
    "options": [
      "Sprints",
      "Predictive",
      "Waterfall",
      "Iterations"
    ],
    "type": "multiple",
    "answer": [
      0,
      3
    ],
    "explanation": "In adaptive frameworks, work is timeboxed into recurring development cycles called Sprints (in Scrum) or Iterations.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 15,
    "question": "Which circle best describes a Project Manager? Use the following illustration to answer questions 15-18.",
    "diagram": "assets/diagram_roles_circle.png",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "Circle D corresponds to \"Manage team and deliver objectives\", describing the core role of a Project Manager.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 16,
    "question": "Which circle best describes a Business Analyst? Use the following illustration to answer questions 15-18.",
    "diagram": "assets/diagram_roles_circle.png",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "Circle B corresponds to \"Identify business needs and potential\", describing the core role of a Business Analyst.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 17,
    "question": "Which circle best describes a Program Manager? Use the following illustration to answer questions 15-18.",
    "diagram": "assets/diagram_roles_circle.png",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Circle C corresponds to \"Ensure aggregate goals are met and benefits\", which represents Program Management.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 18,
    "question": "Which circle best describes a Portfolio Manager? Use the following illustration to answer questions 15-18.",
    "diagram": "assets/diagram_roles_circle.png",
    "options": [
      "D",
      "A",
      "B",
      "C"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "Circle A corresponds to \"Coordinate overall strategic initiatives\", which represents Portfolio Management.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 19,
    "question": "A project to improve a key accounts receivable process is in the planning phase. This project has high leadership. A project manager finalizes the work breakdown structure (WBS) and ensures that each activity is assigned a unique number. What are these numbers called?",
    "options": [
      "Activity Designator",
      "Activity Number",
      "Chart of Account Identifier",
      "Code of Account Identifier"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "The Code of Accounts identifier is a numbering system used to uniquely identify each hierarchical component of the WBS.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 20,
    "question": "The team completed all work and is in the process of presenting product functionality to the product owner. The team will gather feedback and determine the next steps. What process was performed?",
    "options": [
      "Product Backlog",
      "Sprint Backlog",
      "Retrospective",
      "Iteration Review"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "An Iteration Review (Sprint Review / Demo) involves demonstrating working increments to the Product Owner and stakeholders to collect feedback.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 21,
    "question": "The team completed all the work and reviewed the last iteration. It voted on a change that it will implement in the next iteration to improve performance. What process did the team perform?",
    "options": [
      "Iteration Review",
      "Product Backlog",
      "Sprint Backlog",
      "Retrospective"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "The Retrospective is a dedicated meeting where the team reflects on ways to become more effective, fine-tunes its behavior, and agrees on concrete improvements.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 22,
    "question": "Which term matches the following definition? \"Calculates the present value of total benefits over time and provides a dollar result.\"",
    "options": [
      "Cost-Benefit Analysis",
      "Return on Investment (ROI)",
      "Internal Rate of Return (IRR)",
      "Net Present Value (NPV)"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "Net Present Value (NPV) discounts expected future cash flows to the present and subtracts initial costs, outputting a specific monetary currency value.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 23,
    "question": "Which term matches the following definition? \"Calculates the present value of total benefits over time and provides a percentage result.\"",
    "options": [
      "Cost-Benefit Analysis",
      "Internal Rate of Return (IRR)",
      "Net Present Value (NPV)",
      "Return on Investment (ROI)"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "Internal Rate of Return (IRR) is the discount rate that makes the NPV of all project cash flows equal zero, expressed as an annual percentage.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 24,
    "question": "Which term matches the following definition? \"Uses ratio analysis to determine the overall value of a project.\"",
    "options": [
      "Return on Investment (ROI)",
      "Internal Rate of Return (IRR)",
      "Cost-Benefit Analysis",
      "Net Present Value (NPV)"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Cost-Benefit Analysis uses the Benefit-Cost Ratio (BCR) to evaluate the relative financial merits of a project.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 25,
    "question": "Which term matches the following definition? \"The benefit of an investment is divided by the cost of the investment. The result is expressed as a percentage.\"",
    "options": [
      "Internal Rate of Return (IRR)",
      "Net Present Value (NPV)",
      "Return on Investment (ROI)",
      "Cost-Benefit Analysis"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Return on Investment (ROI) is calculated as Net Benefits divided by Total Costs, multiplied by 100 to yield a percentage.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 26,
    "question": "Which role matches the following description? \"Develop and manage the product backlog.\"",
    "options": [
      "Team Facilitator / Scrum Master",
      "Development Team",
      "Product Owner",
      "Sponsor"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "The Product Owner owns the Product Backlog, maintaining, reprioritizing, and clearly communicating backlog items.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 27,
    "question": "Which requirements elicitation technique is Mary using? Review the conversation to respond to Questions 27-29.",
    "scenario": "Mary: We have a number of stakeholders we need to elicit requirements from. I am meeting with some business analysts later to learn as much as I can about their past experiences on like projects.\nSarah: That's awesome Mary. I'm meeting with a group of potential customers. I plan to gather as many ideas on features they value in as short a time as possible.\nPeggy: Great. I have some prepared questions I want to ask our sponsor Max to get his input. We are fortunate. Max is a subject matter expert and knows his stuff!",
    "options": [
      "Lessons Learned and Retrospectives",
      "Delphi Technique",
      "Interviews",
      "Brainstorming"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "Mary is meeting colleagues to learn from their past experiences on similar projects, which represents reviewing Lessons Learned and Retrospectives.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 28,
    "question": "Which requirements elicitation technique is Sarah using? Review the conversation to respond to Questions 27-29.",
    "scenario": "Mary: We have a number of stakeholders we need to elicit requirements from. I am meeting with some business analysts later to learn as much as I can about their past experiences on like projects.\nSarah: That's awesome Mary. I'm meeting with a group of potential customers. I plan to gather as many ideas on features they value in as short a time as possible.\nPeggy: Great. I have some prepared questions I want to ask our sponsor Max to get his input. We are fortunate. Max is a subject matter expert and knows his stuff!",
    "options": [
      "Interviews",
      "Delphi Technique",
      "Brainstorming",
      "Lessons Learned and Retrospectives"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Sarah plans to gather as many feature ideas from customers in as short a time as possible, which describes Brainstorming.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 29,
    "question": "Which requirements elicitation technique is Peggy using? Review the conversation to respond to Questions 27-29.",
    "scenario": "Mary: We have a number of stakeholders we need to elicit requirements from. I am meeting with some business analysts later to learn as much as I can about their past experiences on like projects.\nSarah: That's awesome Mary. I'm meeting with a group of potential customers. I plan to gather as many ideas on features they value in as short a time as possible.\nPeggy: Great. I have some prepared questions I want to ask our sponsor Max to get his input. We are fortunate. Max is a subject matter expert and knows his stuff!",
    "options": [
      "Interviews",
      "Delphi Technique",
      "Brainstorming",
      "Lessons Learned and Retrospectives"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "Peggy has prepared questions to ask the subject matter expert/sponsor directly, which defines an Interview.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 30,
    "question": "The traditional project management lifecycle defines five process groups, including initiating, planning, executing, monitoring, and controlling, and closing. The business analysis team adds a new process group before starting the project. What is the name of this process group where much of the business analysis work is accomplished?",
    "options": [
      "Requirements Development Process Group",
      "Preinitiation Process Group.",
      "Business Analysis Process Group",
      "Defining and Aligning Process Group"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "The Preinitiation Process Group precedes project initiation to identify business problems/opportunities, conduct feasibility studies, and formulate the business case.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 31,
    "question": "The project team completed the risk register and assigned capable risk owners to manage and monitor each risk. A risk owner has identified events that indicate that a high-impact risk will occur. Which term best describes this indicator?",
    "options": [
      "Early Response",
      "Prompt",
      "Trigger",
      "Precursor"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "A Risk Trigger is an event or condition indicating that a risk is about to occur or has occurred.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 32,
    "question": "Managing communications is a critical priority. The current DEF project involves multiple internal and external stakeholders. The team is developing a project communications management plan to manage communications better. Which statements about this document are true? (Choose 2 responses.)",
    "options": [
      "This document defines the project cost data.",
      "This document describes the purpose of communications.",
      "This document disseminates all information to all stakeholders.",
      "This document is periodically updated."
    ],
    "type": "multiple",
    "answer": [
      1,
      3
    ],
    "explanation": "The Communications Management Plan defines the purpose, audience, and format of communication channels and is updated periodically as stakeholder needs change.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 33,
    "question": "Eliminating the functionality gaps in a new product is critical to the success of a project. There is a high degree of executive focus on this project. The project sponsor has requested a report showing a critical project's overall risk scores over the last three months. What concept is the sponsor concerned with?",
    "options": [
      "Risk exposure",
      "Risk impact",
      "Risk vulnerability",
      "Risk manifestation"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "Overall Risk Exposure quantifies the aggregate impact of all potential risks combined over time.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 34,
    "question": "Which role matches the following description? \"Coach the team and facilitate iteration ceremonies.\"",
    "options": [
      "Team Facilitator / Scrum Master",
      "Development Team",
      "Product Owner",
      "Sponsor"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "The Team Facilitator (or Scrum Master) guides the agile process, coaches team members, and facilitates ceremonies.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 35,
    "question": "Which role matches the following description? \"Develop the Sprint/iteration backlog.\"",
    "options": [
      "Team Facilitator / Scrum Master",
      "Development Team",
      "Product Owner",
      "Sponsor"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "The Development Team plans the technical work and creates the Sprint Backlog items necessary to deliver the sprint goal.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 36,
    "question": "Which role matches the following description? \"Provides project approval and funding.\"",
    "options": [
      "Team Facilitator / Scrum Master",
      "Sponsor",
      "Product Owner",
      "Development Team"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "The Project Sponsor provides financial resources, champions the project vision, and grants official approval.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 37,
    "question": "Which implementation strategy and life cycle would be best for Margo's project? Refer to the conversation to respond to questions 37 and 38.",
    "scenario": "John: Thank you for meeting with me today. As Program Managers, we need to ensure each project is accomplished on-time and within budget.\nMargo: I'm excited about my project. I met with the customers today and they all agree on the project deliverables. There might be a few technical challenges, but nothing major.\nRia: I wish I could say the same. I talked with four customers, and they all had different expectations. IT stated that there are some technical issues that will require time to sort out due to the complexity of this project.\nJohn: We have multiple teams. Let's think about the best approach to plan and implement your projects.",
    "options": [
      "Lean",
      "Agile",
      "Predictive",
      "Six Sigma"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Margo has clear agreement on deliverables and low technical challenge, making a Predictive (plan-driven) lifecycle best.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 38,
    "question": "Which implementation strategy and life cycle would be best for Ria's project? Refer to the conversation to respond to questions 37 and 38.",
    "scenario": "John: Thank you for meeting with me today. As Program Managers, we need to ensure each project is accomplished on-time and within budget.\nMargo: I'm excited about my project. I met with the customers today and they all agree on the project deliverables. There might be a few technical challenges, but nothing major.\nRia: I wish I could say the same. I talked with four customers, and they all had different expectations. IT stated that there are some technical issues that will require time to sort out due to the complexity of this project.\nJohn: We have multiple teams. Let's think about the best approach to plan and implement your projects.",
    "options": [
      "Six Sigma",
      "Predictive",
      "Lean",
      "Agile"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "Ria faces conflicting customer expectations and technical complexity/uncertainty, which requires an Agile (adaptive) lifecycle.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 39,
    "question": "The environment and organization where business analysis is performed can be complicated: Which two major categories of influences impact how business analysis is conducted? (Choose two)",
    "options": [
      "Colocation",
      "Organizational Process Assets (OPA)",
      "Enterprise Environmental Factors (EEF)",
      "Assumptions"
    ],
    "type": "multiple",
    "answer": [
      1,
      2
    ],
    "explanation": "Organizational Process Assets (OPAs) and Enterprise Environmental Factors (EEFs) are the two major categories of internal and external influence.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 40,
    "question": "The XYZ company is considering two capital investment projects. Project A will return $40,000 over three years. Project B will return $70,000 over four years. The company only has the funds and capacity to fund one of these projects. They selected Project B. What is the opportunity cost of this decision?",
    "options": [
      "$30,000",
      "$110,000",
      "$40,000",
      "$70,000"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Opportunity cost is the value of the foregone alternative. By selecting Project B, the company foregoes the $40,000 return from Project A.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 41,
    "question": "Risks and issues have plagued the ABC project. The initial requirements were not well documented. As a result, a number of change requests were submitted. What is the project manager's first action when receiving a new change request?",
    "options": [
      "Evaluate the change",
      "Document the decision",
      "Log each change",
      "Provide implementation options"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Whenever a change request is submitted, the PM's first action is to record it in the project Change Log.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 42,
    "question": "A project manager received a high-priority change request from a key stakeholder. The project manager logged the change and ensured that the purpose of the change was clearly documented. They clearly understood the reason for the change. What is the next step in the change process?",
    "options": [
      "Approve the change immediately",
      "Provide implementation options",
      "Evaluate the change",
      "Document decision notes"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Once logged and understood, the change must be evaluated for its comprehensive impact across scope, schedule, cost, risk, and quality.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 43,
    "question": "Which quadrant best describes an Iterative project? Use the illustration to respond to questions 43-46.",
    "diagram": "assets/diagram_quadrant_agile.png",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "Quadrant D has Low Frequency of Delivery and High Degree of Change, which defines an Iterative project lifecycle.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 44,
    "question": "Which quadrant best describes an Incremental project? Use the illustration to respond to questions 43-46.",
    "diagram": "assets/diagram_quadrant_agile.png",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "Quadrant A has High Frequency of Delivery and Low Degree of Change, which defines an Incremental project lifecycle.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 45,
    "question": "Which quadrant best describes an Agile project? Use the illustration to respond to questions 43-46.",
    "diagram": "assets/diagram_quadrant_agile.png",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "Quadrant B has High Frequency of Delivery and High Degree of Change, which defines an Agile (adaptive) lifecycle.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 46,
    "question": "Which quadrant best describes a Predictive project? Use the illustration to respond to questions 43-46.",
    "diagram": "assets/diagram_quadrant_agile.png",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Quadrant C has Low Frequency of Delivery and Low Degree of Change, which defines a Predictive (plan-driven) lifecycle.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 47,
    "question": "A Scrum Master conducted a retrospective. The team recommended five changes. When the first change was reviewed, two team members raised two fingers in the air. Which voting method was used?",
    "options": [
      "Plurality",
      "Majority",
      "Fist-to-Five",
      "Unanimity"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Fist-to-Five is an agile voting technique where individuals express their level of support on a scale from 0 (fist = oppose) to 5 (full commitment).",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 48,
    "question": "In Agile projects, work is carefully planned throughout the project to be completed in short iterations. What is the primary rationale for this methodology?",
    "options": [
      "Reduced delivery schedules",
      "Continual project improvement",
      "Reduced resource requirements",
      "High uncertainty and change"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "Agile planning in short iterations is designed specifically to navigate environments characterized by high uncertainty, volatility, and change.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 49,
    "question": "Managing stakeholders is difficult for a business analyst and a project manager. Some knowledge is readily available and codified using words, pictures, and numbers. Other knowledge is personal and difficult to express, such as beliefs, insights, experience, and knowledge. How is the latter type of knowledge classified?",
    "options": [
      "Personal knowledge",
      "Subtle knowledge",
      "Tacit knowledge",
      "Explicit knowledge"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Tacit knowledge is intuitive, experiential, and deeply ingrained, making it difficult to write down or codify compared to explicit knowledge.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 50,
    "question": "More than three hundred people attended an all-hands meeting. The Director presented two benefit option changes and had employees vote on their preferred option. The Director decided that the solution that more than 50% of the employees selected would be implemented. Which voting method was used?",
    "options": [
      "Majority",
      "Fist-to-Five",
      "Plurality",
      "Unanimity"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "A Majority rule requires more than 50% of group participants to agree on an option.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 51,
    "question": "Which term matches the following definition? \"A risk that has occurred and needs to be addressed and tracked.\"",
    "options": [
      "Assumption",
      "Trigger",
      "Issue",
      "Constraint",
      "Risk"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "An Issue is a risk event that has actually materialized and is presently affecting project performance.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 52,
    "question": "Which term matches the following definition? \"Any potential event that may impact a project\"",
    "options": [
      "Risk",
      "Constraint",
      "Trigger",
      "Assumption",
      "Issue"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "A Risk is an uncertain event or condition that, if it occurs, has a positive or negative impact on project objectives.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 53,
    "question": "Which term matches the following definition? \"Something believed to be true and needs to be validated.\"",
    "options": [
      "Issue",
      "Constraint",
      "Trigger",
      "Assumption",
      "Risk"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "An Assumption is a factor considered to be true for planning purposes without factual proof, requiring continuous validation.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 54,
    "question": "Which term matches the following definition? \"A limiting factor that may impact the planning and execution of a project\"",
    "options": [
      "Trigger",
      "Risk",
      "Constraint",
      "Assumption",
      "Issue"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "A Constraint is an applicable restriction or limitation that affects the performance of the project (e.g. schedule deadline or budget ceiling).",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 55,
    "question": "Which term matches the following definition? \"An early warning that a risk is about to occur\"",
    "options": [
      "Assumption",
      "Issue",
      "Constraint",
      "Trigger",
      "Risk"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "A Trigger is an early warning symptom or threshold indicator that a risk is imminent or has occurred.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 56,
    "question": "Stakeholder engagement is critical to the success of a project. Which statement most accurately describes the business analyst's role in stakeholder engagement?",
    "options": [
      "Ensures stakeholders remain engaged so that information required to build the solution is attained",
      "Assigns and oversee project resources essential to project success",
      "Develops an initial stakeholder register during the project initiation process group",
      "Develops an initial stakeholder engagement plan during the project planning process group"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "The Business Analyst's primary role in stakeholder engagement is keeping stakeholders actively participating so accurate requirements can be discovered and verified.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 57,
    "question": "An Agile project manager is considering how best to plan the launch of a new electronics product. What constraints will be fixed throughout the launch? Choose 2.",
    "options": [
      "Schedule",
      "Cost",
      "Risk",
      "Scope"
    ],
    "type": "multiple",
    "answer": [
      0,
      1
    ],
    "explanation": "In agile frameworks, time (schedule) and cost (resources) are kept fixed for each iteration, while scope remains variable.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 58,
    "question": "A key infrastructure project failed twice to achieve its desired objectives. The team modified its approach to meet the specific requirements for the third attempt. Which method did they use?",
    "options": [
      "Updating",
      "Modifying",
      "Revising",
      "Tailoring"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "Tailoring is the deliberate adaptation of governance, methods, and practices to fit the specific operating environment and goals of a project.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 59,
    "question": "Match the appropriate tool/technique to the following description: \"An analysis model that describes a flow of actor and system interactions and boundaries\"",
    "options": [
      "Context Diagram",
      "Traceability Matrix",
      "Product Backlog",
      "Use Case",
      "User Story"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "A Use Case models how actors interact with a system through sequential flows to achieve specific functional goals within defined boundaries.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 60,
    "question": "Match the appropriate tool/technique to the following description: \"Description written from an actor's viewpoint that describes the actor, function, and benefit\"",
    "options": [
      "Use Case",
      "User Story",
      "Context Diagram",
      "Traceability Matrix",
      "Product Backlog"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "A User Story captures requirements from the user perspective: As a [role], I want [feature], so that [benefit].",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 61,
    "question": "Match the appropriate tool/technique to the following description: \"Listing of prioritized product requirements and deliverables to be completed\"",
    "options": [
      "Use Case",
      "User Story",
      "Traceability Matrix",
      "Context Diagram",
      "Product Backlog"
    ],
    "type": "single",
    "answer": [
      4
    ],
    "explanation": "The Product Backlog is an ordered, single source of truth listing all functional and non-functional requirements for the product.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 62,
    "question": "Match the appropriate tool/technique to the following description: \"Grid or table that links product requirements from their origin to the deliverables that satisfy them\"",
    "options": [
      "User Story",
      "Traceability Matrix",
      "Context Diagram",
      "Product Backlog",
      "Use Case"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "A Requirements Traceability Matrix connects requirements backwards to business objectives and forwards to technical deliverables.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 63,
    "question": "Match the appropriate tool/technique to the following description: \"Visual depiction of product scope shows a business system and how people and other systems interact.\"",
    "options": [
      "Use Case",
      "Traceability Matrix",
      "Context Diagram",
      "User Story",
      "Product Backlog"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "A Context Diagram represents the high-level boundary of a system and exchanges of information with external actors and external systems.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 64,
    "question": "A project can be part of a program which, in turn, can be part of a portfolio. What are these interconnected structures known as? (2 Choices)",
    "options": [
      "Functional management",
      "Organizational project management",
      "System for value delivery",
      "Project governance"
    ],
    "type": "multiple",
    "answer": [
      1,
      2
    ],
    "explanation": "Organizational Project Management (OPM) and the System for Value Delivery represent the integrated structural frameworks aligning portfolios, programs, and projects to organizational strategy.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 65,
    "question": "Priya has been tasked with developing specific scope documentation to support specific objectives necessary to achieve specific benefits outlined in a program. Which task is Priya performing?",
    "options": [
      "Program management",
      "Portfolio management",
      "Project Management",
      "Organizational governance"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Project Management focuses on detailed scope definitions and specific deliverables that fulfill defined objectives.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 66,
    "question": "A new project manager works closely with product managers on a daily basis. Product managers are continually brainstorming ideas for new products and services. What impact does the product manager's role have on the project manager?",
    "options": [
      "Successful new products improve customer satisfaction",
      "A successful product management function leads to job security",
      "New products can lead to increased sales",
      "Product management can initiate programs or projects at any point in the product life cycle"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "Product managers oversee the entire product life cycle and frequently initiate projects and programs to evolve, upgrade, or retire solutions.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 67,
    "question": "A project manager has a goal to improve their emotional intelligence. What is the first level they must master before achieving their goals?",
    "options": [
      "Self-management",
      "Relationship management",
      "Self-awareness",
      "Social competence"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Self-awareness is the primary baseline of emotional intelligence; one must recognize personal emotions before effectively managing them or empathizing with others.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 68,
    "question": "Hitomi is bringing together a carefully selected group of stakeholders to collaborate, explore, and evaluate product requirements. This meeting will be structured and managed to determine how best to achieve several objectives. Which elicitation tool and technique is Hitomi using?",
    "options": [
      "Focus Group",
      "Interview",
      "Brainstorming",
      "Facilitated Workshop"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "A Facilitated Workshop is an intensive, guided cross-functional working session focused on defining, refining, and agreeing upon business requirements.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 69,
    "question": "A project encountered several critical issues that all have the potential to impact the achievement of user story acceptance criteria. Which issue should the agile project manager address first as the priority?",
    "options": [
      "A technology issue is listed as a potential blocker",
      "The project sponsor requested immediate status",
      "Two team members have a conflict",
      "Project funds are running short"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "In agile servant leadership, removing blockers/impediments preventing the team from meeting acceptance criteria takes first priority.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 70,
    "question": "Calculate this project's Cost Variance (CV). Use this table to respond to questions 70-74.",
    "diagram": "assets/diagram_evm_table.png",
    "options": [
      "($5000)",
      "$7,000",
      "$10,000",
      "$5,000"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "Cost Variance (CV) = EV - AC = $60,000 - $55,000 = +$5,000. A positive value indicates the project is under budget.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 71,
    "question": "Calculate this project's Schedule Variance (SV). Use this table to respond to questions 70-74.",
    "diagram": "assets/diagram_evm_table.png",
    "options": [
      "$5,000",
      "$12,000",
      "($5000)",
      "-$12,000"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "Schedule Variance (SV) = EV - PV = $60,000 - $48,000 = +$12,000. A positive value indicates the project is ahead of schedule.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 72,
    "question": "Calculate this project's Cost Performance Index (CPI). Use this table to respond to questions 70-74.",
    "diagram": "assets/diagram_evm_table.png",
    "options": [
      ".8",
      "1.09",
      "1.25",
      ".92"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "CPI = EV / AC = $60,000 / $55,000 = 1.0909 ≈ 1.09. A CPI > 1.0 indicates cost efficiency.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 73,
    "question": "Calculate this project's Schedule Performance Index (SPI). Use this table to respond to questions 70-74.",
    "diagram": "assets/diagram_evm_table.png",
    "options": [
      ".92",
      "1.09",
      ".8",
      "1.25"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "SPI = EV / PV = $60,000 / $48,000 = 1.25. An SPI > 1.0 indicates the team is progressing faster than scheduled.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 74,
    "question": "What is the current status of this project? Use this table to respond to questions 70-74.",
    "diagram": "assets/diagram_evm_table.png",
    "options": [
      "Behind on budget/behind on schedule",
      "Ahead on budget/Behind on schedule",
      "Behind on budget/Ahead on schedule",
      "Ahead on budget/Ahead on schedule"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "With CV = +$5,000 (under budget) and SV = +$12,000 (ahead of schedule), the project is ahead on budget and ahead on schedule.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 75,
    "question": "The ABC product launch project was originally planned with a co-located development team. A flu epidemic necessitated using virtual tools for much of the current iteration. The Agile project manager discovered a new messaging tool that he believes will benefit the team. What is the best approach to sharing this tool?",
    "options": [
      "Initiate training immediately to roll out the new tool",
      "Ask the team to evaluate the tool and determine if it can add value",
      "Implement the tool and share the value",
      "Develop a user story to roll out the tool"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "In self-organizing agile teams, servant leaders invite the team to review and evaluate prospective tools rather than mandating them.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 76,
    "question": "Which term matches the following description? \"Get people to share ideas on a topic and build upon those ideas.\"",
    "options": [
      "Facilitation",
      "Interviews",
      "Nominal Group Technique",
      "Focus Groups",
      "Brainstorming"
    ],
    "type": "single",
    "answer": [
      4
    ],
    "explanation": "Brainstorming is an unconstrained ideation technique aimed at gathering a wide variety of ideas and building upon peers' suggestions.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 77,
    "question": "Which term matches the following description? \"Elicit opinions and requirements from a pre-selected stakeholder demographic.\"",
    "options": [
      "Nominal Group Technique",
      "Interviews",
      "Facilitation",
      "Brainstorming",
      "Focus Groups"
    ],
    "type": "single",
    "answer": [
      4
    ],
    "explanation": "Focus Groups gather pre-qualified participants matching a specific stakeholder profile or demographic to assess feedback and expectations.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 78,
    "question": "Which term matches the following description? \"Solicit ideas or solutions and rank order each by priority.\"",
    "options": [
      "Brainstorming",
      "Interviews",
      "Facilitation",
      "Focus Groups",
      "Nominal Group Technique"
    ],
    "type": "single",
    "answer": [
      4
    ],
    "explanation": "The Nominal Group Technique extends brainstorming by adding a structured voting and ranking phase to prioritize the best ideas.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 79,
    "question": "Which term matches the following description? \"Bring stakeholders with different perspectives and seek agreement without decision.\"",
    "options": [
      "Interviews",
      "Brainstorming",
      "Focus Groups",
      "Facilitation",
      "Nominal Group Technique"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "Facilitation guides diverse participants toward mutual understanding and consensus while remaining neutral.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 80,
    "question": "Which term matches the following description? \"Elicit requirements or ideas from the experts.\"",
    "options": [
      "Nominal Group Technique",
      "Interviews",
      "Facilitation",
      "Focus Groups",
      "Brainstorming"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "Interviews are targeted, one-on-one or group sessions with subject matter experts to elicit specialized insights.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 81,
    "question": "Meetings are an essential activity used to manage communication. Which meeting management action is most essential to ensure that time spent in meetings is both efficient and effective?",
    "options": [
      "Set time limits and keep to them",
      "Chair and lead meetings with a set of rules",
      "Bring the right people together",
      "Develop an overall strategy"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "Timeboxing and strictly enforcing agendas and time limits prevents meetings from digressing and wasting project resources.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 82,
    "question": "What is the best way to define this chart? Respond to questions 82-84 Using the illustration below:",
    "diagram": "assets/diagram_milestone_chart.png",
    "options": [
      "Bar chart",
      "Milestone chart",
      "Gantt chart",
      "Control chart"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "The illustration displays major milestones identified by diamond markers against target completion dates, representing a Milestone Chart.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 83,
    "question": "Which milestone is scheduled for May 9th? Respond to questions 82-84 Using the illustration below:",
    "diagram": "assets/diagram_milestone_chart.png",
    "options": [
      "Define",
      "Measure",
      "Control",
      "Analyze"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "In the milestone table, the diamond for Activity 4 (Analyze) is plotted under 9-May.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 84,
    "question": "Which activity has the longest duration? Respond to questions 82-84 Using the illustration below:",
    "diagram": "assets/diagram_milestone_chart.png",
    "options": [
      "Control",
      "Define",
      "Measure",
      "Analyze"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "From the \"Time Required\" column: Analyze takes 37 days, Finish takes 36, Control takes 24, Improve takes 22, and Measure takes 21. Analyze has the longest duration.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 85,
    "question": "Which lifecycle has the following attributes? \"Few deliveries and minimal change\"",
    "options": [
      "Agile",
      "Predictive",
      "Incremental",
      "Iterative"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "A Predictive (plan-driven) lifecycle is characterized by low change and a single delivery (or few deliveries) at completion.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 86,
    "question": "Which lifecycle has the following attributes? \"Frequent deliveries, minimal change\"",
    "options": [
      "Incremental",
      "Agile",
      "Predictive",
      "Iterative"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "An Incremental lifecycle produces small, working deliverables frequently while keeping scope change low.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 87,
    "question": "Which lifecycle has the following attributes? \"Few deliveries, frequent change\"",
    "options": [
      "Incremental",
      "Predictive",
      "Iterative",
      "Agile"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "An Iterative lifecycle refines product features through recurring feedback cycles (frequent change) before delivering the finished solution.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 88,
    "question": "Which lifecycle has the following attributes? \"Frequent deliveries, frequent change\"",
    "options": [
      "Incremental",
      "Iterative",
      "Agile",
      "Predictive"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "An Agile lifecycle combines both frequent small deliveries and high responsiveness to change.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 89,
    "question": "A team member noticed that a number of tasks were omitted from a critical iteration user story. When was this new work discovered? Use the diagram to answer the questions 89-91.",
    "diagram": "assets/diagram_burndown.png",
    "options": [
      "Point A",
      "Point B",
      "Point C",
      "Point D"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Point C reflects a sudden rise in remaining work on Day 6, revealing that newly discovered scope was added to the iteration.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 90,
    "question": "Which point represents the scheduled completion of all work in the burndown chart? Use the diagram to answer the questions 89-91.",
    "diagram": "assets/diagram_burndown.png",
    "options": [
      "Point A",
      "Point B",
      "Point C",
      "Point D"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "Point D represents the planned burndown curve nearing completion at the end of the iteration timeline.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 91,
    "question": "Which point reflects the amount of work scheduled at the beginning of the iteration in the burndown chart? Use the diagram to answer the questions 89-91.",
    "diagram": "assets/diagram_burndown.png",
    "options": [
      "Point A",
      "Point B",
      "Point C",
      "Point D"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "Point A at Day 1 marks the total work scheduled at the start of the iteration.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 92,
    "question": "Which type of resource planning matches the following description? \"Cross references team members and tasks with the assigned work package\"",
    "options": [
      "Resource Breakdown Structure (RBS)",
      "Organizational Breakdown Structure (OBS)",
      "Resource Management Plan",
      "RACI Chart",
      "Responsibility Assignment Matrix (RAM)"
    ],
    "type": "single",
    "answer": [
      4
    ],
    "explanation": "A Responsibility Assignment Matrix (RAM) maps team members to work packages or project activities.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 93,
    "question": "Which type of resource planning matches the following description? \"Designates the role and responsibilities of designators to stakeholders at the project level.\"",
    "options": [
      "Resource Breakdown Structure (RBS)",
      "Organizational Breakdown Structure (OBS)",
      "Resource Management Plan",
      "Responsibility Assignment Matrix (RAM)",
      "RACI Chart"
    ],
    "type": "single",
    "answer": [
      4
    ],
    "explanation": "A RACI Chart explicitly designates roles as Responsible, Accountable, Consulted, and Informed across tasks.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 94,
    "question": "Which type of resource planning matches the following description? \"Illustrates the relationship to project activities and the divisions or departments that will perform them.\"",
    "options": [
      "Responsibility Assignment Matrix (RAM)",
      "Resource Management Plan",
      "Resource Breakdown Structure (RBS)",
      "Organizational Breakdown Structure (OBS)",
      "RACI Chart"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "An Organizational Breakdown Structure (OBS) maps project work packages to the existing departments and business units.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 95,
    "question": "Which type of resource planning matches the following description? \"Hierarchical representation of resources by category and type\"",
    "options": [
      "Resource Breakdown Structure (RBS)",
      "Organizational Breakdown Structure (OBS)",
      "Responsibility Assignment Matrix (RAM)",
      "Resource Management Plan",
      "RACI Chart"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "A Resource Breakdown Structure (RBS) is a hierarchical decomposition of resources organized by category and type.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 96,
    "question": "Which type of resource planning matches the following description? \"Describes how resources are acquired, allocated, monitored, and controlled.\"",
    "options": [
      "Organizational Breakdown Structure (OBS)",
      "Resource Management Plan",
      "Resource Breakdown Structure (RBS)",
      "Responsibility Assignment Matrix (RAM)",
      "RACI Chart"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "The Resource Management Plan provides the operational guidance for identifying, staffing, supervising, and releasing project resources.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 97,
    "question": "A project team worked for more than a week to complete a complex Work Breakdown Structure (WBS). This WBS will support a project to upgrade the electrical grid for an office complex that is being expanded to support an additional five hundred employees. What is documented at the lowest level of the WBS?",
    "options": [
      "Activities",
      "Work packages",
      "Details",
      "Tasks"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "The lowest level component of the Work Breakdown Structure is the Work Package.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 98,
    "question": "An organization completed strategic planning, and portfolio implementation is now underway. There are some projects that require entry into the initiation phase or process group. What are two reasons why a project should enter the initiating phase? (Select 2)",
    "options": [
      "Project had many problems, and business need is being reevaluated",
      "Integrated change control led to an updated project management plan",
      "Work performance data was received",
      "New project or business need defined"
    ],
    "type": "multiple",
    "answer": [
      0,
      3
    ],
    "explanation": "Projects enter Initiation upon the inception of a new business need/mandate or when extensive issues force a reevaluation of the business need.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 99,
    "question": "Several key stakeholders can impact the current project positively or negatively. What consideration should the business analysis consider when engaging with a stakeholder group?",
    "options": [
      "Level of Influence",
      "Level of Legitimacy",
      "Level of Urgency",
      "Level of Interest"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "A stakeholder's Level of Influence (power to impact outcomes) is paramount in determining stakeholder engagement strategies.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 100,
    "question": "It is important to tailor stakeholder engagement techniques to meet the needs of either an adaptive or predictive project. Which two methods are used to tailor stakeholder engagement techniques to an adaptive project? Choose two.",
    "options": [
      "Change ground rules",
      "Update communications management plan",
      "Use regularly scheduled short meetings",
      "Engage in regularly scheduled status meetings"
    ],
    "type": "multiple",
    "answer": [
      0,
      2
    ],
    "explanation": "Adaptive projects leverage team-defined ground rules and frequent short collaborative gatherings (such as daily standups and demos) to actively engage stakeholders.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 101,
    "question": "Which business analysis tool/technique matches the following performance description? \"Graphical representation of remaining work compared to planned work. They are used in adaptive projects.\"",
    "options": [
      "Retrospectives",
      "Variance Analysis",
      "Burndown Chart",
      "Root Cause Analysis",
      "Process Flow"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "A Burndown Chart plots remaining work over time, comparing actual reduction against expected velocity in adaptive projects.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 102,
    "question": "Which business analysis tool/technique matches the following performance description? \"Visually shows steps taken by human users as they interact with a system or solution.\"",
    "options": [
      "Process Flow",
      "Variance Analysis",
      "Burndown Chart",
      "Root Cause Analysis",
      "Retrospectives"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "A Process Flow visually charts sequential steps, actions, and decision points performed by users interacting with a system.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 103,
    "question": "Which business analysis tool/technique matches the following performance description? \"Technique for determining the cause and degree of difference between a baseline and actual performance\"",
    "options": [
      "Burndown Chart",
      "Variance Analysis",
      "Process Flow",
      "Retrospectives",
      "Root Cause Analysis"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "Variance Analysis evaluates the differences between planned performance baselines and actual metrics.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 104,
    "question": "Which business analysis tool/technique matches the following performance description? \"Analytical technique used to determine the underlying reason for a variance, defect, or risk.\"",
    "options": [
      "Process Flow",
      "Variance Analysis",
      "Retrospectives",
      "Root Cause Analysis",
      "Burndown Chart"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "Root Cause Analysis investigates the deep-seated root causes of issues, defects, or project variances.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 105,
    "question": "Which business analysis tool/technique matches the following performance description? \"Participants explore their work and results to improve the product and process.\"",
    "options": [
      "Burndown Chart",
      "Variance Analysis",
      "Retrospectives",
      "Root Cause Analysis",
      "Process Flow"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Retrospectives give teams the space to examine their results and processes to discover opportunities for improvement.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 106,
    "question": "The project baseline is approved for a marketing research project that will test the feasibility of several new product ideas being rolled out by an outdoor recreation retailer. A key objective is to ensure all products meet the highest quality standards. The team developed a quality management plan. What are two entries that should be included in this plan? Choose two.",
    "options": [
      "Customer personas",
      "Quality roles and responsibilities",
      "Funding sources",
      "Quality objectives of the project"
    ],
    "type": "multiple",
    "answer": [
      1,
      3
    ],
    "explanation": "A Quality Management Plan specifies the project's quality standards/objectives and identifies team quality roles and responsibilities.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 107,
    "question": "The team is reviewing a number of new user stories to add to the product backlog to support the upcoming launch of a new product. The team is assigning story points to each user story. Which is the primary method for analyzing user stories and assigning story points?",
    "options": [
      "Complexity",
      "Risk",
      "Cost",
      "Procurement"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "Story points estimate relative effort based primarily on the complexity, size, and uncertainty of the user story compared to standard baselines.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 108,
    "question": "The team discusses the importance of delivering a minimum viable product (MVP) at the end of each iteration. What is the primary reason for taking the time to determine the MVP for each iteration?",
    "options": [
      "Risk Reduction",
      "Return on Investment (ROI)",
      "Delivery Excellence",
      "Customer Satisfaction"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "Delivering a Minimum Viable Product quickly validates assumptions with actual users, minimizing the risk of building the wrong solution.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 109,
    "question": "How many total paths are in this project network diagram? Use the illustration to respond to questions 109-111.",
    "diagram": "assets/diagram_q109.png",
    "options": [
      "5",
      "4",
      "6",
      "3"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "There are 4 paths: (1) Start-A-D-F-H-K-Finish = 21, (2) Start-A-D-F-I-K-Finish = 19, (3) Start-B-E-G-J-K-Finish = 27, (4) Start-B-C-G-J-K-Finish = 24.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 110,
    "question": "How long is the critical path assuming durations are in days? Use the illustration to respond to questions 109-111.",
    "diagram": "assets/diagram_q109.png",
    "options": [
      "27",
      "21",
      "28",
      "24"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "The critical path is B-E-G-J-K with a total duration of 6 + 8 + 6 + 4 + 3 = 27 days.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 111,
    "question": "Which activities are not on the critical path? Use the illustration to respond to questions 109-111.",
    "diagram": "assets/diagram_q109.png",
    "options": [
      "Activities F, H, and K",
      "Activities A, C, and I",
      "Activities G, J, and K",
      "Activities D, J, and K"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "The critical path includes B, E, G, J, K. Thus, activities A, C, and I are non-critical.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 112,
    "question": "The project has been underway for some time. All requirements were approved. The customer reviewed an early version of the new product and stated they had some significant changes to add that would be quite costly. Which of the following is the best next step?",
    "options": [
      "Review the approved requirements and show how the requests are out of scope",
      "Work with the team to integrate the changes at the lowest cost possible",
      "Review the original business case with the customer to determine if the changes are aligned with the need",
      "Advise the customer that it is too late to make product changes at this point"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Before performing costly scope modifications, the PM reviews the foundational business case with the client to verify alignment with organizational goals.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 113,
    "question": "A new marketing research project involves a number of key stakeholders. This project has visibility at the highest level of the company and is a top priority. Many stakeholders have a high degree of power. They do not have a high interest in being actively involved. What is the optimal engagement strategy for engaging these stakeholders?",
    "options": [
      "Maintain interest",
      "Regularly engage",
      "Keep informed",
      "Actively consult"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "On the Power/Interest grid, stakeholders with high power but low interest must be kept satisfied / have interest maintained without overwhelming them with detail.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 114,
    "question": "Which value from the Code of Ethics and Professional Conduct does option \"A\" describe? Use the following diagram to answer questions 114-117.",
    "diagram": "assets/diagram_ethics.png",
    "options": [
      "Respect",
      "Responsibility",
      "Fairness",
      "Honesty"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "Option A states \"Take ownership for decisions you make or fail to make and the consequences that result,\" which is Responsibility.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 115,
    "question": "Which value from the Code of Ethics and Professional Conduct does option \"B\" describe? Use the following diagram to answer questions 114-117.",
    "diagram": "assets/diagram_ethics.png",
    "options": [
      "Honesty",
      "Fairness",
      "Respect",
      "Responsibility"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Option B states \"Show a high regard for ourselves, others, and the resources entrusted to us,\" which is Respect.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 116,
    "question": "Which value from the Code of Ethics and Professional Conduct does option \"C\" describe? Use the following diagram to answer questions 114-117.",
    "diagram": "assets/diagram_ethics.png",
    "options": [
      "Fairness",
      "Responsibility",
      "Respect",
      "Honesty"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "Option C states \"Make decisions and act impartially and objectively. Free yourself from self-interest,\" which is Fairness.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 117,
    "question": "Which value from the Code of Ethics and Professional Conduct does option \"D\" describe? Use the following diagram to answer questions 114-117.",
    "diagram": "assets/diagram_ethics.png",
    "options": [
      "Fairness",
      "Honesty",
      "Respect",
      "Responsibility"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "Option D states \"Understand the truth and act in a truthful manner both in communications and conduct,\" which is Honesty.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 118,
    "question": "A business analyst created a grid that provides the ability to track requirements from their origin to the deliverables that satisfy them. This grid will be used extensively in scope planning. Which of the following describes this grid?",
    "options": [
      "Requirements Management Plan",
      "Use Case",
      "Scope Statement",
      "Requirements Traceability Matrix"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "The Requirements Traceability Matrix connects requirements from inception, through design and implementation, to the finished deliverables.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 119,
    "question": "Which Agile manifesto value is valued more than processes and tools?",
    "options": [
      "Customer Collaboration",
      "Working Product",
      "Responding to Change",
      "Individuals and Interactions"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "The first core value of the Agile Manifesto is \"Individuals and interactions over processes and tools.\"",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 120,
    "question": "Which Agile manifesto value is valued more than comprehensive documentation?",
    "options": [
      "Responding to Change",
      "Working Product",
      "Customer Collaboration",
      "Individuals and Interactions"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "The second core value of the Agile Manifesto is \"Working software (product) over comprehensive documentation.\"",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 121,
    "question": "Which agile manifesto value is valued more than contract negotiation?",
    "options": [
      "Working Product",
      "Responding to Change",
      "Customer Collaboration",
      "Individuals and Interactions"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "The third core value of the Agile Manifesto is \"Customer collaboration over contract negotiation.\"",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 122,
    "question": "Which Agile manifesto value is valued more than following a plan?",
    "options": [
      "Working Product",
      "Customer Collaboration",
      "Individuals and Interactions",
      "Responding to Change"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "The fourth core value of the Agile Manifesto is \"Responding to change over following a plan.\"",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 123,
    "question": "The project team has several questions before beginning project schedule planning. This project is a hybrid that will employ both predictive and adaptive techniques. They need to understand planned iteration lengths. They are also questioning required schedule reporting formats dictated by the organization and approved schedule models they can use. What should the project manager consider developing?",
    "options": [
      "Schedule network diagram",
      "Schedule Management Plan",
      "Schedule data",
      "Milestone list"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "The Schedule Management Plan governs how the project schedule will be planned, developed, managed, executed, and controlled.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 124,
    "question": "The development team discusses how best to meet the customer's functionality requirements for a high-priority user story. The team has brainstormed extensively and designed several ideas on a whiteboard drawing. How should this information be recorded?",
    "options": [
      "Take a picture with your cell phone and share it with the team",
      "Formalize the drawing into a document and validate with the customer",
      "Assign a user story to a team member to document it",
      "Gain sponsor approval and implement"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "Agile methodologies prefer low-overhead, rapid documentation. Snapping and sharing a photo captures the whiteboard diagram instantly without unnecessary delay.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 125,
    "question": "The project team created a comprehensive risk register and assigned risk owners to manage each identified risk. The team categorized the risks to facilitate tracking and analysis. Which category lists those risks that could potentially result in a loss or gain for the business?",
    "options": [
      "Hybrid Risk",
      "Insurable Risk",
      "Business Risk",
      "Event Risk"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Business Risks encompass opportunities and threats that can result in financial gain or financial loss.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 126,
    "question": "Which of the following process groups is an issue log produced?",
    "options": [
      "Executing",
      "Planning",
      "Monitoring and Controlling",
      "Initiating",
      "Closing"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "The Issue Log is first produced in the Executing process group through the Direct and Manage Project Work process.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 127,
    "question": "Which of the following process groups is the final report produced?",
    "options": [
      "Planning",
      "Executing",
      "Closing",
      "Monitoring and Controlling",
      "Initiating"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "The Final Report summarizing project performance is produced during the Close Project or Phase process in Closing.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 128,
    "question": "Which of the following process groups is the stakeholder register produced?",
    "options": [
      "Initiating",
      "Executing",
      "Monitoring and Controlling",
      "Closing",
      "Planning"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "The Stakeholder Register is produced during the Identify Stakeholders process in the Initiating process group.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 129,
    "question": "Which of the following process groups is a risk register produced?",
    "options": [
      "Planning",
      "Initiating",
      "Closing",
      "Executing",
      "Monitoring and Controlling"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "The Risk Register is first produced during the Identify Risks process in the Planning process group.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 130,
    "question": "Which of the following process groups is a work breakdown structure dictionary produced?",
    "options": [
      "Executing",
      "Monitoring and Controlling",
      "Initiating",
      "Planning",
      "Closing"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "The WBS Dictionary is generated alongside the WBS in the Create WBS process within the Planning process group.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 131,
    "question": "The team has completed a review of two new user stories. There are differing opinions on how many story points should be assigned to each user story. The team has decided to use a method where each team member makes an anonymous prediction of the story points needed and then shares their logic after all members have shared their estimates. What is this method?",
    "options": [
      "Delphi technique",
      "Root cause analysis",
      "Planning poker",
      "Nominal group technique"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Planning Poker involves team members holding up estimation cards simultaneously and debating differences to converge on consensus story points.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 132,
    "question": "A project manager is working on a construction project to provides electronic infrastructure to support a newly built high-rise office building. A project manager is collecting all of the documented procedures to satisfy the stakeholders' needs. Which of the following project management tools should the project manager use to schedule this work?",
    "options": [
      "Stakeholder Engagement Plan",
      "Work Authorization System",
      "RACI",
      "Kanban Board"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "A Kanban Board provides a dynamic visual scheduling tool that limits work-in-progress and coordinates work items to completion.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 133,
    "question": "In which of the following process groups is a work performance report produced?",
    "options": [
      "Planning",
      "Initiating",
      "Monitoring and Controlling",
      "Executing",
      "Closing"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Work Performance Reports are created in the Monitoring and Controlling process group (Monitor and Control Project Work).",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 134,
    "question": "Which risk response is most appropriate in the following scenario? \"Remove a troublesome vendor who has not provided quality deliverables.\"",
    "options": [
      "Escalate",
      "Transfer",
      "Avoid",
      "Accept",
      "Mitigate"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Terminating/removing a troublesome vendor completely eliminates the threat, which is Risk Avoidance.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 135,
    "question": "Which risk response is most appropriate in the following scenario? \"Subcontract key tasks that cannot be accomplished internally.\"",
    "options": [
      "Mitigate",
      "Accept",
      "Transfer",
      "Escalate",
      "Avoid"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Subcontracting transfers the risk ownership and execution to a capable third party, which is Risk Transference.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 136,
    "question": "Which risk response is most appropriate in the following scenario? \"Reduce the probability and impact of bad weather by scheduling inside work.\"",
    "options": [
      "Mitigate",
      "Escalate",
      "Accept",
      "Transfer",
      "Avoid"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "Taking specific proactive action to decrease the probability or impact of a risk event is Risk Mitigation.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 137,
    "question": "Which risk response is most appropriate in the following scenario? \"Take no action to address a risk if it occurs based on its low impact rating.\"",
    "options": [
      "Accept",
      "Mitigate",
      "Escalate",
      "Transfer",
      "Avoid"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "Deciding to accept the consequences of a low-severity risk without allocating reserves or taking proactive measures is Passive Risk Acceptance.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 138,
    "question": "Which risk response is most appropriate in the following scenario? \"Gain authorization for additional contingency reserves\"",
    "options": [
      "Transfer",
      "Mitigate",
      "Avoid",
      "Accept",
      "Escalate"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "Establishing or requesting contingency reserves is Active Risk Acceptance, preparing financial buffers in case risks occur.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 139,
    "question": "How should the Agile project manager address the sponsor's concerns? Watch this conversation between a sponsor and senior executive, and then answer questions 139-140.",
    "scenario": "Sponsor: I am really unhappy. We adopted Agile and I don't think anything is getting done.\nExecutive: I understand. I have no idea what the status is of any of our current projects. It is frustrating.\nSponsor: I may just tell the team to begin managing projects like we used to.\nExecutive: I see your point. Unfortunately, our project management results were not good prior to implementing Agile. Let's talk with the project manager and get their thoughts.",
    "options": [
      "Educate the sponsor about the value of an incremental approach",
      "Invite the sponsor to the next daily Scrum meeting",
      "Ask the product owner to communicate progress to the sponsor",
      "Change priorities to deliver more than prototypes"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "Educating leaders on the benefits of an incremental approach and engaging them in sprint reviews aligns expectations and shows actual progress.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 140,
    "question": "What should the Agile project manager share with the sponsor and other senior members of the organization? Choose 2 responses. Watch this conversation between a sponsor and senior executive, and then answer questions 139-140.",
    "scenario": "Sponsor: I am really unhappy. We adopted Agile and I don't think anything is getting done.\nExecutive: I understand. I have no idea what the status is of any of our current projects. It is frustrating.\nSponsor: I may just tell the team to begin managing projects like we used to.\nExecutive: I see your point. Unfortunately, our project management results were not good prior to implementing Agile. Let's talk with the project manager and get their thoughts.",
    "options": [
      "Share the product backlog",
      "Include stakeholders in retrospectives",
      "Share the product vision and goals",
      "Provide formal status reports"
    ],
    "type": "multiple",
    "answer": [
      0,
      2
    ],
    "explanation": "Sharing the transparent Product Backlog and clearly reinforcing the Product Vision and Goals provides executives clarity into what is being built and why.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 141,
    "question": "You are approaching the end of the iteration and have discovered a coding error that will impact the overall product functionality. What is the best way to address this issue?",
    "options": [
      "Discuss in the daily Scrum meeting",
      "Replace the developer",
      "Meet with the developer responsible and address the issue",
      "Share in the weekly status report"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "Agile teams embody transparency. Impending roadblocks and major defects should be surfaced at the Daily Scrum so the whole team can collaborate on a solution.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 142,
    "question": "The LND Inc. project to renovate the seventh floor of an office complex to house an additional server farm and IT personnel to manage it ended successfully and without problems. In all likelihood, which two aspects of the project did the team successfully plan that enabled its successful completion? (Select 2)",
    "options": [
      "Customer acceptance",
      "Share Work performance information (WPI)",
      "Transition planning",
      "Negotiate a successful settlement"
    ],
    "type": "multiple",
    "answer": [
      0,
      2
    ],
    "explanation": "Successful project delivery and turnover requires defined customer acceptance criteria and transition planning to hand off operations seamlessly.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 143,
    "question": "A project to add a new automated dispatching capability to support a delivery fleet ended this week. The firm's leadership was pleased with the overall results of the project. Several issues developed, resulting in temporary setbacks, but the team was resilient and responded well. This project was the first of many automation projects that the firm will undertake. What should this project team do to help future project managers?",
    "options": [
      "Ask stakeholders to document what went well, what did not go well, and what can be improved",
      "Interview leadership and share their feedback",
      "Share final quality defect reports with the team",
      "Task the team to document what went well, what did not, and what can be improved."
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "Documenting lessons learned (what went well, what did not, and opportunities for improvement) captures organizational knowledge to aid future projects.",
    "domain": "Project Management Fundamentals"
  },
  {
    "id": 144,
    "question": "Which quadrant from the Product Portfolio Matrix applies to the following solution evaluation? \"Products that provide the most significant benefits\" Use this illustration of a Product Portfolio Matrix to answer questions 144-147.",
    "diagram": "assets/diagram_bcg_matrix.png",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "Quadrant A (Stars: High Market Share, High Market Growth) provides the most significant strategic and financial benefits.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 145,
    "question": "Which quadrant from the Product Portfolio Matrix applies to the following solution evaluation? \"Products to be discontinued or retired\" Use this illustration of a Product Portfolio Matrix to answer questions 144-147.",
    "diagram": "assets/diagram_bcg_matrix.png",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "type": "single",
    "answer": [
      3
    ],
    "explanation": "Quadrant D (Dogs: Low Market Share, Low Market Growth) represents underperforming products that should be divested or retired.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 146,
    "question": "Which quadrant from the Product Portfolio Matrix applies to the following solution evaluation? \"Products that provide a dependable income stream\" Use this illustration of a Product Portfolio Matrix to answer questions 144-147.",
    "diagram": "assets/diagram_bcg_matrix.png",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Quadrant C (Cash Cows: High Market Share, Low Market Growth) provides dependable, consistent cash flows requiring low reinvestment.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 147,
    "question": "Which quadrant from the Product Portfolio Matrix applies to the following solution evaluation? \"Products with good potential\" Use this illustration of a Product Portfolio Matrix to answer questions 144-147.",
    "diagram": "assets/diagram_bcg_matrix.png",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "Quadrant B (Question Marks: Low Market Share, High Market Growth) represents products with strong market growth potential that require targeted investment.",
    "domain": "Business Analysis Frameworks"
  },
  {
    "id": 148,
    "question": "There are two teams working to complete a new product release. Team A is working on user stories for the information technology (IT) infrastructure. Team B is developing new business applications and features. It was noted that Team A projects a velocity of 10 story points while Team B's velocity is 16 story points. A new product owner is confused and thinks that the two teams should be consistent in their velocity projections. How should you address the product owner's concerns?",
    "options": [
      "Standardize story point calculations",
      "Team A needs to train to improve velocity.",
      "Story points vary depending on the team and the product being developed",
      "Reward Team B"
    ],
    "type": "single",
    "answer": [
      2
    ],
    "explanation": "Story points and velocity are relative measures unique to each individual agile team based on their estimation scale, context, and team dynamics. Velocities cannot and should not be compared across different teams; story points naturally vary depending on the team and the specific product being developed.",
    "domain": "Agile Frameworks/Methodologies"
  },
  {
    "id": 149,
    "question": "The team is planning the scope and has identified a major skill gap. There are no internal resources available to conduct an IT security activity, and external resources are needed. Which plan should the team develop?",
    "options": [
      "Procurement Management Plan",
      "Seller Management Plan",
      "Claims Administration Plan",
      "Vendor Management Plan"
    ],
    "type": "single",
    "answer": [
      0
    ],
    "explanation": "When an organization identifies a skill gap and lacks internal resources to conduct project activities, external resources must be acquired. The team develops the Procurement Management Plan (part of Project Procurement Management) to document how goods and services will be acquired from outside the performing organization.",
    "domain": "Predictive Methodologies"
  },
  {
    "id": 150,
    "question": "A number of stakeholders are categorized as having low influence and low impact on the project. Which of the following is the optimal engagement methodology for these stakeholders?",
    "options": [
      "Maintain open communications",
      "Monitor the relationship",
      "Understand and address concerns",
      "Ignore them"
    ],
    "type": "single",
    "answer": [
      1
    ],
    "explanation": "According to the Stakeholder Power/Interest and Influence/Impact Matrix (PMBOK Guide), stakeholders who possess low influence and low impact require the 'Monitor' strategy (monitoring the relationship and watching for any changes in status or requirements with minimal administrative overhead).",
    "domain": "Project Management Fundamentals"
  }
];

if (typeof module !== "undefined" && module.exports) {
    module.exports = { QUESTIONS_DATA };
}
