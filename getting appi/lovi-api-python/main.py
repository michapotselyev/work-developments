import socket

sock = socket.socket()
sock.bind(('', 20163)) #134.249.68.62
sock.listen(1)
conn, addr = sock.accept()

print('connected:', addr)

while True:
    data = conn.recv(1024)
    if not data:
        break
    conn.send(data.upper())

conn.close()
