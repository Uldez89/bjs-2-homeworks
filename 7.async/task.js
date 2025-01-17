class AlarmClock {
    constructor() {
        this.alarmCollection = [],
            this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
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
        let h = date.getHours();
        let m = date.getMinutes();
        return h + ':' + (m < 10 ? '0' + m : m);
    }

    start() {
        if (!!this.intervalId) {
            return null;
        }
        
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((item) => {
                if (item.time === this.getCurrentFormattedTime() && item.canCall) {
                    item.canCall = false;
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
        this.alarmCollection = this.alarmCollection.map((item) => ({...item, canCall: true}))
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
};


