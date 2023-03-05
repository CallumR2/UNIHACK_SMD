#include <Servo.h>
Servo myServo0, myServo1;
int pMyservo[] = {2, 3};
int iServoPos = 0;

void setup()
{
    myServo0.attach(pMyservo[0]);
    myServo1.attach(pMyservo[1]);
    //Initialisation
    myServo0.write(90);
    myServo1.write(90);
    Serial.begin(9600);
}

void loop()
{
    char servo_input[] = {'0', '0'};
    //Reads one byte at a time from Serial
    //Serial will give two angles, already pre-proccessed via website source
    //Received angles just need to be written to Servos!
    if (Serial.available() > 0) {
        for(int i = 0; i < 2; i++){
            servo_input[i] = Serial.read();
        }
    }
    myServo0.write(int(servo_input[0]));
    myServo1.write(int(servo_input[1]));
    delay(1000); //For Testing Purposes
    
}

