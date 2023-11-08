// Напишите функцию, которая принимает массив и переносит все 0 в конец,
// не изменяя порядок остальных элементов массива.

// Например:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) --> [false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let arrZeroes = arr.filter(item => item === 0);
    return arr.filter(item => item !== 0).concat(arrZeroes);
}

console.log(moveZeros([false, 0, 0, 1, 1, 2, 1, 3, "a", 0, 0]));

// Найдите недостающую букву.
// Напишите функцию,  которая принимает в качестве параметра массив букв, 
// расположенных по алфавиту и возвращает массив с недостающей буквой. 
// Длина входного массива не меньше 2 и он содержит буквы только одного регистра.

// Например:
// findMissingLetter(['a','b','c','d','f']) --> 'e'

function findMissingLetter(arr) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let start = arr[0];
    let end = arr[arr.length - 1];
    let missing = '';
    for (let i = alphabet.indexOf(start.toLowerCase()); i < alphabet.indexOf(end); i++) {
        if (!arr.includes(alphabet[i])) {
            missing = alphabet[i];
            break;
        }
    }
    return missing;
}

console.log(findMissingLetter(["k", "l", "m", "n", "p", "q", "r", "s"]));


// Вы, наверное, знаете систему «лайков» по Facebook и другим страницам.
// Люди могут "лайкать" сообщения в блогах,изображения или другие предметы.
// Мы хотим создать текст, который должен отображаться рядом с таким элементом.
// Реализуйте функцию likes :: [String] -> String, которая
// должна принимать входной массив, содержащий имена людей,которым нравится элемент.
// Он должен возвращать отображаемый текст, как показано в примерах:

// Например:
// likes([]) --> 'no one likes this'
// likes(['Peter']) --> 'Peter likes this'
// likes(['Jacob', 'Alex']) --> 'Jacob and Alex like this'
// likes(['Max', 'John', 'Mark']) --> 'Max, John and Mark like this')
// likes(['Alex', 'Jacob', 'Mark', 'Max']) --> 'Alex, Jacob and 2 others like this'

