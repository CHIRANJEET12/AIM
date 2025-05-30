#include <iostream>
#include <cmath>

int main() {
    int r = 10; // radius
    float aspect_ratio = 1.0; // compensate for terminal font width
    float thickness = 0.4;    // thickness of the circle line

    for (float y = r; y >= -r; y--) {
        for (float x = -r; x <= r; x++) {
            float dx = x * aspect_ratio;
            float distance = sqrt(dx * dx + y * y);
            if (fabs(distance - r) < thickness)
                std::cout << "*";
            else
                std::cout << "  ";
        }
        std::cout << "\n";
    }

    return 0;
}
