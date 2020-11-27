#include <iostream>


int main() {
    int num = 0;
    int *const ptr = &num;

    std::cout << *(ptr + 10086) << std::endl;
    return 0;
}
