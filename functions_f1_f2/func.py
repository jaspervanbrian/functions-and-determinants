import matplotlib.pyplot as plt
import numpy as np

# Function to calculate f1 = sin(x)/x
def f1(x):
    return np.sin(x)/x

# Function to calculate f2 = (sin(x)/x) * (sin(y)/y)
def f2(x, y):
    return np.sin(x)/x * np.sin(y)/y

# Display the behavior of f1 and f2 as x and y approach zero
# Generate values
x = np.linspace(-1, 1, 1000)

# Execute f1 and f2 function
y1 = f1(x)
y2 = f2(x, x)

# Prepare plotting
fig, ax = plt.subplots(figsize=(12, 6))

# Plot
ax.plot(x, y1, label='f1(x) = sin(x)/x')
ax.plot(x, y2, label='f2(x, y) = sin(x)/x * sin(y)/y')

ax.set_title('Behaviour of f1(x) and f2(x, y)')
ax.set_xlabel('x')
ax.set_ylabel('y')
ax.legend()

plt.tight_layout()
plt.show() # Show plot
