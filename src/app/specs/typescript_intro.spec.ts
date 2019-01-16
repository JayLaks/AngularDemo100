
describe('some typescript features', () => {
    describe('declaring typed variables', () => {
        it('implicit variable declaration', () => {
            // let someString = 'Tacos'; //implicit declaration
            let someString: string | number = 'Tacos'; //it will not let it be an array
            someString = 3.4;
            expect(someString).toBe(3.4);

        });
    });

    it('typing anonymous objects', () => {
        interface Movie {
            title: string;
            yearReleased: number;
        }

        const theForceAwakens: Movie = {
            title: 'The Force Awakens',
            yearReleased: 2015
        };

        const theLastJedi: Movie = {
            title: 'The Last Jedi',
            yearReleased: 2017
        };
    });
    it('structural typing', () => {
        interface VoiceMail {
            from: string;
            message: string;
            answered?: boolean;
        }
        function logVoiceMail(call: VoiceMail) {
            // do something...
            console.log(`Got a call from ${call.from}  - the message is: ${call.message}`);
        }

        const vm1 = {
            date: 'Today',
            from: 'Joe',
            answered: false,
            message: 'Get your butt to the meeting, you are late!'
        };

        const vm2: VoiceMail = {
            from: 'Joe',
            message: 'I\'m In!',
            answered: false
        };
        logVoiceMail(vm1);

    });
});
describe('parameters to functions', () => {
    it('you cannot overload functions ', () => {

        function formatName(first: string, last: string, mi?: string) {
            let fullName = `${last}, ${first}`;
            if (mi) {
                fullName += ` ${mi}.`;
            }
            return fullName;
        }
        expect(formatName('Han', 'Solo')).toBe('Solo, Han');
        expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');

    });
    it('Math operation', () => {


        type MathOperation = (a: number, b: number) => number;
        let mathOp: MathOperation;

        mathOp = function (a, b) {
            return a + b;
        };

        mathOp = (x, y) => x * y;

        interface Movie {
            title: string;
            director: string;
            yearReleased: number;
            getAge: () => number;
        }

        const thor = {
            title: 'Thor: Ragnorak',
            director: 'Waititi',
            yearReleased: 2017,
            getAge: function () {
                return 22;
            }
        };

    });
});
describe('classes', () => {
    it('creaing them', () => {
        class Movie {
            constructor(public title: string, public director: string, public yearReleased: number) { }

            getInfo() {
                return `A movie ${this.title} by ${this.director} in ${this.yearReleased}`;
            }
        }
        const sw = new Movie('A New Hopoe', 'Lukas', 1977);
        expect(sw.yearReleased).toBe(1977);
        console.log(sw.getInfo());
    });
});
describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const isAnEvenNumber = (n: number) => n % 2 === 0;
    it('have a forEach', () => {
        numbers.forEach(n => console.log(n));
    });
    describe('producing a new array', () => {
        it('has filter', () => {
            const evens = numbers.filter(isAnEvenNumber); //filter produces new array
            //const evens = numbers.filter(n => n%2 == 0); //use this instead of above is same anonymous example
            expect(evens).toEqual([2, 4, 6, 8]);
        });
        it('transforming an array', () => {
            const double = (n: number) => n + n;
            const doubled = numbers.map(n => n * 2);
            expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);

            const doubledEvens = numbers
                .filter(isAnEvenNumber)
                .map(double);

            expect(doubledEvens).toEqual([4, 8, 12, 16]);


        });
    });
});