function likes(arr) {
    return arr.length === 0 ? `no one likes this` : arr.length === 1 ? `${arr[0]} likes this` : arr.length === 2 ? `${arr[0]} and ${arr[1]} like this` : arr.length === 3 ? `${arr[0]}, ${arr[1]} and ${arr[2]} like this` : `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
}

console.log(likes([]));

// Что такое анаграмма?

// Два слова являются анаграммами между собой,если
// они оба содержат одинаковые буквы. 

// Например: 'abba' & 'baab' == true

// Напишите функцию, которая находит все анаграммы слова из списка. 
// В качестве параметра даны слово и массив слов. 
// Функция должна возвращать массив всех анаграмм или пустой массив,
// если анаграмм не обнаружено.

// Например:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) --> ['aabb', 'bbaa']

function anagrams(word, arr) {
    let result = [];
    arr.forEach((item, index) => {
        if (item.split('').sort().join('') === word.split('').sort().join('')) {
            result.push(arr[arr.indexOf(item)]);
        }
    })

    return result;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

// Представим автобус, забирающий и высаживающий людей на каждой остановке. 
// Дан массив массивов, первый элемент которых равен числу пассажиров,
// вошедших в автобус на остановке, а второй - числу пассажиров,
// вышедших на остановке.

// Ваша Задача написать функцию, которая возвращает число людей,
// оставшихся в автобусе после последней остановки (массива).
// Хоть это и последняя остановка,
// в автобусе все еще находятся люди (они, наверное, уснули :D ).

// Помните, что число оставшихся людей в автобусе всегда >= 0
// Значение второго числа первого элемента массива = 0, 
// потому что автобус пустой на первой остановке.

// Например:
// busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]) --> 17

function busStops(arr) {
    if (arr[0][1] !== 0) {
        return new Error('Значение второго числа первого элемента массива должно быть равно 0');
    }
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i][0] - arr[i][1];
    }
    return result > 0 ? result : 0;
}

console.log(busStops([[3, 0], [9, 1], [4, 10], [12, 2], [7, 10]]));

// Даны две строки, которые содержат только буквы от a - z.
// Ваша задача написать функцию, которая возвращает
// новую отсортированную (по порядку) строку,
// которая содержит буквы двух строк, повторяющихся только один раз.

// Например:
// longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") --> "abcdefklmopqxy"

function longest(str1, str2) {
    return []
}

function longest(str1, str2) {
    let obj1 = {};
    let obj2 = {};

    let result = "";

    for (let char of str1) {
        obj1[char] = (obj1[char] || 0) + 1;
    }

    for (let char of str2) {
        obj2[char] = (obj2[char] || 0) + 1;
    }

    Object.entries(obj1).forEach(([key, value]) => {
        if (value === 1) {
            result += key;
        }
    });

    Object.entries(obj2).forEach(([key, value]) => {
        if (value === 1) {
            result += key;
        }
    });
    return result.split('').sort().join("");

}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

// Ваша задача написать функцию, которая принимает 
// в качестве параметра целое число и возводит в квадрат каждую цифру числа. 
// Результат также необходимо вернуть в виде целого числа.

// Например:
// squareDigits(9119) --> 811181

function squareDigits(digit) {
    return +[...digit.toString()].map(item => +item * +item).join('');
}

console.log(squareDigits(9119));

// Для того, чтобы обеспечить безопасность данных при оплате онлайн,
// нам необходимо замаскировать все цифры банковского счета, кроме последних четырех. 

// Ваша задача написать функцию, которая принимает в качестве 
// параметра строку, состоящую из цифр, заменяет все элементы на  '#', 
// кроме последних четырех и возвращает ее.

// Например:
// maskify("4556364607935616") --> "############5616"

function maskify(bill) {
    for (let i = bill[bill])
}

// Дан массив слов, необходимо определить, 
// составлены ли все слова из одних и тех же символов.

// Например:
// ["кот", "ток", "кто"] --> true
// ["кот", "тк", "кТо"] --> false

function theSame(arr) {
    let newArr = arr.map(item => item.split("").sort().join('')).every((item, index, array) => item === array[0]);
    return newArr;
}

console.log(theSame(["кот", "тк", "кТо"]));

// Напишите функцию, которая возвращает сумму таким образом:

// Например:
// f(1)(2)(3) --> 6


// Напишите функцию, которая находит наиболее часто используемый элемент массива.

// Например:
// const array=[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7]; --> "z"

function mostPopular(arr) {
    let obj = {};

    arr.forEach(item => {
        obj[item] = (obj[item] || 0) + 1;
    })

    return Object.entries(obj).reduce((acc, curr) => acc[1] > curr[1] ? acc[0] : curr[0]);
}

console.log(mostPopular([7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7]));

// Напишите функцию `expand(arr)`, которая разворачивает 
// вложенный массив любой глубины.

// Например:
// const arr1 = [1, [2,[3,[4]]]]; --> [1,2,3,4]; 
// const arr2 = [1, [2], [3, [[4]]],[5,6]]; --> [1,2,3,4,5,6];

// function expand(arr) {
//     return arr.reduce(function (a, c) {
//         let v = c instanceof Array ? expand(c) : c;
//         return a.concat(v)
//     }, [])
// }

// function expand(arr) {
//     return arr.reduce((acc, item) => {
//         let el = item instanceof Array ? expand(item) : item;
//         return acc.concat(el);
//     }, [])
// }

// console.log(expand([1, [2, [3, [4]]]]));

// Напишите функцию `removeDuplicates(arr)`, которая возвращает массив,
// в котором удалены повторяющиеся элементы из массива arr.

// Например:
// let arr = ["php", "php", "css", "css",
//   "script", "script", "html", "html", "java"
// ];

// removeDuplicates(arr); --> ["php","css","script","html","java"]

function removeDuplicates(arr) {
    return Array.from((new Set(arr)));
}

console.log(removeDuplicates(["php", "php", "css", "css", "script", "script", "html", "html", "java"]));

// Напишите функцию с двумя параметрами, которая создаёт массив элементов, 
// представляющих собой сумму соответствующих элементов заданных массивов.

// Например:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6];

// func(array1,array2) // [5,7,9,4,5]

function sumArr(arr1, arr2) {
    return arr1.map((item, index, array) => {
        return item = (arr1[index] ?? 0) + (arr2[index] ?? 0);
    })
}

console.log(sumArr([1, 2, 3, 4, 5], [4, 5, 6]))

// Напишите функцию colonOdd(num), которая принимает число num в 
// качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. 
// Например, если вводится число 55639217, то на выходе должно быть 5:563:921:7

// function colonOdd(num) {
//     let resultString = "";
//     for (let number of num.toString()) {
//         let result = "";
//         if (number % 2 !== 0 && number !== 0) {
//             resultString += `${number}:`;
//         } else {
//             result += "";
//             if (result % 2 !== 0 && number !== 0) {
//                 resultString += `${result}:`;
//                 result = "";
//             }
//         }
//     }
//     return resultString;
// }

// console.log(colonOdd(54639217));

// НЕ РЕШЕНА

// Напишите функцию `copyArr(arr)`, которая копирует массив, не изменяя оригинал.

// Например:
// const vegetables = ['Капуста', 'Репа', 'Редиска'];

function copyArr(arr) {
    return arr.map(item => item);
}

console.log(copyArr(['Капуста', 'Репа', 'Редиска']));

// Создайте метод объекта `String endsWith()`, который сравнивает 
// подстроку str1 с окончанием исходной строки str и определяет, 
// заканчивается ли строка символами подстроки.

// Например:
// const str = "Каждый охотник желает знать"; 
// const str1 = "скрипт";
// const str2 = "знать";

// String.prototype.endsWith = function(substring) {};

// str.endsWith(str1)) -->  false
// str.endsWith(str2)) -->  true

String.prototype.endsWith = function (substring) {
    return this.lastIndexOf(substring) === this.length - substring.length;
}

const str = "Каждый охотник желает знать";
const str1 = "скрипт";
const str2 = "знать";

console.log(str.endsWith(str2))



// Напишите функцию `comparison(str1, str2)`, которая сравнивает
// строки без учёта регистра символов.

// Например:
// comparison('string', 'StRiNg') -->  true
// comparison('string', 'Redev') -->  false

function comparison(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(comparison('string', 'StRiNg'));

// Напишите функцию `strip(str)`, которая удаляет все лишние пробелы из строки str.

// Например:
// const str = "    Pasha is a good      boy     ";
// strip(str) --> "Pasha is a good boy"

function strip(str) {
    return str.replace(/  +/g, "");
}

const strStr = "    Pasha is a good      boy     ";

console.log(strip(strStr));

// Напишите функцию `cutString(str, n)`, которая удаляет лишние 
// слова из строки str, оставив в ней n слов.

// Например:
// const str = "Сила тяжести приложена к центру масс тела";`
// cutString(str, 5) --> "Сила тяжести приложена к центру"

function cutString(str, n) {
    let arrStr = str.split(' ');
    let length = arrStr.length;
    for (let i = 0; i < (length - n); i++) {
        arrStr.pop();
    }
    return arrStr.join(' ');
}

const str4 = "Сила тяжести приложена к центру масс тела";

console.log(cutString(str4, 5));

// Напишите функцию `alphabetize(str)`, которая возвращает строку,
// отсортировав её символы в алфавитном порядке.

// Например:
// alphabetize("redev") --> "deerv"

function alphabetize(str) {
    return str.split("").sort().join('');
}

console.log(alphabetize('redev'));

// Напишите функцию `uniqueLetters(str)`, которая возвращает строку,
// оставив в ней только уникальные символы, т.е. встречающиеся в строке один раз.

// Например:
// uniqueLetters('anaconda'); --> 'ancod'
// uniqueLetters('redev'); --> 'redv'

function uniqueLetters(str) {
    return Array.from(new Set(str.split(''))).join('');
}

console.log(uniqueLetters("redev"));

// Напишите функцию `removeDuplicate(str)`, которая возвращает строку,
// очищенную от слов-дупликатов, т.е. 
// каждое слово должно повторяться не более одного раза.

// const str = "вишня, груша, слива, груша";

// Например:
// removeDuplicate(str) --> "вишня, груша, слива"

function removeDuplicate(str) {
    return Array.from(new Set(str.split(", "))).join(', ');
}

console.log(removeDuplicate("вишня, груша, слива, груша"))

// Напишите функцию `replaceAll(find, replace, str)`, 
// которая заменяет в строке str все вхождение подстроки find на подстроку replace.

// let str = 'abc def def lom abc abc def';

// Например:
// replaceAll('abc', 'x', str) --> 'x def def lom x x def'

function replaceAll(find, replace, str) {
    return str.replaceAll(find, replace);
}

console.log(replaceAll('abc', 'x', 'abc def def lom abc abc def'));

// Напишите функцию `startsWith()`, которая определяет, начинается ли строка символами другой строки, возвращая, соотвественно, true или false.

// let str = 'abc def ghi jkl mno pqr stu';

// Например:
// str.startsWith('abc') --> 

String.prototype.startsWith = function (str) {
    return this.indexOf(str) === 0;
}

console.log("Hello fdfdsfs".startsWith("Hello fq"));

// Напишите функцию capitalizeFirstLetter(str), 
// которая преобразовывает первый символ строки в верхний регистр.

function capitalizeFirstLetter(str) {
    return str.split('').map((item, index, array) => {
        if (index === 0) {
            return item.toUpperCase();
        }
        return item;
    }).join('');
}

console.log(capitalizeFirstLetter("adasdsdfds"));

// Напишите функцию `isUpperCase(str, character)`, которая определяет,
// в каком регистре написан символ строки в указанной позиции.
// Если он написан в верхнем регистре - возвращать true, если в нижнем – false.

// Например:
// isUpperCase('tasks JavaScript', 6); --> true

function isUpperCase(str, character) {
    return str.charAt(6) === str.charAt(6).toUpperCase() ? true : false;
}

console.log(isUpperCase('tasks javaScript', 6));

// Ваша задача - создать объект chainMaker, который создает цепочки.
// Готовая цепочка представляет собой строку
// и выглядит так: '(значение1) ~~ (значение2) ~~ (значение3)'.
// В ChainMaker есть несколько методов для создания цепочек и их изменения:

// getLength: возвращает текущую длину цепочки в виде числа;
// addLink (value) добавляет в цепочку ссылку, содержащую строковое представление значения;
// removeLink (position) удаляет звено цепи в указанной позиции;
// reverseChain: переворачивает цепочку;
// finishChain: завершает цепочку и возвращает ее.

// Методы addLink, reverseChain и removeLink объединяются в цепочку, а другие - нет.
// Если addLink вызывается без аргументов,
// он добавляет в цепочку пустую ссылку ('()').
// Если removeLink принимает недопустимую позицию
// (например, не число или дробное число, или соответствует несуществующей ссылке),
// он должен выдать ошибку.
// После вызова метода finishChain существующую цепочку необходимо удалить,
// как если бы возникла ошибка.

// Например:
// chainMaker.addLink(1).addLink(2).addLink(3).finishChain() 
// --> '(1) ~~ (2) ~~ (3)'
// chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain() 
// --> '(2) ~~ (3)'
// chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()
// --> '(2) ~~ (1) ~~ (3)'**Преобразовать массив**

class Chain {
    constructor() {
        this.arr = [];
    }

    addLink(n) {
        this.arr.push(n);
        return this;
    }
    removeLink(n) {
        this.arr = this.arr.filter((item) => item !== n);
        return this;
    }
    reverseChain() {
        this.arr.reverse();
        return this;
    }
    finishChain() {
        let newArr = this.arr.map(item => {
            return item = `(${item})`;
        })
        console.log(newArr.join(" ~~ "));
    }
}

let chainMaker = new Chain();

chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain();

// Напишите функцию, которая находит факториал 5.

function factorial(n) {
    if (n === 1) {
        return n;
    } else return n * factorial(n - 1);
}

console.log(factorial(5));

// Ваша задача  - посчитать спрятанных на заднем дворе кошек (представленных в двухмерном формате Array)
// Кошки хорошо прячутся, но их уши (''^^") видны. 
// Ваша задача написать функцию (countCats), которая будет считать кошек. Удачи!

// Количество найденых кошек должны быть `number`. 
// Если кошек не найдено, функция должна вернуть `0`

// Например:
// countCats([[0,1,"^^"],[9,"^^",2],["^^",8,7]]) --> 3

function countCats(arr) {
    let counter = 0;

    arr.forEach((item, index, array) => {
        if (item.includes("^^")) {
            counter++;
        }
    })

    return counter;
}

console.log(countCats([[0, 1, "^^"], [9, "^^", 2], ["^^", 8, 7]]));

// Напишите функцию, которая проверит, является ли строка палиндромом. 
// (Для того, чтобы решить эту задачу, надо загуглить)

function palindrom(str) {
    str = str.toLowerCase().replace(/ /g, "");
    return str === str.split("").reverse().join("");
}

console.log(palindrom("Лёша на полке клопа нашёл"));

// Ваша задача - реализовать функцию transform(arr), 
// которая принимает массив и возвращает преобразованный массив 
// на основе управляющих последовательностей, содержащихся в arr. 
// Управляющие последовательности - это определенные строковые элементы 
// указанного массива:

// **--discard-next** исключает следующий элемент массива из преобразованного массива.
// **--discard-prev** исключает предыдущий элемент массива из преобразованного массива.
// **--double-next** удваивает следующий элемент массива в преобразованном массиве.
// **--double-prev** удваивает предыдущий элемент массива в преобразованном массиве.

// Например:

// transform ([1, 3, '--double-next', 4]) --> [1, 3, 4, 4]
// transform ([1, 3, '--discard-prev', 4]) --> [1, 4]

function transform(arr) {
    let newArr = arr;
    let index;
    if (arr.includes('--double-next')) {
        index = newArr.indexOf("--double-next");
        newArr.splice(index, 1);
        newArr.splice(index, 0, newArr[index]);
        return newArr;
    } else if (arr.includes('--double-prev')) {
        index = newArr.indexOf("--double-prev");
        newArr.splice(index, 1);
        newArr.splice(index - 1, 0, newArr[index - 1]);
        return newArr;
    } else if (arr.includes('--discard-next')) {
        index = newArr.indexOf('--discard-next');
        newArr.splice(index, 1);
        newArr.splice(index, 1);
        return newArr;
    } else if (arr.includes('--discard-prev')) {
        index = newArr.indexOf('--discard-prev');
        newArr.splice(index, 1);
        newArr.splice(index - 1, 1);
        return newArr;
    }
}

console.log(transform([1, 3, '--discard-prev', 4]));

// Представьте, что Вы и Ваши друзья решили создать команду мечты.
// У этой команды должно быть крутое секретное имя,
// которое содержит зашифрованную информацию о ней.
// Например, это могут быть первые буквы имен его членов в верхнем регистре,
// отсортированные по алфавиту. 
// Ваша задача - написать функцию createDreamTeam (members), 
// которая возвращает имя созданной команды (строку) 
// на основе имен ее участников (Array). 
// Удачи!

// Имена участников должны быть строками. 
// Значения другого типа следует игнорировать. 
// В случае неправильного типа членов функция должна возвращать false.

// Например:
// createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) --> 'ADMM'
// createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) --> 'LOO'

function createDreamTeam(names) {
    return names.filter(item => typeof (item) === "string").map(item => item = item[0]).sort().join('').toUpperCase();
}

console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']));

// Напишите функцию, которая переделывает строку из camelCase в snake_case.

// Например:
// solution("redevCourses") -> "redev_courses"

function solution(str) {
    return str.split('').map(item => {
        if (item === item.toUpperCase()) {
            return `_${item.toLowerCase()}`;
        }
        return item;
    }).join('');
}

console.log(solution("redevCoursesLetsGo"));

// Напишите функцию, которая принимает строковый параметр и 
// меняет буквы в словах в обратном порядке. 
// Все пробелы в строке должны быть сохранены.

// Например:
// "This is an example!" -> "sihT si na !elpmaxe"

function reverse(str) {
    return str.split(' ').map(item => {
        return item.split('').reverse().join('')
    }).join(' ');
}

console.log(reverse("This is an example!"));

// Ваша задача - отсортировать заданную строку. 
// Каждое слово в строке будет содержать одно число. 
// Это число - позиция, которую слово должно занимать в результате.

// Примечание: числа могут быть от 1 до 9. 
// Таким образом, 1 будет первым словом (не 0).

// Если входная строка пуста, вернуть пустую строку. 
// Слова во входной строке будут содержать только последовательные числа.

// Например:
// "is2 Thi1s T4est 3a" -> "Thi1s is2 3a T4est"

function strInSomeOrder(str) {
    let newStr = [];
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes(i + 1)) {
            newStr.push(str[i]);
        }
    }
    return newStr.join(' ');
}

