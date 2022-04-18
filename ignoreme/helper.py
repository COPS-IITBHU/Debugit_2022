# Classic Board

# arr = []
# for i in range(20):
#     s = []
#     for j in range(20):
#         if i==0 or i==19 or j==0 or j==19:
#             s.append(0)
#         else:
#             s.append(1)
#     arr.append(s)
    
# print(arr)

# Circular grid

# arr = []
# for i in range(20):
#     s = []
#     for j in range(20):
#         if i==0 or i==19 or j==0 or j==19:
#             s.append(0)
#         else:
#             pass
#     arr.append(s)

# print(arr)

# def getVal(val):
#     if val<=4*20-4:
#         return 0
#     else:
#         return 1

# def spiralFill(m, n, a):

# 	val = 1

# 	k, l = 0, 0
# 	while (k < m and l < n):

# 		for i in range(l, n):
# 			a[k][i] = getVal(val)
# 			val += 1
# 		k += 1

# 		for i in range(k, m):
# 			a[i][n - 1] = getVal(val)
# 			val += 1
# 		n -= 1

# 		if (k < m):
# 			for i in range(n - 1, l - 1, -1):
# 				a[m - 1][i] = getVal(val)
# 				val += 1
# 			m -= 1

# 		if (l < n):
# 			for i in range(m - 1, k - 1, -1):
# 				a[i][l] = getVal(val)
# 				val += 1
# 			l += 1


# a = [[0 for j in range(20)] for i in range(20)]
# spiralFill(20, 20, a)
# print(a)