// i used Scotts video for this code: https://www.youtube.com/watch?v=gU_Q5jip5Vg&ab_channel=ScottFitzgerald
const int LEDPin = 2;
const int switchPin = 3;
int switchVal;

void setup() {
  pinMode(LEDPin, OUTPUT);
  pinMode(switchPin, INPUT);
  Serial.begin(9600);
}

void loop() {
  switchVal = digitalRead(switchPin);
  if (switchVal == HIGH) {
    digitalWrite(LEDPin, LOW); // it turns off light when button is pressed
    Serial.println('1'); // 1 is printed to the serial when button is pressed
  } else {
    digitalWrite(LEDPin, HIGH);
  }
  delay(100); 
}