console.log(strInSomeOrder("Thi1s is2 3a T4est"));

// Напишите функцию, которая возвращает сумму двух наименьших положительных чисел,
// учитывая массив из минимум 4 положительных чисел.

// Например:
// [12,423,54,1235,3,15,2,52] --> 5

function sumOfTwoMinNumbers(arr) {
    if (arr.length >= 4) {
        let newArr = [];
        newArr.push(Math.min(...arr));
        arr.splice(arr.indexOf(newArr[0]), 1);
        newArr.push(Math.min(...arr));
        return newArr[0] + newArr[1];
    }
}

console.log(sumOfTwoMinNumbers([12, 423, 54, 1235, 3, 15, 2, 52]));

// Напишите функцию, которая принимает число n (n> 0) и 
// возвращает строку с обратной последовательностью от n до 1.


// Например: если n = 5 на выходе у Вас должно быть "5 4 3 2 1"

function reverseSequnce(n) {
    let sequence = [];

    for (let i = n; i > 0; i--) {
        sequence.push(i);
    }

    return sequence.join(' ');

}

console.log(reverseSequnce(5));

// В данной задаче Вам нужно удалить из одного массива все элементы второго массива.

// Например:
// arrayDiff([1,2],[1]) --> [2]
// arrayDiff([1,2,2,2,3,4],[2,3]) --> [1,4]

