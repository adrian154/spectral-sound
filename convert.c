#include <stdio.h>
#include <stdint.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {

    FILE *file = fopen(argv[1], "rb");

    // get size
    fseek(file, SEEK_SET, SEEK_END);
    long size = ftell(file);    
    rewind(file);

    uint8_t *buf = malloc(size);
    fread(buf, 1, size, file);

    float *bdata = (float *)buf;
    printf("let data = [");
    for(int i = 0; i < size / sizeof(float); i++) {
        printf("%f,", bdata[i]);
    }
    printf("];");

    return 0;

}