#define LED_PIN 10

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  delay(300);

  digitalWrite(LED_PIN, LOW);
  delay(200);

  digitalWrite(LED_PIN, HIGH);
  delay(700);

  digitalWrite(LED_PIN, LOW);
  delay(200);
}