function arrayDiff(arr1, arr2) {
    let newArr = arr1;
    for (let el of arr2) {
        newArr = newArr.filter(item => item !== el);
    }

    return newArr;

}

console.log(arrayDiff([1, 2, 2, 2, 3, 4], [2, 3]));

// По заданному набору массива чисел вернуть аддитивную инверсию каждого элемента.
// Каждый позитив становится негативом, а негатив становится позитивом.

// Например:
//  invert([-1,-2,-4,-5]) --> [1,2,4,5]
//  invert([1,2,4,5]) --> [-1,-2,-4,-5]
//  invert([1,-2,4,-5]) --> [-1,2,-4,5]

// Вы можете предположить, что все значения являются целыми числами.
// Не изменяйте входной массив

function invert(arr) {
    return arr.map(item => {
        if (item === 0) {
            return item * (1);
        }
        return item * (-1);
    });
}

console.log(invert([1, 0, 4, -5]));

// Вы можете найти иголку в стоге сена?
// Напишите функцию findNeedle, которая принимает массив, полный мусора, 
// но содержащий одну иголку.

// После того, как ваша функция найдет иголку, 
// она должна вернуть сообщение (в виде строки), которое говорит:

// "Нашел иголку на позиции" плюс индекс, по которому была найдена иголку

