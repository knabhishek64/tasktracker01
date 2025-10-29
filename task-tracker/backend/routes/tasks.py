from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Task
from pydantic import BaseModel

router = APIRouter(prefix="/tasks", tags=["Tasks"])

class TaskSchema(BaseModel):
    title: str
    description: str | None = None
    completed: bool = False

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def create_task(task: TaskSchema, db: Session = Depends(get_db)):
    new_task = Task(title=task.title, description=task.description, completed=task.completed)
    db.add(new_task)
    db.commit()
    db.refresh(new_task)
    return new_task

@router.get("/")
def get_tasks(db: Session = Depends(get_db)):
    return db.query(Task).all()

@router.put("/{task_id}")
def update_task(task_id: int, task: TaskSchema, db: Session = Depends(get_db)):
    db_task = db.query(Task).filter(Task.id == task_id).first()
    if not db_task:
        raise HTTPException(status_code=404, detail="Task not found")
    db_task.title = task.title
    db_task.description = task.description
    db_task.completed = task.completed
    db.commit()
    return db_task

@router.delete("/{task_id}")
def delete_task(task_id: int, db: Session = Depends(get_db)):
    db_task = db.query(Task).filter(Task.id == task_id).first()
    if not db_task:
        raise HTTPException(status_code=404, detail="Task not found")
    db.delete(db_task)
    db.commit()
    return {"message": "Task deleted"}

@router.get("/insights")
def get_insights(db: Session = Depends(get_db)):
    total = db.query(Task).count()
    completed = db.query(Task).filter(Task.completed == True).count()
    pending = total - completed
    return {"total_tasks": total, "completed": completed, "pending": pending}
