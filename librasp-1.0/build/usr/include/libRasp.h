

#include <errno.h>
#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <string.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <unistd.h>
#include <time.h>

#define INPUT "in"
#define OUTPUT "out"

void sucio();
void sucio2();
int pinMode(int pin, char *mode);
int digitalWrite(int pin, int value);
int digitalRead(int pin);
int blink(int pin, int freq, int time);
