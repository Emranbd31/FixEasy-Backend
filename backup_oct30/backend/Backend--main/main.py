from fastapi import FastAPI
from routes import admin

app = FastAPI()

app.include_router(admin.router, prefix="/admin")

@app.get("/status")
def status():
	return {"message": "Backend active ✅"}