// findNeedle(["bla","wekmvever","needle","bntyn"]) --> "Нашел иголку на позиции 2"

function findNeedle(arr) {
    let index = arr.indexOf('needle');
    return index !== -1 ? `Нашел иголку на позиции ${index}` : `Игрок не нашел иголку`;
}

console.log(findNeedle(["bla", "wekmvever", "needlee", "bntyn"]));

// Функция simple, в качестве параметра принимающая строку слов,
// возвращает длину самого короткого слова

// Например:
// simple("Redev - это про дисциплину") --> 3

function simple(str) {
    str = str.split(" ").filter(item => item.match(/^[a-zA-ZА-Яа-я]+$/));
    let lengthes = [];
    str.forEach(item => {
        lengthes.push(item.length);
    })

    return Math.min(...lengthes);
}

console.log(simple("Redev - это про дисциплину"));

// Напишите функцию, которая возвращает минимальное и
// максимальное значение заданного массива.

// Например:
// [1, 5, 8, 10, 35, 100] --> [1, 100]
// [-5, -7, -2, 5] --> [- 7, 5]

function minMax(arr) {
    let minMax = [];
    minMax.push(Math.min(...arr));
    minMax.push(Math.max(...arr));
    return minMax;
}

console.log(minMax([1, 5, 8, 10, 35, 100]));

