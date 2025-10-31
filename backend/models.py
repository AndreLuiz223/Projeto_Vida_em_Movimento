from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime
import uuid

# Volunteer Model
class VolunteerCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    area: str
    message: Optional[str] = ""

class Volunteer(VolunteerCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    createdAt: datetime = Field(default_factory=datetime.utcnow)

# Contact Model
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class Contact(ContactCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    createdAt: datetime = Field(default_factory=datetime.utcnow)

# Project Model
class Project(BaseModel):
    id: str
    title: str
    description: str
    category: str
    image: str
    participants: int
    status: str

# Stats Model
class Stats(BaseModel):
    volunteers: int
    beneficiaries: int
    projects: int
    years: int
