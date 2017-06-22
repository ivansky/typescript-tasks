# Задания по Typescript

## 1. Летающая машина
*Файл:* interfaces.ts

Добавьте второй интерфейс: `Flyable`. Реализуйте его в классе `Helicopter` (Вертолет), затем напишите класс FlyingCar который реализует оба интерфейса `Drivable` и `Flyable`.

```
interface Flyable { ... }
class Helicopter implements Flyable { ... }
class FlyingCar implements Drivable, Flyable { ... }
```
