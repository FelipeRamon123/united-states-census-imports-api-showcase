from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os, webbrowser, threading, time
ROOT=Path(__file__).resolve().parent
os.chdir(ROOT)
class Handler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args): pass
server=ThreadingHTTPServer(("127.0.0.1",0),Handler)
port=server.server_address[1]
url=f"http://127.0.0.1:{port}/"
print(f"U.S. Imports Explorer: {url}")
print("Keep this window open. Press Ctrl+C to stop.")
def open_browser():
    time.sleep(.8); webbrowser.open(url)
threading.Thread(target=open_browser,daemon=True).start()
try: server.serve_forever()
except KeyboardInterrupt: pass
finally: server.server_close()
