# Clsssic Board

arr = []
for i in range(20):
    s = []
    for j in range(20):
        if i==0 or i==19 or j==0 or j==19:
            s.append(0)
        else:
            s.append(1)
    arr.append(s)
    
print(arr)