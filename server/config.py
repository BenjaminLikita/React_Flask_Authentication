import os
from dotenv import load_dotenv

load_dotenv()
 

class ApplicationConfigurations:
    SECRET_KEY = os.environ["SECRET_KEY"]

    SESSION_PERMANENT = False
    SESSION_TYPE = "filesystem"
    
    SQLALCHEMY_DATABASE_URI = "sqlite:///./database.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True