class AlarmClock {
    constructor() {
        this.alarmCollection = [],
        this.intervalId
    }

    addClock(time, callback) {
        if (!!time === false || !!callback === false) {
            throw new Error('Отсутствуют обязательные аргументы'); 
        }

        if (this.alarmCollection.find(item => item.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        return this.alarmCollection.push({callback, time, canCall: true });
    }
    
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }
    
    getCurrentFormattedTime() {
        let date = new Date();
        let hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
        let minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        return hour + ':' + minute;
    }

    start() {
        if (!!this.intervalId) {
            return null;
        }
        
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((item) => {
                if (item.time === this.getCurrentFormattedTime && item.canCall) {
                    item.canCall === false;
                    item.callback();
                }
            })
        }, 1000);
        
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection = this.alarmCollection.forEach((item) => item.canCall === true)
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];

    }
};

