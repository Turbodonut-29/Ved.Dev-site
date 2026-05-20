export interface ProjectScreen {
  image: string
  title: string
  description: string
}

export interface ProjectDetail {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  category: string
  color: string
  technologies: string[]
  screens: ProjectScreen[]
  features: string[]
}

export const projectDetails: ProjectDetail[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "A full-featured online shopping experience developed as a personal project to explore modern e-commerce patterns",
    fullDescription: `This e-commerce platform was developed as a fun project to explore the complexities of building a complete online shopping solution. The goal was to challenge myself by implementing features commonly found in production e-commerce sites while learning new technologies and best practices.

The platform features a sophisticated product catalog system with complex categorization, filtering, and search functionality. I implemented fuzzy matching and autocomplete suggestions to create a smooth browsing experience. Building the search system was particularly interesting as it required balancing performance with accuracy.

The shopping cart system includes persistence across sessions, real-time inventory tracking, and automatic notifications for low-stock items. I enjoyed building the checkout flow, which minimizes friction with guest checkout options, saved addresses, and multiple payment methods.

Payment integration using Stripe's API was a great learning experience, covering credit cards, digital wallets, and promotional code handling. This project taught me a lot about secure payment processing and PCI compliance considerations.`,
    category: "Web Development",
    color: "#FFD700",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "AWS S3", "Elasticsearch"],
    screens: [
      {
        image: "/images/project-ecommerce.jpg",
        title: "Product Catalog",
        description: "The main product browsing interface featuring a grid layout with filtering options. Users can sort by price, category, and ratings. The search bar includes autocomplete suggestions powered by Elasticsearch for fast, relevant results."
      },
      {
        image: "/images/ecommerce-cart.jpg",
        title: "Shopping Cart",
        description: "The cart page displays all selected items with quantity controls and real-time price calculations. It shows stock availability, estimated shipping costs, and supports promotional codes. The cart persists across sessions using Redis."
      },
      {
        image: "/images/ecommerce-product.jpg",
        title: "Product Detail Page",
        description: "Individual product pages feature a large image gallery with zoom capability, detailed specifications, customer reviews section, and related product recommendations. The add-to-cart button includes size/variant selection where applicable."
      }
    ],
    features: [
      "Full product catalog with advanced filtering and search",
      "Persistent shopping cart with real-time inventory tracking",
      "Stripe payment integration with multiple payment methods",
      "Guest checkout and saved address management",
      "Order confirmation emails with tracking integration"
    ]
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker App",
    shortDescription: "A mobile-first fitness application built as a personal project to combine my interest in fitness with app development",
    fullDescription: `The Fitness Tracker App started as a personal project born from my own fitness journey. I wanted to create an app that tracked workouts the way I actually wanted to use it, while also challenging myself to build a cross-platform mobile application.

The app features an extensive exercise library with over 500 exercises, complete with form guidance and muscle group targeting information. Building this database and the UI to navigate it was a significant undertaking that taught me a lot about data organization and mobile UX.

I implemented interactive charts to display strength progression, body measurements, and workout frequency patterns. Working with Chart.js and optimizing for mobile performance was a fun challenge. The AI-powered analytics feature that identifies trends and suggests improvements was my favorite part to build.

Social features let users connect with friends and participate in challenges. Building the real-time leaderboard system and push notification infrastructure rounded out the project as a comprehensive learning experience in mobile development.`,
    category: "App Development",
    color: "#4A90E2",
    technologies: ["React Native", "Firebase", "Chart.js", "Redux", "Node.js", "TensorFlow Lite"],
    screens: [
      {
        image: "/images/project-fitness.jpg",
        title: "Dashboard Overview",
        description: "The main dashboard provides a quick overview of today's workout plan, weekly activity summary, and progress toward fitness goals. The circular progress indicators show completion rates for different fitness metrics."
      },
      {
        image: "/images/fitness-workout.jpg",
        title: "Workout Session",
        description: "The active workout screen displays the current exercise with set/rep tracking, rest timers, and quick access to exercise instructions. Users can log weights, mark sets complete, and add notes for each exercise."
      },
      {
        image: "/images/fitness-stats.jpg",
        title: "Progress Analytics",
        description: "Detailed analytics charts show strength progression over time, workout consistency patterns, and body measurement trends. The AI engine analyzes this data to provide personalized training recommendations."
      }
    ],
    features: [
      "Extensive exercise library with video demonstrations",
      "Custom workout routine builder with templates",
      "Progress tracking with interactive charts",
      "AI-powered training recommendations",
      "Social features with friend challenges and leaderboards"
    ]
  },
  {
    id: "portfolio-builder",
    title: "Portfolio Builder",
    shortDescription: "A drag-and-drop portfolio creator developed as a fun project to explore visual editing interfaces and real-time collaboration",
    fullDescription: `The Portfolio Builder emerged from my fascination with visual editing tools. I wanted to understand how platforms like Webflow and Framer work under the hood, so I decided to build a simplified version focused specifically on portfolio creation.

The drag-and-drop interface was the most challenging and rewarding part to build. I created a custom system that feels natural and responsive, with real-time preview updates. Implementing smart guides and snap-to-grid functionality helped maintain visual alignment throughout the editing process.

The template system offers professionally designed layouts that are fully customizable. Building the theme engine that supports light/dark modes with automatic color palette generation based on brand colors was a particularly interesting challenge involving color theory and accessibility considerations.

I also implemented custom domain support, SEO optimization tools, and image optimization that automatically serves images in next-gen formats. This project significantly expanded my understanding of static site generation and content delivery optimization.`,
    category: "UI/UX Design",
    color: "#FF69B4",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Prisma", "PostgreSQL", "Cloudinary"],
    screens: [
      {
        image: "/images/project-portfolio.jpg",
        title: "Template Gallery",
        description: "The template selection screen showcases professionally designed portfolio layouts. Each template is previewed with sample content, and users can filter by style (minimal, creative, professional) or profession (developer, designer, photographer)."
      },
      {
        image: "/images/portfolio-editor.jpg",
        title: "Visual Editor",
        description: "The main editing interface features a drag-and-drop canvas with a component sidebar. Users can arrange sections, customize content, and see changes in real-time. Smart guides appear when aligning elements."
      },
      {
        image: "/images/portfolio-templates.jpg",
        title: "Theme Customization",
        description: "The theme panel allows complete visual customization including color schemes, typography choices, and spacing settings. The auto-generate feature creates harmonious color palettes from a single brand color input."
      }
    ],
    features: [
      "Intuitive drag-and-drop visual editor",
      "Professional template library with full customization",
      "Automatic image optimization and next-gen formats",
      "Custom domain support with SSL",
      "Built-in SEO optimization tools"
    ]
  },
  {
    id: "task-management",
    title: "Task Management System",
    shortDescription: "A collaborative project management tool built as a fun project to explore real-time synchronization and team collaboration features",
    fullDescription: `This Task Management System was developed as a personal project to dive deep into real-time collaboration technologies. I was curious about how tools like Notion and Linear handle concurrent editing, so I set out to build my own simplified version.

The system supports multiple project methodologies including Kanban boards, sprint-based workflows, and traditional task lists. Building the flexible view system that can switch between these formats instantly was a great exercise in state management and UI architecture.

Real-time collaboration was the core technical challenge. I implemented instant synchronization across all connected users with presence indicators showing who is viewing or editing each item. The conflict resolution system handles concurrent edits gracefully without data loss.

Advanced features like time tracking, workload visualization, and automated workflows rounded out the project. Building the integration layer for GitHub, Slack, and Google Workspace taught me a lot about API design and third-party service integration patterns.`,
    category: "Web Development",
    color: "#7ED321",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "Redis", "Docker", "GraphQL"],
    screens: [
      {
        image: "/images/project-tasks.jpg",
        title: "Project Overview",
        description: "The project dashboard displays key metrics, recent activity, and quick access to tasks. The sidebar shows project hierarchy with milestones and task groups for easy navigation."
      },
      {
        image: "/images/tasks-kanban.jpg",
        title: "Kanban Board",
        description: "The Kanban view allows drag-and-drop task organization across customizable columns. Cards show assignees, due dates, and priority labels. Real-time updates sync changes instantly across all team members."
      },
      {
        image: "/images/tasks-timeline.jpg",
        title: "Timeline View",
        description: "The Gantt-style timeline displays task dependencies and scheduling. Users can drag to adjust dates, link dependent tasks, and visualize the critical path. Milestones mark key project checkpoints."
      }
    ],
    features: [
      "Multiple view modes: Kanban, list, timeline, and calendar",
      "Real-time collaboration with presence indicators",
      "Time tracking and workload management",
      "Automated workflows and recurring tasks",
      "Integration with GitHub, Slack, and Google Workspace"
    ]
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    shortDescription: "An interactive 3D weather visualization built as a fun project to explore WebGL and Three.js capabilities",
    fullDescription: `The Weather Dashboard was born from my desire to learn WebGL and Three.js while creating something visually impressive. Traditional weather apps present data in tables and simple charts - I wanted to transform meteorological data into an immersive 3D experience.

The 3D visualization engine renders realistic weather conditions including rain, snow, fog, and sunshine effects. Building the particle systems for precipitation and the shader-based atmospheric effects was incredibly rewarding. The interactive globe view shows animated weather systems moving across continents.

Location-based features provide personalized weather using GPS, with smart notifications for significant weather changes. Working with multiple weather APIs and implementing a data aggregation layer that weights different sources based on historical accuracy was a fun algorithmic challenge.

The historical data visualization lets users explore past weather patterns with animated playback. This project significantly expanded my 3D graphics skills and taught me a lot about performance optimization for complex visual effects.`,
    category: "3D Animation",
    color: "#4A90E2",
    technologies: ["Three.js", "React", "OpenWeather API", "D3.js", "WebGL", "GSAP", "Node.js"],
    screens: [
      {
        image: "/images/project-weather.jpg",
        title: "Current Conditions",
        description: "The main view displays current weather with 3D animated effects matching conditions - rain particles, cloud formations, or sunshine rays. Temperature, humidity, and wind data appear as floating UI elements."
      },
      {
        image: "/images/weather-globe.jpg",
        title: "Global Weather Map",
        description: "An interactive 3D globe shows worldwide weather patterns with animated cloud systems and precipitation. Users can rotate, zoom, and click any location to see local weather details."
      },
      {
        image: "/images/weather-forecast.jpg",
        title: "Extended Forecast",
        description: "The 14-day forecast view presents daily predictions with temperature graphs, precipitation probability, and condition icons. Historical accuracy indicators show how reliable predictions are for each timeframe."
      }
    ],
    features: [
      "Immersive 3D weather visualizations with WebGL",
      "Interactive globe with global weather patterns",
      "Location-based weather with smart notifications",
      "14-day forecast with multiple data sources",
      "Historical weather data exploration with playback"
    ]
  },
  {
    id: "social-media-analytics",
    title: "Social Media Analytics",
    shortDescription: "A comprehensive analytics dashboard developed as a fun project to explore data visualization and natural language processing",
    fullDescription: `The Social Media Analytics platform was built as a personal project to combine my interests in data visualization and machine learning. I wanted to create a unified dashboard that could aggregate metrics from multiple platforms and provide meaningful insights.

The dashboard pulls data from major social platforms through their APIs, presenting everything in a unified interface. Building the data normalization layer to handle different metric formats and API structures across platforms was an interesting architectural challenge.

The sentiment analysis engine was the most exciting part to develop. Using NLP techniques to analyze comments and mentions, it provides insights into audience perception and identifies trending topics. Training the multilingual model to handle content in different languages pushed my machine learning skills.

The competitive benchmarking and content recommendation features round out the analytics suite. This project taught me a lot about handling large datasets, building efficient data pipelines, and creating intuitive visualizations for complex information.`,
    category: "UI/UX Design",
    color: "#FF69B4",
    technologies: ["Angular", "Python", "PostgreSQL", "TensorFlow", "FastAPI", "Apache Kafka", "Elasticsearch"],
    screens: [
      {
        image: "/images/project-analytics.jpg",
        title: "Analytics Overview",
        description: "The main dashboard aggregates metrics from all connected social platforms. Key performance indicators, follower growth trends, and engagement rates are displayed with interactive charts and comparison tools."
      },
      {
        image: "/images/analytics-dashboard.jpg",
        title: "Engagement Metrics",
        description: "Detailed engagement analytics break down likes, comments, shares, and saves by platform and content type. Heat maps show optimal posting times based on historical engagement patterns."
      },
      {
        image: "/images/analytics-sentiment.jpg",
        title: "Sentiment Analysis",
        description: "The AI-powered sentiment view analyzes audience comments and mentions. Word clouds highlight frequently mentioned topics, while emotion charts track positive, negative, and neutral sentiment over time."
      }
    ],
    features: [
      "Unified dashboard for all major social platforms",
      "AI-powered sentiment analysis with multilingual support",
      "Competitor benchmarking and comparison tools",
      "Content performance analysis with recommendations",
      "Automated reporting with customizable templates"
    ]
  }
]
