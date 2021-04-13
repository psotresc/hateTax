from Google import Create_Service

CLIENT_SECRET_FILE = 'client-secret.json'
API_NAME = 'youtube'
API_VERSION = 'v3'
SCOPES = ['https://www.googleapis.com/auth/youtube']

service = Create_Service(CLIENT_SECRET_FILE, API_NAME, API_VERSION, SCOPES)

part_string = 'contentDetails,statistics,snippet'
video_ids = 'BpobjOFkt8E'

response = service.videos().list(
	part=part_string,
	id=video_ids
).execute()

print(response)