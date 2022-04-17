s = ""
for i in range(18):
    for j in range(18):
        s += f"[{i},{j}], "
    
print(s[:-2])