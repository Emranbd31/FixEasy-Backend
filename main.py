
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import admin


app = FastAPI()

# CORS settings
app.add_middleware(
	CORSMiddleware,
	allow_origins=[
		"https://fixeasy.irish",
		"https://www.fixeasy.irish"
	],
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"]
)


app.include_router(admin.router, prefix="/admin")


# Root route for Render live check
@app.get("/")
def read_root():
	return {"message": "Welcome to FixEasy Ireland API! Backend is live 🚀"}

@app.get("/status")
def status():
	return {"status": "ok"}
