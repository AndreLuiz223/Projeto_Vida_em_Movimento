from motor.motor_asyncio import AsyncIOMotorClient
import os

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'ong_vida_movimento')]

# Collections
volunteers_collection = db.volunteers
contacts_collection = db.contacts
projects_collection = db.projects

async def init_projects():
    """Initialize projects collection with default data if empty"""
    count = await projects_collection.count_documents({})
    if count == 0:
        default_projects = [
            {
                'id': '1',
                'title': 'Futebol Cidadão',
                'description': 'Aulas de futebol para crianças e adolescentes, promovendo trabalho em equipe, disciplina e inclusão social.',
                'category': 'Esporte',
                'image': 'https://images.unsplash.com/photo-1761039808115-77b271985e47',
                'participants': 120,
                'status': 'Ativo'
            },
            {
                'id': '2',
                'title': 'Arte & Cultura',
                'description': 'Oficinas de arte, música e dança para estimular a criatividade e expressão cultural da comunidade.',
                'category': 'Arte',
                'image': 'https://images.unsplash.com/photo-1761039807430-a42c4e260acd',
                'participants': 85,
                'status': 'Ativo'
            },
            {
                'id': '3',
                'title': 'Educação Comunitária',
                'description': 'Reforço escolar e alfabetização para jovens e adultos, promovendo acesso à educação de qualidade.',
                'category': 'Educação',
                'image': 'https://images.unsplash.com/photo-1595406164160-642177342a32',
                'participants': 95,
                'status': 'Ativo'
            },
            {
                'id': '4',
                'title': 'Atividades em Grupo',
                'description': 'Dinâmicas e atividades coletivas para fortalecer vínculos comunitários e desenvolver habilidades sociais.',
                'category': 'Social',
                'image': 'https://images.unsplash.com/photo-1761039808159-f02b58f07032',
                'participants': 60,
                'status': 'Ativo'
            }
        ]
        await projects_collection.insert_many(default_projects)