// Джейден Смит, сын Уилла Смита, является звездой таких фильмов,
// как «Малыш каратэ» (2010) и «После Земли» (2013).
// Джейден также известен своей философией, которой он делится в Twitter.
// Когда он пишет посты в Твиттере, он пишет каждое слово с заглавной буквы.
// Посмотрите на приведенный ниже пример.

// Ваша задача - преобразовать строки в то, как они были
// бы написаны Джейденом Смитом.
// Строки являются реальными цитатами из Jaden Smith,
// но они не написаны с большой буквы так, как он их первоначально напечатал.

// Например:
// toJadenCase('пишите код - это круто') --> 'Пишите Код - Это Круто'

function toJadenCase(str) {
    return str.split(' ').map(item => {
        return item[0].toUpperCase() + item.slice(1);
    }).join(" ");
}

console.log(toJadenCase('пишите код - это круто'));

// Банкоматы допускают 4 или 6-значные ПИН-коды, 
// а ПИН-коды не могут содержать ничего, кроме 4 цифр или 6 цифр.

// Если функции передана правильная строка PIN,
// верните `true`, иначе верните `false`.

// Например:
// correctPin('5567') --> true
// correctPin('5432567') --> false

function correctPin(pin) {
    if (pin.length === 4 || pin.length === 6 && /\d/g.test(pin)) {
        return true;
    }

    return false;
}

console.log(correctPin('5432567'));

// Ваша задача написать функцию, которая принимает 
// в качестве параметра строку и увеличивает каждую "букву" строки
// на число позиции, которую она занимает.

// Например:
// accum("abcd") --> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") --> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") --> "C-Ww-Aaa-Tttt"

function accum(str) {
    function repeat(elem, n) {
        let str = '';
        for (let i = 0; i < n; i++) {
            str += elem;
        }
        return str;
    }

    return str.toUpperCase().split('').map((item, index, array) => repeat(item, index + 1)).map(item => item[0] + item.slice(1).toLowerCase()).join("-");
}

