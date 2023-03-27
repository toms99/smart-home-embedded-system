#include "libRasp.h"
#include <stdio.h>



void sucio(){
	
	pinMode(2, "out");
	digitalWrite(2, 1);

}


void sucio2(){
	
	pinMode(2, "out");
	digitalWrite(2, 0);

}



int pinMode(int pin, char *mode){

    putenv("SYS_PATH=/sys/class/gpio");

    int gpio_fd;
    char buffer[256];
    printf("Pin: %d y mode: %s\n", pin,mode);

    char *sysPath = getenv("SYS_PATH");

    char *path = malloc(sizeof(char) * 512);

    char *filePath = malloc(sizeof(char) * 512);
    

    /* Exporta el pin */
    sprintf(path, "%s/export", sysPath);
    gpio_fd = open(path, O_WRONLY);
    sprintf(buffer, "%d", pin);
    write(gpio_fd, buffer, strlen(buffer));
    close(gpio_fd);

    /* Establece el pin  */
    
   sprintf(filePath, "%s/gpio%d/direction", sysPath, pin);
   gpio_fd = open(filePath, O_WRONLY);
    write(gpio_fd, mode, strlen(mode));
    close(gpio_fd);

    return 0;

}

int digitalWrite(int pin, int value){

    int gpio_fd;
    char buffer[256];
    char *sysPath = getenv("SYS_PATH");
    char *path = malloc(sizeof(char) * 512);
    char *pinValue = malloc(sizeof(char) * 5);
    char *filePath = malloc(sizeof(char) * 512);
    
    printf("Pin: %d y valor: %d\n", pin,value);

    sprintf(filePath, "%s/gpio%d/value", sysPath, pin);
    sprintf(pinValue, "%d", value);

    /* Abre el archivo que contiene el valor del pin */
    gpio_fd = open(filePath, O_WRONLY);

    /* Escribe el valor 0 o 1 en el archivo */
    if (value == 0)
    {
        write(gpio_fd, "0", 1);
    }
    else if (value == 1)
    {
        write(gpio_fd, "1", 1);
    }

    close(gpio_fd);

    return 0;

}

int digitalRead(int pin){

    int gpio_fd;
    char buffer[256];
    char value_str[1];

    char *sysPath = getenv("SYS_PATH");
    char *filePath = malloc(sizeof(char) * 512);

    printf("Pin: %d\n", pin);   

    sprintf(filePath, "%s/gpio%d/value", sysPath, pin);

    /* Abre el archivo que contiene el valor del pin */
    gpio_fd = open(filePath, O_RDONLY);

    /* Lee el valor del archivo */
    read(gpio_fd, value_str, 1);

    close(gpio_fd);


    /* Convierte el valor en un entero */
    return atoi(value_str);


}

int blink(int pin, int freq, int duration){

    double freqTime = 1000000.0 / freq;
    time_t startTime = time(0);

    while ((time(0) - startTime) < duration)
    {
        digitalWrite(pin, 1);
        usleep(freqTime);
        digitalWrite(pin, 0);
        usleep(freqTime);
    }

    return 0;


}


