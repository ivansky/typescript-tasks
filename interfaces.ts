interface Drivable {   

    // Запускает зажигание автомобиля, чтобы он мог двигаться.
    start(): void;
    
    // Пытается проехать расстояние. Возвращает true или false в зависимости от того, была ли поездка успешна.
    drive(distance: number): boolean;
    
    // Получить расстояние от начала.
    getPosition(): number;
}

class Car implements Drivable {
    private _isRunning: boolean;
    private _distanceFromStart: number;

    constructor() {
        this._isRunning = false;
        this._distanceFromStart = 0;
    }

    /**
    *   Запускает зажигание автомобиля, чтобы он мог двигаться.
    */
    public start() {
        this._isRunning = true;
    }

    /**
    *  Пытается проехать расстояние. Возвращает true или false в зависимости от того, была ли поездка успешна.
    *
    *   @param {number} distance Расстояние, которое необходимо проехать
    *
    *   @returns {boolean} Была ли поездка успешна
    */
    public drive(distance: number): boolean {
        if (this._isRunning) {
            this._distanceFromStart += distance;
            return true;
        }
        return false;
    }

    /**
    *   Получить расстояние от начала.
    *
    *   @returns {number} Расстояние от начала.
    */
    public getPosition(): number {
        return this._distanceFromStart;
    }
}