console.log(accum("RqaEzty"));


// В этом небольшом задании вам дана строка чисел, 
// разделенных пробелами, и Вы должны вернуть самое большое и самое маленькое число.

// Например:
// list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6")  --> "666 -123"

function list(str) {
    let min = Math.min(...str.split(' '));
    let max = Math.max(...str.split(' '));
    return `${max} ${min}`;
}

console.log(list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6"));

// Тролли атакуют ваш раздел комментариев!

// Распространенный способ справиться с этой ситуацией - убрать 
// все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку 
// и возвращает новую строку со всеми удаленными гласными.

// Например: "Этот сайт для лузеров ЛОЛ!" --> "тт сйт дл лзрв ЛЛ!"

function replaceAllVowels(str) {
    return str.replaceAll(/[АЕЁИОУЫЭЮЯаеёиоуыэюя]/gi, "");
}

console.log(replaceAllVowels("Этот сайт для лузеров ЛОЛ!"));

Допустим, Вы знакомы с понятием "идеальный квадрат". (Например: 12 * 12 = 144).

// А как найти следующий по очереди идеальный квадрат?

// **Напишите функцию findNextSquare**, которая находит 
// следующий целочисленный идеальный квадрат после того, 
// как он передан в качестве параметра. 
// Напомним, что целочисленный идеальный квадрат - это такое 
// целое число n, sqrt (n) которого тоже является целым числом.

// Если параметр сам по себе не является идеальным квадратом, то 
// должно быть возвращено -1.

// Например:
// findNextSquare(9); --> 16
// findNextSquare(16); --> 25
// findNextSquare(64); --> 81

function findNextSquare(n) {
    return Math.pow(Math.sqrt(n) + 1, 2);
}

console.log(findNextSquare(64));

// Напишите функцию так, чтобы она разбивала оболочку camelCase,
// используя пробел между словами.

// Например:
// "camelCasing"  -->  "camel Casing"

// "identifier"  -->  "identifier"

// "" -->  ""

function camelCase(str) {
    return str.split("").map(item => {
        // if (item === item.toUpperCase()) {
        //     return ` ${item}`;
        // }
        // return item;
        return item === item.toUpperCase() ? ` ${item}` : item;
    }).join('');
}

console.log(camelCase(""));

// Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.
// Всегда будет только одно целое число, которое встречается нечетное количество раз.

// Например:
// func([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) --> 5
// func([1,1,2,-2,5,2,4,4,-1,-2,5]) --> -1
// func([20,1,1,2,2,3,3,5,5,4,20,4,5]) --> 5

function findOdd(arr) {
    let obj = arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {})

    let odd;
    Object.entries(obj).forEach(entrie => {
        if (entrie[1] % 2 !== 0) {
            odd = entrie[0];
        }
    })

    return odd;
}

console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));

// Нарциссическое число - это число длины n, в котором
// сумма цифр в степени n равна исходному числу.

// Например:
// isNarcissistic(153) --> true;
// isNarcissistic(435) --> false;
// isNarcissistic(370) --> true;
// isNarcissistic(1032) --> false;

function isNarcissistic(n) {
    return n === n.toString().split("").map(item => parseInt(item)).reduce((acc, item) => acc + Math.pow(item, n.toString().length), 0);
}

console.log(isNarcissistic(370));

// Если мы перечислим все натуральные числа ниже 10, 
// которые кратны 3 или 5, мы получим 3, 5, 6 и 9. Сумма этих кратных 23.
// Завершите решение так, чтобы оно возвращало 
// сумму всех кратных 3 или 5 числам ниже переданного числа.

// Например:
// solution(10) --> 23
// solution(12) --> 33
// solution(23) --> 119

function solution(number) {
    let resArr = [];
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            resArr.push(i);
        }
    }
    return resArr.reduce((acc, item) => acc + item);
}

console.log(solution(23));

// Вам предоставляется массив (который будет иметь длину не менее 3, 
//     но может быть очень большим),
//     содержащий целые числа. Массив либо полностью состоит из нечетных целых чисел,
//     либо полностью состоит из четных целых чисел,
//     за исключением одного целого числа N.
//     Напишите метод, который принимает массив в качестве аргумента и возвращает
//     этот «выброс» N.

//     Например:
//     findOutlier([0, 1, 2]) --> 1
//     findOutlier([1, 2, 3]) --> 2
//     findOutlier([2,6,8,10,3]) --> 3
//     findOutlier([1,1,0,1,1]) --> 0

