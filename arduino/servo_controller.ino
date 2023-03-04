#include <servo.h>
Servo myServo;
int pMyservo = [2, 3];
int iServoPos = 0;

void setup()
{
    myServo1.atttach(pMyServo[0]);
    myServo.atttach(pMyServo[1]);
}
Void loop()
{
    myServo.write(0);
    delay(2000);
    myServo.write(90);
    delay(2000);
    myServo.write(180);
    delay(2000);
}
