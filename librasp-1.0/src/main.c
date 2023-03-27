#include "libRasp.h"

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void confpins(){

    putenv("SYS_PATH=/sys/class/gpio");

    pinMode(2,OUTPUT);
    printf("Pin 2: Definido como salida\n");
    pinMode(3,OUTPUT);
    printf("Pin 3: Definido como salida\n");
    pinMode(4,INPUT);
    printf("Pin 4: Definido como entrada\n");


}

void iniciar(){

    digitalWrite(2, 1);
    printf("Pin 2: ON\n");
    sleep(2);
    printf("Valor Pin 2: %d\n", digitalRead(2));
    
    digitalWrite(2, 0);
    printf("Pin 2: OFF\n");
    printf("Valor Pin 2: %d\n", digitalRead(2));
    sleep(2);

    printf("Pin 3 Blink inicio\n");
    blink(3,1000,5);
    printf("Pin 3 Blink fin\n");


    printf("Valor Pin 4: %d\n", digitalRead(4));

}

int main(int argc, char const *argv[])
{

    confpins();
    iniciar();



}


