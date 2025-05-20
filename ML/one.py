import numpy as np
import pandas as pd

# Creating Arrays
arr = np.array([1, 2, 3, 4])
a2D = np.array([[1, 2], [3, 4]])
a3D = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])

# Predefined arrays
np.zeros((2, 3))        # All zeros
np.ones((2, 3))         # All ones
np.full((2, 2), 7)      # All 7s
np.eye(3)               # Identity matrix
np.arange(0, 10, 2)     # [0, 2, 4, 6, 8]
np.arange(0, 10, 3)     # [0, 3, 6, 9]
np.linspace(0, 1, 5)    # 5 values from 0 to 1
np.random.randint(0, 10, (2, 3))  # Random integers in the interval [0, 10)
np.random.rand(2, 3)    # Random values in the interval [0, 1]

#  Array Properties
arr.shape      # Shape of array
arr.ndim       # Number of dimensions
arr.size       # Total number of elements
arr.dtype      # Data type of elements

# Reshaping and Flattening
arr.reshape(2, 2)       # Reshape array
arr.flatten()           # Flatten array

# Indexing and Slicing
arr[1]                 # Index
arr[1:4]               # Slice
arr[:, 0]              # First column
arr[0, :]              # First row
arr[::2]               # Every 2nd element

# Array Operations
np.sum(arr)
np.mean(arr)
np.min(arr)
np.max(arr)
np.std(arr)
np.sqrt(arr)
np.exp(arr)
np.log(arr)

# Broadcastinga = np.array([1, 2, 3])
# different shapes
a = np.array([1, 2, 3])
b = np.array([[1], [2]])
result = a + b

# Copying and Views
a = np.array([1, 2, 3])
b = a.copy()      # Independent copy
c = a.view()      # View (shared data)





x = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
x[1:7:2]
array([1, 3, 5])

