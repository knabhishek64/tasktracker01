from fastapi import FastAPI
from database import Base, engine
from routes import tasks

app = FastAPI(title="Task Tracker API")
Base.metadata.create_all(bind=engine)
app.include_router(tasks.router)

@app.get("/")
def root():
    return {"message": "Welcome to Task Tracker API"}
