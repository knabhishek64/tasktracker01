# Task Tracker with Smart Insights

A modern, full-stack task management application featuring real-time insights and analytics. Built with React, TypeScript, and Supabase for seamless task organization.

## Features

- **Task Management**: Create, read, update, and delete tasks with ease
- **Smart Insights**: Real-time analytics showing:
  - Total tasks count
  - Completed tasks
  - Pending tasks
  - Completion rate percentage
- **Modern UI**: Clean, responsive design with smooth animations
- **Real-time Updates**: Powered by Supabase for instant data synchronization
- **Type-Safe**: Built with TypeScript for better code quality

## Tech Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool
- **Lucide React** - Beautiful icons

### Backend
- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - Robust database
- **Row Level Security** - Secure data access

### Alternative Backend (Optional)
- **FastAPI** - Modern Python web framework
- **Python 3.10+** - Backend language
- **Pydantic** - Data validation

## Project Structure

```
task-tracker/
├── backend/                 # Optional FastAPI backend
│   ├── main.py             # FastAPI application entry
│   ├── models.py           # Pydantic models
│   ├── database.py         # Supabase client setup
│   ├── routes/
│   │   └── tasks.py        # API endpoints
│   └── requirements.txt    # Python dependencies
│
├── src/                    # React frontend
│   ├── components/
│   │   ├── AddTask.tsx     # Task creation form
│   │   ├── TaskList.tsx    # Task display component
│   │   └── Insights.tsx    # Analytics dashboard
│   ├── lib/
│   │   └── supabase.ts     # Supabase client
│   ├── types/
│   │   └── task.ts         # TypeScript types
│   ├── App.tsx             # Main app component
│   └── main.tsx            # App entry point
│
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account (free tier available)
- Python 3.10+ (optional, for FastAPI backend)

### Frontend Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**

   The `.env` file should already contain your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

### Backend Setup (Optional - FastAPI)

The application works directly with Supabase, but you can also use the FastAPI backend:

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the FastAPI server:**
   ```bash
   uvicorn main:app --reload
   ```

5. **Access API documentation:**
   - Swagger UI: `http://localhost:8000/docs`
   - ReDoc: `http://localhost:8000/redoc`

## Database Schema

The application uses a single `tasks` table with the following structure:

| Column      | Type      | Description                    |
|-------------|-----------|--------------------------------|
| id          | bigint    | Primary key (auto-increment)   |
| title       | text      | Task title (required)          |
| description | text      | Task description (optional)    |
| completed   | boolean   | Completion status (default: false) |
| created_at  | timestamp | Creation timestamp             |

### Row Level Security (RLS)

The tasks table has RLS enabled with public access policies for:
- SELECT (read)
- INSERT (create)
- UPDATE (modify)
- DELETE (remove)

## API Endpoints (FastAPI)

### Tasks

- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/{id}` - Get specific task
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/{id}` - Update task
- `DELETE /api/tasks/{id}` - Delete task

### Insights

- `GET /api/insights` - Get task statistics

## Usage

### Adding a Task

1. Fill in the task title (required)
2. Optionally add a description
3. Click "Add Task"

### Completing a Task

- Click the circle icon next to a task to mark it as complete
- Click the checkmark icon to mark it as pending

### Deleting a Task

- Hover over a task
- Click the trash icon that appears
- Confirm deletion

### Viewing Insights

The insights panel automatically updates and shows:
- Total number of tasks
- Number of completed tasks
- Number of pending tasks
- Overall completion rate percentage

## Building for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Check TypeScript types

## Contributing

This is a demo project built for educational purposes. Feel free to fork and modify as needed.

## License

MIT License - feel free to use this project for learning and development.