function findOutlier(arr) {
    if (arr.length <= 3) {
        return 0;
    }
    let evenArr = arr.filter(item => item % 2 !== 0);
    let oddArr = arr.filter(item => item % 2 === 0);

    return evenArr.length === 1 ? evenArr[0] : oddArr[0];
}

console.log(findOutlier([1, 2, 3]));

// Переместите первую букву каждого слова в его конец,
// затем добавьте «ау» в конец слова. Не трогайте знаки препинания.

// Например:
// pigIt('Pig latin is cool') --> 'igPay atinlay siay oolcay'
// pigIt('This is my string') --> 'hisTay siay ymay tringsay'

function pigIt(str) {
    return str.split(' ').map(item => item.slice(1) + item[0] + `ay`).join(' ');
}

console.log(pigIt('Pig latin is cool'));

// Маркетинговая команда тратит слишком много времени на ввод хэштегов.
// Давайте поможем им с нашим собственным генератором хештегов!
// Он должен начинаться с хэштега (#).
// Все слова должны начинаться с заглавной буквы.
// Если окончательный результат длиннее 140 символов, он должен вернуть false.
// Если ввод или результат - пустая строка, он должен вернуть false.

// Например:
// " Hello there thanks for trying my Kata"  -->  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "   -->  "#HelloWorld"
// ""  -->  false

function hashTag(str) {
    return str.length > 140 || str.trim() === "" ? false : `#` + str.replace(/ +/g, " ").trim().split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join('');
}

console.log(hashTag(" Hello there thanks for trying my Kata"));

// Реализуйте функцию unique_in_order, которая принимает в качестве аргумента
// последовательность и возвращает список элементов
// без каких-либо элементов с одинаковым значением рядом
// друг с другом и с сохранением исходного порядка элементов.

// Например:
// uniqueInOrder('AAAABBBCCDAABBB') --> ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         --> ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       --> [1,2,3]

function uniqueInOrder(elem) {
    if (Array.isArray(elem)) {
        return elem.map((item, index, array) => {
            return array[index + 1] !== item ? item : " ";
        }).filter(item => item !== " ");
    } else if (typeof (elem) === "string") {
        return elem.split('').map((item, index, array) => {
            return array[index + 1] !== item ? item : " ";
        }).filter(item => item !== " ");
    }
}

console.log(uniqueInOrder('ABBCcAD'));

// Для данного n возьмите сумму цифр n.
// Если это значение имеет более одной цифры,
// продолжайте уменьшать таким образом, пока
// не будет получено однозначное число.
// Входными данными будет неотрицательное целое число.

// Например:
// digital_root(16)  -->  1 + 6 = 7
// digital_root(942)  --> 9 + 4 + 2 = 15  -->  1 + 5 = 6
// digital_root(132189) -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// digital_root(493193)  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(digit) {
    let sum = digit;
    while (sum.toString().length !== 1) {
        sum = sumNum(sum);
    }
    function sumNum(num) {
        return num.toString().split('').reduce((acc, item) => acc + parseInt(item, 10), 0);
    }
    return sum;
}

console.log(digital_root(493193));

console.log(digital_root(942));

// Создайте функцию с именем divisors, которая принимает
// целое число n > 1 и возвращает массив со всеми делителями 
// целого числа (кроме 1 и самого числа), от наименьшего до наибольшего.
// Если число простое, верните строку '(integer) is prime'

function divisors(n) {
    let allDivisors = [];
    if (n <= 1) {
        return;
    }

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            allDivisors.push(i);
        }
    }

    return allDivisors[0] !== 1 && allDivisors[1] !== n ? allDivisors : `(integer) is prime`;

}

console.log(divisors(907));

// Напишите функцию, которая принимает строку круглых скобок и определяет,
// допустим ли порядок скобок.
// Функция должна возвращать истину, если строка действительна,
// и ложь, если она недействительна.

// Например:
// validParentheses(')(()))') --> false
// validParentheses('()') --> true
// validParentheses('()()') --> true
// validParentheses('()((()') --> false

function validParentheses(str) {
    let brackets = {
        ')': '('
    }

    let sh = [];

    for (let i = 0; i < str.length; i++) {
        if (isClosedBracket(str[i])) {
            if (brackets[str[i]] !== sh.pop()) return false;
        } else {
            sh.push(str[i]);
        }
    }

    function isClosedBracket(ch) {
        return [")"].indexOf(ch) > -1;
    }

    return sh.length === 0;

}

console.log(validParentheses('()()'));









